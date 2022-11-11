/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";

import Header from "../../components/header";
import * as Styled from "./styles";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

import cc from "../../assets/icons/cc.png";
import defaultTicket from "../../assets/icons/defaultTicket.png";
import Footer from "../../components/footer";
import Input from "../../components/forms/inputs";
import InputMasked from "../../components/forms/inputs/MaskedIpunt";
import ButtonPrimary from "../../components/btns";
import Select from "../../components/forms/select";
import api from "../../services/api";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import Modal from "../../components/Modal";
import { useHistory } from "react-router";
import { setTimeout } from "timers";

const Checkout: React.FC = () => {
  type TFocus = "name" | "number" | "expiry" | "cvc";

  const [number, setNumber] = useState<string | number>("");
  const [name, setName] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [expiry, setExpiry] = useState<string | number>("");
  const [cvc, setCvc] = useState<string | number>("");
  const [ticketName, setTicketName] = useState<string>("");
  const [focous, setfocous] = useState<TFocus>("name");
  const [file, setFile] = useState<File>();
  const [Tipo, setTipo] = useState("Crédito");
  const [paymentType, setpaymentType] = useState("Ticket");
  const [paymentValue, setpaymentValue] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [loading2, setLoading2] = useState<boolean>(false);
  const [loading3, setLoading3] = useState<boolean>(false);

  const history = useHistory();

  let pressed = false;

  useEffect(() => {
    window.scrollTo(0, 0);
    checkCCValue();
  }, []);

  const buyTicket = async (downloadURL: string) => {
    if (checkCcAllData()) {
      if (!pressed) {
        var exp = expiry.toString();
        var expArr = exp.split("/", 4);

        if (checkCCData(expArr)) {
          let tipo = "";
          if (Tipo === "Crédito") {
            tipo = "CREDIT_CARD";
          }
          if (Tipo === "Débito") {
            tipo = "DEBIT_CARD";
          }

          const paymentData = {
            reference_id: "ex-00001",
            description: localStorage.getItem("tiketType"),
            amount: {
              value: checkCCValue(),
              currency: "BRL",
            },
            payment_method: {
              type: tipo,
              installments: 1,
              capture: false,
              soft_descriptor: "Amog",
              card: {
                number: number,
                exp_month: expArr[0],
                exp_year: expArr[1],
                security_code: cvc,
                holder: {
                  name: name,
                },
              },
            },
            metadata: {
              Tipo: localStorage.getItem("tiketType"),
              NotaFiscal: "123",
              idComprador: "123456",
            },
          };

          const response = await api.post("/paymentApi", paymentData);

          if (response.status === 200) {
            pressed = true;
            const { data: info } = response.data;
            const ticketRes = await api.post("/addTicket", {
              info,
              ticketName,
              cpf,
              downloadURL,
              type: localStorage.getItem("tiketType"),
              day: localStorage.getItem("ticketDay"),
            });
            if (ticketRes.status === 200) {
              localStorage.setItem("AMOG_TICKET_ID", ticketRes.data.docId);
              setLoading(false);
              setLoading2(true);
              setTimeout(() => {
                handleClose2();
              }, 1500);
            } else {
              alert("Erro ao finalizar a compra");
            }
          } else {
            setLoading3(true); // alert("Verifique os dados e tente novamente");
          }
        } else {
          setLoading(false);
          setLoading3(true);
        }
      } else {
        alert("Aguarde a verificação dos dados 2");
      }
    } else {
      alert("Verifique os dados e tente novamente 1");
    }
  };
  const changeInput = (e: any) => {
    const localFile = e.target.files[0];
    setFile(localFile);
  };
  const checkCCData = (info: any) => {
    let year = false;
    let bigYear = false;
    let month = false;

    if (Number(info[1]) >= Number(new Date().getFullYear())) {
      year = true;
    }
    if (Number(info[1]) > Number(new Date().getFullYear())) {
      bigYear = true;
    }
    if (Number(info[0]) >= Number(new Date().getMonth() + 1)) {
      month = true;
    }
    if (!month) {
      if (bigYear) {
        month = true;
      }
    }
    if (year && month) {
      return true;
    } else {
      return false;
    }
  };
  const checkCCValue = () => {
    const tiketType = localStorage.getItem("ticketType");
    const ticketPrice = localStorage.getItem("ticketPrice");

    if (tiketType === "Passaporte") {
      setpaymentType("Ticket");
      setpaymentValue("R$: 220,00");
      return 22000;
    }
    if (tiketType === "Ingresso" && ticketPrice) {
      setpaymentType("Ticket");
      if (ticketPrice === "60") {
        setpaymentValue("R$: 60,00");
        return 6000;
      }
      setpaymentValue("R$: 80,00");
      return 8000;
    }

    if (tiketType === "ProvaMaior") {
      setpaymentType("Competition");
      setpaymentValue("R$: 250,00");
      return 25000;
    }

    if (tiketType === "ProvaMenor") {
      setpaymentType("Competition");
      setpaymentValue("R$: 150,00");
      return 15000;
    }
  };
  const checkCcAllData = () => {
    let nameNew = false;
    let cvcNew = false;
    let expiryNew = false;
    let numberNew = false;

    if (name.length > 5) {
      nameNew = true;
    }
    if (cvc.toString().length >= 3 && cvc.toString().indexOf("_") === -1) {
      cvcNew = true;
    }
    if (
      expiry.toString().length === 7 &&
      expiry.toString().indexOf("_") === -1
    ) {
      expiryNew = true;
    }
    if (
      number.toString().length === 19 &&
      number.toString().indexOf("_") === -1
    ) {
      numberNew = true;
    }

    if (nameNew && cvcNew && expiryNew && numberNew) {
      return true;
    }

    return false;
  };
  const addImg = async () => {
    if (file && ticketName) {
      setLoading(true);
      const storage = getStorage();
      const storageRef = ref(storage, "user" + Math.random() * 100);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            buyTicket(downloadURL);
          });
        }
      );
    } else {
      setLoading(false);
      alert("Você precisa de uma imagem do seu rosto para continuar");
    }
  };
  const handleClose = () => {
    setLoading(false);
  };
  const handleClose2 = () => {
    setLoading2(false);
    if (paymentType === "Ticket") {
      history.push("/compras/ticket");
    } else {
      setLoading3(false);
      history.push("/compras/ticket");
    }
  };
  const handleClose3 = () => {
    setLoading3(false);
  };

  const competitionPayment = async () => {
    if (checkCcAllData()) {
      var exp = expiry.toString();
      var expArr = exp.split("/", 4);
      setLoading(true);

      if (checkCCData(expArr)) {
        let tipo = "";
        if (Tipo === "Crédito") {
          tipo = "CREDIT_CARD";
        }
        if (Tipo === "Débito") {
          tipo = "DEBIT_CARD";
        }

        const paymentData = {
          reference_id: "ex-00001",
          description: "Prova",
          amount: {
            value: checkCCValue(),
            currency: "BRL",
          },
          payment_method: {
            type: tipo,
            installments: 1,
            capture: false,
            soft_descriptor: "Amog",
            card: {
              number: number,
              exp_month: expArr[0],
              exp_year: expArr[1],
              security_code: cvc,
              holder: {
                name: name,
              },
            },
          },
          metadata: {
            Tipo: localStorage.getItem("tiketType"),
            NotaFiscal: "123",
            idComprador: "123456",
          },
        };
        const response = await api.post("/paymentApi", paymentData);

        if (response.status === 200) {
          pressed = true;
          const provaID = localStorage.getItem("provaID");

          const ticketRes = await api.put(`/updateProva/${provaID}`);

          if (ticketRes.status === 200) {
            setLoading(false);
            setLoading2(true);
            setTimeout(() => {
              handleClose2();
            }, 2000);
          } else {
            setLoading3(true);
          }
        } else {
          setLoading3(true);
        }
      } else {
        alert("Verifique os dados e tente novamente");
      }
    } else {
      alert("Verifique os dados e tente novamente");
    }
  };

  return (
    <>
      {loading && (
        <Modal title={"Aguarde!"} handleClose={handleClose}>
          <Styled.H1modal2>Aguarde o processamento da compra!</Styled.H1modal2>
        </Modal>
      )}
      {loading2 && (
        <Modal title={"Sucesso!"} handleClose={handleClose2}>
          <Styled.H1modal>Concluída com sucesso!</Styled.H1modal>
        </Modal>
      )}
      {loading3 && (
        <Modal title={"Erro!"} handleClose={handleClose3}>
          <Styled.H1modal>
            Vefique os seus dados do cartão e tente novamente!
          </Styled.H1modal>
        </Modal>
      )}
      <Header />
      {paymentType === "Ticket" && (
        <Styled.MainContainer>
          <Styled.Title>Dados do ingresso</Styled.Title>
          <Styled.Icons src={defaultTicket} />
        </Styled.MainContainer>
      )}
      <Styled.Container>
        {paymentType === "Ticket" && (
          <Styled.Aux>
            <Styled.FormContainer>
              <Input
                Label={"Nome para o ingresso ou passaporte"}
                setValue={setTicketName}
              ></Input>
            </Styled.FormContainer>

            <Styled.FormContainer>
              <div
                style={{
                  alignSelf: "center",
                  paddingTop: "20px",
                }}
              >
                <h1 style={{ fontSize: "22px" }}>
                  Selecione uma foto do rosto para ingresso ou passaporte
                </h1>
                <Styled.FileInput
                  type="file"
                  id="imagemPerfil"
                  onChange={changeInput}
                />
              </div>
            </Styled.FormContainer>
          </Styled.Aux>
        )}

        <Styled.Aux>
          <Styled.FormContainer>
            <InputMasked
              setValue={setCpf}
              Label={"CPF do comprador"}
              mask={"999.999.999-99"}
            ></InputMasked>
          </Styled.FormContainer>
        </Styled.Aux>

        <Styled.MainContainer>
          <Styled.Title>Dados de cartão de crédito</Styled.Title>{" "}
          <Styled.Icons src={cc} />
        </Styled.MainContainer>

        <Styled.Aux>
          <Styled.FormContainer
            onClick={() => {
              setfocous("name");
            }}
          >
            <Input
              Label={"Nome (assim como no cartão de crédito)"}
              setValue={setName}
            ></Input>
          </Styled.FormContainer>

          <Styled.FormContainer
            onClick={() => {
              setfocous("cvc");
            }}
          >
            <InputMasked
              setValue={setCvc}
              Label={"CVV"}
              mask={"999"}
            ></InputMasked>
          </Styled.FormContainer>
        </Styled.Aux>
        <Styled.Aux>
          <Styled.FormContainer
            onClick={() => {
              setfocous("expiry");
            }}
          >
            <InputMasked
              Label={"Data de validade"}
              placeholder="MM/AAAA"
              mask={"99/9999"}
              setValue={setExpiry}
            ></InputMasked>
          </Styled.FormContainer>

          <Styled.FormContainer
            onClick={() => {
              setfocous("number");
            }}
          >
            <InputMasked
              Label={"Número (assim como no cartão de crédito)"}
              mask={"9999 9999 9999 9999"}
              setValue={setNumber}
            ></InputMasked>
          </Styled.FormContainer>
        </Styled.Aux>

        <Styled.Aux>
          <Styled.FormContainer>
            <Select
              Label={"Tipo do cartão"}
              setValue={setTipo}
              Options={["Crédito", "Débito"]}
            ></Select>
          </Styled.FormContainer>
          <Styled.FormContainer>
            <h2>Valor: </h2>
            <h2>{paymentValue}</h2>
          </Styled.FormContainer>
        </Styled.Aux>
        <Styled.Aux>
          <div style={{ paddingTop: "40px" }}>
            <Cards
              number={number}
              name={name}
              expiry={expiry}
              cvc={cvc}
              preview={true}
              focused={focous}
            />
          </div>
        </Styled.Aux>
        <Styled.Aux>
          <ButtonPrimary
            Label={"Finalizar compra"}
            Action={() => {
              if (paymentType === "Ticket") {
                addImg();
              } else {
                competitionPayment();
              }
            }}
          />
        </Styled.Aux>
      </Styled.Container>
      <Footer />
    </>
  );
};

export default Checkout;

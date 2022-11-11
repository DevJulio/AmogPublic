/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";

import Header from "../../../components/header";
import * as Styled from "./styles";
import "react-credit-cards/es/styles-compiled.css";

import defaultTicket from "../../../assets/icons/defaultTicket.png";
import Footer from "../../../components/footer";
import Input from "../../../components/forms/inputs";
import InputMasked from "../../../components/forms/inputs/MaskedIpunt";
import ButtonPrimary from "../../../components/btns";
import api from "../../../services/api";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import Modal from "../../../components/Modal";
import { useHistory } from "react-router";
import { setTimeout } from "timers";

const CheckoutAdmin: React.FC = () => {
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
    if (!pressed) {
      pressed = true;

      const info = {
        created_at: "amog",
        id: "amog",
        reference_id: "amog",
        brand: "amog",
        holder: "amog",
        last_digits: "amog",
      };

      const ticketRes = await api.post("/addTicket", {
        info,
        ticketName,
        cpf,
        downloadURL,
        type: "Passaporte",
        day: "PASSAPORTE",
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
      alert("Aguarde a verificação dos dados 2");
    }
  };
  const changeInput = (e: any) => {
    const localFile = e.target.files[0];
    setFile(localFile);
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

        <Styled.Aux>
          <ButtonPrimary
            Label={"Finalizar compra"}
            Action={() => {
              addImg();
            }}
          />
        </Styled.Aux>
      </Styled.Container>
      <Footer />
    </>
  );
};

export default CheckoutAdmin;

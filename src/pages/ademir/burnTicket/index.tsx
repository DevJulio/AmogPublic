/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";

import * as Styled from "./styles";

import passport from "../../../assets/icons/passport.png";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import { useHistory, useLocation } from "react-router-dom";
import { TPassport } from "../../../components/recibo/passaporte";
import api from "../../../services/api";
import ButtonPrimary from "../../../components/btns";
import fetchData from "../../../helpers/checkSession";
import Modal from "../../../components/Modal";

// todo: Para o qr code: /compras/burn/?id=1x727zaLhUSM1p9AVinB

const Burn: React.FC = () => {
  const [passaporteData, setPassaporteData] = useState<TPassport>();
  const [docId, setDocId] = useState<string | null>();
  const [modal, setModal] = useState<boolean>(false);
  const [modal2, setModal2] = useState<boolean>(false);

  const { search } = useLocation();
  const history = useHistory();

  const [render, setRender] = useState<boolean>(false);
  useEffect(() => {
    const getCredencials = async () => {
      const res = await fetchData();
      setRender(res);
      !res && history.push("/construcao");
    };
    getCredencials();
  }, [history]);

  useEffect(() => {
    const searchParms = new URLSearchParams(search);
    setDocId(searchParms.get("id"));
    const fetchData = async () => {
      const res = await api.get<TPassport>(`/getTicketData/${docId}`);
      res && setPassaporteData(res.data);
    };
    fetchData();
  }, [docId, search]);

  const confirmarEntrada = async (day: string) => {
    const currentDay = new Date().getDate();

    if (day === "PASSAPORTE") {
      setModal(true);
      return;
    }

    if (currentDay === Number(day)) {
      const ticketRes = await api.put(`/updateTicket/${docId}`);
      if (ticketRes.status === 200) {
        setModal(true);
      } else {
        setModal2(true);
      }
    } else {
      setModal2(true);
    }
  };
  const handleClose = () => {
    setModal(false);
  };
  const handleClose2 = () => {
    setModal2(false);
  };
  return render ? (
    passaporteData ? (
      passaporteData.online ? (
        <>
          {modal && (
            <>
              <Modal title={"Sucesso!"} handleClose={handleClose}>
                <Styled.H1modal2>
                  Entrada Garantida com sucesso!
                </Styled.H1modal2>
              </Modal>
            </>
          )}
          {modal2 && (
            <>
              <Modal title={"Falha!"} handleClose={handleClose2}>
                <Styled.H1modal2>Verifique o dia do ingresso!</Styled.H1modal2>
              </Modal>
            </>
          )}
          <Header />
          <Styled.MainContainer>
            <Styled.Title>Validação de ingressos!</Styled.Title>
            <Styled.Icons src={passport} />
          </Styled.MainContainer>
          <Styled.Container>
            <Styled.MainImg src={passaporteData?.img} alt="" />
          </Styled.Container>
          <Styled.Container>
            <Styled.MainSpan>{passaporteData?.buyerNamer}</Styled.MainSpan>
          </Styled.Container>
          <Styled.Container>
            <Styled.MainSpan>Dia: {passaporteData?.day}</Styled.MainSpan>
          </Styled.Container>
          <Styled.Container style={{ paddingTop: "0pxs" }}>
            <ButtonPrimary
              Label={"Confirmar entrada"}
              Action={() => {
                if (passaporteData?.day) {
                  confirmarEntrada(passaporteData?.day);
                }
              }}
            />
          </Styled.Container>
          <Footer />
        </>
      ) : (
        <>
          <Header />
          <Styled.MainContainer>
            <Styled.Title>Validação de ingressos!</Styled.Title>
            <Styled.Icons src={passport} />
          </Styled.MainContainer>
          <Styled.Container
            style={{
              backgroundColor: "#8c1914",
              paddingTop: "9px",
              marginTop: "26px",
              color: "white",
            }}
          >
            <h1>ATENÇÃO!</h1>
          </Styled.Container>
          <Styled.Container
            style={{ backgroundColor: "#8c1914", color: "white" }}
          >
            <h1>Usuário já entrou</h1>
          </Styled.Container>
          <Footer />{" "}
        </>
      )
    ) : (
      <></>
    )
  ) : (
    <>
      <h1>Carregando credenciais....</h1>
    </>
  );
};

export default Burn;

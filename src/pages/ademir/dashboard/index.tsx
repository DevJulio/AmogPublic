/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";

import Header from "../../../components/header";
import * as Styled from "./styles";

import defaultTicket from "../../../assets/icons/defaultTicket.png";
import comitivas from "../../../assets/icons/comitivas.png";
import tent from "../../../assets/icons/tent.png";
import competicao from "../../../assets/icons/competicao.png";
import vote from "../../../assets/icons/vote.png";
import ingresso from "../../../assets/icons/ingresso.png";
import blog from "../../../assets/icons/blog.png";
import tv from "../../../assets/icons/tv.png";

import Footer from "../../../components/footer";
import { useHistory } from "react-router";

import fetchData from "../../../helpers/checkSession";
import Modal from "../../../components/Modal";
import ButtonPrimary from "../../../components/btns";
import Input from "../../../components/forms/inputs";
import api from "../../../services/api";

const Dashborad: React.FC = () => {
  const history = useHistory();
  const [render, setRender] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const [modal2, setModal2] = useState<boolean>(false);
  const [link, setLink] = useState<string>("");

  useEffect(() => {
    const getCredencials = async () => {
      const res = await fetchData();
      setRender(res);
      !res && history.push("/construcao");
    };
    getCredencials();
  }, [history]);

  const handleClose = () => {
    setModal(false);
  };
  const handleClose2 = () => {
    setModal2(false);
  };

  const saveLinkToDb = async () => {
    const linkRes = await api.post("/addLink", {
      link,
    });
    if (linkRes.status === 200) {
      alert("Sucesso ao cadastrar link");
      setTimeout(() => {
        handleClose2();
      }, 1500);
    } else {
      alert("Erro ao cadastrar link");
    }
  };

  return render ? (
    <>
      {modal && (
        <>
          <Modal title={"Selecione a opção desejada"} handleClose={handleClose}>
            <Styled.BtnsContainer>
              <ButtonPrimary
                Label={"Adicionar novo link"}
                Action={() => {
                  handleClose();
                  setModal2(true);
                }}
              />
              <ButtonPrimary
                Label={"Excluir postagem"}
                Action={() => {
                  handleClose();
                  history.push("/adm1n/TvAmogAdm");
                }}
              />
            </Styled.BtnsContainer>
          </Modal>
        </>
      )}
      {modal2 && (
        <>
          <Modal title={"Informe o link!"} handleClose={handleClose2}>
            <div style={{ display: "flex", placeContent: "center" }}>
              <Styled.FormContainer>
                <Input Label={"Link"} setValue={setLink}></Input>
                <Styled.BtnsContainer>
                  <ButtonPrimary
                    Label={"Salvar"}
                    Action={() => {
                      handleClose2();
                      saveLinkToDb();
                    }}
                  />
                </Styled.BtnsContainer>
              </Styled.FormContainer>
            </div>
          </Modal>
        </>
      )}
      <Header />
      <Styled.Col>
        <Styled.Container>
          <Styled.Col
            onClick={() => {
              history.push("/adm1n/blog");
            }}
          >
            <Styled.Icons src={blog} />
            Criar postagem
          </Styled.Col>
          <Styled.Col
            onClick={() => {
              history.push("/adm1n/comitivas");
            }}
          >
            <Styled.Icons src={comitivas} />
            Comitivas
          </Styled.Col>

          <Styled.Col
            onClick={() => {
              history.push("/adm1n/tendas");
            }}
          >
            <Styled.Icons src={tent} />
            Tendas
          </Styled.Col>
          <Styled.Col
            onClick={() => {
              history.push("/adm1n/cadastro/provas");
            }}
          >
            <Styled.Icons src={vote} />
            Cadastrar provas
          </Styled.Col>
        </Styled.Container>
        <Styled.Container>
          <Styled.Col
            onClick={() => {
              history.push("/adm1n/Provas");
            }}
          >
            <Styled.Icons src={competicao} />
            Provas
          </Styled.Col>
          <Styled.Col
            onClick={() => {
              history.push("/adm1n/entradas");
            }}
          >
            <Styled.Icons src={defaultTicket} />
            Entradas
          </Styled.Col>
          <Styled.Col
            onClick={() => {
              history.push("/adm1n/checkout");
            }}
          >
            <Styled.Icons src={ingresso} />
            Criar passaportes
          </Styled.Col>
          <Styled.Col
            onClick={() => {
              setModal(true);
            }}
          >
            <Styled.Icons src={tv} />
            TV AMOG
          </Styled.Col>
        </Styled.Container>
      </Styled.Col>
      <div
        style={{
          // position: "fixed",
          bottom: "0px",
          left: "0px",
          right: "0px",
          marginBottom: "0px",
        }}
      >
        <Footer />
      </div>
    </>
  ) : (
    <>
      <h1>Carregando credenciais....</h1>
    </>
  );
};

export default Dashborad;

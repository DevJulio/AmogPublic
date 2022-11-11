/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import logo from "../../../assets/img/logo.png";

import * as Styled from "./styles";
import ButtonPrimary from "../../btns";
import html2canvas from "html2canvas";

type TProvaData = {
  Animal: string;
  Cidade: string;
  Estado: string;
  Proprietario: string;
  category: string;
  subCategory: string;
  rancho: string;
  apresentador: string;
  nascimento: string;
};

export type TProva = {
  data: TProvaData;
  date: string;
  online: boolean;
  payed: boolean;
};

const ComprovanteProva: React.FC = () => {
  const [prova, setProvaData] = useState<TProva>();

  const docId = localStorage.getItem("provaID");
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      const res = await api.get<TProva>(`/getProvaData/${docId}`);

      res && setProvaData(res.data);
    };
    fetchData();
  }, [docId]);

  function downloadURI(uri: string, name: string) {
    const link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
  }

  function DownloadAsImage() {
    const element = document.getElementById("target");
    if (element) {
      html2canvas(element).then(function (canvas) {
        const myImage = canvas.toDataURL();
        downloadURI(myImage, "COMPETICAO_AMOG.png");
      });
    }
  }

  return (
    <Styled.Container>
      <Styled.BtnsContainer>
        <ButtonPrimary
          Label={"Salvar Comprovante"}
          Action={() => {
            DownloadAsImage();
          }}
        />
      </Styled.BtnsContainer>

      <Styled.MainContainer id="target">
        <Styled.IMGContainer>
          <img src={logo} alt="" style={{ height: "85px" }} />
        </Styled.IMGContainer>
        <Styled.SpanContainer>
          <Styled.Title>
            {prova?.data.Proprietario}, Seja bem vindo(a) ao maior encontro de
            muladeiros do mundo!
          </Styled.Title>
        </Styled.SpanContainer>
        <Styled.SpanContainer>
          <Styled.TicketType>Competição</Styled.TicketType>
        </Styled.SpanContainer>
        <Styled.SpanContainer
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
            height: "32px",
          }}
        >
          <Styled.EventInfo>
            14º encontro nacional de muladeiros
          </Styled.EventInfo>
        </Styled.SpanContainer>

        <Styled.SpanContainer style={{ paddingTop: "16px" }}>
          <Styled.EventInfoWhite>
            Categoria: {prova?.data.category}
          </Styled.EventInfoWhite>
        </Styled.SpanContainer>
        <Styled.SpanContainer>
          <Styled.EventInfoWhite style={{ paddingTop: "15px" }}>
            Subcategoria: {prova?.data.subCategory}
          </Styled.EventInfoWhite>
        </Styled.SpanContainer>
        <Styled.SpanContainer>
          <Styled.EventInfoWhite style={{ paddingTop: "15px" }}>
            Animal: {prova?.data.Animal}
          </Styled.EventInfoWhite>
        </Styled.SpanContainer>
        <Styled.SpanContainer>
          <Styled.EventInfoWhite style={{ paddingTop: "15px" }}>
            Rancho/Haras: {prova?.data.rancho}
          </Styled.EventInfoWhite>
        </Styled.SpanContainer>
        <Styled.SpanContainer>
          <Styled.EventInfoWhite style={{ paddingTop: "15px" }}>
            Apresentador: {prova?.data.apresentador}
          </Styled.EventInfoWhite>
        </Styled.SpanContainer>
        <Styled.SpanContainer>
          <Styled.EventInfoWhite style={{ paddingTop: "15px" }}>
            Nascimento: {prova?.data.nascimento}
          </Styled.EventInfoWhite>
        </Styled.SpanContainer>
        <Styled.SpanContainer>
          <Styled.EventInfoWhite style={{ paddingTop: "15px" }}>
            Cidade/Estado: {prova?.data.Cidade} / {prova?.data.Estado}
          </Styled.EventInfoWhite>
        </Styled.SpanContainer>
      </Styled.MainContainer>
    </Styled.Container>
  );
};

export default ComprovanteProva;

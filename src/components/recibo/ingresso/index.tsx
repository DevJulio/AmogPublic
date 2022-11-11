/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import QRCode from "react-qr-code";
import logo from "../../../assets/img/logo.png";
import html2canvas from "html2canvas";

import * as Styled from "./styles";
import ButtonPrimary from "../../btns";

export type TPassport = {
  day: string;
  brand: string;
  buyerNamer: string;
  date: string;
  last_digits: string;
  online: boolean;
  created_at: string;
  img: string;
  type: string;
  reference_id: string;
  id: string;
  holder: string;
};

const Ingresso: React.FC = () => {
  const [passaporteData, setPassaporteData] = useState<TPassport>();

  const docId = localStorage.getItem("AMOG_TICKET_ID");
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      const res = await api.get<TPassport>(`/getTicketData/${docId}`);
      res && setPassaporteData(res.data);
    };
    fetchData();
  }, [docId]);

  const value = `https://www.amog.com.br/compras/burn/?id=${docId}`;

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
        downloadURI(myImage, "ENTRADA_AMOG.png");
      });
    }
  }

  return (
    <Styled.Container>
      <Styled.BtnsContainer>
        <ButtonPrimary
          Label={"Salvar ingresso"}
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
            {passaporteData?.buyerNamer}, seja bem vindo(a) ao maior encontro de
            muladeiros do mundo!
          </Styled.Title>
        </Styled.SpanContainer>
        <Styled.QRContainer>
          <QRCode level="L" value={value}></QRCode>
        </Styled.QRContainer>
        <Styled.SpanContainer>
          <Styled.TicketType>Ingresso</Styled.TicketType>
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
            Válido somente no dia {passaporteData?.day} de janeiro de 2022
          </Styled.EventInfoWhite>
        </Styled.SpanContainer>
        <Styled.SpanContainer style={{ paddingTop: "16px" }}>
          <Styled.EventInfoWarning>Atenção</Styled.EventInfoWarning>
        </Styled.SpanContainer>
        <Styled.SpanContainer style={{ paddingTop: "16px" }}>
          <Styled.EventInfoWhite style={{ fontSize: "15px" }}>
            Ingresso válido para uso único. Se o visitante se ausentar das
            dependências do evento, não poderá entrar novamente usando o mesmo
            ingresso.
          </Styled.EventInfoWhite>
        </Styled.SpanContainer>
      </Styled.MainContainer>
    </Styled.Container>
  );
};

export default Ingresso;

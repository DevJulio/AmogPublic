/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from "react";

import * as Styled from "./styles";

import Header from "../../../components/header";
import Footer from "../../../components/footer";
import defaultTicket from "../../../assets/icons/defaultTicket.png";
import Passaporte from "../../../components/recibo/passaporte";
import Ingresso from "../../../components/recibo/Ingresso";
import { useHistory } from "react-router";
import ComprovanteProva from "../../../components/recibo/ComprovanteProva";
import { theme } from "../../../theme/theme";

const TicketDay: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const createTicket = () => {
    const ticketType = localStorage.getItem("ticketType");
    const ticketDay = localStorage.getItem("ticketDay");
    const docId = localStorage.getItem("AMOG_TICKET_ID");

    if (ticketType && ticketDay && docId) {
      if (ticketType === "Passaporte") {
        return <Passaporte />;
      }
      if (ticketType === "Ingresso") {
        return <Ingresso />;
      }
      if (ticketType === "ProvaMaior" || ticketType === "ProvaMenor") {
        return <ComprovanteProva />;
      }
    } else {
      // history.push("/construcao");
    }
  };

  return (
    <>
      <Header />

      <Styled.MainContainer>
        <Styled.Title>Comprovante de compra</Styled.Title>
        <Styled.Icons src={defaultTicket} />
      </Styled.MainContainer>
      <Styled.Container style={{ backgroundColor: theme.colors.red.amog }}>
        <Styled.ColContainer>
          <Styled.Atention>Atenção!</Styled.Atention>
          <Styled.Atention2>Instruções de uso:</Styled.Atention2>
          <Styled.ColContainer style={{ paddingTop: "15px" }}>
            <Styled.ItemSpan>
              Clique no botão "Salvar ingresso" para baixar o ingresso no seu
              celular
            </Styled.ItemSpan>
            <Styled.ItemSpan>
              É necessário apresentar o ingresso na entrada com QR code nítido e
              legível
            </Styled.ItemSpan>
            <Styled.ItemSpan>
              Ingresso pode ser impresso, ou apresentado no celular em forma de
              print ou baixado.
            </Styled.ItemSpan>
            <Styled.ItemSpan>
              Caso o usuário perca o ingresso, pode ser recuperado via CPF na
              página principal do site
            </Styled.ItemSpan>
          </Styled.ColContainer>
        </Styled.ColContainer>
      </Styled.Container>
      <Styled.Container>{createTicket()}</Styled.Container>
      <Footer />
    </>
  );
};

export default TicketDay;

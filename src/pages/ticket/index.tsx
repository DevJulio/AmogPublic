/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from "react";

import Header from "../../components/header";
import * as Styled from "./styles";

import defaultTicket from "../../assets/icons/defaultTicket.png";
import PASSAPORTE from "../../assets/svg/PASSAPORTE.svg";
import entrada from "../../assets/img/entrada.png";

import Footer from "../../components/footer";
import { useHistory } from "react-router";
import { theme } from "../../theme/theme";

const Ticket: React.FC = () => {
  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      <Styled.MainContainer>
        <Styled.Title>Selecione o tipo do ingresso!</Styled.Title>
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

      <Styled.Container>
        <Styled.MainContainerFlex>
          <Styled.TicketContainer
            onClick={() => {
              localStorage.setItem("ticketType", "Passaporte");
              localStorage.setItem("ticketDay", "PASSAPORTE");
              history.push("/compras/checkout");
            }}
          >
            <Styled.IconSpan>Clique para comprar o passaporte!</Styled.IconSpan>
            <Styled.TicketImg src={PASSAPORTE} alt="" />
          </Styled.TicketContainer>
          <Styled.TicketContainer
            onClick={() => {
              localStorage.setItem("ticketType", "Ingresso");
              history.push("/compras/ingressos/dias");
            }}
          >
            <Styled.IconSpan>Clique para selecionar o dia</Styled.IconSpan>
            <Styled.TicketImg src={entrada} alt="" />
          </Styled.TicketContainer>
        </Styled.MainContainerFlex>
      </Styled.Container>

      <Footer />
    </>
  );
};

export default Ticket;

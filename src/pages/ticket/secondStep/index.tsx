/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from "react";

import Header from "../../../components/header";
import * as Styled from "./styles";

import defaultTicket from "../../../assets/icons/defaultTicket.png";
import PASSAPORTE from "../../../assets/svg/PASSAPORTE.svg";
import dia25 from "../../../assets/svg/25.svg";
import dia26 from "../../../assets/svg/26.svg";
import dia27 from "../../../assets/svg/27.svg";
import dia28 from "../../../assets/svg/28.svg";
import dia29 from "../../../assets/svg/29.svg";
import Footer from "../../../components/footer";
import { useHistory } from "react-router";

const Days: React.FC = () => {
  const history = useHistory();

  const redirect = (day: string, price: string) => {
    localStorage.setItem("ticketDay", day);
    localStorage.setItem("ticketPrice", price);
    history.push("/compras/checkout");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Styled.MainContainer>
        <Styled.Title>Selecione o dia do ingresso!</Styled.Title>
        <Styled.Icons src={defaultTicket} />
      </Styled.MainContainer>
      <Styled.Container>
        <Styled.MainContainerFlex>
          <Styled.TicketContainer
            onClick={() => {
              redirect("25", "60");
            }}
          >
            <Styled.IconSpan>
              Clique para comprar o ingresso para o dia 25
            </Styled.IconSpan>
            <Styled.IconSpan>R$: 60,00</Styled.IconSpan>
            <Styled.TicketImg src={dia25} alt="" />
          </Styled.TicketContainer>
          <Styled.TicketContainer
            onClick={() => {
              redirect("26", "60");
            }}
          >
            <Styled.IconSpan>
              Clique para comprar o ingresso para o dia 26
            </Styled.IconSpan>
            <Styled.IconSpan>R$: 60,00</Styled.IconSpan>
            <Styled.TicketImg src={dia26} alt="" />
          </Styled.TicketContainer>
          <Styled.TicketContainer
            onClick={() => {
              redirect("27", "80");
            }}
          >
            <Styled.IconSpan>
              Clique para comprar o ingresso para o dia 27
            </Styled.IconSpan>
            <Styled.IconSpan>R$: 80,00</Styled.IconSpan>
            <Styled.TicketImg src={dia27} alt="" />
          </Styled.TicketContainer>
        </Styled.MainContainerFlex>
      </Styled.Container>
      <Styled.Container>
        <Styled.MainContainerFlex>
          <Styled.TicketContainer
            onClick={() => {
              redirect("28", "80");
            }}
          >
            <Styled.IconSpan>
              Clique para comprar o ingresso para o dia 28
            </Styled.IconSpan>
            <Styled.IconSpan>R$: 80,00</Styled.IconSpan>
            <Styled.TicketImg src={dia28} alt="" />
          </Styled.TicketContainer>
          <Styled.TicketContainer
            onClick={() => {
              redirect("29", "80");
            }}
          >
            <Styled.IconSpan>
              Clique para comprar o ingresso para o dia 29
            </Styled.IconSpan>
            <Styled.IconSpan>R$: 80,00</Styled.IconSpan>
            <Styled.TicketImg src={dia29} alt="" />
          </Styled.TicketContainer>

          <Styled.TicketContainer
            onClick={() => {
              redirect("PASSAPORTE", "220");
            }}
          >
            <Styled.IconSpan>Clique para comprar o passaporte</Styled.IconSpan>
            <Styled.IconSpan>R$: 220,00</Styled.IconSpan>
            <Styled.TicketImg src={PASSAPORTE} alt="" />
          </Styled.TicketContainer>
        </Styled.MainContainerFlex>
      </Styled.Container>

      <Footer />
    </>
  );
};

export default Days;

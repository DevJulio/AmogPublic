import React from "react";
import Header from "../../components/header";
import * as Styled from "./styles";
import shows from "../../assets/icons/shows.png";

import passport from "../../assets/icons/passport.png";
import ingresso from "../../assets/icons/ingresso.png";

import Footer from "../../components/footer";

import divino from "../../assets/img/shows/divino.jpg";
import edybrito from "../../assets/img/shows/edybrito.jpg";
import matogrosso from "../../assets/img/shows/matogrosso.jpg";
import pedrovitor from "../../assets/img/shows/pedrovitor.jpg";
import renan from "../../assets/img/shows/renan.jpg";
import Cards from "../../components/cards";

const Shows: React.FC = () => {
  const showsData = [
    {
      day: "26/01",
      name: "Renan e Ray",
      img: renan,
      obs: "Palco principal",
    },
    {
      day: "27/01",
      name: "Pedro Vitor e Mariana",
      img: pedrovitor,
      obs: "Palco principal",
    },
    {
      day: "28/01",
      name: "Matogrosso e Mathias",
      img: matogrosso,
      obs: "Palco principal",
    },
    {
      day: "29/01",
      name: "Divino e Donizete",
      img: divino,
      obs: "Palco da queima do alho",
    },
    {
      day: "29/01",
      name: "Edy Brito e Samuel",
      img: edybrito,
      obs: "Palco principal a noite",
    },
  ];
  return (
    <>
      <Header />

      <Styled.MainContainer>
        <Styled.Title>Shows</Styled.Title>
        <Styled.Icons src={shows} />
      </Styled.MainContainer>
      <Styled.MainContainer>
        <Styled.Title> Clique aqui e compre....</Styled.Title>
      </Styled.MainContainer>
      <Styled.CardsContainer>
        <Cards route={"/compras/ingressos"} img={passport} name={"Passaporte"} />
        <Cards route={"/compras/ingressos"} img={ingresso} name={"Ingressos"} />
      </Styled.CardsContainer>
      <Styled.Container>
        {showsData.map((item, key) => (
          <>
            <Styled.MainCard key={key}>
              <Styled.Img src={item.img} />
              <Styled.CardData>
                <b style={{ fontSize: "32px" }}>{item.name}</b>
                <span>{item.day}</span>
                {item.obs && <span>{item.obs}</span>}
              </Styled.CardData>
            </Styled.MainCard>
          </>
        ))}
      </Styled.Container>

      <Footer />
    </>
  );
};

export default Shows;

/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Cards from "../../components/cards";
import Header from "../../components/header";
import * as Styled from "./styles";

import QR from "../../assets/icons/QR.png";
import shows from "../../assets/icons/shows.png";
import competicao from "../../assets/icons/competicao.png";
// import alho from "../../assets/icons/alho.png";
import garota from "../../assets/icons/garota.png";
import album from "../../assets/icons/album.png";
import marker from "../../assets/icons/marker.png";
import whoweare from "../../assets/img/whoweare.jpg";
import whoweare2 from "../../assets/img/whoweare2.jpg";
import mule from "../../assets/icons/mule.png";
import Blog from "../../assets/icons/blog.png";
import tv from "../../assets/icons/tv.png";

import CarouselMain from "../../components/carousel";
import Footer from "../../components/footer";
import CarouselSponsors from "../../components/carouselSponsors";
import CarouselSponsors2 from "../../components/carouselSponsors2";
import CarouselSponsors3 from "../../components/carouselSponsors3";

function Home() {
  const routes = [
    "/baixar-ingresso",
    "/competicoes",
    "/blog",
    "/Garota",
    "/compras/ingressos",
    "",
    "/tvamog",
  ];
  const route = "/construcao";

  const mainSponsors = [];
  const midleSponsors = [];
  const lastSponsors = [];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />

      <Styled.CardsContainer>
        {/* <Cards route={routes[4]} img={shows} name={"Ingressos e passaportes"} /> */}
        {/* <Cards route={route} img={shows} name={"Ingressos e passaportes"} /> */}
        {/* <Cards route={routes[0]} img={QR} name={"Perdi meu ingresso"} /> */}
        <Cards route={routes[6]} img={tv} name={"TV Amog"} />
        <Cards route={routes[2]} img={Blog} name={"Blog"} />
        {/* <Cards route={routes[1]} img={competicao} name={"Competições"} /> */}
        <Cards route={routes[3]} img={garota} name={"Garota Amog"} />
        {/* <Cards route={route} img={alho} name={"Queima do alho"} /> */}
        <Cards route={route} img={album} name={"Acervo de fotos"} />
      </Styled.CardsContainer>
      <Styled.CaroselContainer>
        <CarouselMain />
      </Styled.CaroselContainer>

      <Styled.CarouselSponsorsContainer>
        <CarouselSponsors />
        <CarouselSponsors2 />
        <CarouselSponsors3 />
      </Styled.CarouselSponsorsContainer>

      <Styled.Info>
        <Styled.Title style={{ alignSelf: "center" }}>
          Aooba, bem vindos ao maior encontro de muares do mundo!
        </Styled.Title>
      </Styled.Info>
      <Styled.Spacer>
        <Styled.Mulaimg src={mule} alt="" />
      </Styled.Spacer>
      <Styled.Info>
        <Styled.Title>Quem somos nós e nossa história</Styled.Title>
        <Styled.InfoContainer>
          <Styled.Text>
            <Styled.InfoParagraph>
              AMOG - Associação dos Muladeiros do Oeste Goiano, é uma associação
              sem fins lucrativos que surgiu a partir da união de alguns amigos,
              da paixão por muares e do desejo de resgatar parte da história do
              tropeiro.
              <p>
                A retomada do Encontro nacional de Muladeiros Janeiro de 2022
                será a marca de um tempo novo, com a retomada do Encontro
                Nacional de Muladeiros, evento de Iporá, quando a cidade de
                vários estados brasileiros os aficionados em muares e na prática
                das tradições rurais.
              </p>
              <p>
                Com população toda imunizada, retoma-se os eventos que fazem a
                vida ser melhor! Em Iporá, a Associação de Muladeiros do Oeste
                Goiano (AMOG), já prepara a XIV edição da festa. A diretoria da
                entidade e todos muladeiros pertencentes a ela, querem receber
                os visitantes com um encontro que será marcante!
              </p>
            </Styled.InfoParagraph>
          </Styled.Text>
          <Styled.InfoImg src={whoweare} />
        </Styled.InfoContainer>
        <Styled.Spacer>
          <Styled.Mulaimg src={mule} alt="" />
        </Styled.Spacer>
        <Styled.InfoContainer>
          <Styled.InfoImg src={whoweare2} />
          <Styled.Text>
            <Styled.InfoParagraph>
              <p>
                Preparam-se provas de animais, como: marcha, morfologia, laço,
                apartação e rédea. Estas provas são saudáveis competições, onde
                tanto animais quanto muladeiros mostram seu valor. Premiações e
                vibração marcam este ingrediente do evento. Para 2022, teremos a
                retomada em grande estilo dessas provas de animais. Esteja em
                meio a estes com seus animais e compartilhando estas emoções!
              </p>
            </Styled.InfoParagraph>
          </Styled.Text>
        </Styled.InfoContainer>
      </Styled.Info>

      <Styled.MapContainer>
        <img src={marker} alt="" />
        <Styled.Title>Onde acontece o evento</Styled.Title>
        <iframe
          src={
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.08959359061!2d-51.09887846296108!3d-16.42027555928328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9366bddf34156b5f%3A0x46c93c3d2e850ad3!2zUGFycXVlIGRlIEV4cG9zacOnw6NvIEFncm9wZWN1w6FyaW8gZGUgSXBvcsOh!5e0!3m2!1spt-BR!2sbr!4v1625357586031!5m2!1spt-BR!2sbr"
          }
          width={"800"}
          height={"600"}
          style={{ border: "none", width: " 90%" }}
          loading={"lazy"}
        ></iframe>
      </Styled.MapContainer>
      <Footer />
    </div>
  );
}

export default Home;

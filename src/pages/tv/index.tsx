import React, { useEffect, useState } from "react";

import Header from "../../components/header";
import * as Styled from "./styles";

import tv from "../../assets/icons/tv.png";

import Footer from "../../components/footer";
import api from "../../services/api";

const TvAmog: React.FC = () => {
  const [videosRes, setvideosRes] = useState<any[][]>();

  const formatCard = (links: any) => {
    const formatedLinks: any[] = [];

    links.map((card: any) => {
      formatedLinks.push(card);
    });
    const pairs = formatedLinks.flatMap((_, i, a) =>
      i % 2 ? [] : [a.slice(i, i + 4)]
    );
    return pairs;
  };

  useEffect(() => {
    const fetchData = async () => {
      window.scrollTo(0, 0);
      const res = await api.get("/listLinks");
      const videos: any[] = [];
      res.data.map((localLink: string) => {
        videos.push(localLink.link);
      });
      setvideosRes(formatCard(videos));
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />

      <Styled.MainContainer>
        <Styled.Title>TV Amog</Styled.Title>
        <Styled.Icons src={tv} />
        <Styled.InfoParagraph style={{ textAlignLast: "left" }}>
          Pensando em atualizar todas as informações do mundo dos muares e
          asininos foi criada uma tv com esse perfil, para que os aficcionados
          ao assunto tenham onde buscar tais informações com absoluta fidelidade
          e credibilidade.
        </Styled.InfoParagraph>
        <Styled.InfoParagraph style={{ textAlignLast: "left" }}>
          A TV AMOG tem ainda o compromisso de cumprir o maior número de eventos
          dentro do mundo dos muares e asininos.
        </Styled.InfoParagraph>
      </Styled.MainContainer>

      <Styled.Container>
        <Styled.VideosContainer>
          {videosRes &&
            videosRes.map((card: any) => {
              const firstCard = card[0];
              const secondCard = card[1];
              const ThirdCard = card[2];
              const quartoCard = card[3];
              return (
                <>
                  <Styled.VideoRow>
                    <div>
                      <Styled.VideoItem
                        dangerouslySetInnerHTML={{ __html: firstCard }}
                      ></Styled.VideoItem>
                    </div>
                    {secondCard && (
                      <div>
                        <Styled.VideoItem
                          dangerouslySetInnerHTML={{ __html: secondCard }}
                        />
                      </div>
                    )}
                    {ThirdCard && (
                      <div>
                        <Styled.VideoItem
                          dangerouslySetInnerHTML={{ __html: ThirdCard }}
                        />
                      </div>
                    )}
                    {quartoCard && (
                      <div>
                        <Styled.VideoItem
                          dangerouslySetInnerHTML={{ __html: quartoCard }}
                        />
                      </div>
                    )}
                  </Styled.VideoRow>
                </>
              );
            })}
        </Styled.VideosContainer>
      </Styled.Container>
      <Footer />
    </>
  );
};

export default TvAmog;

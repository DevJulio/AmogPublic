import React, { useEffect, useState } from "react";

import * as Styled from "./styles";

import tv from "../../../assets/icons/tv.png";
import Header from "../../../components/header";
import api from "../../../services/api";
import Footer from "../../../components/footer";
import ButtonPrimary from "../../../components/btns";

const TvAmogAdm: React.FC = () => {
  const [videosRes, setvideosRes] = useState<any[][]>();
  const [videosIds, setvideosIds] = useState<any[][]>();

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
      const videosIds: any[] = [];
      res.data.map((localLink: any) => {
        videos.push(localLink.link);
        videosIds.push(localLink.id);
      });
      setvideosRes(formatCard(videos));
      setvideosIds(formatCard(videosIds));
    };
    fetchData();
  }, []);

  const deleteLink = async (videoId: string) => {
    try {
      const res = await api.delete(`/deleteVideo/${videoId}`);
      if (res.data.status === 200) {
        alert("Exclusão realizada com sucesso!");
      }
    } catch (error) {
      alert("Erro ao excluir!");
      console.log(error);
    }
    window.location.reload();
  };

  return (
    <>
      <Header />

      <Styled.MainContainer>
        <Styled.Title>TV Amog</Styled.Title>
        <Styled.Icons src={tv} />
        <Styled.InfoParagraph style={{ textAlignLast: "left" }}>
          Selecione o video
        </Styled.InfoParagraph>
      </Styled.MainContainer>

      <Styled.Container>
        <Styled.VideosContainer>
          {videosRes &&
            videosIds &&
            videosRes.map((card: any, index) => {
              const firstCard = card[0];
              const secondCard = card[1];
              const ThirdCard = card[2];
              const quartoCard = card[3];

              const firstId = videosIds[index][0];
              const secondId = videosIds[index][1];
              const ThirdId = videosIds[index][2];
              const quartoId = videosIds[index][3];

              return (
                <>
                  <Styled.VideoRow>
                    <div>
                      <Styled.VideoItem
                        dangerouslySetInnerHTML={{ __html: firstCard }}
                      ></Styled.VideoItem>
                      <ButtonPrimary
                        Label={"Excluir"}
                        Action={() => {
                          deleteLink(firstId);
                        }}
                      />
                    </div>
                    {secondCard && (
                      <div>
                        <Styled.VideoItem
                          dangerouslySetInnerHTML={{ __html: secondCard }}
                        />
                        <ButtonPrimary
                          Label={"Excluir"}
                          Action={() => {
                            deleteLink(secondId);
                          }}
                        />
                      </div>
                    )}
                    {ThirdCard && (
                      <div>
                        <Styled.VideoItem
                          dangerouslySetInnerHTML={{ __html: ThirdCard }}
                        />
                        <ButtonPrimary
                          Label={"Excluir"}
                          Action={() => {
                            deleteLink(ThirdId);
                          }}
                        />
                      </div>
                    )}
                    {quartoCard && (
                      <div>
                        <Styled.VideoItem
                          dangerouslySetInnerHTML={{ __html: quartoCard }}
                        />
                        <ButtonPrimary
                          Label={"Excluir"}
                          Action={() => {
                            deleteLink(quartoId);
                          }}
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

export default TvAmogAdm;

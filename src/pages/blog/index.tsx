/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import * as Styled from "./styles";
import blog from "../../assets/icons/blog.png";
import Footer from "../../components/footer";
import { useHistory, useLocation } from "react-router";
import api from "../../services/api";
import ButtonPrimary from "../../components/Buttons/Primary";
import { getAuth } from "firebase/auth";
import fetchData from "../../helpers/checkSession";
import Modal from "../../components/Modal";

const Blog: React.FC = () => {
  const history = useHistory();
  const auth = getAuth().currentUser;

  const { search } = useLocation();
  const [docId, setDocId] = useState<string | null>();
  const [author, setAuthor] = useState<string>();
  const [post, setPost] = useState(Array());
  const [loged, setLoged] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const [modal2, setModal2] = useState<boolean>(false);

  useEffect(() => {
    const getCredencials = async () => {
      const res = await fetchData();
      setLoged(res);
    };
    getCredencials();
  }, []);

  useEffect(() => {
    const searchParms = new URLSearchParams(search);
    setDocId(searchParms.get("id"));
    const fetchData = async () => {};
    fetchData();
  }, [docId, search]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      const res = await api.get("/listPosts");
      res && console.log(res.data);
      res && setPost(res.data.map((doc: any) => doc));
    };
    fetchData();
  }, [docId]);

  const checkText = (text: string) => {
    let indices = [];
    let finalIndices = new Array();
    let lastGreater = "";
    for (let i = 0; i < text.length; i++) {
      if (`${text[i]}${text[i + 1]}${text[i + 2]}${text[i + 3]}` === "</p>")
        indices.push(i);
    }
    if (indices.length >= 3) {
      // finalIndices = [indices[0], indices[1], indices[2]];
      for (let index = 0; index < 3; index++) {
        finalIndices.push(indices[index]);
      }
    }

    let ultimoIndice = finalIndices[finalIndices.length - 1];
    lastGreater = ultimoIndice + 3;
    let finalText = [];

    for (let index = 0; index <= Number(lastGreater); index++) {
      finalText.push(text[index]);
    }
    return finalText;
  };
  const handleClose = () => {
    setModal(false);
  };

  const handleClose2 = () => {
    setModal2(false);
    window.location.reload();
  };

  const handleDelete = async (id: any) => {
    try {
      const res = await api.delete(`/deletePost/${id}`);
      if (res.data.status === 200) {
        setModal2(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />

      <Styled.MainContainer>
        <Styled.Title>Últimas postagens</Styled.Title>
        <Styled.Icons src={blog} />
      </Styled.MainContainer>
      <Styled.Container>
        <>
          {modal2 && (
            <>
              <Modal title={"Sucesso!"} handleClose={handleClose2}>
                <Styled.H1modal2>Post apagado com sucesso</Styled.H1modal2>
              </Modal>
            </>
          )}

          <Styled.Main>
            <Styled.MainRow>
              <Styled.Left>
                <Styled.PostContainer>
                  {post.map((pos) => (
                    <Styled.ContainerPost>
                      {modal && (
                        <>
                          <Modal
                            title={"Atenção, deseja excluir o post?"}
                            handleClose={handleClose}
                          >
                            <Styled.ModalBtns>
                              <ButtonPrimary
                                type="button"
                                color={"green"}
                                action={() => {
                                  handleClose();
                                  handleDelete(pos.id);
                                }}
                              >
                                Continuar
                              </ButtonPrimary>
                              <ButtonPrimary
                                type="button"
                                color={"gray"}
                                action={() => {
                                  handleClose();
                                }}
                              >
                                Cancelar
                              </ButtonPrimary>
                            </Styled.ModalBtns>
                          </Modal>
                        </>
                      )}
                      <Styled.ImgPost
                        link={pos.img}
                        onClick={() => {
                          localStorage.setItem("postUid", pos.id);
                          history.push("/Blog/Detalhes/?id=" + pos.id);
                        }}
                      />
                      <Styled.CategoryPost>
                        <Styled.PostCategoryTitle>
                          {pos.tags.map((tag: any) => tag + " ")}
                        </Styled.PostCategoryTitle>
                        <Styled.SeparatorPost />
                        {loged && (
                          <Styled.EditSpan
                            onClick={() => {
                              localStorage.setItem("postUid", pos.id);
                              history.push("/Blog/atualizar");
                            }}
                          >
                            editar
                          </Styled.EditSpan>
                        )}
                        {loged && (
                          <Styled.EditSpan
                            style={{ color: "red" }}
                            onClick={() => {
                              setModal(true);
                            }}
                          >
                            Excluir postagem
                          </Styled.EditSpan>
                        )}
                        <Styled.PostTitle
                          onClick={() => {
                            localStorage.setItem("postUid", pos.id);
                            history.push("/Blog/Detalhes/?id=" + pos.id);
                          }}
                        >
                          {pos.title}
                        </Styled.PostTitle>
                        <Styled.PostTextContainer
                          onClick={() => {
                            localStorage.setItem("postUid", pos.id);
                            history.push("/Blog/Detalhes/?id=" + pos.id);
                          }}
                        >
                          <div
                            dangerouslySetInnerHTML={{
                              __html: checkText(pos.text)
                                .toString()
                                .replaceAll(",", ""),
                            }}
                          ></div>
                        </Styled.PostTextContainer>
                        <Styled.PostTextContainer
                          onClick={() => {
                            localStorage.setItem("postUid", pos.id);
                            history.push("/Blog/Detalhes/?id=" + pos.id);
                          }}
                        >
                          Continue lendo...
                        </Styled.PostTextContainer>
                        <Styled.PostCreditsContainer>
                          <Styled.PostCreditsSpan>
                            Por: {pos.author} {pos.date}
                          </Styled.PostCreditsSpan>
                        </Styled.PostCreditsContainer>
                      </Styled.CategoryPost>
                      <Styled.SeparatorPost />
                      <div style={{ paddingBottom: "20px" }}></div>
                    </Styled.ContainerPost>
                  ))}
                </Styled.PostContainer>
              </Styled.Left>
              <Styled.Right>
                {post.map(
                  (pos, index) =>
                    index < 3 && (
                      <Styled.RightCards
                        onClick={() => {
                          localStorage.setItem("postUid", pos.id);
                          history.push("/Blog/Detalhes");
                        }}
                      >
                        <Styled.RightImg src={pos.img} alt="" />
                        <Styled.RightSpan>{pos.title}</Styled.RightSpan>
                        <ButtonPrimary
                          type="button"
                          color={"red"}
                          action={() => {
                            localStorage.setItem("postUid", pos.id);
                            history.push("/Blog/Detalhes/?id=" + pos.id);
                          }}
                        >
                          Saiba mais
                        </ButtonPrimary>
                      </Styled.RightCards>
                    )
                )}
              </Styled.Right>
            </Styled.MainRow>
          </Styled.Main>
        </>
      </Styled.Container>

      <Footer />
    </>
  );
};

export default Blog;

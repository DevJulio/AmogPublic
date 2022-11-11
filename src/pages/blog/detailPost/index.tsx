/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";

import Header from "../../../components/header";
import Footer from "../../../components/footer";

import * as Styled from "./styles";

import { useLocation } from "react-router";
import api from "../../../services/api";

function BlogDetail() {
  const [post, setPost] = useState(Array());

  const { search } = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const searchParms = new URLSearchParams(search);
      const res = await api.get(`/getPost/${searchParms.get("id")}`);
      res && setPost([res.data]);
    };
    fetchData();
  }, [search]);

  return (
    <>
      <Header />
      <Styled.Container>
        <>
          <Styled.Main>
            <Styled.MainRow>
              <Styled.Left>
                <Styled.PostContainer>
                  {post.map((pos) => (
                    <Styled.ContainerPost>
                      <Styled.ImgPost link={pos.img} />
                      <Styled.CategoryPost>
                        <Styled.PostCategoryTitle>
                          {pos.tags.map((tag: any) => tag + " ")}
                        </Styled.PostCategoryTitle>
                        <Styled.SeparatorPost />

                        <Styled.PostTitle>{pos.title}</Styled.PostTitle>
                        <Styled.PostTextContainer>
                          <div
                            dangerouslySetInnerHTML={{ __html: pos.text }}
                          ></div>
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
            </Styled.MainRow>
          </Styled.Main>
        </>
      </Styled.Container>
      <Footer />
    </>
  );
}

export default BlogDetail;

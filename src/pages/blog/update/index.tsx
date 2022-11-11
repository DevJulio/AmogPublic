/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";

import Header from "../../../components/header";
import Footer from "../../../components/footer";

import * as Styled from "./styles";
import Input from "../../../components/forms/inputs";
import Chips from "../../../components/chips";
import { Editor } from "react-draft-wysiwyg";
import ButtonPrimary from "../../../components/Buttons/Primary";
import {
  ContentState,
  convertFromHTML,
  convertToRaw,
  EditorState,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import api from "../../../services/api";

type TFields = {
  text: string;
  title: string | undefined;
  tags: string[];
};

function UpdateBlog() {
  const docUid = localStorage.getItem("postUid");

  const [title, setTitle] = useState<string>();
  const [tags, setTags] = useState<string[]>([]);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get(`/getPost/${docUid}`);

      const blocksFromHTML = convertFromHTML(res && res.data.text);
      const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );
      res && setTags(res.data.tags);
      res && setTitle(res.data.title);
      res && setEditorState(EditorState.createWithContent(state));
    };
    fetchData();
  }, []);

  const updatePostToDb = async (params: TFields) => {
    try {
      const response = await api.post(`/updatePost`, {
        params,
        docUid,
      });
      console.log(response);
    } catch (error) {}
  };

  return (
    <>
      <Header />

      <Styled.Container>
        <Styled.Title>Editar postagem</Styled.Title>

        <Styled.PostContainer>
          <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
            <Input setValue={setTitle} value={title} Label={"Titulo"}></Input>
          </div>

          <Chips selectedTags={setTags} tags={tags}></Chips>
          <div
            style={{
              borderStyle: "solid",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
              editorStyle={{ height: "500px" }}
            />
          </div>
          <div
            onClick={() => {}}
            style={{
              width: "200px",
              alignSelf: " center",
              paddingTop: "20px",
            }}
          >
            <ButtonPrimary
              type="button"
              color={"green"}
              action={() => {
                const fields = {
                  text: draftToHtml(
                    convertToRaw(editorState.getCurrentContent())
                  ).toString(),
                  title: title,
                  tags: tags,
                };
                updatePostToDb(fields);
              }}
            >
              Atualizar postagem
            </ButtonPrimary>
          </div>
        </Styled.PostContainer>
      </Styled.Container>
      <Footer />
    </>
  );
}

export default UpdateBlog;

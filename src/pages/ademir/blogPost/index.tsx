/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";

import Header from "../../../components/header";
import Footer from "../../../components/footer";
import * as Styled from "./styles";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import ButtonPrimary from "../../../components/Buttons/Primary";
import Input from "../../../components/forms/inputs";
import Chips from "../../../components/chips";
// import { addImg } from "../../../backend/controllers/blog/controller";
import { getUser } from "../../../backend/controllers/login/controller";
import api from "../../../services/api";
import draftToHtml from "draftjs-to-html";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import Modal from "../../../components/Modal";

// import ReactTooltip from "react-tooltip";

function BlogPost() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  // eslint-disable-next-line
  const [formatedText, setformatedText] = useState<string>();
  const [title, setTitle] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [file, setFile] = useState<File>();
  const [author, setAuthor] = useState<string>("Júlio");
  const [modal, setModal] = useState<boolean>(false);

  const createPost = async (downloadURL: string) => {
    if (title && tags && file && author && editorState) {
      await api.post("/addImg", {
        title,
        tags,
        file: downloadURL,
        author,
        text: draftToHtml(
          convertToRaw(editorState.getCurrentContent())
        ).toString(),
      });
      setModal(true)
    } else {
      alert("Verifique todos os campos e tente novamente!");
    }
  };

  const changeInput = (e: any) => {
    const localFile = e.target.files[0];
    localFile && setFile(localFile);
  };

  useEffect(() => {
    const fetchData = async () => {
      const userUID = localStorage.getItem("AMOG_EMAIL");

      if (userUID) {
        const res = await api.get(`/getAuthor/${atob(userUID)}`);
        if (res.data.data[0]) {
          setAuthor(res.data.data[0]);
        }
      }
    };
    fetchData();
  }, []);

  const addImg = async () => {
    if (file) {
      const storage = getStorage();
      const storageRef = ref(storage, "user" + Math.random() * 100);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            createPost(downloadURL);
          });
        }
      );
    } else {
      alert("Você precisa de uma imagem do post para continuar");
    }
  };

  const handleClose = () => {
    setModal(false);
  };

  return (
    <>
      <Header />
      <Styled.Container>
        <Styled.Title>Nova postagem</Styled.Title>
        {modal && (
          <>
            <Modal title={"Sucesso!"} handleClose={handleClose}>
              <Styled.H1modal2>Post criado com sucesso</Styled.H1modal2>
            </Modal>
          </>
        )}

        <Styled.PostContainer>
          <form action="createPost"></form>
          <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
            <Input setValue={setTitle} Label={"Titulo"}></Input>
          </div>
          <Styled.FileInput
            type="file"
            id="imagemPerfil"
            onChange={changeInput}
          />

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
            style={{ width: "200px", alignSelf: " center", paddingTop: "20px" }}
          >
            <ButtonPrimary
              type="button"
              color={"green"}
              action={() => {
                addImg();
              }}
            >
              Publicar postagem
            </ButtonPrimary>
          </div>
        </Styled.PostContainer>
      </Styled.Container>
      <Footer />
    </>
  );
}

export default BlogPost;

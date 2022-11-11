/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";

import Header from "../../../components/header";
import Footer from "../../../components/footer";
import * as Styled from "./styles";
import Input from "../../../components/forms/inputs";
import ButtonPrimary from "../../../components/btns/Buttons/Primary";
import { useHistory } from "react-router";
import api from "../../../services/api";

function Login() {
  const [login, setlogin] = useState<string>();
  const [password, setPassword] = useState<string>();
  const history = useHistory();

  const loginToAmog = async () => {
    if (login && password) {
      try {
        const loginRes = await api.post("/Login", {
          Email: login,
          password,
        });
        if (loginRes.status === 200) {
          alert(loginRes.data.message);
          localStorage.setItem("AMOG_EMAIL", btoa(login));
          localStorage.setItem("AMOG_PASSWORD", btoa(password));
          localStorage.setItem("userUID", loginRes.data.uid);
          history.push("/adm1n/home");
        }
      } catch (error) {
        alert("Verifique os dados e tente novamente");
      }
    }
  };
  return (
    <>
      <Header />
      <Styled.Container>
        <Styled.Title>Bem-vindo!</Styled.Title>
        <Styled.ContainerMain>
          <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
            <Input setValue={setlogin} Label={"Email"}></Input>
          </div>
          <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
            <Input isPassowd setValue={setPassword} Label={"Senha"}></Input>
          </div>
          <div
            style={{
              width: "200px",
              alignSelf: " center",
              paddingTop: "20px",
              display: "flex",
              placeContent: "center",
            }}
          >
            <ButtonPrimary
              type="button"
              color={"green"}
              action={() => {
                loginToAmog();
              }}
            >
              Acessar
            </ButtonPrimary>
          </div>
        </Styled.ContainerMain>
      </Styled.Container>
      <Footer />
    </>
  );
}

export default Login;

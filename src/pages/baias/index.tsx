/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import Header from "../../components/header";
import * as Styled from "./styles";
import tent from "../../assets/icons/tent.png";
import Footer from "../../components/footer";
import Input from "../../components/forms/inputs";
import ButtonPrimary from "../../components/btns";
import { addComitiva } from "../../backend/controllers/comitivas";

const Baias: React.FC = () => {
  const [years, setYears] = useState();
  const [comitiva, setSComitiva] = useState();
  const [Cidade, setCidade] = useState();
  const [Comissario, setComissario] = useState();
  const [membros, setMembros] = useState();
  const [Email, setEmail] = useState();
  const [Telefone, setTelefone] = useState();
  const [CPF, setCPF] = useState();

  const CadastrarComitiva = async () => {
    const fields = {
      years,
      comitiva,
      Cidade,
      Comissario,
      membros,
      Email,
      Telefone,
      CPF,
    };
    try {
      await addComitiva(fields);
    } catch (error) {}
  };

  return (
    <>
      <Header />

      <Styled.MainContainer>
        <Styled.Title>Tendas</Styled.Title>
        <Styled.Icons src={tent} />
      </Styled.MainContainer>
      <Styled.Container>
        <Styled.Aux>
          <Styled.FormContainer>
            <Input Label={"Nome da comitiva"} setValue={setSComitiva}></Input>
          </Styled.FormContainer>
          <Styled.FormContainer>
            <Input Label={"Cidade"} setValue={setCidade}></Input>
          </Styled.FormContainer>
        </Styled.Aux>
        <Styled.Aux>
          <Styled.FormContainer>
            <Input
              Label={"Quantidade de membros "}
              setValue={setMembros}
            ></Input>
          </Styled.FormContainer>
          <Styled.FormContainer>
            <Input Label={"Email"} setValue={setEmail}></Input>
          </Styled.FormContainer>
        </Styled.Aux>

        <Styled.Aux>
          <Styled.FormContainer>
            <Input
              Label={"Comissário (Presidente)"}
              setValue={setComissario}
            ></Input>
          </Styled.FormContainer>
          <Styled.FormContainer>
            <Input Label={"CPF Presidente"} setValue={setCPF}></Input>
          </Styled.FormContainer>
        </Styled.Aux>
        <Styled.Aux>
          <Styled.FormContainer>
            <Input
              Label={"Telefone de contato com DDD Presidente"}
              setValue={setTelefone}
            ></Input>
          </Styled.FormContainer>
          <Styled.FormContainer>
            <Input Label={"Vice Presidente"} setValue={setComissario}></Input>
          </Styled.FormContainer>
        </Styled.Aux>

        <Styled.Aux>
          <Styled.FormContainer>
            <Input
              Label={"Telefone de contato com DDD Vice Presidente"}
              setValue={setTelefone}
            ></Input>
          </Styled.FormContainer>

          <Styled.FormContainer>
            <Input Label={"CPF Vice Presidente"} setValue={setCPF}></Input>
          </Styled.FormContainer>
        </Styled.Aux>
        <Styled.Aux></Styled.Aux>
      </Styled.Container>
      <Styled.Aux>
        <ButtonPrimary
          Label={"Reservar"}
          Action={() => {
            CadastrarComitiva();
          }}
        />
      </Styled.Aux>

      <Footer />
    </>
  );
};

export default Baias;

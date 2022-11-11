/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import Header from "../../components/header";
import * as Styled from "./styles";
import comitivas from "../../assets/icons/comitivas.png";
import Footer from "../../components/footer";
import Input from "../../components/forms/inputs";
import ButtonPrimary from "../../components/btns";
import { useHistory } from "react-router";
import api from "../../services/api";

const Comitivas: React.FC = () => {
  const [comitiva, setSComitiva] = useState();
  const [Cidade, setCidade] = useState();
  const [Comissario, setComissario] = useState();
  const [ViceComissario, setViceComissario] = useState();
  const [membros, setMembros] = useState();
  const [Email, setEmail] = useState();
  const [Telefone, setTelefone] = useState();
  const [ViceTelefone, setViceTelefone] = useState();
  const [CPF, setCPF] = useState();
  const [CPFVp, setCPFVp] = useState();
  const [Address, setAddress] = useState();
  const [Neigh, setNeigh] = useState();
  const history = useHistory();

  const CadastrarComitiva = async () => {
    const response = await api.post("addComitiva", {
      comitiva,
      Cidade,
      Comissario,
      membros,
      Email,
      Telefone,
      CPF,
      CPFVp,
      ViceComissario,
      ViceTelefone,
      Address,
      Neigh,
    });
    alert(response.data);
  };

  return (
    <>
      <Header />

      <Styled.MainContainer>
        <Styled.Title>Comitivas</Styled.Title>
        <Styled.Icons src={comitivas} />
      </Styled.MainContainer>
      <Styled.Container>
        <Styled.Aux>
          <Styled.FormContainer>
            <Input Label={"Nome da comitiva"} setValue={setSComitiva}></Input>
          </Styled.FormContainer>
          <Styled.FormContainer>
            <Input Label={"Cidade e Estado"} setValue={setCidade}></Input>
          </Styled.FormContainer>
        </Styled.Aux>
        <Styled.Aux>
          <Styled.FormContainer>
            <Input
              Label={"Endereço (Rua, número...)"}
              setValue={setAddress}
            ></Input>
          </Styled.FormContainer>

          <Styled.FormContainer>
            <Input Label={"Bairro"} setValue={setNeigh}></Input>
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
            <Input
              Label={"Vice Presidente"}
              setValue={setViceComissario}
            ></Input>
          </Styled.FormContainer>
        </Styled.Aux>

        <Styled.Aux>
          <Styled.FormContainer>
            <Input
              Label={"Telefone de contato com DDD Vice Presidente"}
              setValue={setViceTelefone}
            ></Input>
          </Styled.FormContainer>

          <Styled.FormContainer>
            <Input Label={"CPF Vice Presidente"} setValue={setCPFVp}></Input>
          </Styled.FormContainer>
        </Styled.Aux>
      </Styled.Container>
      <Styled.Aux>
        <ButtonPrimary
          Label={"Cadastrar"}
          Action={() => {
            CadastrarComitiva();
          }}
        />
        <ButtonPrimary
          Label={"Reserva de tendas"}
          Action={() => {
            history.push("/cadastro/Tenda");
          }}
        />
      </Styled.Aux>

      <Footer />
    </>
  );
};

export default Comitivas;

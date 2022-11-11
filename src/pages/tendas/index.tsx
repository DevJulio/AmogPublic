/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import Header from "../../components/header";
import * as Styled from "./styles";
import tent from "../../assets/icons/tent.png";
import Footer from "../../components/footer";
import Input from "../../components/forms/inputs";
import ButtonPrimary from "../../components/btns";
import Select from "../../components/forms/select";
import Checkbox from "../../components/forms/inputs/CheckBox";
import api from "../../services/api";

const Tendas: React.FC = () => {
  const [vicePress, setvicePress] = useState();
  const [CPFVice, setCPFVice] = useState();
  const [Comissario, setComissario] = useState();
  const [Telefone, setTelefone] = useState();
  const [ViceTelefone, setViceTelefone] = useState();
  const [animais, setAnimais] = useState();
  const [CPF, setCPF] = useState();
  const [Tenda, setTenda] = useState();
  const [Veiculo, setVeiculo] = useState();
  const [Tamanho, setTamanho] = useState();
  const [Curral, setCurral] = useState<boolean>(false);
  const [Tipo, setTipo] = useState("Comitiva");
  const [Produto, setProduto] = useState();
  const [CpfCnpj, setCpfCnpj] = useState();
  const [TelefoneComercial, setTelefoneComercial] = useState();
  const [Razao, setRazao] = useState();

  const CadastraTenda = async () => {
    const response = await api.post("addTenda", {
      CPF,
      CPFVice,
      Comissario,
      vicePress,
      Tenda,
      Veiculo,
      Tamanho,
      Curral,
      Tipo,
      Produto,
      CpfCnpj,
      TelefoneComercial,
      Razao,
      animais,
      Telefone,
      ViceTelefone,
    });
    alert(response.data);
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
            <Input Label={"Vice Presidente"} setValue={setvicePress}></Input>
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
            <Input Label={"CPF Vice Presidente"} setValue={setCPFVice}></Input>
          </Styled.FormContainer>
        </Styled.Aux>
        <Styled.Aux>
          <Styled.FormContainer>
            <Input
              Label={"Quantidade de Animais da comitiva"}
              setValue={setAnimais}
            ></Input>
          </Styled.FormContainer>
          <Styled.FormContainer>
            <Select
              Label={"Tamanho da tenda"}
              setValue={setTenda}
              Options={["10 X 10", "10 X 05"]}
            ></Select>
          </Styled.FormContainer>
        </Styled.Aux>
        <Styled.Aux>
          <Styled.FormContainer>
            <Select
              Label={"Veículo"}
              setValue={setVeiculo}
              Options={["Sem Veículo", "Carro", "Caminhão", "Trailer"]}
            ></Select>
          </Styled.FormContainer>
          <Styled.FormContainer>
            <Input
              placeholder={"Caso não ter veículo, ignorar"}
              Label={"Tamanho do veículo Comprimento X Largura"}
              setValue={setTamanho}
            ></Input>
          </Styled.FormContainer>
        </Styled.Aux>
        <Styled.Aux>
          <Styled.FormContainer>
            <Select
              Label={"Tipo de tenda"}
              setValue={setTipo}
              Options={["Comitiva", "Comercial"]}
            ></Select>
          </Styled.FormContainer>
          <Styled.FormContainer>
            <Checkbox
              Label={"Preciso de Curral"}
              setValue={setCurral}
            ></Checkbox>
          </Styled.FormContainer>
        </Styled.Aux>
        {Tipo === "Comercial" && (
          <>
            <Styled.Aux>
              <Styled.FormContainer>
                <Input
                  Label={"Tipo de produto"}
                  placeholder={"Ex: comida, roupa, selaria "}
                  setValue={setProduto}
                ></Input>
              </Styled.FormContainer>
              <Styled.FormContainer>
                <Input Label={"CPF ou CNPJ"} setValue={setCpfCnpj}></Input>
              </Styled.FormContainer>
            </Styled.Aux>
            <Styled.Aux>
              <Styled.FormContainer>
                <Input
                  Label={"Telefone de contato"}
                  setValue={setTelefoneComercial}
                ></Input>
              </Styled.FormContainer>
              <Styled.FormContainer>
                <Input Label={"Razão Social"} setValue={setRazao}></Input>
              </Styled.FormContainer>
            </Styled.Aux>
          </>
        )}
      </Styled.Container>
      <Styled.Aux>
        <ButtonPrimary
          Label={"Reservar"}
          Action={() => {
            CadastraTenda();
          }}
        />
      </Styled.Aux>

      <Footer />
    </>
  );
};

export default Tendas;

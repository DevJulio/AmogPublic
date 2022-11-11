/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";

import Header from "../../components/header";
import * as Styled from "./styles";

import competicao from "../../assets/icons/competicao.png";

import Footer from "../../components/footer";
import Input from "../../components/forms/inputs";
import ButtonPrimary from "../../components/btns";
import Select from "../../components/forms/select";
import api from "../../services/api";
import { useHistory } from "react-router";
import Modal from "../../components/Modal";
const Competicoes: React.FC = () => {
  const [Animal, setAnimal] = useState();
  const [Proprietario, setProprietario] = useState();
  const [Estado, setEstado] = useState();
  const [Cidade, setCidade] = useState();

  const [rancho, setRancho] = useState();
  const [nascimento, setNascimento] = useState();
  const [registro, setRegistro] = useState();
  const [apresentador, setApresentador] = useState();

  const [category, setCategory] = useState("Morfologia");
  const [subCategory, setSubCategory] = useState("Mula Dente de Leite");
  const [loading, setLoading] = useState<boolean>(false);

  const history = useHistory();

  const cadastraProva = async () => {
    if (
      Animal &&
      Proprietario &&
      Estado &&
      Cidade &&
      category &&
      subCategory &&
      rancho &&
      nascimento &&
      registro &&
      apresentador
    ) {
      try {
        const response = await api.post("addProva", {
          Animal,
          Proprietario,
          Estado,
          Cidade,
          category,
          subCategory,
          rancho,
          nascimento,
          registro,
          apresentador,
        });

        if (category === "Marcha") {
          localStorage.setItem("ticketType", "ProvaMaior");
        }
        if (category !== "Marcha") {
          localStorage.setItem("ticketType", "ProvaMenor");
        }

        localStorage.setItem("provaID", response.data.docId);
        setLoading(true);
        setTimeout(() => {
          handleClose();
        }, 1500);
      } catch (error) {
        alert("Verifique os campos e tente novamente");
      }
    } else {
      alert("Verifique os campos e tente novamente");
    }
  };
  const handleClose = () => {
    setLoading(false);
    history.push("/compras/checkout");
  };
  return (
    <>
      {loading && (
        <Modal title={"Aguarde!"} handleClose={handleClose}>
          <Styled.H1modal>Prova cadastrada com sucesso</Styled.H1modal>
        </Modal>
      )}
      <Header />

      <Styled.MainContainer>
        <Styled.Title>Competições</Styled.Title>
        <Styled.Icons src={competicao} />
      </Styled.MainContainer>
      <Styled.Container>
        <Styled.Aux>
          <Styled.FormContainer>
            <Select
              Label={"Categoria da prova"}
              setValue={setCategory}
              Options={["Morfologia", "Jumentos", "Marcha", "Sociais"]}
            ></Select>
          </Styled.FormContainer>

          {category === "Morfologia" && (
            <Styled.FormContainer>
              <Select
                Label={"Subcategoria"}
                setValue={setSubCategory}
                Options={[
                  "Mula Dente de Leite",
                  "Mula Jovem",
                  "Mula Adulta",
                  "Burro Dente de Leite",
                  "Burro Jovem",
                  "Burro Adulto",
                ]}
              ></Select>
            </Styled.FormContainer>
          )}

          {category === "Jumentos" && (
            <Styled.FormContainer>
              <Select
                Label={"Subcategoria"}
                setValue={setSubCategory}
                Options={[
                  "Jumentos Dente de Leite",
                  "Jumentos Jovem",
                  "Jumentos Adulto",
                  "Jumentas Dente de Leite",
                  "Jumentas Jovem",
                  "Jumentas Adulta",
                  "Provas em jumentos montado",
                ]}
              ></Select>
            </Styled.FormContainer>
          )}

          {category === "Marcha" && (
            <Styled.FormContainer>
              <Select
                Label={"Subcategoria"}
                setValue={setSubCategory}
                Options={[
                  "Mula Iniciante",
                  "Mula Jovem",
                  "Mula Adulta",
                  "Mula Diagonal",
                  "Burro Adulto",
                  "Burro Iniciante",
                ]}
              ></Select>
            </Styled.FormContainer>
          )}

          {category === "Sociais" && (
            <Styled.FormContainer>
              <Select
                Label={"Subcategoria"}
                setValue={setSubCategory}
                Options={["Infantil", "Amazonas", "Regional", "Patrão"]}
              ></Select>
            </Styled.FormContainer>
          )}
        </Styled.Aux>
      </Styled.Container>
      <Styled.Aux>
        <Styled.FormContainer>
          <Input Label={"Animal"} setValue={setAnimal}></Input>
        </Styled.FormContainer>
        <Styled.FormContainer>
          <Input Label={"Proprietário"} setValue={setProprietario}></Input>
        </Styled.FormContainer>
      </Styled.Aux>
      <Styled.Aux>
        <Styled.FormContainer>
          <Input Label={"Estado"} setValue={setEstado}></Input>
        </Styled.FormContainer>
        <Styled.FormContainer>
          <Input Label={"Cidade"} setValue={setCidade}></Input>
        </Styled.FormContainer>
      </Styled.Aux>

      <Styled.Aux>
        <Styled.FormContainer>
          <Input Label={"Haras/Racho"} setValue={setRancho}></Input>
        </Styled.FormContainer>
        <Styled.FormContainer>
          <Input Label={"Nascimento"} setValue={setNascimento}></Input>
        </Styled.FormContainer>
      </Styled.Aux>
      <Styled.Aux>
        <Styled.FormContainer>
          <Input
            Label={"Nº de registro do animal"}
            setValue={setRegistro}
          ></Input>
        </Styled.FormContainer>
        <Styled.FormContainer>
          <Input
            Label={"Nome do apresentador (condutor do animal)"}
            setValue={setApresentador}
          ></Input>
        </Styled.FormContainer>
      </Styled.Aux>

      <Styled.Aux>
        <Styled.FormContainer>
          <Styled.InfoParagraph>
            Observação: Idade de Animais será conferida pelos Árbitros das
            provas.
          </Styled.InfoParagraph>
        </Styled.FormContainer>
        {category === "Morfologia" && (
          <Styled.FormContainer>
            <h2>Valor da Inscrição: </h2>
            <h1>R$ 150,00</h1>
          </Styled.FormContainer>
        )}

        {category === "Jumentos" && (
          <Styled.FormContainer>
            <h2>Valor da Inscrição: </h2>
            <h1>R$ 150,00</h1>
          </Styled.FormContainer>
        )}

        {category === "Marcha" && (
          <Styled.FormContainer>
            <h2>Valor da Inscrição: </h2>
            <h1>R$ 250,00</h1>
          </Styled.FormContainer>
        )}

        {category === "Sociais" && (
          <Styled.FormContainer>
            <h2>Valor da Inscrição: </h2>
            <h1>R$ 150,00</h1>
          </Styled.FormContainer>
        )}
      </Styled.Aux>

      {/* 
 

Nome do apresentador( do condutor que irá mudar no animal) */}

      <Styled.Aux>
        <ButtonPrimary
          Action={() => {
            cadastraProva();
          }}
          Label={"Seguir para o pagamento"}
        />
      </Styled.Aux>
      <Footer />
    </>
  );
};

export default Competicoes;

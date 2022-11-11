/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";

import Header from "../../components/header";
import * as Styled from "./styles";

import QR from "../../assets/icons/QR.png";

import Footer from "../../components/footer";
import InputMasked from "../../components/forms/inputs/MaskedIpunt";
import ButtonPrimary from "../../components/btns";
import api from "../../services/api";
import { useHistory } from "react-router";

const DowloadTicket: React.FC = () => {
  const [cpf, setCpf] = useState<string>("");
  // eslint-disable-next-line
  const [post, setPost] = useState(Array());
  const [results, setresults] = useState<boolean>(false);
  const history = useHistory();

  const searchCPF = async () => {
    if (cpf.length === 14) {
      const res = await api.get(`/getTicketDataByCpf/${cpf}`);
      res && setresults(true);
      res && setPost(res.data.map((doc: any) => doc));
    }
  };

  const checkPair = (index: number) => {
    if (index % 2 === 0) {
      return false;
    }
    return true;
  };

  const redirect = (docid: string, day: string) => {
    console.log(docid);

    if (day !== "PASSAPORTE") {
      localStorage.setItem("ticketType", "Ingresso");
    } else {
      localStorage.setItem("ticketType", "Passaporte");
    }
    localStorage.setItem("ticketDay", day);
    localStorage.setItem("AMOG_TICKET_ID", docid);
    history.push("/compras/ticket");
  };

  return (
    <>
      <Header />

      <Styled.MainContainer>
        <Styled.Title>Baixar Ingresso</Styled.Title>
        <Styled.Icons src={QR} />
      </Styled.MainContainer>
      <Styled.Container>
        <Styled.InfoParagraph style={{ width: "88%", textAlignLast: "center" }}>
          <p>Caso tenha perdido seu ingresso, baixe novamente!</p>
        </Styled.InfoParagraph>
      </Styled.Container>
      <Styled.Aux>
        <Styled.FormContainer>
          <InputMasked
            setValue={setCpf}
            Label={"CPF do comprador"}
            mask={"999.999.999-99"}
          ></InputMasked>
        </Styled.FormContainer>
      </Styled.Aux>
      <Styled.Aux>
        <ButtonPrimary
          Label={"Buscar por CPF"}
          Action={() => {
            searchCPF();
          }}
        />
      </Styled.Aux>

      {results && (
        <>
          <Styled.Aux>
            <Styled.TableContainer>
              <Styled.Table>
                <Styled.Thead>
                  <Styled.Tr isDark={true}>
                    <Styled.Th>Nome no ingresso</Styled.Th>
                    <Styled.Th>Comprado em:</Styled.Th>
                    <Styled.Th>Dia válido</Styled.Th>
                    <Styled.Th></Styled.Th>
                  </Styled.Tr>
                </Styled.Thead>
                <Styled.Tbody>
                  <>
                    {post.map((pos, index) => (
                      <Styled.Tr isDark={checkPair(index)}>
                        <Styled.Td>{pos.buyerNamer}</Styled.Td>
                        <Styled.Td>{pos.date}</Styled.Td>
                        <Styled.Td>{pos.day}</Styled.Td>
                        <Styled.Td>
                          <a
                            onClick={() => {
                              redirect(pos.id, pos.day);
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            Baixar
                          </a>
                        </Styled.Td>
                      </Styled.Tr>
                    ))}
                  </>
                </Styled.Tbody>
              </Styled.Table>
            </Styled.TableContainer>
          </Styled.Aux>
        </>
      )}

      <Footer />
    </>
  );
};

export default DowloadTicket;

/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import Header from "../../../components/header";
import * as Styled from "./styles";
import competicao from "../../../assets/icons/competicao.png";
import Footer from "../../../components/footer";
import api from "../../../services/api";
import { useHistory } from "react-router";
import fetchData from "../../../helpers/checkSession";

const EntradasAdmin: React.FC = () => {
  // eslint-disable-next-line
  const [post, setPost] = useState(Array());

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/listEntradas");
      res && setPost(res.data.map((doc: any) => doc));
    };
    fetchData();
  }, []);

  const history = useHistory();
  const [render, setRender] = useState<boolean>(false);
  useEffect(() => {
    const getCredencials = async () => {
      const res = await fetchData();
      setRender(res);
      !res && history.push("/construcao");
    };
    getCredencials();
  }, [history]);

  const checkPair = (index: number) => {
    if (index % 2 === 0) {
      return false;
    }
    return true;
  };

  return render ? (
    <>
      <Header />

      <Styled.MainContainer>
        <Styled.Title>Entradas</Styled.Title>
        <Styled.Icons src={competicao} />
      </Styled.MainContainer>
      <Styled.Container>
        <>
          <Styled.Table>
            <Styled.Thead>
              <Styled.Tr isDark={true}>
                <Styled.Th>Nome no ingresso</Styled.Th>
                <Styled.Th>Comprado em:</Styled.Th>
                <Styled.Th>Dia válido</Styled.Th>
                <Styled.Th>CPF comprador</Styled.Th>
              </Styled.Tr>
            </Styled.Thead>
            <Styled.Tbody>
              <>
                {post.map((pos, index) => (
                  <Styled.Tr isDark={checkPair(index)}>
                    <Styled.Td>{pos.buyerNamer}</Styled.Td>
                    <Styled.Td>{pos.date}</Styled.Td>
                    <Styled.Td>{pos.day}</Styled.Td>
                    <Styled.Td>{pos.cpf}</Styled.Td>
                  </Styled.Tr>
                ))}
              </>
            </Styled.Tbody>
          </Styled.Table>
        </>
      </Styled.Container>
      <Footer />
    </>
  ) : (
    <>
      <h1>Carregando credenciais....</h1>
    </>
  );
};

export default EntradasAdmin;

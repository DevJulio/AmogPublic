/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import Header from "../../../components/header";
import * as Styled from "./styles";
import competicao from "../../../assets/icons/competicao.png";
import Footer from "../../../components/footer";
import api from "../../../services/api";

const ProvasAdmin: React.FC = () => {
  // eslint-disable-next-line
  const [post, setPost] = useState(Array());

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/listProvas");
      res && setPost(res.data.map((doc: any) => doc));
    };
    fetchData();
  }, []);

  const checkPair = (index: number) => {
    if (index % 2 === 0) {
      return false;
    }
    return true;
  };
  console.log(post);

  return (
    <>
      <Header />

      <Styled.MainContainer>
        <Styled.Title>Competições</Styled.Title>
        <Styled.Icons src={competicao} />
      </Styled.MainContainer>
      <Styled.Container>
        <>
          <Styled.Table>
            <Styled.Thead>
              <Styled.Tr isDark={true}>
                <Styled.Th>Animal</Styled.Th>
                <Styled.Th>Proprietario</Styled.Th>
                <Styled.Th>Estado</Styled.Th>
                <Styled.Th>Cidade</Styled.Th>
                <Styled.Th>Categoria</Styled.Th>
                <Styled.Th>Sub Categoria</Styled.Th>
                <Styled.Th>Pago?</Styled.Th>
              </Styled.Tr>
            </Styled.Thead>
            <Styled.Tbody>
              <>
                {post.map((pos, index) => (
                  <Styled.Tr isDark={checkPair(index)}>
                    <Styled.Td>{pos.data.Animal}</Styled.Td>
                    <Styled.Td>{pos.data.Proprietario}</Styled.Td>
                    <Styled.Td>{pos.data.Estado}</Styled.Td>
                    <Styled.Td>{pos.data.Cidade}</Styled.Td>
                    <Styled.Td>{pos.data.category}</Styled.Td>
                    <Styled.Td>{pos.data.subCategory}</Styled.Td>
                    <Styled.Td>{pos.payed ? "Sim" : "Não"}</Styled.Td>
                  </Styled.Tr>
                ))}
              </>
            </Styled.Tbody>
          </Styled.Table>
        </>
      </Styled.Container>
      <Footer />
    </>
  );
};

export default ProvasAdmin;

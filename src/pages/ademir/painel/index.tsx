/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import Header from "../../../components/header";
import * as Styled from "./styles";
import comitivas from "../../../assets/icons/comitivas.png";
import Footer from "../../../components/footer";
import api from "../../../services/api";

const ComitivasAdmin: React.FC = () => {
  // eslint-disable-next-line
  const [post, setPost] = useState(Array());

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/listComitivas");
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
  return (
    <>
      <Header />

      <Styled.MainContainer>
        <Styled.Title>Lista das comitivas cadastradas</Styled.Title>
        <Styled.Icons src={comitivas} />
      </Styled.MainContainer>
      <Styled.Container>
        <>
          <Styled.Table>
            <Styled.Thead>
              <Styled.Tr isDark={true}>
                <Styled.Th>Comitiva</Styled.Th>
                <Styled.Th>Cidade</Styled.Th>
                <Styled.Th>Telefone</Styled.Th>
                <Styled.Th>Comissário</Styled.Th>
                <Styled.Th>CPF</Styled.Th>
                <Styled.Th>Email</Styled.Th>
                <Styled.Th>Membros</Styled.Th>
                <Styled.Th>Anos</Styled.Th>
                <Styled.Th>Baia</Styled.Th>
                <Styled.Th>Pago?</Styled.Th>
              </Styled.Tr>
            </Styled.Thead>
            <Styled.Tbody>
              <>
                {post.map((pos, index) => (
                  <Styled.Tr isDark={checkPair(index)}>
                    <Styled.Td>{pos.comitiva}</Styled.Td>
                    <Styled.Td>{pos.Cidade}</Styled.Td>
                    <Styled.Td>{pos.Telefone}</Styled.Td>
                    <Styled.Td>{pos.Comissario}</Styled.Td>
                    <Styled.Td>{pos.CPF}</Styled.Td>
                    <Styled.Td>{pos.Email}</Styled.Td>
                    <Styled.Td>{pos.membros}</Styled.Td>
                    <Styled.Td>{pos.years}</Styled.Td>
                    <Styled.Td>{pos.Baia}</Styled.Td>
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

export default ComitivasAdmin;

/*<Styled.Td style={{ textAlignLast: "center" }}>
 {pos.enable === true ? (
  <a
    onClick={() => {}}
    style={{ cursor: "pointer", color: "blue" }}
  >
    ...
  </a>
) : (
  <a
    onClick={() => {}}
    style={{ cursor: "pointer", color: "blue" }}
  >
    ...
  </a>
)} 
</Styled.Td>*/

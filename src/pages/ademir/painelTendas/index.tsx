/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import Header from "../../../components/header";
import * as Styled from "./styles";
import tent from "../../../assets/icons/tent.png";
import Footer from "../../../components/footer";
import api from "../../../services/api";

const TendasAdmin: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-array-constructor
  const [post, setPost] = useState(Array());

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/listTendas");
      console.log(res);
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
        <Styled.Title>Lista das tendas solicitadas</Styled.Title>
        <Styled.Icons src={tent} />
      </Styled.MainContainer>
      <Styled.Container>
        <>
          <Styled.Table>
            <Styled.Thead>
              <Styled.Tr isDark={true}>
                <Styled.Th>Comissario</Styled.Th>
                <Styled.Th>Telefone</Styled.Th>
                <Styled.Th>CPF</Styled.Th>
                <Styled.Th>Vice comissário</Styled.Th>
                <Styled.Th>Telefone Vice comissário</Styled.Th>
                <Styled.Th>CPF Vice comissário</Styled.Th>
                <Styled.Th>Curral</Styled.Th>
                <Styled.Th>Qtd de animais</Styled.Th>
                <Styled.Th>Tipo</Styled.Th>
                <Styled.Th>Tamanho da tenda</Styled.Th>
                <Styled.Th>Veiculo</Styled.Th>
                <Styled.Th>Tamanho</Styled.Th>
                <Styled.Th>Produto</Styled.Th>
                <Styled.Th>Razão Social</Styled.Th>
                <Styled.Th>Telefone de contato</Styled.Th>
                <Styled.Th>Data de reserva</Styled.Th>
                <Styled.Th>Pago?</Styled.Th>
              </Styled.Tr>
            </Styled.Thead>
            <Styled.Tbody>
              <>
                {post.map((pos, index) => (
                  <Styled.Tr isDark={checkPair(index)}>
                    <Styled.Td>{pos.Comissario}</Styled.Td>
                    <Styled.Td>{pos.Telefone}</Styled.Td>
                    <Styled.Td>{pos.CPF}</Styled.Td>
                    <Styled.Td>{pos.vicePress}</Styled.Td>
                    <Styled.Td>{pos.ViceTelefone}</Styled.Td>
                    <Styled.Td>{pos.CPFVice}</Styled.Td>
                    <Styled.Td>{pos.Curral === "on" ? "Sim" : "Não"}</Styled.Td>
                    <Styled.Td>{pos.animais}</Styled.Td>
                    <Styled.Td>{pos.Tipo}</Styled.Td>
                    <Styled.Td>{pos.Tenda}</Styled.Td>
                    <Styled.Td>{pos.Veiculo}</Styled.Td>
                    <Styled.Td>{pos.Tamanho}</Styled.Td>
                    <Styled.Td>{pos.Produto}</Styled.Td>
                    <Styled.Td>{pos.Razao}</Styled.Td>
                    <Styled.Td>{pos.TelefoneComercial}</Styled.Td>
                    <Styled.Td>{pos.date}</Styled.Td>
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

export default TendasAdmin;

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

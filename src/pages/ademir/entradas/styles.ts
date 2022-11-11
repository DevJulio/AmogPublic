import styled from "styled-components";

export const MainContainer = styled.div`
  place-content: center;
  display: flex;
  flex: auto;
  flex-direction: column;
  margin-top: 20px;
  place-items: center;
`;
export const Container = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  padding-inline: 100px;
`;
export const FormContainer = styled.div`
  margin-left: 40px;
  margin-right: 40px;
  width: 40%;
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.devices.tablet} {
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
  }
`;

export const Aux = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  place-content: center;
  @media ${({ theme }) => theme.devices.tablet} {
    flex-direction: column;
    width: 90%;
    padding-left: 19px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  @media ${({ theme }) => theme.devices.tablet} {
    padding: 10px;
  }
`;
export const Text = styled.span`
  display: flex;
  flex: 1;
`;
export const Title = styled.span`
  color: ${({ theme }) => theme.colors.red.amog};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 60px;
  @media ${({ theme }) => theme.devices.tablet} {
    text-align: center;
  }
`;
export const Icons = styled.img`
  display: flex;
  margin-right: 15px;
  max-height: 80px;
  max-width: 80px;
  cursor: pointer;
`;
export const ContainerPost = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 25%;
  @media ${({ theme }) => theme.devices.tablet} {
    padding-inline: 5%;
  }
`;
export const Thead = styled.thead``;

interface IZebra {
  isDark: boolean;
}
export const Tr = styled.tr<IZebra>`
  background-color: ${(IZebra) => (IZebra.isDark ? "#f2f2f2" : "#fff")};
  background-color: ;
`;
export const Tbody = styled.tbody``;

export const Td = styled.td`
  text-align: left;
  padding: 16px;
  border-style: solid;
  border-width: thin;
`;
export const Th = styled.th`
  text-align: left;
  padding: 16px;
  border-style: solid;
  border-width: thin;
`;
export const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
`;

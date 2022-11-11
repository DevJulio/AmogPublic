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
  padding-inline: 50px;
  @media ${({ theme }) => theme.devices.tablet} {
    flex-direction: column;
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
export const MainCard = styled.div`
  display: flex;
  flex-direction: row;
  flex: 5;
  border-style: solid;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.colors.red.amog};
  margin: 25px;
  align-items: center;
  @media ${({ theme }) => theme.devices.tablet} {
    flex-direction: column;
  }
`;

export const CardData = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;
export const Img = styled.img`
  display: flex;
  margin-right: 15px;
  flex: 2;
  background-size: cover;
  max-width: 250px;
  cursor: pointer;
  z-index: -1;
`;
export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  padding-left: 50px;
  justify-content: center;
  place-content: center;
  margin-top: 30px;
  padding-bottom: 50px;
`;

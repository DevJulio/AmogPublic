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
  flex: 4;
  place-content: center;
  flex-direction: row;

  @media ${({ theme }) => theme.devices.tablet} {
    flex-direction: column;
  }
`;

export const Col = styled.div`
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.secundary};
  display: flex;
  flex: 1;
  place-content: center;
  padding: 50px;
  white-space: nowrap;
  place-items: center;
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
export const BtnsContainer = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  @media ${({ theme }) => theme.devices.tablet} {
    flex-direction: column;
  }
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
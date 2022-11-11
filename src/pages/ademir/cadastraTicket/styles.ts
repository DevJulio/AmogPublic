import styled from "styled-components";
import InputMask from "react-input-mask";

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

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Select = styled.select``;
export const InputMaskHtml = styled(InputMask)`
  color: black;
  font-size: 25px;
  border: 2px solid ${({ theme }) => theme.colors.red.amog};
  border-radius: 5px;
  margin-top: 20px;
`;
export const FileInput = styled.input`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const H1modal = styled.h1`
font-size: 21px;
padding-inline: 48px;
`;
export const H1modal2 = styled.h1`
font-size: 20px;
padding-inline: 28px;
`;


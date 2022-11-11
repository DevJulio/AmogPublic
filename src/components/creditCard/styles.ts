import styled from "styled-components";

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

import styled from "styled-components";

export const MainContainer = styled.div`
  place-content: center;
  display: flex;
  flex-direction: column;
  flex: auto;
  padding-top: 40px;
`;

export const Btn = styled.button`
  place-self: center;
  min-width: 275px;
  height: 60px;
  font-size: 23px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.red.amog};
  color: white;
  cursor: pointer;
`;

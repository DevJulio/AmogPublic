import styled from "styled-components";

export const MainContainer = styled.div`
  place-content: center;
  display: flex;
  flex-direction: column;
  flex: auto;
  padding-top: 20px;
`;

export const Input = styled.input.attrs(() => ({
  type: "text",
}))`
  color: black;
  font-size: 25px;
  border: 2px solid ${({ theme }) => theme.colors.red.amog};
  border-radius: 5px;
  margin-top: 10px;
`;
export const Select = styled.select`
  color: black;
  font-size: 25px;
  border: 2px solid ${({ theme }) => theme.colors.red.amog};
  border-radius: 5px;
  margin-top: 10px;
`;

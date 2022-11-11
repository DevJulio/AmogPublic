import styled from "styled-components";
// import colors from "color";

interface IButton {
  disable: boolean;
  color: "green" | "red" | "gray";
}

export const Button = styled.button<IButton>`
  text-align: center;
  border: none;
  font-family: ${({ theme }) => theme.fonts.secundary};
  font-size: ${({ theme }) => theme.fontSize.mm};
  color: ${({ theme }) => theme.colors.white.normal};
  font-weight: 600;
  min-width: 150px;
  padding: 10px 20px;
  border-radius: 3px;
  background-color: ${({ theme, disable, color }) =>
    disable ? theme.colors.gray.normal : theme.colors[color].normal};
  cursor: ${({ disable }) => (disable ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${({ theme, disable, color }) =>
      disable && theme.colors.gray.normal}

  &:active {
    background-color: ${({ theme, disable, color }) =>
      disable && theme.colors.gray.normal}

  &:focus {
    outline: none;
  }
`;

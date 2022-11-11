import styled from "styled-components";

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.red.amog};
  font-family: ${({ theme }) => theme.fonts.primary};
  display: flex;
  align-self: center;
  padding-bottom: 50px;
  font-size: 50px;
  @media ${({ theme }) => theme.devices.tablet} {
    text-align: center;
    font-size: 35px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1044px;
  align-self: center;
  padding-inline: 20px;
  max-width: 1044px;
  align-self: center;
  padding-inline: 20px;
  min-height: 175px;
`;
export const FileInput = styled.input`
  display: flex;
  flex-direction: column;
`;

import styled from "styled-components";

// MainContainer
// Title
// Icons
// Container
// InfoParagraph

export const MainContainer = styled.div`
  place-content: center;
  display: flex;
  flex: auto;
  flex-direction: column;
  margin-top: 20px;
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

export const Container = styled.div`
  padding-top: 20px;
  display: flex;
  place-content: center;
`;

export const InfoParagraph = styled.p`
  font-size: x-large;
  padding-top: 10px;
  text-align: center;
  text-align: justify;
  @media ${({ theme }) => theme.devices.tablet} {
    font-size: larger;
    width: 88%;
    padding-left: -1px;
  }
`;

export const MainImg = styled.img`
  height: 350px;
  border-radius: 25px;
`;
export const MainSpan = styled.span`
  padding-top: 20px;
  font-size: 36px;
`;
export const H1modal2 = styled.h1`
  font-size: 20px;
  padding-inline: 28px;
`;

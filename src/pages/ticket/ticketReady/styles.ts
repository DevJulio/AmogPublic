import styled from "styled-components";

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
export const ColContainer = styled.div`
  padding-top: 20px;
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  place-content: center;
`;
export const Container = styled.div`
  padding-top: 20px;
  display: flex;
  height: 100%;
  width: 100%;
  place-content: center;
`;
export const Atention = styled.span`
  color: #ffff00;
  font-family: ${({ theme }) => theme.fonts.secundary};
  font-size: 45px;
  align-self: center;
  @media ${({ theme }) => theme.devices.tablet} {
    text-align-last: center;
  }
`;

export const Atention2 = styled.span`
  color: white;
  font-family: ${({ theme }) => theme.fonts.secundary};
  font-size: 25px;
  align-self: center;
  @media ${({ theme }) => theme.devices.tablet} {
    text-align-last: center;
  }
`;
export const ItemSpan = styled.span`
  color: white;
  font-size: 18px;
  align-self: center;
  padding-bottom: 23px;
  padding-inline: 10px;
  @media ${({ theme }) => theme.devices.tablet} {
    text-align-last: left;
  }
`;

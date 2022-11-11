import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  // background-color: ${({ theme }) => theme.colors.red.amog};
`;

export const MainContainer = styled.div`
  place-content: center;
  display: flex;
  flex: auto;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.white.normal};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 128px;

  @media ${({ theme }) => theme.devices.tablet} {
    font-size: 100px;
    place-self: center;
  }
`;
export const ImgContainer = styled.div`
  display: flex;
`;
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  place-items: center;
  padding-right: 50px;
  margin-left: -150px;
  // background-color: ${({ theme }) => theme.colors.red.amog};
  @media ${({ theme }) => theme.devices.tablet} {
    display: none;
  }
`;

export const IconsContainerAux = styled.div`
  display: none;
  @media ${({ theme }) => theme.devices.tablet} {
    display: flex;
    padding-inline: 20px;
  }
`;

export const Icons = styled.img`
  display: flex;
  margin-right: 15px;
  cursor: pointer;
`;
export const IconsAux = styled.img`
  place-self: center;
  justify-content: center;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 3;
`;
export const MenuItem = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.red.amog};
  display: flex;
  font-size: 30px;
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
`;
export const LogoImg = styled.img`
  width: 20%;
  padding-top: 20px;
  cursor: pointer;
  padding-bottom: 20px;
  @media ${({ theme }) => theme.devices.tablet} {
    width: 90%;
  }
`;

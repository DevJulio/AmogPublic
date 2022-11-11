import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.red.amog};
  color: ${({ theme }) => theme.colors.white.normal};
  // height: 300px;
  margin-top: 60px;

}

  @media ${({ theme }) => theme.devices.tablet} {
    flex-direction: column;
    place-items: center;
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 10%;
  @media ${({ theme }) => theme.devices.tablet} {
    width: 27%;
    padding-top: 2px;
    justify-content: end;
  }
`;
export const Title = styled.span`
  color: ${({ theme }) => theme.colors.white.normal};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 128px;
  align-self: center;
  @media ${({ theme }) => theme.devices.tablet} {
    font-size: 60px;
    padding-bottom: 25px;
    padding-top: 25px;
    place-self: center;
  }
`;
export const SocialMedia = styled.span`
  color: ${({ theme }) => theme.colors.white.normal};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 128px;
  align-self: center;
`;
export const IconsContainer = styled.div`
  display: flex;
  padding-top: 2%;
  padding-bottom: 2%;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.red.amog};
  color: ${({ theme }) => theme.colors.white.normal};
  margin-inline-start: auto;
  justify-content: center;

  @media ${({ theme }) => theme.devices.tablet} {
    flex-direction: row;
    max-height: 80px;
    margin-inline-start: unset;
  }
`;
export const Icons = styled.img`
  align-items: end;
  cursor: pointer;
  padding-right: 50px;
  max-width: 50px;
  @media ${({ theme }) => theme.devices.tablet} {
    padding-right: 0px;
  }
`;
export const IconsAux = styled.img`
  align-items: end;
  cursor: pointer;
  max-width: 50px;
  padding-right: 50px;
  @media ${({ theme }) => theme.devices.tablet} {
    padding-left: 25px;
    padding-right: 25px;
  }
`;
export const BackToTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.black.normal};
`;
export const Mulaimg = styled.img`
  display: flex;
  max-width: 100px;
`;
export const FooterContact = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.black.normal};
  @media ${({ theme }) => theme.devices.tablet} {
    justify-content: center;
  }
`;
export const FooterSpan = styled.span`
  color: ${({ theme }) => theme.colors.red.amog};
  font-family: ${({ theme }) => theme.fonts.secundary};
  font-size: 16px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 24px;
  a {
    text-align: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray.normal};
    margin-top: 5px;

    &:hover {
      color: ${({ theme }) => theme.colors.black.normal};
    }

    svg {
      padding-right: 5px;
    }
  }

  @media ${({ theme }) => theme.devices.tablet} {
    padding-left: 0px;
  }
`;

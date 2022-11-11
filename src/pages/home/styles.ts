import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
   width: 75%;
  align-self: center;
  padding-bottom: 50px;
  @media ${({ theme }) => theme.devices.tablet} {
    width: 100%;
  }
`;
export const CaroselContainer = styled.div`
  text-align: -webkit-center;
`;
export const CarouselSponsorsContainer = styled.div`
  text-align: -webkit-center;
  justify-content: center;
  display: flex;
  padding-top: 50px;
  flex-direction: row;
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
  font-size: 50px;
  @media ${({ theme }) => theme.devices.tablet} {
    text-align: center;
    font-size: 40px;
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 2;
  @media ${({ theme }) => theme.devices.tablet} {
    flex-direction: column;
  }
`;
export const InfoImg = styled.img`
  display: flex;
  flex: 1;
  width: 50%;
  @media ${({ theme }) => theme.devices.tablet} {
    width: 100%;
  }
`;
export const InfoParagraph = styled.p`
  font-size: x-large;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: justify;
  @media ${({ theme }) => theme.devices.tablet} {
    font-size: larger;
    width: 88%;
    padding-left: -1px;
  }
`;
export const MapContainer = styled.div`
  display: flex;
  place-items: center;
  flex-direction: column;
`;
export const Spacer = styled.div`
  display: flex;
  place-items: center;
  flex-direction: row;
  justify-content: center;
  padding: 30px;
`;
export const MainContainer = styled.div`
  display: flex;
  place-items: center;
  flex-direction: column;
`;

export const Mulaimg = styled.img`
  display: flex;
  height: 122px;

  width: 122px;
  // @media ${({ theme }) => theme.devices.tablet} {
  //   width: 100%;
  // }
`;

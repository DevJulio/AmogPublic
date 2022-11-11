import styled from "styled-components";

export const MainContainer = styled.div`
  place-content: center;
  display: flex;
  flex: auto;
  flex-direction: column;
  margin-top: 20px;
  place-items: center;
`;
export const Container = styled.div`
  padding-top: 20px;
  display: flex;
  place-content: center;
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


export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
`;

export const VideoItem = styled.div`
padding-top: 20px;
`;
export const VideoRow = styled.div`
  display: flex;
  flex-direction: row;
  @media ${({ theme }) => theme.devices.tablet} {
    flex-direction: column;
  }
`;
export const InfoParagraph = styled.p`
  font-size: 22px;
  text-align: center;
  width: 60%;
  text-align: justify;
  @media ${({ theme }) => theme.devices.tablet} {
    font-size: larger;
    width: 90%;
     padding-left: -1px;
  }
`;
 
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
`;
export const FormContainer = styled.div`
  margin-left: 40px;
  margin-right: 40px;
  width: 40%;
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.devices.tablet} {
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
  }
`;

export const Aux = styled.div`
  display: flex;
  flex-direction: row;
  padding-inline: 50px;
  @media ${({ theme }) => theme.devices.tablet} {
    flex-direction: column;
  }
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
  font-size: 60px;
  @media ${({ theme }) => theme.devices.tablet} {
    text-align: center;
  }
`;
export const Icons = styled.img`
  display: flex;
  margin-right: 15px;
  width: 80px;
  cursor: pointer;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-radius: 25px;
  width: 75%;
  margin-top: 100px;
  place-items: center;
  border-color: ${({ theme }) => theme.colors.pink.amog};
  @media ${({ theme }) => theme.devices.tablet} {
    flex-direction: column;
    width: 100%;
  }
`;

export const CarAux = styled.div`
  display: flex;
  flex-direction: row;
  @media ${({ theme }) => theme.devices.tablet} {
    flex-direction: column;
  }
`;

export const CardData = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 50px;
  padding-top: 25px;
  @media ${({ theme }) => theme.devices.tablet} {
    padding-inline: 15px;
  }
`;

export const CardImg = styled.img`
  display: flex;
  max-height: 500px;
  cursor: pointer;
  border-bottom-left-radius: 21px;

  @media ${({ theme }) => theme.devices.tablet} {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-height: 100%;
    border-bottom-left-radius: 0px;
  }
`;
export const CardMainTitle = styled.div`
  background-color: ${({ theme }) => theme.colors.pink.amog};
  font-size: ${({ theme }) => theme.fontSize.md2};
  width: 100%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  height: 60px;
  display: flex;
  align-items: center;
  @media ${({ theme }) => theme.devices.tablet} {
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;
export const CardMainTitleSpan = styled.span`
  color: white;
  padding-left: 20px;
`;
export const CardTitle = styled.span`
  color: ${({ theme }) => theme.colors.pink.amog};
  font-size: ${({ theme }) => theme.fontSize.md2};
  padding-right: 10px;
`;
export const CardTitleAux = styled.span`
  color: ${({ theme }) => theme.colors.pink.amog};
  font-size: ${({ theme }) => theme.fontSize.md2};
  margin-right: auto;
`;
export const CardAbout = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  margin-right: auto;
  text-align: justify;
`;
export const CardSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.md};
  margin-right: auto;
  color: ${({ theme }) => theme.colors.pink.amog};
`;
export const CardTitleContent = styled.div`
  display: flex;
  flex-direction: row;
  place-items: center;
  @media ${({ theme }) => theme.devices.tablet} {
    flex-direction: column;
    font-size: ${({ theme }) => theme.fontSize.sm};
    place-items: self-start;
  }
`;
export const CardTitleContentAux = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${({ theme }) => theme.devices.tablet} {
    padding: 10px;
  }
`;

export const CardIcon = styled.img`
  margin-left: auto;
  padding-right: 20px;
`;
export const CardBtn = styled.button`
  background-color: #905966;
  color: white;
  font-size: 30px;
  border-radius: 5px;
  width: 140px;
  cursor: pointer;
  border-style: unset;
`;

export const BtnContainer = styled.div`
  display: flex;
  align-self: center;
  margin-top: auto;
  background-color: #905966;
  color: white;
  cursor: pointer;

  @media ${({ theme }) => theme.devices.tablet} {
    padding: 20px;
    width: 97%;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;
export const Results = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
`;
export const ResultsList = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 15px;
`;

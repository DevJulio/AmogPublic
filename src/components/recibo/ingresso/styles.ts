import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.red.amog};
  color: white;
  width: 25%;
  padding: 5%;
  @media ${({ theme }) => theme.devices.tablet} {
    padding: 10%;
    width: 77%;
  }
`;
export const QRContainer = styled.div`
  display: flex;
  padding: 15%;
  padding: 5%;
  background-color: white;
  @media ${({ theme }) => theme.devices.tablet} {
    padding: 8%;
  }
`;
export const IMGContainer = styled.div`
  display: flex;
  padding-bottom: 40px;
`;
export const SpanContainer = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: center;
  text-align-last: center;
`;
export const Title = styled.span`
  color: ${({ theme }) => theme.colors.white.normal};
  font-family: ${({ theme }) => theme.fonts.secundary};
  font-size: 21px;
  align-self: center;
  padding-bottom: 25px;
  @media ${({ theme }) => theme.devices.tablet} {
    text-align-last: center;
  }
`;
export const TicketType = styled.span`
  color: ${({ theme }) => theme.colors.white.normal};
  font-family: ${({ theme }) => theme.fonts.secundary};
  font-size: 53px;
  align-self: center;
  @media ${({ theme }) => theme.devices.tablet} {
    text-align-last: center;
  }
`;
export const EventInfo = styled.span`
  color: ${({ theme }) => theme.colors.red.amog};
  font-family: ${({ theme }) => theme.fonts.secundary};
  font-size: 12px;
  align-self: center;
  @media ${({ theme }) => theme.devices.tablet} {
    text-align-last: center;
  }
`;

export const EventInfoWhite = styled.span`
  color: ${({ theme }) => theme.colors.white.normal};
  font-family: ${({ theme }) => theme.fonts.secundary};
  font-size: 20px;
  align-self: center;
  @media ${({ theme }) => theme.devices.tablet} {
    text-align-last: center;
  }
`;
export const EventInfoWarning = styled.span`
  color: #ffff00;
  font-family: ${({ theme }) => theme.fonts.secundary};
  font-size: 20px;
  align-self: center;
  @media ${({ theme }) => theme.devices.tablet} {
    text-align-last: center;
  }
`;
export const BtnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 40px;
`;

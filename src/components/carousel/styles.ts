import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  width: 70%;
  border-radius: 25px;
  @media ${({theme}) => theme.devices.tablet} {
    width: 100%;
  }
`;

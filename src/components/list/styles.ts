import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: ${({theme}) => theme.colors.white.normal};
  padding-top: 30px;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  width: 250px;
  border-radius: 10px;
  margin: 0px 10px 0px 10px;
  // border: solid;
  border-color: ${({theme}) => theme.colors.red.amog};
  border-width: 2px;
`;
export const Icons = styled.img`
  display: flex;
  margin: 15px;
  cursor: pointer;
`;
export const IconSpan = styled.span`
  text-align: left;
  place-self: center;
  font-size: 32px;
  font-family: ${({theme}) => theme.fonts.primary};
  cursor: pointer;

`;

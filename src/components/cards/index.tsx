import React from "react";
import { useHistory } from "react-router";
import * as Styled from "./styles";

interface ICard {
  img: any;
  name: string;
  route?: string;
}

const Cards: React.FC<ICard> = ({ img, name, route }) => {
  const history = useHistory();

  return (
    <Styled.Container>
      <Styled.CardContainer
        onClick={() => {
          history.push(`${route}`);
        }}
      >
        <Styled.Icons src={img} />
        <Styled.IconSpan>{name}</Styled.IconSpan>
      </Styled.CardContainer>
    </Styled.Container>
  );
};

 
export default Cards;

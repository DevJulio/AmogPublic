import React from "react";
import * as Styled from "./styles";

interface Props {
  Action: Function;
  Label: string;
}
const ButtonPrimary: React.FC<Props> = ({ Action, Label }) => {
  return (
    <>
      <Styled.MainContainer>
        <Styled.Btn
          onClick={() => {
            Action();
          }}
        >
          {Label}
        </Styled.Btn>
      </Styled.MainContainer>
    </>
  );
};

export default ButtonPrimary;

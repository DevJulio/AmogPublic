import React from "react";
import * as Styled from "./styles";
interface Props {
  setValue: Function;
  Label: string;
  placeholder?: string;
}
const Checkbox: React.FC<Props> = ({ setValue, Label, placeholder }) => {
  return (
    <>
      <Styled.MainContainer>
        {Label}
        <Styled.Input
          placeholder={placeholder}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </Styled.MainContainer>
    </>
  );
};

//D:\Projestos\Amog\site

export default Checkbox;

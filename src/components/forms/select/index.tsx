import React from "react";
import * as Styled from "./styles";
interface Props {
  setValue: Function;
  Label: string;
  Options: string[];
}
const Select: React.FC<Props> = ({ setValue, Label, Options }) => {
  let opt = Options.map((item, i) => {
    return (
      <option key={i} value={item}>
        {item}
      </option>
    );
  });

  return (
    <>
      <Styled.MainContainer>
        {Label}
        <Styled.Select
          name="select"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        >
          {opt}
        </Styled.Select>
      </Styled.MainContainer>
    </>
  );
};

//D:\Projestos\Amog\site

export default Select;

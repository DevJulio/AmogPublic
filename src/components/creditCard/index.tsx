import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

import Input from "../forms/inputs";
import InputMasked from "../forms/inputs/MaskedIpunt";
import * as Styled from "./styles";

type TFocus = "name" | "number" | "expiry" | "cvc";

interface ICard {
  numberP: string | number;
  nameP: string;
  expiryP: string | number;
  cvcP: string | number;
  focousP: TFocus;
}

const CreditCard: React.FC<ICard> = ({
  numberP,
  nameP,
  expiryP,
  cvcP,
  focousP,
}) => {
  const [number, setNumber] = useState<string | number>(numberP);
  const [name, setName] = useState<string>(nameP);
  const [expiry, setExpiry] = useState<string | number>(expiryP);
  const [cvc, setCvc] = useState<string | number>(cvcP);
  const [focous, setfocous] = useState<TFocus>(focousP);

  return (
    <>
      <Styled.Aux>
        <Styled.FormContainer
          onClick={() => {
            setfocous("name");
          }}
        >
          <Input
            Label={"Nome (assim como no cartão de crédito)"}
            setValue={setName}
          ></Input>
        </Styled.FormContainer>

        <Styled.FormContainer
          onClick={() => {
            setfocous("cvc");
          }}
        >
          <InputMasked
            setValue={setCvc}
            Label={"CVV"}
            mask={"999"}
          ></InputMasked>
        </Styled.FormContainer>
      </Styled.Aux>
      <Styled.Aux>
        <Styled.FormContainer
          onClick={() => {
            setfocous("expiry");
          }}
        >
          <InputMasked
            Label={"Data de validade"}
            placeholder="MM/AAAA"
            mask={"99/9999"}
            setValue={setExpiry}
          ></InputMasked>
        </Styled.FormContainer>

        <Styled.FormContainer
          onClick={() => {
            setfocous("number");
          }}
        >
          <InputMasked
            Label={"Número (assim como no cartão de crédito)"}
            mask={"9999 9999 9999 9999"}
            setValue={setNumber}
          ></InputMasked>
        </Styled.FormContainer>
      </Styled.Aux>
      <Styled.Aux>
        <div style={{ paddingTop: "40px" }}>
          <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            preview={true}
            focused={focous}
          />
        </div>
      </Styled.Aux>
    </>
  );
};

export default CreditCard;

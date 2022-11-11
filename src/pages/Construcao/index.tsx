/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

import Header from "../../components/header";
import * as Styled from "./styles";

import progress from "../../assets/icons/progress.png";

import Footer from "../../components/footer";

const Progress: React.FC = () => {
  return (
    <>
      <Header />

      <Styled.MainContainer>
        <Styled.Title>Em construção!</Styled.Title>
        <Styled.Icons src={progress} />
      </Styled.MainContainer>
      <Styled.Container>
        <Styled.InfoParagraph style={{ width: "88%", textAlignLast: "center" }}>
          <p>Em breve, mais informações!</p>
        </Styled.InfoParagraph>
      </Styled.Container>
      <div
        style={{
          position: "fixed",
          bottom: "0px",
          left: "0px",
          right: "0px",
          marginBottom: "0px",
        }}
      >
        <Footer />
      </div>
    </>
  );
};

export default Progress;

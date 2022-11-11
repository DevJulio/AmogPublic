import React from "react";
import * as Styled from "./styles";
import mule from "../../assets/icons/whiteMule.png";
import fb from "../../assets/icons/fb.png";
import insta from "../../assets/icons/insta.png";
import wpp from "../../assets/icons/wpp.png";

const Footer: React.FC = () => {
  // const scrollTo = (position: number) => {
  //   window.scrollTo({
  //     top: position,
  //     behavior: "smooth",
  //   });
  // };
  // onClick={() => {
  //   scrollTo(0);
  // }}
  return (
    <>
      <Styled.MainContainer>
        <Styled.LogoContainer>
          <Styled.Mulaimg src={mule} alt="" />
        </Styled.LogoContainer>
        <Styled.Title>AMOG</Styled.Title>
        <Styled.IconsContainer>
          <Styled.Icons src={fb} />
          <Styled.IconsAux
            onClick={() => {
              window.location.href =
                "https://www.instagram.com/encontromuladeirosipora/?utm_medium=copy_link";
            }}
            src={insta}
          />
          <Styled.Icons src={wpp} />
        </Styled.IconsContainer>
      </Styled.MainContainer>
      <Styled.FooterContact>
        <Styled.FooterSpan>
          Feito por:{" "}
          <a href="https://api.whatsapp.com/send?phone=5564996140938&text=Olá, preciso de um projeto">
            Júlio Rodrigues
          </a>
        </Styled.FooterSpan>
      </Styled.FooterContact>
    </>
  );
};

//D:\Projestos\Amog\site

export default Footer;

import React from "react";
import * as Styled from "./styles";
import userSm from "../../assets/icons/userSm.png";
import logoutSm from "../../assets/icons/logoutSm.png";
import logo from "../../assets/img/logo.png";
import { useHistory } from "react-router";

const Header: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <Styled.Container>
        <Styled.MainContainer
          onClick={() => {
            history.push("/");
          }}
        >
          <Styled.LogoContainer>
            <Styled.LogoImg src={logo} alt="" />
          </Styled.LogoContainer>
        </Styled.MainContainer>
        <Styled.IconsContainer>
          <Styled.Icons
            onClick={() => {
              history.push("/");
            }}
            src={userSm}
          />
          <Styled.Icons
            onClick={() => {
              history.push("/");
            }}
            src={logoutSm}
          />
        </Styled.IconsContainer>
      </Styled.Container>
    </>
  );
};

export default Header;

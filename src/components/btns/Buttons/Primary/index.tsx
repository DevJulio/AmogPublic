import React, { ReactNode } from "react";

import * as Styled from "./styles";

interface Props {
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
  children?: ReactNode;
  action?(): void;
  color?: "green" | "red" | "gray";
}

const ButtonPrimary: React.FC<Props> = props => {
  const {
    disabled = false,
    type = "button",
    children,
    action,
    color = "green"
  } = props;

  return (
    <Styled.Button
      disable={disabled}
      type={type}
      color={color}
      onClick={disabled ? () => null : action}
      className="button-primary"
    >
      {children}
    </Styled.Button>
  );
};

export default ButtonPrimary;

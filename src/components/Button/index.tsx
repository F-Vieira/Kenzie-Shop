import { ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface IButtonProps {
  children: ReactNode;
  type: any;
  onClick?: () => void;
}

const Button = ({ children, ...rest }: IButtonProps) => {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>;
};

export default Button;

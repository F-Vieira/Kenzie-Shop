import { InputContainer } from "./styles";

interface IInputProps {
  placeholder: string;
  type?: any;
}

const Input = ({ ...rest }: IInputProps) => {
  return <InputContainer {...rest} />;
};

export default Input;

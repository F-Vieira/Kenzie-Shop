import { Link } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";
import { FormSignupContainer } from "./styles";

const FormSignup = () => {
  return (
    <FormSignupContainer>
      <h2>Cadastro</h2>
      <Input placeholder="Nome de Usuário" />
      <Input placeholder="Seu melhor E-mail" />
      <Input placeholder="Senha" />
      <Button type="submit">Cadastrar</Button>
      <p>
        Já possui conta? Faça <Link to="/login">Login</Link>
      </p>
    </FormSignupContainer>
  );
};

export default FormSignup;

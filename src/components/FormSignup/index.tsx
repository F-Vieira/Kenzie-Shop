import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";
import { FormSignupContainer } from "./styles";
import { useAuth } from "../../providers/Auth";
import { ISignup } from "../../types/signup";

const FormSignup = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Campo Obrigatório"),
    email: yup.string().email("E-mail Inválido").required("Campo Obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignup>({
    resolver: yupResolver(schema),
  });

  const { auth, submitSignup } = useAuth();

  return (
    <FormSignupContainer onSubmit={handleSubmit(submitSignup)}>
      <h2>Cadastro</h2>
      <Input {...register("username")} placeholder="Nome de Usuário" />
      <Input {...register("email")} placeholder="Seu melhor E-mail" />
      <Input {...register("password")} placeholder="Senha" type="password" />
      <Button type="submit">Cadastrar</Button>
      <p>
        Já possui conta? Faça <Link to="/login">Login</Link>
      </p>
    </FormSignupContainer>
  );
};

export default FormSignup;

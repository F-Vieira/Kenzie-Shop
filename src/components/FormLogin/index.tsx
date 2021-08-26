import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, Redirect, useHistory } from "react-router-dom";

import Input from "../Input";
import Button from "../Button";

import { ILogin } from "../../types/login";
import { useAuth } from "../../providers/Auth";

import { FormLoginContainer } from "./styles";

const FormLogin = () => {
  const schema = yup.object().shape({
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
  } = useForm<ILogin>({
    resolver: yupResolver(schema),
  });

  const history = useHistory();
  const { submitLogin } = useAuth();

  const handleLogin = (data: ILogin) => {
    submitLogin(data, history);
  };

  return (
    <FormLoginContainer onSubmit={handleSubmit(handleLogin)}>
      <h2>Login</h2>
      <Input {...register("email")} placeholder="E-mail" />
      <Input {...register("password")} placeholder="Senha" type="password" />
      <Button type="submit">Login</Button>
      <p>
        É novo? <Link to="/signup">Cadastre-se</Link>
      </p>
    </FormLoginContainer>
  );
};

export default FormLogin;

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../Input";
import { FormLoginContainer } from "./styles";
import Button from "../Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
import { ILogin } from "../../types/login";

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

  const { submitLogin } = useAuth();

  return (
    <FormLoginContainer onSubmit={handleSubmit(submitLogin)}>
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

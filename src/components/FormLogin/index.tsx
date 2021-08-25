import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContainerFormLogin } from "./styles";

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
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitLogin = (data: any) => {
    console.log(data);
  };

  return (
    <ContainerFormLogin onSubmit={handleSubmit(submitLogin)}>
      <h2>Login</h2>
      <input {...register("email")} placeholder="E-mail" />
      <input {...register("password")} placeholder="Senha" type="password" />
      <button type="submit">Entrar</button>
    </ContainerFormLogin>
  );
};

export default FormLogin;

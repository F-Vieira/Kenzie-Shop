import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useHistory } from "react-router-dom";

import Button from "../Button";
import Input from "../Input";

import { useAuth } from "../../providers/Auth";
import { ISignup } from "../../types/signup";

import { FormSignupContainer } from "./styles";

const FormSignup = () => {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Campo Obrigatório")
      .min(3, "Minimo 3 letras"),
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

  const history = useHistory();

  const { handleSignup } = useAuth();

  const submitSignup = (data: ISignup) => {
    handleSignup(data, history);
  };

  return (
    <FormSignupContainer onSubmit={handleSubmit(submitSignup)}>
      <h2>Cadastro</h2>
      <div>
        <Input {...register("username")} placeholder="Nome de Usuário" />
        {errors.username && (
          <p className="form-error error--username">
            {errors.username?.message}
          </p>
        )}
      </div>
      <div>
        <Input {...register("email")} placeholder="Seu melhor E-mail" />
        {errors.email && (
          <p className="form-error error--email">{errors.email?.message}</p>
        )}
      </div>
      <div>
        <Input {...register("password")} placeholder="Senha" type="password" />
        {errors.password && (
          <p className="form-error error--password">
            {errors.password?.message}
          </p>
        )}
      </div>
      <Button type="submit">Cadastrar</Button>
      <p>
        Já possui conta? Faça <Link to="/login">Login</Link>
      </p>
    </FormSignupContainer>
  );
};

export default FormSignup;

import { createContext, useState, useContext, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import { ILogin } from "../../types/login";
import { ISignup } from "../../types/signup";

interface IAuthProviderProps {
  children: ReactNode;
}

interface IAuthProviderData {
  auth: string;
  submitLogin: (data: ILogin) => void;
  submitSignup: (data: ISignup) => void;
}

const AuthContext = createContext<IAuthProviderData>({} as IAuthProviderData);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [auth, setAuth] = useState(
    localStorage.getItem("@kenzieShop: token") || ""
  );
  const history = useHistory();

  const submitLogin = (data: ILogin) => {
    api
      .post("/login", data)
      .then((resp) => {
        setAuth(resp.data.accessToken);
        localStorage.setItem("@kenzieShop: token", resp.data.accessToken);

        console.log(resp);
        toast.info("Seja Bem Vindo!");
        history.push("/dashboard");
      })
      .catch(() => toast.error("email ou senha incorreto! 😕😕"));
  };

  const submitSignup = (data: ISignup) => {
    api
      .post("/register", data)
      .then(() => {
        toast.success("Cadastro realizado com sucesso 🥳🥳");
      })
      .catch(() => toast.error("Erro ao cadastrar 😥😥"));
  };

  return (
    <AuthContext.Provider value={{ auth, submitLogin, submitSignup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

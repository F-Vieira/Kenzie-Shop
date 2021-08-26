import { createContext, useState, useContext, ReactNode } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { ILogin } from "../../types/login";
import { ISignup } from "../../types/signup";
import { History } from "history";
import { useEffect } from "react";
interface IAuthProviderProps {
  children: ReactNode;
}

interface IAuthProviderData {
  token: string;
  auth: boolean;
  submitLogin: (data: ILogin, history: History) => void;
  submitSignup: (data: ISignup) => void;
  handleLogout: () => void;
}

const AuthContext = createContext<IAuthProviderData>({} as IAuthProviderData);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState(
    localStorage.getItem("@kenzieShop: token") || ""
  );

  useEffect(() => {
    if (token) {
      return setAuth(true);
    }
  }, [token]);

  const submitLogin = (data: ILogin, history: History) => {
    api
      .post("/login", data)
      .then((resp) => {
        setToken(resp.data.accessToken);

        localStorage.setItem("@kenzieShop: token", resp.data.accessToken);

        toast.info("Seja Bem Vindo!");
        return history.push("/cart");
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

  const handleLogout = () => {
    localStorage.clear();
    setAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{ auth, token, submitSignup, submitLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { toast } from "react-toastify";
import { History } from "history";

import api from "../../services/api";
import { ILogin } from "../../types/login";
import { ISignup } from "../../types/signup";
interface IAuthProviderProps {
  children: ReactNode;
}

interface IAuthProviderData {
  token: string;
  auth: boolean;
  handleLogin: (data: ILogin, history: History) => void;
  handleSignup: (data: ISignup, history: History) => void;
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

  const handleLogin = (data: ILogin, history: History) => {
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

  const handleSignup = (data: ISignup, history: History) => {
    api
      .post("/register", data)
      .then(() => {
        toast.success("Cadastro realizado com sucesso 🥳🥳");
        return history.push("/login");
      })
      .catch(() => toast.error("Erro ao cadastrar 😥😥"));
  };

  const handleLogout = () => {
    localStorage.clear();
    setAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{ auth, token, handleSignup, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

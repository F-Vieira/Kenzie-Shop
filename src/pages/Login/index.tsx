import { Redirect } from "react-router-dom";
import FormLogin from "../../components/FormLogin";
import { useAuth } from "../../providers/Auth";
import { Image, LoginContainer } from "./styles";
import LoginImage from "../../assets/img_login.svg";

const Login = () => {
  const { auth } = useAuth();

  if (auth) {
    return <Redirect to="/cart" />;
  }

  return (
    <LoginContainer>
      <FormLogin />
      <Image src={LoginImage} alt="Login_Image" />
    </LoginContainer>
  );
};

export default Login;

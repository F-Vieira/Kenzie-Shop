import { Redirect } from "react-router-dom";

import FormLogin from "../../components/FormLogin";
import MotionAnimation from "../../components/MotionAnimation";

import { useAuth } from "../../providers/Auth";
import LoginImage from "../../assets/img_login.svg";

import { Image, LoginContainer } from "./styles";

const Login = () => {
  const { auth } = useAuth();

  if (auth) {
    return <Redirect to="/cart" />;
  }

  return (
    <MotionAnimation>
      <LoginContainer>
        <FormLogin />
        <Image src={LoginImage} alt="Login_Image" />
      </LoginContainer>
    </MotionAnimation>
  );
};

export default Login;

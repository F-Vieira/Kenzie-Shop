import { Redirect } from "react-router-dom";
import FormLogin from "../../components/FormLogin";
import { useAuth } from "../../providers/Auth";

const Login = () => {
  const { auth } = useAuth();

  if (auth !== "") {
    <Redirect to="/dashboard" />;
  }

  return (
    <>
      <FormLogin />
    </>
  );
};

export default Login;

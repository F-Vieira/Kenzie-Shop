import { Redirect } from "react-router-dom";
import FormLogin from "../../components/FormLogin";
import { useAuth } from "../../providers/Auth";

const Login = () => {
  const { auth } = useAuth();

  if (auth) {
    return <Redirect to="/cart" />;
  }

  return (
    <>
      <FormLogin />
    </>
  );
};

export default Login;

import { Redirect } from "react-router-dom";
import FormSignup from "../../components/FormSignup";
import { useAuth } from "../../providers/Auth";

const Signup = () => {
  const { auth } = useAuth();

  if (auth) {
    return <Redirect to="/cart" />;
  }

  return (
    <>
      <FormSignup />
    </>
  );
};

export default Signup;

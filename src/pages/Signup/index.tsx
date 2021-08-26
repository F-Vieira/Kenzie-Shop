import { Redirect } from "react-router-dom";
import FormSignup from "../../components/FormSignup";
import { useAuth } from "../../providers/Auth";
import { Image, SignupContainer } from "./styles";
import SignupImage from "../../assets/img_signup.svg";

const Signup = () => {
  const { auth } = useAuth();

  if (auth) {
    return <Redirect to="/cart" />;
  }

  return (
    <SignupContainer>
      <FormSignup />
      <Image src={SignupImage} alt="Signup_Image" />
    </SignupContainer>
  );
};

export default Signup;

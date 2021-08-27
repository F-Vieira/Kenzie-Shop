import { Redirect } from "react-router-dom";

import FormSignup from "../../components/FormSignup";
import MotionAnimation from "../../components/MotionAnimation";

import { useAuth } from "../../providers/Auth";
import SignupImage from "../../assets/img_signup.svg";

import { Image, SignupContainer } from "./styles";

const Signup = () => {
  const { auth } = useAuth();

  if (auth) {
    return <Redirect to="/cart" />;
  }

  return (
    <MotionAnimation>
      <SignupContainer>
        <FormSignup />
        <Image src={SignupImage} alt="Signup_Image" />
      </SignupContainer>
    </MotionAnimation>
  );
};

export default Signup;

import styled from "styled-components";
import wave from "../../assets/wave.svg";

export const LoginContainer = styled.main`
  background: url(${wave}) no-repeat var(--light-blue);
  background-position: bottom;

  min-height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;

  > form {
    transform: translateY(-10px);
  }

  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
`;

export const Image = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    display: initial;
    width: 50vw;
    max-width: 520px;
  }
`;

import styled from "styled-components";

export const FormLoginContainer = styled.form`
  background-color: var(--snow-blue);
  color: var(--dark-blue);
  box-shadow: 0px 0px 20px 5px #0c1839;

  border-radius: 20px;
  width: 230px;
  height: 280px;

  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  position: relative;

  h2 {
    letter-spacing: 3px;
  }

  p {
    font-size: 0.8rem;
  }

  .form-error {
    background: var(--red);
    color: var(--white);

    width: 120px;
    max-width: 134px;
    height: 30px;
    font-size: 10px;
    border-radius: 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    left: 140px;

    z-index: 1;

    &::before {
      content: "";
      background: var(--red);
      width: 20px;
      height: 20px;

      position: absolute;
      left: 20px;
      top: 11px;

      transform: rotate(45deg);
      z-index: -1;
    }
  }

  .error--email {
    top: 41px;
  }
  .error--password {
    top: 93px;
  }
  a {
    color: var(--white);
    &:focus,
    &:hover {
      text-decoration: underline;
    }
  }
`;

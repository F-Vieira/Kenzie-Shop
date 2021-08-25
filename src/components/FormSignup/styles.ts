import styled from "styled-components";

export const FormSignupContainer = styled.form`
  width: 300px;
  height: 350px;
  padding: 20px;

  background-color: var(--snow-blue);
  color: var(--dark-blue);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h2 {
    letter-spacing: 3px;
  }

  p {
    font-size: 0.8rem;
  }

  a {
    color: var(--white);
    &:focus,
    &:hover {
      text-decoration: underline;
    }
  }
`;

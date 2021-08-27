import styled from "styled-components";

export const ButtonContainer = styled.button`
  font-family: var(--font-text);
  background-color: var(--light-blue);
  color: var(--dark-blue);

  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 2px;

  padding: 10px 20px;

  max-height: 40px;
  border-radius: 15px;
  border: 2px solid transparent;

  &:focus,
  &:hover {
    border-color: var(--blue);
  }
`;

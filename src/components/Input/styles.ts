import styled from "styled-components";

export const InputContainer = styled.input`
  background-color: var(--blue);
  color: var(--snow-blue);
  border-radius: 15px;
  padding: 7px 0;
  padding-left: 15px;
  border: 2px solid transparent;

  &::placeholder {
    color: var(--snow-blue);
  }

  &:focus {
    border: 2px solid var(--marine-blue);
  }
`;

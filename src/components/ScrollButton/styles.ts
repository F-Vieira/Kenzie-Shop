import styled from "styled-components";

interface IScrollButtonStyledProps {
  show: boolean;
}

export const ScrollButtonContainer = styled.div<IScrollButtonStyledProps>`
  display: ${(props) => (props.show ? "inline" : "none")};

  position: fixed;
  width: 100%;
  text-align: center;
  font-size: 3rem;

  bottom: 20px;
  z-index: 1;
  color: var(--dark-blue);

  svg {
    cursor: pointer;
  }
`;

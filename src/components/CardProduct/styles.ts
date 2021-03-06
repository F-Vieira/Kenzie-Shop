import styled from "styled-components";

interface ICardProductStyledProps {
  show: boolean;
}

export const CardProductContainer = styled.div<ICardProductStyledProps>`
  width: 200px;
  height: 455px;
  max-width: 250px;
  max-height: 455px;

  border-radius: 30px;

  border: 4px groove var(--light-blue);
  background-color: #fff;
  color: var(--dark-blue);
  box-shadow: 0px 0px 20px 5px #0c1839;

  padding: 15px;
  text-align: center;

  margin: 20px 10px;

  transition-duration: 0.5s;
  transform-origin: 0% 0%;

  &:hover {
    transform: scale(1.03);
    transition: transform 0.3s linear;
  }

  .product-name {
    height: 40px;
  }

  .product-description {
    margin-top: 15px;
    position: relative;

    span {
      display: ${(props) => (props.show ? "initial" : "none")};

      position: absolute;
      top: -55px;
      left: -9px;

      background-color: var(--dark-blue);
      color: var(--white);

      border-radius: 15px;
      padding: 10px;
      font-size: 12px;
      font-weight: bolder;
    }
    svg {
      color: var(--marine-blue);
      cursor: pointer;
    }
  }

  .product-price {
    border-top: 2px solid var(--blue);
    margin: 10px 0 15px;
    padding-top: 10px;
  }

  button {
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    svg {
      font-size: 20px;
    }
  }
`;

export const ProductImage = styled.img`
  width: 120px;
`;

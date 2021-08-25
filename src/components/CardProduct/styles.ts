import styled from "styled-components";

interface ICardProductStyledProps {
  show: boolean;
}

export const CardProductContainer = styled.div<ICardProductStyledProps>`
  width: 250px;
  border: 4px groove var(--light-blue);
  border-radius: 30px;
  box-shadow: 0px 0px 20px 5px #0c1839;
  padding: 15px;
  color: var(--dark-blue);
  text-align: center;

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
  width: 200px;
`;

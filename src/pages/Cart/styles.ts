import styled from "styled-components";

export const CartContainer = styled.main`
  background-color: var(--light-blue);
  min-height: calc(100vh - 70px);

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 180px;
  justify-items: center;

  padding-bottom: 5rem;
`;
export const CartItems = styled.section`
  @media screen and (min-width: 768px) {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const CartEmpty = styled.section`
  width: 100%;

  color: var(--dark-blue);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > svg {
    font-size: 10rem;
    margin-bottom: 20px;
  }

  > p {
    font-size: 2rem;
  }
`;

export const TotalItems = styled.section`
  grid-row: 1/2;

  background-color: var(--white);
  color: var(--dark-blue);
  box-shadow: 0px 0px 20px 5px #0c1839;

  text-align: center;
  width: 280px;
  max-width: 280px;
  max-height: 150px;

  margin-top: 20px;
  padding: 10px 0;
  border-radius: 20px;

  .total-amount {
    margin: 8px 0;
  }

  .total--value {
    color: var(--marine-blue);
  }

  button {
    margin: 10px 0;
  }
`;

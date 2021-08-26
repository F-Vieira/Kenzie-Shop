import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--blue);
  height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px 0 10px;

  .header_logo {
    font-family: var(--font-title);
    font-weight: 300;
    font-size: 1.5rem;
    letter-spacing: 3px;
  }
  .header-cart-amount {
    background-color: var(--white);
    color: var(--dark-blue);

    position: absolute;
    top: 14px;
    right: 100px;

    width: 15px;
    height: 15px;
    border-radius: 50%;

    font-size: 12px;
    font-weight: bolder;

    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px) {
      top: 35px;
      right: 200px;
    }
  }
  a {
    color: var(--light-blue);
  }

  @media screen and (min-width: 768px) {
    .header_logo {
      font-size: 2.2rem;
      letter-spacing: 5px;
    }
  }
`;

export const Navigator = styled.nav`
  ul {
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    li {
      a {
        font-size: 0.8rem;
        svg {
          margin-right: 5px;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    ul {
      width: 200px;
      flex-direction: row;
      align-items: center;
      li {
        a {
          font-size: 1rem;
        }
      }
    }
  }
`;

import { Link } from "react-router-dom";
import { ImEnter, ImCart, ImExit } from "react-icons/im";
import { HeaderContainer, Navigator } from "./styles";
import { useAuth } from "../../providers/Auth";
import { useProducts } from "../../providers/Products";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const { auth, handleLogout } = useAuth();
  const { cart } = useProducts();

  const [amountInCart, setAmountInCart] = useState<number>(cart.length);

  useEffect(() => {
    setAmountInCart(cart.length);
  }, [cart]);

  console.log(amountInCart);
  return (
    <HeaderContainer>
      <h1 className="header_logo">
        <Link to="/">Kenzie Shop</Link>
      </h1>
      <Navigator>
        <ul>
          <li>
            <Link to="/cart">
              <ImCart />
              {amountInCart > 0 && (
                <span className="header-cart-amount">{amountInCart}</span>
              )}
              Carrinho
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={handleLogout}>
              {auth ? (
                <>
                  <ImExit />
                  Sair
                </>
              ) : (
                <>
                  <ImEnter />
                  Entrar
                </>
              )}
            </Link>
          </li>
        </ul>
      </Navigator>
    </HeaderContainer>
  );
};

export default Header;

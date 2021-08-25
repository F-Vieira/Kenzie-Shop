import { Link } from "react-router-dom";
import { ImEnter, ImCart } from "react-icons/im";
import { HeaderContainer, Navigator } from "./styles";

const Header = () => {
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
              Carrinho
            </Link>
          </li>
          <li>
            <Link to="/login">
              <ImEnter />
              Entrar
            </Link>
          </li>
        </ul>
      </Navigator>
    </HeaderContainer>
  );
};

export default Header;

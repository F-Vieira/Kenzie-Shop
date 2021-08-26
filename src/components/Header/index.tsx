import { Link } from "react-router-dom";
import { ImEnter, ImCart, ImExit } from "react-icons/im";
import { HeaderContainer, Navigator } from "./styles";
import { useAuth } from "../../providers/Auth";

const Header = () => {
  const { auth, handleLogout } = useAuth();

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

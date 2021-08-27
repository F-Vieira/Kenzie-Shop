import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import CardProduct from "../../components/CardProduct";
import { useAuth } from "../../providers/Auth";
import { useProducts } from "../../providers/Products";
import { CartContainer, CartEmpty, CartItems, TotalItems } from "./styles";
import { MdRemoveShoppingCart } from "react-icons/md";
import MotionAnimation from "../../components/MotionAnimation";

const Cart = () => {
  const { cart, finishCart } = useProducts();
  const { auth } = useAuth();
  const history = useHistory();

  const totalValue = cart.reduce((acc, product) => product.price + acc, 0);

  const handleBuy = () => {
    if (!auth && cart.length > 0) {
      toast.info("É preciso estar logado");
      return history.push("/login");
    } else if (cart.length > 0) {
      finishCart();
      toast.success("Compra realizada com sucesso 🎉🎉");
    } else {
      return history.push("/");
    }
  };

  return (
    <MotionAnimation>
      <CartContainer>
        {cart.length > 0 ? (
          <CartItems>
            {cart.map((product) => (
              <CardProduct key={product.id} product={product} inCart />
            ))}
          </CartItems>
        ) : (
          <CartEmpty>
            <MdRemoveShoppingCart />
            <p>Carrinho vazio</p>
          </CartEmpty>
        )}
        <TotalItems>
          <h3 className="total-title">Total de Produtos</h3>
          <p className="total-amount">
            Quantidade: <span className="total--value">{cart.length}</span>
          </p>
          <p className="total-price">
            Valor Total: <span className="total--value">{totalValue}</span>
          </p>
          <Button type="button" onClick={handleBuy}>
            Comprar
          </Button>
        </TotalItems>
      </CartContainer>
    </MotionAnimation>
  );
};

export default Cart;

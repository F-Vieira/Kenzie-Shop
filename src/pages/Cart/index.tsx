import CardProduct from "../../components/CardProduct";
import { useProducts } from "../../providers/Products";
import { CartContainer } from "./styles";

const Cart = () => {
  const { cart } = useProducts();

  return (
    <CartContainer>
      {cart.map((product) => (
        <CardProduct key={product.id} product={product} inCart />
      ))}
    </CartContainer>
  );
};

export default Cart;

import CardProduct from "../../components/CardProduct";
import MotionAnimation from "../../components/MotionAnimation";
import { useProducts } from "../../providers/Products";
import { HomeContainer } from "./styles";

const Home = () => {
  const { products } = useProducts();

  return (
    <MotionAnimation>
      <HomeContainer>
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </HomeContainer>
    </MotionAnimation>
  );
};

export default Home;

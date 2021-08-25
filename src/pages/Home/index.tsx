import CardProduct from "../../components/CardProduct";
import { useProducts } from "../../providers/Products";
import { HomeContainer } from "./styles";

const Home = () => {
  const { products } = useProducts();

  return (
    <HomeContainer>
      {products.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </HomeContainer>
  );
};

export default Home;

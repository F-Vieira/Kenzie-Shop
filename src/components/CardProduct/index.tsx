import { useProducts } from "../../providers/Products";
import Button from "../Button";
import { CardProductContainer, ProductImage } from "./styles";
import { BsInfoCircle, BsPlusCircle } from "react-icons/bs";
import { useState } from "react";
const CardProduct = () => {
  const { products } = useProducts();
  const [showDescription, setShowDescription] = useState<boolean>(false);

  return (
    <CardProductContainer show={showDescription}>
      <ProductImage src={products[0]?.image_url} alt={products[0]?.name} />

      <h3 className="product-name">{products[0]?.name}</h3>
      <p className="product-description">
        <BsInfoCircle
          onMouseEnter={() => setShowDescription(true)}
          onMouseLeave={() => setShowDescription(false)}
        />
        <span>{products[0]?.description}</span>
      </p>

      <p className="product-price">{products[0]?.price}</p>

      <Button type="button">
        <BsPlusCircle /> Carrinho
      </Button>
    </CardProductContainer>
  );
};

export default CardProduct;

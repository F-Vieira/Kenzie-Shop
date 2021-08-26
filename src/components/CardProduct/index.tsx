import { useState } from "react";
import { BsInfoCircle, BsPlusCircle, BsTrashFill } from "react-icons/bs";

import Button from "../Button";
import { IProduct } from "../../types/products";

import { CardProductContainer, ProductImage } from "./styles";
import { useProducts } from "../../providers/Products";

interface ICardProps {
  product: IProduct;
  inCart?: boolean;
}

const CardProduct = ({ product, inCart = false }: ICardProps) => {
  const { image_url, name, description, price } = product;
  const { addToCart, removeFromCart } = useProducts();

  const [showDescription, setShowDescription] = useState<boolean>(false);

  return (
    <CardProductContainer show={showDescription}>
      <ProductImage src={image_url} alt={name} />

      <h3 className="product-name">{name}</h3>
      <p className="product-description">
        <BsInfoCircle
          onMouseEnter={() => setShowDescription(true)}
          onMouseLeave={() => setShowDescription(false)}
        />
        <span>{description}</span>
      </p>

      <p className="product-price">{price}</p>

      {inCart ? (
        <Button type="button" onClick={() => removeFromCart(product)}>
          <BsTrashFill /> Remover
        </Button>
      ) : (
        <Button type="button" onClick={() => addToCart(product)}>
          <BsPlusCircle /> Carrinho
        </Button>
      )}
    </CardProductContainer>
  );
};

export default CardProduct;

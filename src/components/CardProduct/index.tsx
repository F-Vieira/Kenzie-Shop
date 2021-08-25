import { useState } from "react";
import { BsInfoCircle, BsPlusCircle } from "react-icons/bs";

import Button from "../Button";
import { IProduct } from "../../types/products";

import { CardProductContainer, ProductImage } from "./styles";

const CardProduct = ({ product }: any) => {
  const { image_url, name, description, price } = product;

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

      <Button type="button">
        <BsPlusCircle /> Carrinho
      </Button>
    </CardProductContainer>
  );
};

export default CardProduct;

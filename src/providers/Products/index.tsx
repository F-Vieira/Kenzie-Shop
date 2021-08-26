import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { toast } from "react-toastify";

import api from "../../services/api";

import { IProduct } from "../../types/products";

interface IProductsProviderProps {
  children: ReactNode;
}

interface IProductsProviderData {
  products: IProduct[];
  cart: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
  finishCart: () => void;
}

const ProductsContext = createContext<IProductsProviderData>(
  {} as IProductsProviderData
);

export const ProductsProvider = ({ children }: IProductsProviderProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const local = localStorage.getItem("@kenzieShop: cart") || "[]";

  const [cart, setCart] = useState<IProduct[]>(JSON.parse(local));

  useEffect(() => {
    api
      .get("/products")
      .then((resp) => setProducts(resp.data))
      .catch(() => console.log("Algo de errado não está certo =("));
  }, []);

  const addToCart = (product: IProduct) => {
    const inCart = cart.some((item) => item.id === product.id);

    if (!inCart) {
      cart.push(product);
      localStorage.setItem("@kenzieShop: cart", JSON.stringify(cart));
      toast.success("Produto adicionado ao carrinho");
    } else {
      toast.warning("Produto já adicionado!");
    }
  };

  const removeFromCart = (product: IProduct) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    localStorage.setItem("@kenzieShop: cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const finishCart = () => {
    setCart([]);
    localStorage.setItem("@kenzieShop: cart", JSON.stringify([]));
  };

  return (
    <ProductsContext.Provider
      value={{ products, cart, addToCart, removeFromCart, finishCart }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);

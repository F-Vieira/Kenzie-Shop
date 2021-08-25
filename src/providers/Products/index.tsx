import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import api from "../../services/api";

interface IProduct {
  id: number;
  name: string;
  image_url: string;
  price: number;
  description: string;
}

interface IProductsProviderProps {
  children: ReactNode;
}

interface IProductsProviderData {
  products: IProduct[];
}

const ProductsContext = createContext<IProductsProviderData>(
  {} as IProductsProviderData
);

export const ProductsProvider = ({ children }: IProductsProviderProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    api
      .get("/products")
      .then((resp) => setProducts(resp.data))
      .catch(() => console.log("Algo de errado não está certo =("));
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);

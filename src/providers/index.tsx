import { ReactNode } from "react";
import { ProductsProvider } from "./Products";

interface IProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: IProvidersProps) => {
  return <ProductsProvider>{children}</ProductsProvider>;
};

export default Providers;

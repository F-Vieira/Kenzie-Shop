import { ReactNode } from "react";

import { AuthProvider } from "./Auth";
import { ProductsProvider } from "./Products";

interface IProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: IProvidersProps) => {
  return (
    <AuthProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </AuthProvider>
  );
};

export default Providers;

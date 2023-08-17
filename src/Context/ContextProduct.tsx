import { ReactNode, createContext, useState } from "react";

type ProdutctTypesProps = {
  setTypeProdutct: (setState: string) => void;
  typeProduct: string;
};

const initialValue = {
  setTypeProdutct: () => {},
  typeProduct: "lip_liner",
};

interface ChildProps {
  children: ReactNode;
}

export const ProductContext = createContext<ProdutctTypesProps>(initialValue);

export function ProductContextProvider({ children }: ChildProps) {
  const [typeProduct, setTypeProdutct] = useState<string>(
    initialValue.typeProduct
  );

  return (
    <ProductContext.Provider value={{ typeProduct, setTypeProdutct }}>
      {children}
    </ProductContext.Provider>
  );
}

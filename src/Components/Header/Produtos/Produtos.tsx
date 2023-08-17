import { ProductContext } from "../../../Context/ContextProduct";
import { useFetch } from "../../../Ultils/Hooks/useFetch";
import { useContext } from "react";

export const Produtos = () => {
  const { data, isError, isLoading, error } = useFetch();

  const { setTypeProdutct } = useContext(ProductContext);

  const typeProductFilter = data
    ?.map((product) => product.product_type)
    .filter((product, index, self) => self.indexOf(product) === index);

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <>{error}</>;
  }

  return (
    <>
      {typeProductFilter?.map((typeProductFiltro) => (
        <p
          key={typeProductFiltro}
          onClick={() => {
            setTypeProdutct(typeProductFiltro);
          }}
        >
          {typeProductFiltro === "lip_liner"
            ? "Delineador de lábios"
            : typeProductFiltro === "lipstick"
            ? "Batom"
            : typeProductFiltro === "foundation"
            ? "Base"
            : typeProductFiltro === "eyeliner"
            ? "Delineador"
            : typeProductFiltro === "eyeshadow"
            ? "Sombra"
            : typeProductFiltro === "blush"
            ? "Blush"
            : typeProductFiltro === "bronzer"
            ? "Bronzer"
            : typeProductFiltro === "mascara"
            ? "rímel"
            : typeProductFiltro === "eyebrow"
            ? "Lápis de sobrancelha"
            : typeProductFiltro === "nail_polish"
            ? "Esmalte"
            : typeProductFiltro}
        </p>
      ))}
    </>
  );
};

import { useFetch } from "../../../Ultils/Hooks/useFetch";

export const Produtos = () => {
  const { data, isError, isLoading, error } = useFetch();

  const typeProduct = data
    ?.map((product) => product.product_type)
    .filter((product, index, self) => self.indexOf(product) === index);
  console.log(typeProduct);

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <>{error}</>;
  }

  return (
    <>
      {typeProduct?.map((typeProduct) => (
        <p key={typeProduct}>
          {typeProduct === "lip_liner"
            ? "Delineador de lábios"
            : typeProduct === "lipstick"
            ? "Batom"
            : typeProduct === "foundation"
            ? "Base"
            : typeProduct === "eyeliner"
            ? "Delineador"
            : typeProduct === "eyeshadow"
            ? "Sombra"
            : typeProduct === "blush"
            ? "Blush"
            : typeProduct === "bronzer"
            ? "Bronzer"
            : typeProduct === "mascara"
            ? "rímel"
            : typeProduct === "eyebrow"
            ? "Lápis de sobrancelha"
            : typeProduct === "nail_polish"
            ? "Esmalte"
            : typeProduct}
        </p>
      ))}
    </>
  );
};

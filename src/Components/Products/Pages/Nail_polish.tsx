import { VscHeart } from "react-icons/vsc";
import { useFetchNail_polish } from "../../../Ultils/Hooks/useFetch";
import { SectionStyled } from "../Products.style";

export const Nail_polish = () => {
  const { data, isError, isLoading, error } = useFetchNail_polish();

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <>{error}</>;
  }

  return (
    <SectionStyled>
      {data?.map((product) => (
        <div key={product.id}>
          <img src={`${product.api_featured_image}`} alt="img" />
          <main>
            <h1>{product.name}</h1>
            <VscHeart />
          </main>
          <p>{product.brand} </p>
          <span>
            {Number(product.price).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <button>Adicionar ao carrinho</button>
        </div>
      ))}
    </SectionStyled>
  );
};

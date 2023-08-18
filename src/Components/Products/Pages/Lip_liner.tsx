
/* import { VscHeartFilled } from "react-icons/vsc"; */
import { VscHeart } from "react-icons/vsc";
import { useFetchLip_liner } from "../../../Ultils/Hooks/useFetch";
import { SectionStyled } from "../Products.style";

export const Lip_liner = () => {
  const { data, isError, isLoading, error } = useFetchLip_liner();

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

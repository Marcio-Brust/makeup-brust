import { VscHeart } from "react-icons/vsc";
import { SectionStyled } from "../Products.style";
import { useFetchEyebrow } from "../../../Ultils/Hooks/useFetch";
import { useContext } from "react";
import { ProductContext } from "../../../Context/ContextProduct";
import Logo from "../../../assets/Brust Makeupbgwhite.png";

export const Eyebrow = () => {
  const { data, isError, isLoading, error } = useFetchEyebrow();
  
  const { typeProduct } = useContext(ProductContext);

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <>{error}</>;
  }

  return (
    <>
    <div
      style={{ display: "flex", alignItems: "center", margin: "30px 20px" }}
    >
      <img
        style={{ width: "200px", marginLeft: "30px" }}
        src={Logo}
        alt="img"
      />
      <h1
        style={{
          background: "#fff",
          textAlign: "center",
          marginLeft: "30%",
        }}
      >
        {typeProduct ? "Lápis de sobrancelha" : typeProduct}
      </h1>
    </div>
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
  </>
  );
};

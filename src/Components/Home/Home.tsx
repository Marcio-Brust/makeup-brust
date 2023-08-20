import React from "react";
import { HomeStyled } from "./Home.style";
import { useFetch } from "../../Ultils/Hooks/useFetch";
import { VscHeart } from "react-icons/vsc";
import Logo from "../../assets/Brust Makeupbgwhite.png";

export const Home = () => {
  const { data, isLoading, isError, error } = useFetch();



  

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
          Todos produtos
        </h1>
      </div>
      <HomeStyled>
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
      </HomeStyled>
    </>
  );
};

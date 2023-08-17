import { ProductContext } from "../../Context/ContextProduct";
import { useFetchTypes } from "../../Ultils/Hooks/useFetch";
import { useContext } from "react";

export const Porduto = () => {
  const { typeProduct } = useContext(ProductContext);

  const { data, isError, isLoading, error } = useFetchTypes({ typeProduct });

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <>{error}</>;
  }

  return (
    <section>
      {data?.map((product) => (
        <img key={product.id} src={product.image_link} alt="img" />
      ))}
    </section>
  );
};

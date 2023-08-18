import { useFetchBlush } from "../../Ultils/Hooks/useFetch";
import { SectionStyled } from "./Style/Style";

export const Blush = () => {
  const { data, isError, isLoading, error } = useFetchBlush();

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <>{error}</>;
  }

  return (
    <SectionStyled>
      {data?.map((product) => (
        <div>
          <img
            key={product.id}
            src={`${product.api_featured_image}`}
            alt="img"
          />
        </div>
      ))}
    </SectionStyled>
  );
};

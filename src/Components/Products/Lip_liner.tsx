import { useFetchLip_liner } from "../../Ultils/Hooks/useFetch";
import { SectionStyled } from "./Style/Style";
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

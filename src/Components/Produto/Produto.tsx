import { useFetch } from "../../Ultils/Hooks/useFetch";

export const Porduto = () => {
  const { data, isError, isLoading, error } = useFetch();

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

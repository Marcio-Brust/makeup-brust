import axios from "axios";
import { useQuery } from "react-query";
import { useEffect } from "react";

interface colorsProps {
  hex_value: string;
  colour_name: string;
}
export interface MakeupProps {
  id: number;
  name: string;
  price: string;
  image_link: string;
  pi_featured_image: string;
  description: string;
  rating: number | null;
  category: string | null;
  product_type: string;
  tag_list: string[];
  product_colors: colorsProps[];
}

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products.json";

//Criar um useContext para gerenciar o estado de tipo da pagina produto!!

export const useFetch = () => {
  const fetchProduct = async (): Promise<MakeupProps[]> => {
    const { data } = await axios.get(BASE_URL);
    return data;
  };

  return useQuery("product", fetchProduct, {
    refetchOnWindowFocus: false,
  });
};

export const useFetchTypes = ({ typeProduct }: { typeProduct: string }) => {
  useEffect(() => {
    console.log(typeProduct);
  }, [typeProduct]);

  const fetchProductTypes = async (): Promise<MakeupProps[]> => {
    const { data } = await axios.get(`${BASE_URL}?product_type=${typeProduct}`);
    return data;
  };

  return useQuery("productTypes", fetchProductTypes, {
    refetchOnWindowFocus: false,
  });
};

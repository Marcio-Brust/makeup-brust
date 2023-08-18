import axios from "axios";
import { useQuery } from "react-query";

interface colorsProps {
  hex_value: string;
  colour_name: string;
}
export interface MakeupProps {
  id: number;
  brand: string;
  name: string;
  price: string;
  price_sign: string;
  image_link: string;
  api_featured_image: string;
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

export const useFetchLip_liner = () => {
  const fetchProductTypes = async (): Promise<MakeupProps[]> => {
    const { data } = await axios.get(`${BASE_URL}?product_type=lip_liner`);
    return data;
  };

  return useQuery("productLip_liner", fetchProductTypes, {
    refetchOnWindowFocus: false,
  });
};

export const useFetchLipstick = () => {
  const fetchProductTypes = async (): Promise<MakeupProps[]> => {
    const { data } = await axios.get(`${BASE_URL}?product_type=lipstick`);
    return data;
  };

  return useQuery("productLipstick", fetchProductTypes, {
    refetchOnWindowFocus: false,
  });
};

export const useFetchFoundation = () => {
  const fetchProductTypes = async (): Promise<MakeupProps[]> => {
    const { data } = await axios.get(`${BASE_URL}?product_type=foundation`);
    return data;
  };

  return useQuery("productFoundation", fetchProductTypes, {
    refetchOnWindowFocus: false,
  });
};

export const useFetchEyeliner = () => {
  const fetchProductTypes = async (): Promise<MakeupProps[]> => {
    const { data } = await axios.get(`${BASE_URL}?product_type=eyeliner`);
    return data;
  };

  return useQuery("productEyeliner", fetchProductTypes, {
    refetchOnWindowFocus: false,
  });
};

export const useFetchEyeshadow = () => {
  const fetchProductTypes = async (): Promise<MakeupProps[]> => {
    const { data } = await axios.get(`${BASE_URL}?product_type=eyeshadow`);
    return data;
  };

  return useQuery("productEyeshadow", fetchProductTypes, {
    refetchOnWindowFocus: false,
  });
};

export const useFetchBlush = () => {
  const fetchProductTypes = async (): Promise<MakeupProps[]> => {
    const { data } = await axios.get(`${BASE_URL}?product_type=blush`);
    return data;
  };

  return useQuery("productBlush", fetchProductTypes, {
    refetchOnWindowFocus: false,
  });
};

export const useFetchBronzer = () => {
  const fetchProductTypes = async (): Promise<MakeupProps[]> => {
    const { data } = await axios.get(`${BASE_URL}?product_type=bronzer`);
    return data;
  };

  return useQuery("productBronzer", fetchProductTypes, {
    refetchOnWindowFocus: false,
  });
};

export const useFetchMascara = () => {
  const fetchProductTypes = async (): Promise<MakeupProps[]> => {
    const { data } = await axios.get(`${BASE_URL}?product_type=mascara`);
    return data;
  };

  return useQuery("productMascara", fetchProductTypes, {
    refetchOnWindowFocus: false,
  });
};

export const useFetchEyebrow = () => {
  const fetchProductTypes = async (): Promise<MakeupProps[]> => {
    const { data } = await axios.get(`${BASE_URL}?product_type=eyebrow`);
    return data;
  };

  return useQuery("productEyebrow", fetchProductTypes, {
    refetchOnWindowFocus: false,
  });
};

export const useFetchNail_polish = () => {
  const fetchProductTypes = async (): Promise<MakeupProps[]> => {
    const { data } = await axios.get(`${BASE_URL}?product_type=nail_polish`);
    return data;
  };

  return useQuery("productNail_polish", fetchProductTypes, {
    refetchOnWindowFocus: false,
  });
};

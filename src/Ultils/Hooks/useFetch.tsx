import axios from "axios";

interface colorsProps {
  hex_value: string;
  olour_name: string;
}
interface MakeupProps {
  id: number;
  name: string;
  price: string;
  image_link: string;
  description: string;
  rating: number | null;
  category: string | null;
  tag_list: string[];
  product_colors: colorsProps[];
}

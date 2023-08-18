import { HeaderStyled } from "./Header.style";
import { Nav } from "./Nav/Nav";
import { SelectProduct } from "./SelectProduct/SelectProduct";

export const Header = () => {
  return (
    <HeaderStyled>
      <Nav />
      <div>
        <SelectProduct />
      </div>
    </HeaderStyled>
  );
};

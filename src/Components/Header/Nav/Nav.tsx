import { Ul } from "./Ul/Ul";
import Logo from "../../../assets/Brust Makeup.png";
import { VscMenu } from "react-icons/vsc";
import { NavStyled } from "./Nav.style";

export const Nav = () => {
  return (
    <NavStyled>
      <button>
        <VscMenu />
      </button>
      <div>
        <img src={Logo} alt="logo"  />
      </div>
      <Ul />
    </NavStyled>
  );
};

import { VscAccount, VscSearch } from "react-icons/vsc";
import { MdLocalGroceryStore } from "react-icons/md";

export const Ul = () => {
  return (
    <ul>
      <li>
        <a href="#">
          <VscSearch />
        </a>
      </li>
      <li>
        <a href="#">
          <VscAccount />
        </a>
      </li>
      <li>
        <a href="#">
          <MdLocalGroceryStore />
        </a>
      </li>
    </ul>
  );
};

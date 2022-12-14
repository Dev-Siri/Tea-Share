import { IoSearch } from "react-icons/io5";

import type { FC } from "react";
import type { SearchBarProps } from "../types";

import useStateContext from "../hooks/useStateContext";

const SearchBar: FC<SearchBarProps> = ({ onSearch, noBorder }) => {
  const { searchTerm, setSearchTerm, themeColor } = useStateContext();

  return (
    <nav
      className={`z-10 flex h-[100px] w-full items-center justify-center ${!noBorder && "border-b-2 border-b-light-gray dark:border-b-dark-gray"}`}
    >
      <input
        className="w-[70%] rounded-tl-[5px] rounded-bl-[5px] border-none bg-light-gray p-[15px] outline-none duration-[250ms] dark:border-semi-gray dark:bg-semi-gray dark:text-white md:w-[80%]"
        placeholder="Search"
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
      />
      <button
        type="button"
        className="flex h-[53.8px] w-[60px] cursor-pointer items-center justify-center rounded-tr-lg rounded-br-lg border-none text-white duration-[250ms] hover:bg-hover-color"
        onClick={onSearch}
        style={{ backgroundColor: themeColor }}
        aria-label="Search Button"
      >
        <IoSearch size={22} />
      </button>
    </nav>
  );
};

export default SearchBar;

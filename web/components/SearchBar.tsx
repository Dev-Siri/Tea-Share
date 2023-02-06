import type { FC } from "react";
import type { SearchBarProps } from "../types";

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => (
  <input
    className="w-full rounded-md border-none bg-light-gray p-[15px] outline-none duration-[250ms] dark:border-semi-gray dark:bg-semi-gray dark:text-white"
    placeholder="Search"
    onChange={event => onSearch?.(event.target.value)}
  />
);

export default SearchBar;

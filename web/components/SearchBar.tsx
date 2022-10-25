import React, { type FC } from "react";
import { IoSearch } from "react-icons/io5";

import type { SearchBarProps } from "../types";
import { useStateContext } from "../context/StateContext";

const SearchBar: FC<SearchBarProps> = ({ handleSearch }) => {
  const { searchTerm, setSearchTerm, themeColor, themeMode } = useStateContext();

  return (
    <div className="navbar">
      <input className={`navbar__input ${themeMode === "dark" && "dark-input"}`} placeholder="Search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      <button type="button" className="navbar__submit" style={{ backgroundColor: themeColor }} onClick={handleSearch} aria-label="Search Button">
        <IoSearch size={22} />
      </button>
    </div>
  );
};

export default SearchBar;

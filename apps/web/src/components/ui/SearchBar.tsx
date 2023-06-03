import type { FC } from "react";

import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";

const SearchBar: FC = () => (
  <form
    action="/search"
    method="GET"
    className="bg-light-gray dark:bg-semi-gray absolute mt-24 flex w-screen px-4 min-[700px]:static min-[700px]:ml-auto min-[700px]:mr-2 min-[700px]:mt-0 min-[700px]:w-fit min-[700px]:items-center min-[700px]:rounded-full"
  >
    <input type="text" placeholder="Search" name="query" className="bg-light-gray dark:bg-semi-gray rounded-full p-2 outline-none" />
    <button type="submit" aria-label="Search" className="ml-auto min-[700px]:rounded-full">
      <AiOutlineSearch size={22} />
    </button>
  </form>
);

export default SearchBar;

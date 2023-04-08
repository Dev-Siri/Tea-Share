"use client";
import { useRouter } from "next/navigation";
import { useState, type FC, type KeyboardEventHandler } from "react";

import type { WithChildren } from "@/types";

const SearchBar: FC<WithChildren> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();

  const handleSearch: KeyboardEventHandler<HTMLInputElement> = event => {
    if (event.key === "Enter") router.push(`/search?query=${searchTerm}`);
  };

  return (
    <div className="bg-light-gray dark:bg-semi-gray absolute mt-24 flex w-screen px-4 min-[700px]:static min-[700px]:ml-auto min-[700px]:mr-2 min-[700px]:mt-0 min-[700px]:w-fit min-[700px]:items-center min-[700px]:rounded-full">
      <input
        type="text"
        placeholder="Search"
        className="bg-light-gray dark:bg-semi-gray rounded-full p-2 outline-none"
        value={searchTerm}
        onKeyDown={handleSearch}
        onChange={event => setSearchTerm(event.target.value)}
      />
      <button aria-label="Search" className="ml-auto min-[700px]:rounded-full" onClick={() => router.push(`/search?query=${searchTerm}`)}>
        {children}
      </button>
    </div>
  );
};

export default SearchBar;

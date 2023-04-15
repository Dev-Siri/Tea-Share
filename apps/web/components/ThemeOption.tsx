"use client";
import { useTheme } from "next-themes";

import type { ThemeOptionProps } from "@/types";
import type { FC } from "react";

const ThemeOption: FC<ThemeOptionProps> = ({ children, type }) => {
  const { setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(type)}
      className="shadow-dark hover:bg-light-gray dark:shadow-light mt-10px flex h-[50px] w-full cursor-pointer items-center rounded-md border-none bg-white p-4 text-left text-black duration-200"
    >
      {children}
    </button>
  );
};

export default ThemeOption;

"use client";
import { useTheme } from "next-themes";

import type { ThemeOptionProps } from "@types";
import type { FC } from "react";

import { IoMoon } from "@react-icons/all-files/io5/IoMoon";
import { MdWbSunny } from "@react-icons/all-files/md/MdWbSunny";

const ThemeOption: FC<ThemeOptionProps> = ({ title }) => {
  const { setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(title.toLowerCase())}
      className="mt-[10px] flex h-[50px] w-full cursor-pointer items-center rounded-md border-none bg-white p-4 text-left shadow-dark duration-200 hover:bg-light-gray dark:shadow-light"
    >
      <span className="mr-[10px] mt-0.5 text-black">{title === "Dark" ? <IoMoon size={17} /> : <MdWbSunny size={17} />}</span>
      <span className="text-black">{title}</span>
    </button>
  );
};

export default ThemeOption;

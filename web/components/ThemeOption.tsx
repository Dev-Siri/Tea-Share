import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import type { FC } from "react";
import type { ThemeOptionProps } from "../types";

const ThemeOption: FC<ThemeOptionProps> = ({ title, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="mt-[10px] flex h-[50px] w-full cursor-pointer items-center rounded-md border-none bg-white p-4 text-left shadow-dark duration-[250ms] hover:bg-[#d3d3d3] dark:shadow-light"
  >
    <span className="mr-[10px] mt-0.5 text-black">{title === "Dark" ? <BsFillMoonFill size={17} /> : <BsFillSunFill size={17} />}</span>
    <span className="text-black">{title}</span>
  </button>
);

export default ThemeOption;

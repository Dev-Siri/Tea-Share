import dynamic from "next/dynamic";

import type { FC } from "react";
import type { ThemeOptionProps } from "../types";

const MdWbSunny = dynamic(() => import("@react-icons/all-files/md/MdWbSunny").then(({ MdWbSunny }) => MdWbSunny));
const IoMoon = dynamic(() => import("@react-icons/all-files/io5/IoMoon").then(({ IoMoon }) => IoMoon));

const ThemeOption: FC<ThemeOptionProps> = ({ title, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="mt-[10px] flex h-[50px] w-full cursor-pointer items-center rounded-md border-none bg-white p-4 text-left shadow-dark duration-[250ms] hover:bg-light-gray dark:shadow-light"
  >
    <span className="mr-[10px] mt-0.5 text-black">{title === "Dark" ? <IoMoon size={17} /> : <MdWbSunny size={17} />}</span>
    <span className="text-black">{title}</span>
  </button>
);

export default ThemeOption;

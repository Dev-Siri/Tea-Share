import dynamic from "next/dynamic";

import type { FC } from "react";
import type { SidebarOptionProps } from "../types";

import useStateContext from "../hooks/useStateContext";

const Link = dynamic(() => import("next/link"));

const SidebarOption: FC<SidebarOptionProps> = ({ href, title, icon, isActive }) => {
  const { themeColor } = useStateContext();

  return (
    <Link
      href={href}
      className={`flex w-full cursor-pointer items-center rounded-md bg-transparent text-white hover:bg-light-gray dark:hover:bg-dark-gray ${
        isActive ? "pl-0" : "pl-[35px]"
      } ${isActive ? "py-0 pr-5 pl-0" : "py-5 pr-5 pl-[30px]"}`}
      style={{ color: themeColor }}
    >
      {isActive && (
        <div
          className="mr-[25px] h-[60px] rounded-tr-[10px] rounded-br-[10px] border-r-[6px] border-r-transparent"
          style={{ borderRightColor: themeColor }}
        />
      )}
      {icon}
      <h3 className="ml-[5px] hidden md:block">{title?.length > 15 ? `${title.slice(0, 15)}...` : title}</h3>
    </Link>
  );
};

export default SidebarOption;

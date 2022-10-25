import React, { type FC } from "react";
import dynamic from "next/dynamic";

import { useStateContext } from "../context/StateContext";
import type { SidebarOptionProps } from "../types";

const Link = dynamic(() => import("next/link"));

const SidebarOption: FC<SidebarOptionProps> = ({ href, title, icon, isActive }) => {
  const { themeColor, themeMode } = useStateContext();

  return (
    <Link href={href} className="sidebar__option_wrapper">
      <div
        className={`sidebar__option ${themeMode === "dark" && "dark-option"}`}
        style={{
          paddingLeft: !isActive ? "35px" : "0px",
          padding: isActive ? "0px 20px 0px 0px" : "20px 20px 20px 30px",
          color: themeColor,
        }}
      >
        {isActive && <div className="sidebar__option-active_indicator" style={{ borderRightColor: themeColor }} />}
        {icon} <div className="sidebar__option-spacer" />
        <div className="sidebar__option-title">{title?.length > 15 ? `${title.slice(0, 15)}...` : title}</div>
      </div>
    </Link>
  );
};

export default SidebarOption;

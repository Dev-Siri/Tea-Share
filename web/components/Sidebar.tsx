import React, { FC } from "react";
import { IoHomeSharp, IoSettingsSharp } from "react-icons/io5";
import { IoIosCreate } from "react-icons/io";
import { FaUserCircle, FaUserFriends } from "react-icons/fa";
import { BsFilePost, BsFillPeopleFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

import { SidebarOption } from "./";
import { SidebarProps } from "../types/sidebar";
import { useStateContext } from "../context/StateContext";
import Logo from "../assets/LightLogo.png";

const Sidebar: FC<SidebarProps> = ({ isActive, isOnPostInfo }) => {
  const { themeColor, themeMode, user } = useStateContext();

  return (
    <div className={`sidebar ${themeMode === "dark" && "dark-bar"}`}>
      <Link href="/" className="sidebar__logo-container">
        <picture className="sidebar__logo-container">
          <img
            src={Logo.src}
            alt="logo"
            className="sidebar__logo"
            style={{ backgroundColor: themeColor }}
          />
        </picture>
      </Link>
      {!isOnPostInfo?.visible && (
        <>
          <div className="sidebar__user-wrapper" style={{ backgroundColor: themeColor }} />
          <div className="sidebar__user-wrapper_image">
            <Image
              src={user?.photoURL}
              alt={user?.displayName}
              height={100}
              width={100}
              style={{ borderRadius: '100%' }}
            />
          </div>
          <p className="sidebar__user-wrapper_title" style={{ marginTop: isOnPostInfo?.visible ? "110px" : "0px" }}>
            {user?.displayName.length > 15 ? `${user?.displayName.slice(0, 15)}...` : user?.displayName}
          </p>
        </>
      )}
      <div id="options">
        <p style={{ marginTop: isOnPostInfo?.visible ? "40px" : "0px" }}>PAGES</p>
        <SidebarOption href="/" title="Home" icon={<IoHomeSharp />} isActive={isActive === "home"} />
        <SidebarOption href={`/users/${user?.displayName}`} title="Profile" icon={<FaUserCircle />} isActive={isActive === "profile"} />
        <SidebarOption href="/users" title="Users" icon={<BsFillPeopleFill />} isActive={isActive === "users"} />
        <SidebarOption href="/create" title="Create" icon={<IoIosCreate />} isActive={isActive === "create"} />
        <SidebarOption href="/settings" title="Settings" icon={<IoSettingsSharp />} isActive={isActive === "settings"} />
        {isOnPostInfo?.visible && (
          <>
            <p>POST INFO</p>
            <SidebarOption
              href={isOnPostInfo.href}
              title={isOnPostInfo.title}
              icon={<BsFilePost />}
              isActive={isActive === "post-info"}
              key={isOnPostInfo.title}
            />
            <SidebarOption
              href={`/post/author/${isOnPostInfo.postedBy}?post=${isOnPostInfo._id}`}
              title={isOnPostInfo.postedBy}
              icon={<FaUserFriends />}
              isActive={isActive === "post-author-info"}
              key={isOnPostInfo.title}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

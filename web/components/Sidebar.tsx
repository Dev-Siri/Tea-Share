import React, { type FC, useState, useEffect, useMemo } from "react";
import { FaUserFriends } from "react-icons/fa";
import { BsFilePost } from "react-icons/bs";
import dynamic from "next/dynamic";

import useStateContext from "../hooks/useStateContext";
import useRoutes from "../hooks/useRoutes";

import type { SidebarProps } from "../types";

import Logo from "../assets/LightLogo.png";
import Cup from "../assets/Cup.png";

const Link = dynamic(() => import("next/link"));
const Image = dynamic(() => import("next/image"));
const SidebarOption = dynamic(() => import("./SidebarOption"));

const Sidebar: FC<SidebarProps> = ({ route, isOnPostInfo }) => {
  const { themeColor, user } = useStateContext();
  const [isSSR, setIsSSR] = useState<boolean>(true);

  const routes = useMemo(() => useRoutes(`${user?.displayName}`, route), [route]);

  useEffect(() => {
    setIsSSR(false);

    if (!isSSR && !user) window.location.reload();
  }, []);

  return (
    <aside className="flex h-screen w-[260px] flex-col overflow-y-auto rounded-tr-[10px] rounded-br-[10px] border-r-4 border-r-light-gray align-top dark:border-r-dark-gray">
      {!isSSR && (
        <Link href="/">
          <Image
            src={window.innerWidth < 940 ? Cup : Logo}
            alt="Logo"
            className="h-[140px] w-full cursor-pointer rounded-tr-[10px] p-5"
            style={{ backgroundColor: themeColor }}
          />
        </Link>
      )}
      {!isOnPostInfo?.visible && !isSSR && (
        <>
          <div className="h-[60px]" style={{ backgroundColor: themeColor }} />
          <Image
            src={user?.photoURL ?? "https://via.placeholder.com/100x100"}
            alt={`${user?.displayName}`}
            height={105}
            width={110}
            className="absolute mt-[140px] h-[105px] self-center rounded-full border-2 border-gray-400 bg-white p-px"
          />
          <p className={`self-center pt-14 text-[22px] font-bold ${isOnPostInfo?.visible ? "mt-[110px]" : "mt-0"}`}>
            {parseInt(`${user?.displayName?.length}`) > 15 ? `${user?.displayName?.slice(0, 15)}...` : user?.displayName}
          </p>
        </>
      )}
      <p className={`ml-[30px] mb-2 text-lg text-gray-500 duration-[250ms] ${isOnPostInfo?.visible ? "mt-10" : "mt-0"}`}>PAGES</p>
      {routes.map(route => (
        <SidebarOption key={route.title} {...route} />
      ))}
      {isOnPostInfo?.visible && (
        <>
          <p className="ml-[30px] mb-2 text-lg text-gray-500 duration-[250ms]">POST INFO</p>
          <SidebarOption
            href={isOnPostInfo.href}
            title={isOnPostInfo.title}
            icon={<BsFilePost />}
            isActive={route === "post-info"}
            key={`${isOnPostInfo.title}-post`}
          />
          <SidebarOption
            href={`/post/author/${isOnPostInfo.postedBy}?post=${isOnPostInfo._id}`}
            title={isOnPostInfo.postedBy}
            icon={<FaUserFriends />}
            isActive={route === "post-author-info"}
            key={`${isOnPostInfo.title}-post-user`}
          />
        </>
      )}
    </aside>
  );
};

export default Sidebar;

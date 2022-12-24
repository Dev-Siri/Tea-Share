import { type FC, useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";

import useStateContext from "../hooks/useStateContext";
import useRoutes from "../hooks/useRoutes";

import { MORE_POST_TO_FETCH_LIMIT } from "../constants/limit";

import type { SidebarProps } from "../types";
import { User as FirebaseUser } from "firebase/auth";

import { FaUserFriends } from "react-icons/fa";
import { BsFilePost } from "react-icons/bs";
import { MdViewList, MdOutlineViewList } from "react-icons/md";
const Link = dynamic(() => import("next/link"));
const Image = dynamic(() => import("next/image"));
const SidebarOption = dynamic(() => import("./SidebarOption"));

const Sidebar: FC<SidebarProps> = ({ route, isOnPostInfo, scrollingOptions }) => {
  const { themeColor } = useStateContext();
  const [isSSR, setIsSSR] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseUser | null>(null);

  const routes = useMemo(() => useRoutes(user?.displayName as string, route), [route, user]);

  useEffect(() => {
    setIsSSR(false);

    setUser(JSON.parse(localStorage.getItem("user") as string));

    if (!isSSR && !user) location.reload();
  }, []);

  return (
    <aside className="flex h-screen w-[80px] flex-col overflow-y-auto rounded-tr-[10px] rounded-br-[10px] border-r-4 border-r-light-gray align-top dark:border-r-dark-gray md:w-[260px]">
      {!isSSR && (
        <Link href="/">
          <picture>
            <source media="(max-width: 767px)" srcSet="/images/icon.png" />
            <Image
              src="/images/logo-white.png"
              alt="Logo"
              height={140}
              width={140}
              className="h-[80px] w-full cursor-pointer rounded-md rounded-tr-[10px] p-5 md:h-[140px] md:rounded-none"
              style={{ backgroundColor: themeColor }}
            />
          </picture>
        </Link>
      )}
      {!isOnPostInfo?.visible && !isSSR && (
        <>
          <div className="mb-16 hidden h-[60px] md:mb-0 md:block" style={{ backgroundColor: themeColor }} />
          <Image
            src={user?.photoURL ?? "https://via.placeholder.com/100x100"}
            alt={user?.displayName ?? "Profile picture"}
            height={105}
            width={110}
            className="absolute mt-24 h-11 w-11 self-center rounded-full border-2 border-gray-400 bg-white p-px md:mt-[110px] md:block md:h-[105px] md:w-[105px]"
          />
          <p className={`hidden self-center pt-10 text-[22px] font-bold md:block ${isOnPostInfo?.visible ? "mt-[110px]" : "mt-0"}`}>
            {(user?.displayName?.length as number) > 15 ? `${user?.displayName?.slice(0, 15)}...` : user?.displayName}
          </p>
        </>
      )}
      <p className={`ml-[30px] mb-2 hidden text-lg text-gray-500 duration-[250ms] md:block ${isOnPostInfo?.visible ? "mt-10" : "mt-0"}`}>PAGES</p>
      <section className={`md:mt-0 ${isOnPostInfo?.visible ? "mt-0" : "mt-20"}`}>
        {routes.map(route => (
          <SidebarOption key={route.title} {...route} />
        ))}
      </section>
      {(route === "home" || route === "users") && (
        <button
          onClick={() => scrollingOptions?.setLimit(prevLimit => prevLimit + MORE_POST_TO_FETCH_LIMIT)}
          type="button"
          style={{ color: themeColor }}
          className="flex w-full cursor-pointer items-center justify-start rounded-sm border-none bg-white p-[14px] text-white hover:bg-light-gray dark:bg-black dark:hover:bg-dark-gray"
        >
          {scrollingOptions?.loading ? <MdViewList className="ml-4" /> : <MdOutlineViewList className="ml-4" />}
          <p className="hidden md:ml-2 md:block">{scrollingOptions?.loading ? "Loading..." : "Show more"}</p>
        </button>
      )}
      {isOnPostInfo?.visible && (
        <>
          <p className="ml-[30px] mt-3 mb-2 hidden text-lg text-gray-500 duration-[250ms] md:block">POST INFO</p>
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

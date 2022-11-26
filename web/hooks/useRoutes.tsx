import { IoHomeSharp, IoSettingsSharp } from "react-icons/io5";

import type { RoutesHook } from "../types";

import { IoIosCreate } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";

const useRoutes: RoutesHook = (username, route) => [
  {
    href: "/",
    title: "Home",
    icon: <IoHomeSharp />,
    isActive: route === "home",
  },
  {
    href: `/users/${username}`,
    title: "Profile",
    icon: <FaUserCircle />,
    isActive: route === "profile",
  },
  {
    href: "/users",
    title: "Users",
    icon: <BsFillPeopleFill />,
    isActive: route === "users",
  },
  {
    href: "/create",
    title: "Create",
    icon: <IoIosCreate />,
    isActive: route === "create",
  },
  {
    href: "/settings",
    title: "Settings",
    icon: <IoSettingsSharp />,
    isActive: route === "settings",
  },
];

export default useRoutes;

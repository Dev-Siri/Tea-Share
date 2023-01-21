import dynamic from "next/dynamic";

import type { RoutesHook } from "../types";

const IoSettingsSharp = dynamic(() => import("@react-icons/all-files/io5/IoSettingsSharp").then(({ IoSettingsSharp }) => IoSettingsSharp));
const IoHomeSharp = dynamic(() => import("@react-icons/all-files/io5/IoHomeSharp").then(({ IoHomeSharp }) => IoHomeSharp));
const IoIosCreate = dynamic(() => import("@react-icons/all-files/io/IoIosCreate").then(({ IoIosCreate }) => IoIosCreate));
const FaUserCircle = dynamic(() => import("@react-icons/all-files/fa/FaUserCircle").then(({ FaUserCircle }) => FaUserCircle));
const BsFillPeopleFill = dynamic(() => import("@react-icons/all-files/bs/BsFillPeopleFill").then(({ BsFillPeopleFill }) => BsFillPeopleFill));

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

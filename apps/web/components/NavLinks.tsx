import lazy from "next/dynamic";

import type { FC } from "react";

import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";

const UserIcon = lazy(() => import("@/components/UserIcon"));
const Link = lazy(() => import("next/link"));

const NavLinks: FC = () => (
  <section className="ml-auto mr-2 flex">
    <Link
      title="Create a Post"
      href="/create"
      className="bg-primary mr-2 flex items-center justify-center rounded-full p-3.5 text-white sm:w-40 sm:p-0"
    >
      <AiOutlinePlus />
      <p className="ml-2 hidden text-sm sm:block">Create a Post</p>
    </Link>
    <Link
      title="People"
      href="/people"
      className="place-center dark:bg-semi-gray mr-2 grid rounded-full bg-white p-3.5 duration-200 hover:bg-gray-100"
    >
      <BsFillPeopleFill />
    </Link>
    <Link
      title="Settings"
      href="/settings"
      className="place-center dark:bg-semi-gray mr-2 grid rounded-full bg-white p-3.5 duration-200 hover:bg-gray-100"
    >
      <IoSettingsSharp />
    </Link>
    <UserIcon />
  </section>
);

export default NavLinks;

import lazy from "next/dynamic";

import type { FC } from "react";

import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";
import { BsFillPeopleFill } from "@react-icons/all-files/bs/BsFillPeopleFill";
import { IoSettingsSharp } from "@react-icons/all-files/io5/IoSettingsSharp";

const UserIcon = lazy(() => import("@components/UserIcon"));
const Link = lazy(() => import("next/link"));

const NavLinks: FC = () => (
  <section className="ml-auto flex">
    <Link href="/create" className="mr-2 flex items-center justify-center rounded-full bg-primary p-3.5 text-white sm:w-40 sm:p-0">
      <AiOutlinePlus />
      <p className="ml-2 hidden text-sm sm:block">Create a Post</p>
    </Link>
    <Link
      title="People"
      href="/people"
      className="place-center mr-2 grid rounded-full bg-white p-3.5 duration-200 hover:bg-gray-100 dark:bg-semi-gray"
    >
      <BsFillPeopleFill />
    </Link>
    <Link
      title="Settings"
      href="/settings"
      className="place-center mr-2 grid rounded-full bg-white p-3.5 duration-200 hover:bg-gray-100 dark:bg-semi-gray"
    >
      <IoSettingsSharp />
    </Link>
    <UserIcon />
  </section>
);

export default NavLinks;

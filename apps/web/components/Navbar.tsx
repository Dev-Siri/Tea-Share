import lazy from "next/dynamic";

import type { FC } from "react";

import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { BsFillPeopleFill } from "@react-icons/all-files/bs/BsFillPeopleFill";
import { IoSettingsSharp } from "@react-icons/all-files/io5/IoSettingsSharp";
import Logo from "./Logo";

const SearchBar = lazy(() => import("@/components/SearchBar"));
const UserIcon = lazy(() => import("@/components/UserIcon"));
const Link = lazy(() => import("next/link"));

const Navbar: FC = () => (
  <nav className="bg-light-gray mb-9 flex h-16 items-center justify-between dark:bg-black dark:text-white min-[700px]:mb-0">
    <Logo />
    <SearchBar>
      <AiOutlineSearch size={22} />
    </SearchBar>
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
  </nav>
);

export default Navbar;

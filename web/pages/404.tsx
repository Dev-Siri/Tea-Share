import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import type { User as FirebaseUser } from "firebase/auth";

import useStateContext from "../hooks/useStateContext";

import { IoArrowBackCircleSharp } from "react-icons/io5";
const Link = dynamic(() => import("next/link"));
const Image = dynamic(() => import("next/image"));

const NotFound = () => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const { themeColor } = useStateContext();

  useEffect(() => {
    const localUser: FirebaseUser = JSON.parse(localStorage.getItem("user") as string);

    setUser(localUser);
  }, []);

  return (
    <article className="flex h-screen w-screen flex-col items-center justify-center bg-white dark:bg-black">
      <Image src="/images/icon.png" alt="Tea Share Logo" className="mb-4 rounded-full bg-primary" priority height={150} width={150} />
      <div className="flex items-center">
        <h4 className="text-2xl text-black dark:text-white">404</h4>
        <div className="ml-4 mr-4 h-10 w-px rounded-md bg-light-gray dark:bg-gray-600" />
        <p className="text-black dark:text-white">This page could not be found.</p>
      </div>
      <Link
        type="button"
        className="mt-20 ml-[5px] flex w-[19%] cursor-pointer items-center rounded-[5px] border-none p-[13px] text-base text-white duration-[250ms] hover:bg-primary-dark lg:mt-5"
        style={{ backgroundColor: themeColor }}
        href={user ? "/" : "/auth"}
      >
        <IoArrowBackCircleSharp size={20} />
        <p className="ml-2">{user ? "Go back to the home page" : "Go back to the login page"}</p>
      </Link>
    </article>
  );
};

export default NotFound;

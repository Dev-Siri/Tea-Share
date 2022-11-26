import React, { useState, useEffect } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import type { NextPage } from "next";

import colors from "../constants/colors";
import useStateContext from "../hooks/useStateContext";
import { Logout, UpdateProfile } from "../utils/auth";

import Sidebar from "../components/Sidebar";
const LogoutButton = dynamic(() => import("../components/LogoutButton"));
const ThemeOption = dynamic(() => import("../components/ThemeOption"));
const ColorInput = dynamic(() => import("../components/ColorInput"));

const Settings: NextPage = () => {
  const { switchColor, switchMode, themeColor, user } = useStateContext();
  const router = useRouter();

  const [username, setUsername] = useState<string>(`${user?.displayName}`);
  const [email, setEmail] = useState<string>(`${user?.email}`);
  const [image, setImage] = useState<string | File | undefined | null>(user?.photoURL);
  const [userID, setUserID] = useState<string>("");

  useEffect(() => {
    const fetchId = async () => {
      const { fetchUserByQuery } = await import("../api");
      const { data: fetchedUser } = await fetchUserByQuery(`${user?.displayName}`);
      const id = fetchedUser._id;

      setUserID(id);
    };

    fetchId();
  }, []);

  const handleUpdateProfile = async (event: any) => {
    event.preventDefault();
    UpdateProfile(email, username, image, userID);
  };

  return (
    <article className="flex dark:bg-black dark:text-white">
      <Sidebar route="settings" />
      <aside className="flex h-screen w-[82%] flex-col overflow-y-auto">
        <header className="flex items-center pt-2">
          <h1 className="ml-10 mr-[10px] text-2xl font-bold">Settings</h1>
          <IoSettingsSharp size={30} />
          <LogoutButton handleLogout={() => Logout(router)} />
        </header>
        <form
          className="mt-[10px] ml-10 w-[410px] rounded-md bg-light-gray p-7 pb-10 dark:bg-dark-gray"
          onSubmit={event => handleUpdateProfile(event)}
        >
          <h2 className="text-2xl font-bold">User Profile</h2>
          <input
            onChange={event => setUsername(event.target.value)}
            value={username}
            className="mt-5 ml-[5px] w-[350px] rounded-md border-[1px] border-light-gray p-[15px] outline-none duration-[250ms] focus:border-primary dark:border-semi-gray dark:bg-semi-gray dark:text-white"
            placeholder="Username"
          />
          <input
            onChange={event => setEmail(event.target.value)}
            value={email}
            className="mt-5 ml-[5px] w-[350px] rounded-md border-[1px] border-light-gray p-[15px] outline-none duration-[250ms] focus:border-primary dark:border-semi-gray dark:bg-semi-gray dark:text-white"
            placeholder="Email"
            type="email"
          />
          <input
            type="file"
            className="mt-5 ml-[5px] w-[350px] rounded-md border-[1px] border-light-gray p-[15px] outline-none duration-[250ms] focus:border-primary dark:border-semi-gray dark:bg-semi-gray dark:text-white"
            onChange={event => setImage(event.target.files?.[0])}
          />
          <button className="mt-5 ml-1 cursor-pointer rounded-md border-none p-[10px] text-white" style={{ background: themeColor }} type="submit">
            Update Profile
          </button>
        </form>
        <section className="mt-[10px] ml-10 w-[410px] rounded-md bg-light-gray p-7 dark:bg-dark-gray">
          <h2 className="text-2xl font-bold">Theme mode</h2>
          <ThemeOption title="Dark" onClick={() => switchMode?.("dark")} />
          <ThemeOption title="Light" onClick={() => switchMode?.("light")} />
        </section>
        <section className="mt-[10px] ml-10 mb-12 w-[410px] rounded-md bg-light-gray p-5 pb-10 dark:bg-dark-gray">
          <h2 className="text-2xl font-bold">Theme color</h2>
          <div className="flex flex-wrap">
            {colors.map(color => (
              <ColorInput color={color} handleClick={() => switchColor?.(color)} key={color} />
            ))}
          </div>
        </section>
      </aside>
    </article>
  );
};

export default Settings;

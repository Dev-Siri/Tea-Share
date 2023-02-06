import dynamic from "next/dynamic";
import { useRouter, type NextRouter } from "next/router";
import { useEffect, useState } from "react";

import type { MongoDBUser } from "@types";
import type { User as FirebaseUser } from "firebase/auth";
import type { NextPage } from "next";

import colors from "@constants/colors";
import useStateContext from "@hooks/useStateContext";
import { updateProfileInputStyles } from "@styles/commonStyles";

const ThemeOption = dynamic(() => import("@components/ThemeOption"));
const ColorInput = dynamic(() => import("@components/ColorInput"));

const Settings: NextPage = () => {
  const { switchColor, switchMode, themeColor } = useStateContext();
  const router: NextRouter = useRouter();

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [image, setImage] = useState<string | File | undefined | null>(null);
  const [userID, setUserID] = useState<string>("");

  useEffect(() => {
    const setupUserStates = async () => {
      const user: FirebaseUser = JSON.parse(localStorage.getItem("user") as string);

      setUsername(user?.displayName as string);
      setEmail(user?.email as string);
      setImage(user?.photoURL);

      const { fetchUserByQuery } = await import("@api/client");
      const fetchedUser: MongoDBUser = await fetchUserByQuery(user?.displayName as string);

      setUserID(fetchedUser._id);
    };

    setupUserStates();
  }, []);

  const handleUpdateProfile = async (event: any) => {
    event.preventDefault();
    const { UpdateProfile } = await import("@utils/auth");

    await UpdateProfile(email, username, image, userID);
  };

  const handleLogout = async () => {
    const { Logout } = await import("@utils/auth");

    await Logout(router);
  };

  return (
    <section className="ml-3 flex h-screen w-full flex-col overflow-y-auto pr-3 sm:ml-10 lg:flex-row lg:justify-around">
      <form
        className="mt-[10px] h-fit w-[350px] rounded-md border-2 border-light-gray p-7 pb-10 dark:border-border-gray dark:bg-black sm:w-[440px]"
        onSubmit={event => handleUpdateProfile(event)}
      >
        <h2 className="text-2xl font-bold">User Profile</h2>
        <input onChange={event => setUsername(event.target.value)} value={username} className={updateProfileInputStyles} placeholder="Username" />
        <input onChange={event => setEmail(event.target.value)} value={email} className={updateProfileInputStyles} placeholder="Email" type="email" />
        <input onChange={event => setImage(event.target.files?.[0])} type="file" className={updateProfileInputStyles} />
        <div className="mt-5 ml-1 flex">
          <button className="ml-1 w-36 cursor-pointer rounded-md border-none p-[10px] text-white" style={{ background: themeColor }} type="submit">
            Update Profile
          </button>
          <button
            className="ml-2 w-36 cursor-pointer rounded-md border-none p-[10px] text-white"
            style={{ background: themeColor }}
            onClick={handleLogout}
            type="button"
          >
            Logout
          </button>
        </div>
      </form>
      <section className="mt-[10px] h-fit w-[350px] rounded-md border-2 border-light-gray p-7 dark:border-border-gray dark:bg-black sm:w-[410px]">
        <h2 className="text-2xl font-bold">Theme mode</h2>
        <ThemeOption title="Dark" onClick={() => switchMode?.("dark")} />
        <ThemeOption title="Light" onClick={() => switchMode?.("light")} />
      </section>
      <section className="mt-[10px] mb-12 h-fit w-[350px] rounded-md border-2 border-light-gray p-5 pb-10 dark:border-border-gray dark:bg-black sm:w-[410px]">
        <h2 className="text-2xl font-bold">Theme color</h2>
        <div className="ml-4 grid grid-cols-3 sm:ml-8">
          {colors.map(color => (
            <ColorInput color={color} onClick={() => switchColor?.(color)} key={color} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Settings;

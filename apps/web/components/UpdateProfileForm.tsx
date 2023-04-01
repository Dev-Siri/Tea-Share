"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, type FC } from "react";

import type { MongoDBUser } from "@/types";

import { inputStyles } from "@/styles/commonStyles";

const UpdateProfileForm: FC = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [userID, setUserID] = useState("");
  const [image, setImage] = useState<string | File | null>(null);

  useEffect(() => {
    const setupUserStates = async () => {
      const { default: useSession } = await import("@/hooks/useSession");

      const user = await useSession();

      setImage(user.picture);
      setUsername(user.name);
      setEmail(user.email);

      const { fetchUsersByName } = await import("@/api/fetchers");
      const fetchedUser = (await fetchUsersByName(user.name, { cache: "no-store" }, true)) as MongoDBUser;

      setUserID(fetchedUser._id);
    };

    setupUserStates();
  }, []);

  const handleUpdateProfile = async (event: any) => {
    event.preventDefault();
    const { UpdateProfile } = await import("@/utils/auth");

    await UpdateProfile(email, username, image, userID);
  };

  const handleLogout = async () => {
    const { Logout } = await import("@/utils/auth");

    await Logout();
    router.replace("/auth");
  };

  return (
    <form
      className="border-light-gray dark:border-semi-gray mt-[10px] h-fit w-[350px] rounded-md border-2 p-7 pb-10 dark:bg-black sm:w-[440px]"
      onSubmit={handleUpdateProfile}
    >
      <h2 className="text-2xl font-bold">Your Profile</h2>
      <input onChange={event => setUsername(event.target.value)} value={username} className={inputStyles} placeholder="Username" />
      <input onChange={event => setEmail(event.target.value)} value={email} className={inputStyles} placeholder="Email" type="email" />
      <input onChange={event => setImage(event.target.files?.[0] as File | null)} type="file" className={inputStyles} />
      <div className="ml-1 mt-5 flex">
        <button type="submit" className="bg-primary ml-1 w-36 cursor-pointer rounded-md border-none p-[10px] text-white">
          Update Profile
        </button>
        <button type="button" className="bg-primary ml-2 w-36 cursor-pointer rounded-md border-none p-[10px] text-white" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </form>
  );
};

export default UpdateProfileForm;

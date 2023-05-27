"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, type FC } from "react";

import type { MongoDBUser } from "@/types";

import useSession from "@/hooks/useSession";

const UpdateProfileForm: FC = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [userID, setUserID] = useState("");
  const [image, setImage] = useState<string | File | null>(null);

  useEffect(() => {
    const setupUserStates = async () => {
      const { name, picture, email } = useSession();

      setImage(picture);
      setUsername(name);
      setEmail(email);

      const { default: queryClient } = await import("@/services/queryClient");
      const fetchedUsers = await queryClient<MongoDBUser[] | null>("/users/search", {
        cache: "no-store",
        searchParams: {
          name,
          exact: true,
        },
      });

      if (!fetchedUsers) throw new Error("Failed to fetch your information. Please try again later.");

      setUserID(fetchedUsers[0]._id);
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

    const { toast } = await import("react-hot-toast");

    toast.remove();
    router.replace("/auth");
  };

  return (
    <form
      className="border-light-gray dark:border-semi-gray mt-10px h-fit w-[350px] rounded-md border-2 p-7 pb-10 dark:bg-black sm:w-[440px]"
      onSubmit={handleUpdateProfile}
    >
      <h2 className="text-2xl font-bold">Your Profile</h2>
      <input onChange={event => setUsername(event.target.value)} value={username} className="input" placeholder="Username" />
      <input onChange={event => setEmail(event.target.value)} value={email} className="input" placeholder="Email" type="email" />
      <input onChange={event => setImage(event.target.files?.[0] as File | null)} type="file" className="input" />
      <div className="ml-1 mt-5 flex">
        <button type="submit" className="bg-primary p-10px ml-1 w-36 cursor-pointer rounded-md border-none text-white">
          Update Profile
        </button>
        <button type="button" className="bg-primary p-10px ml-2 w-36 cursor-pointer rounded-md border-none text-white" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </form>
  );
};

export default UpdateProfileForm;
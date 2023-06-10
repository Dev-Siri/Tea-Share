import { lazy } from "react";

import type { MongoDBUser } from "@/types";
import type { Metadata } from "next";

import { logout } from "@/actions/auth";
import useServerSession from "@/hooks/useServerSession";
import queryClient from "@/services/queryClient";

import ThemeOption from "@/components/ui/ThemeOption";

const UpdateProfileForm = lazy(() => import("@/components/forms/UpdateProfileForm"));

export const metadata: Metadata = {
  title: "Settings",
  openGraph: {
    title: "Settings",
  },
  twitter: {
    title: "Settings",
  },
};

export default async function Settings() {
  const { name, picture, email } = useServerSession();

  const fetchedUsers = await queryClient<MongoDBUser[] | null>("/users/search", {
    cache: "no-store",
    searchParams: {
      name,
      exact: true,
    },
  });

  if (!fetchedUsers) throw new Error("Failed to fetch your information. Please try again later.");

  return (
    <article className="ml-3 flex h-screen w-full flex-col overflow-y-auto pr-3 sm:ml-10 lg:flex-row lg:justify-around">
      <UpdateProfileForm currentImage={picture} userId={fetchedUsers[0]._id}>
        <h2 className="text-2xl font-bold">Your Profile</h2>
        <input name="username" defaultValue={name} className="input" placeholder="Username" />
        <input name="email" defaultValue={email} className="input" placeholder="Email" type="email" />
        <input name="image" className="input" type="file" />
        <div className="ml-1 mt-5 flex">
          <button type="submit" className="bg-primary p-10px ml-1 w-36 cursor-pointer rounded-md border-none text-white">
            Update Profile
          </button>
          <button formAction={logout} className="bg-primary p-10px ml-2 w-36 cursor-pointer rounded-md border-none text-white">
            Logout
          </button>
        </div>
      </UpdateProfileForm>
      <section className="border-light-gray dark:border-semi-gray mt-10px h-fit w-[350px] rounded-md border-2 p-7 dark:bg-black sm:w-[410px]">
        <h2 className="text-2xl font-bold">Theme mode</h2>
        <ThemeOption type="dark" />
        <ThemeOption type="light" />
      </section>
    </article>
  );
}

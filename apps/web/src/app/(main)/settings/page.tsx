import { lazy } from "react";

import type { PageComponent } from "@/types";
import type { Metadata } from "next";

import { IoMoon } from "@react-icons/all-files/io5/IoMoon";
import { MdWbSunny } from "@react-icons/all-files/md/MdWbSunny";

const UpdateProfileForm = lazy(() => import("@/components/forms/UpdateProfileForm"));
const ThemeOption = lazy(() => import("@/components/ui/ThemeOption"));

export const metadata: Metadata = {
  title: "Settings",
  openGraph: {
    title: "Settings",
  },
  twitter: {
    title: "Settings",
  },
};

const Settings: PageComponent = () => (
  <article className="ml-3 flex h-screen w-full flex-col overflow-y-auto pr-3 sm:ml-10 lg:flex-row lg:justify-around">
    <UpdateProfileForm />
    <section className="border-light-gray dark:border-semi-gray mt-10px h-fit w-[350px] rounded-md border-2 p-7 dark:bg-black sm:w-[410px]">
      <h2 className="text-2xl font-bold">Theme mode</h2>
      <ThemeOption type="dark">
        <p className="mr-10px mt-0.5 text-black">
          <IoMoon size={17} />
        </p>
        <p>Dark</p>
      </ThemeOption>
      <ThemeOption type="light">
        <p className="mr-10px mt-0.5">
          <MdWbSunny size={17} />
        </p>
        <p>Light</p>
      </ThemeOption>
    </section>
  </article>
);

export default Settings;

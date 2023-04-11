import lazy from "next/dynamic";

import type { PageComponent } from "@/types";
import type { Metadata } from "next";

import { IoMoon } from "react-icons/io5";
import { MdWbSunny } from "react-icons/md";

const ThemeOption = lazy(() => import("@/components/ThemeOption"));
const UpdateProfileForm = lazy(() => import("@/components/UpdateProfileForm"));

export const metadata: Metadata = {
  title: "Settings",
};

const Settings: PageComponent = () => (
  <section className="ml-3 flex h-screen w-full flex-col overflow-y-auto pr-3 sm:ml-10 lg:flex-row lg:justify-around">
    <UpdateProfileForm />
    <section className="border-light-gray dark:border-semi-gray mt-10px h-fit w-[350px] rounded-md border-2 p-7 dark:bg-black sm:w-[410px]">
      <h2 className="text-2xl font-bold">Theme mode</h2>
      <ThemeOption type="Dark">
        <p className="mr-10px mt-0.5 text-black">
          <IoMoon size={17} />
        </p>
        <p>Dark</p>
      </ThemeOption>
      <ThemeOption type="Light">
        <p className="mr-10px mt-0.5">
          <MdWbSunny size={17} />
        </p>
        <p>Light</p>
      </ThemeOption>
    </section>
  </section>
);

export default Settings;

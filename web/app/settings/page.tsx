import lazy from "next/dynamic";

import type { PageComponent } from "@types";
import type { Metadata } from "next";

const ThemeOption = lazy(() => import("@components/ThemeOption"));
const UpdateProfileForm = lazy(() => import("@components/UpdateProfileForm"));

export const metadata: Metadata = {
  title: "Settings",
};

const Settings: PageComponent = () => (
  <section className="ml-3 flex h-screen w-full flex-col overflow-y-auto pr-3 sm:ml-10 lg:flex-row lg:justify-around">
    <UpdateProfileForm />
    <section className="mt-[10px] h-fit w-[350px] rounded-md border-2 border-light-gray p-7 dark:border-semi-gray dark:bg-black sm:w-[410px]">
      <h2 className="text-2xl font-bold">Theme mode</h2>
      <ThemeOption title="Dark" />
      <ThemeOption title="Light" />
    </section>
  </section>
);

export default Settings;

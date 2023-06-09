import { cookies } from "next/headers";
import { lazy } from "react";

import { IoMoon } from "@react-icons/all-files/io5/IoMoon";
import { MdWbSunny } from "@react-icons/all-files/md/MdWbSunny";
import { revalidatePath } from "next/cache";
import LoadingSpinner from "./LoadingSpinner";

const SubmitButton = lazy(() => import("@/components/forms/buttons/SubmitButton"));

interface Props {
  type: "light" | "dark";
}

async function toggleTheme(formData: FormData) {
  "use server";
  const theme = formData.get("theme");
  const nextCookies = cookies();

  const currentTheme = nextCookies.get("theme")?.value;

  if (theme instanceof Blob || !theme) {
    nextCookies.set("theme", "light", {
      expires: new Date(9999, 0, 1),
      sameSite: "strict",
    });
  } else {
    nextCookies.set("theme", theme, {
      expires: new Date(9999, 0, 1),
      sameSite: "strict",
    });
  }

  if (currentTheme !== theme) revalidatePath("/settings");
}

export default function ThemeOption({ type }: Props) {
  return (
    <form action={toggleTheme}>
      <input name="theme" type="hidden" value={type} />
      <SubmitButton
        loadingSpinner={<LoadingSpinner color="black" height={20} width={20} />}
        className="shadow-dark hover:bg-light-gray dark:shadow-light mt-10px flex h-[50px] w-full cursor-pointer items-center rounded-md border-none bg-white p-4 text-left text-black duration-200"
      >
        {type === "dark" ? <IoMoon size={17} /> : <MdWbSunny size={17} />}
        <p>{`${type.charAt(0).toUpperCase()}${type.slice(1)}`}</p>
      </SubmitButton>
    </form>
  );
}

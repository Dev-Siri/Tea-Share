import dynamic from "next/dynamic";
import { useRouter, type NextRouter } from "next/router";
import { useEffect, useState } from "react";

import type { User as FirebaseUser } from "firebase/auth";

import usePageTitle from "@hooks/usePageTitle";
import useStateContext from "@hooks/useStateContext";

const BsFillPeopleFill = dynamic(() => import("@react-icons/all-files/bs/BsFillPeopleFill").then(({ BsFillPeopleFill }) => BsFillPeopleFill));
const IoSettingsSharp = dynamic(() => import("@react-icons/all-files/io5/IoSettingsSharp").then(({ IoSettingsSharp }) => IoSettingsSharp));
const AiOutlinePlus = dynamic(() => import("@react-icons/all-files/ai/AiOutlinePlus").then(({ AiOutlinePlus }) => AiOutlinePlus));
const Image = dynamic(() => import("next/image"));
const Link = dynamic(() => import("next/link"));

const Navbar = () => {
  const [isSSR, setIsSSR] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseUser | null>(null);

  const router: NextRouter = useRouter();
  const { setTitle, themeColor } = useStateContext();

  useEffect(() => {
    setIsSSR(false);

    setUser(JSON.parse(localStorage.getItem("user") as string));
  }, []);

  useEffect(() => {
    setTitle?.(usePageTitle("client"));
  }, [router.pathname, setTitle]);

  const correctlyFetchUserImage = (): string => {
    if (isSSR || !user?.photoURL) {
      return "/images/placeholder-image.webp";
    } else {
      return user.photoURL;
    }
  };

  return (
    <nav className="flex h-16 items-center bg-light-gray p-4 dark:bg-black dark:text-white">
      <section className="flex items-center">
        <Link href="/" className="mr-2 rounded-full" style={{ backgroundColor: themeColor }}>
          <Image src="/images/icon.svg" alt="Logo" height={20} width={50} className="cursor-pointer" />
        </Link>
        <p className="hidden sm:block">Tea Share</p>
      </section>
      <section className="ml-auto flex">
        <Link
          href="/create"
          className="mr-2 flex items-center justify-center rounded-full p-3.5 sm:w-40 sm:p-0"
          style={{ backgroundColor: themeColor }}
        >
          <AiOutlinePlus />
          <p className="ml-2 hidden text-sm sm:block">Create a Post</p>
        </Link>
        <Link
          title="People"
          href="/people"
          className="place-center mr-2 grid rounded-full bg-white p-3.5 duration-[250ms] hover:bg-gray-100 dark:bg-border-gray"
        >
          <BsFillPeopleFill />
        </Link>
        <Link
          title="Settings"
          href="/settings"
          className="place-center mr-2 grid rounded-full bg-white p-3.5 duration-[250ms] hover:bg-gray-100 dark:bg-border-gray"
        >
          <IoSettingsSharp />
        </Link>
        <Link href={`/people/${user?.displayName}`}>
          <Image src={correctlyFetchUserImage()} height={40} width={40} className="rounded-full" alt={user?.displayName ?? "Profile"} />
        </Link>
      </section>
    </nav>
  );
};

export default Navbar;

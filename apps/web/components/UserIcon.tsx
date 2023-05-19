"use client";
import lazy from "next/dynamic";
import { useEffect, useState, type FC } from "react";

import type { FirebaseUser } from "@/types";

import useSession from "@/hooks/useSession";

const Image = lazy(() => import("next/image"));
const Link = lazy(() => import("next/link"));

const UserIcon: FC = () => {
  const [user, setUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    setUser(useSession());
  }, []);

  return user ? (
    <Link href={`/people/${user.name}`}>
      <Image src={user.picture} alt={user.name} height={40} width={40} className="h-10 w-10 rounded-full" priority />
    </Link>
  ) : (
    <div aria-busy className="light-gradient dark:dark-gradient h-10 w-10 rounded-full" />
  );
};

export default UserIcon;

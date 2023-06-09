import { lazy } from "react";

import type { MongoDBUser } from "@/types";
import type { Metadata } from "next";

import queryClient from "@/services/queryClient";

const UserPresentor = lazy(() => import("@/components/ui/users/UserPresenter"));

export const metadata: Metadata = {
  title: "People",
  openGraph: {
    title: "People",
  },
  twitter: {
    title: "People",
  },
};

export default async function People() {
  const initialUsers = await queryClient<MongoDBUser[]>("/users", {
    cache: "no-cache",
    searchParams: {
      page: 1,
      limit: 10,
    },
  });

  return (
    <article className="mt-4 h-screen w-screen">
      <UserPresentor title="People" limit={10} initialUsers={initialUsers} />
    </article>
  );
}

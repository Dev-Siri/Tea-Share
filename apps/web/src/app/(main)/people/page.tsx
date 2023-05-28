import { lazy } from "react";

import type { MongoDBUser, PageComponent } from "@/types";
import type { Metadata } from "next";

import { INITIAL_PAGE_LIMIT, USER_LIMIT } from "@/constants/limit";
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

const People: PageComponent = async () => {
  const initialUsers = await queryClient<MongoDBUser[]>("/users", {
    revalidate: 10,
    searchParams: {
      page: INITIAL_PAGE_LIMIT,
      limit: USER_LIMIT,
    },
  });

  return (
    <article className="mt-4 h-screen w-screen">
      <UserPresentor title="People" limit={USER_LIMIT} initialUsers={initialUsers} />
    </article>
  );
};

export default People;

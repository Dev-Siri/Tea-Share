import lazy from "next/dynamic";

import type { PageComponent } from "@/types";
import type { Metadata } from "next";

import { INITIAL_PAGE_LIMIT, USER_LIMIT } from "@/constants/limit";
import { fetchUsers } from "@/services/fetchers";

const UserPresentor = lazy(() => import("@/components/UserPresenter"));

export const metadata: Metadata = {
  title: "People",
};

const People: PageComponent = async () => {
  const initialUsers = await fetchUsers(INITIAL_PAGE_LIMIT, USER_LIMIT, { next: { revalidate: 10 } });

  return (
    <article className="mt-4 h-screen w-screen">
      <UserPresentor title="People" limit={USER_LIMIT} initialUsers={initialUsers} />
    </article>
  );
};

export default People;

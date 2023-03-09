import lazy from "next/dynamic";

import type { LoadingComponent } from "@/types";

import { SERVER_USER_LIMIT } from "@/constants/limit";

const UserListSkeleton = lazy(() => import("@/components/UserListSkeleton"));

const PeopleLoading: LoadingComponent = () => (
  <article className="mt-4 h-screen w-screen">
    <UserListSkeleton numberOfItems={SERVER_USER_LIMIT} itemFullWidth />
  </article>
);

export default PeopleLoading;

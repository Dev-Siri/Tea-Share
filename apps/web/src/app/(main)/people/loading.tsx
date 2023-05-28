import type { LoadingComponent } from "@/types";

import { USER_LIMIT } from "@/constants/limit";

import UserListSkeleton from "@/components/skeletons/UserListSkeleton";

const PeopleLoading: LoadingComponent = () => (
  <article className="mt-4 h-screen w-screen">
    <UserListSkeleton numberOfItems={USER_LIMIT} itemFullWidth />
  </article>
);

export default PeopleLoading;

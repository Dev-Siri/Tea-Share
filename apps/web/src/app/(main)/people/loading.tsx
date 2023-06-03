import type { LoadingComponent } from "@/types";

import UserListSkeleton from "@/components/skeletons/UserListSkeleton";

const PeopleLoading: LoadingComponent = () => (
  <article className="mt-4 h-screen w-screen">
    <UserListSkeleton numberOfItems={10} itemFullWidth />
  </article>
);

export default PeopleLoading;

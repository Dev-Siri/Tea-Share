import type { LoadingComponent } from "@/types";

import { POST_LIMIT, USER_LIMIT } from "@/constants/limit";

import PostsListSkeleton from "@/components/skeletons/PostsListSkeleton";
import UserListSkeleton from "@/components/skeletons/UserListSkeleton";

const HomeLoading: LoadingComponent = () => (
  <aside className="flex w-full min-[1002px]:pr-4">
    <PostsListSkeleton numberOfItems={POST_LIMIT} />
    <section className="hidden h-1/5 py-3 min-[1002px]:block min-[1002px]:w-[43.5%]">
      <UserListSkeleton numberOfItems={USER_LIMIT - 4} />
    </section>
  </aside>
);

export default HomeLoading;

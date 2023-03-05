import type { LoadingComponent } from "@types";

import { POST_LIMIT, SERVER_USER_LIMIT } from "@constants/limit";

import PostsListSkeleton from "@components/PostsListSkeleton";
import UserListSkeleton from "@components/UserListSkeleton";

const HomeLoading: LoadingComponent = () => (
  <aside className="flex w-full min-[1002px]:pr-4">
    <PostsListSkeleton numberOfItems={POST_LIMIT} />
    <section className="hidden h-1/5 py-3 min-[1002px]:block min-[1002px]:w-[43.5%]">
      <UserListSkeleton numberOfItems={SERVER_USER_LIMIT / 2} />
    </section>
  </aside>
);

export default HomeLoading;

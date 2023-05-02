import PostsListSkeleton from "@/components/PostsListSkeleton";
import UserInfoSkeleton from "@/components/UserInfoSkeleton";
import type { LoadingComponent } from "@/types";

const ProfileLoading: LoadingComponent = () => (
  <article className="grid h-screen place-items-center overflow-y-auto">
    <UserInfoSkeleton />
    <div className="mt-6 w-[90%] pb-10">
      <PostsListSkeleton numberOfItems={4} />
    </div>
  </article>
);

export default ProfileLoading;

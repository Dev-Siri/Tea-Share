import PostsListSkeleton from "@/components/skeletons/PostsListSkeleton";
import UserInfoSkeleton from "@/components/skeletons/UserInfoSkeleton";

export default function ProfileLoading() {
  return (
    <article className="grid h-screen place-items-center overflow-y-auto">
      <UserInfoSkeleton />
      <div className="mt-6 w-[90%] pb-10">
        <PostsListSkeleton numberOfItems={4} />
      </div>
    </article>
  );
}

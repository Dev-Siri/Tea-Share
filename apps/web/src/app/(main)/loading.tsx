import PostsListSkeleton from "@/components/skeletons/PostsListSkeleton";
import UserListSkeleton from "@/components/skeletons/UserListSkeleton";

export default function HomeLoading() {
  return (
    <aside className="flex w-full min-[1002px]:pr-4">
      <PostsListSkeleton numberOfItems={8} />
      <section className="hidden h-1/5 py-3 min-[1002px]:block min-[1002px]:w-[43.5%]">
        <UserListSkeleton numberOfItems={5} />
      </section>
    </aside>
  );
}

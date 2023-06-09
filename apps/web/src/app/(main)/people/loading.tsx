import UserListSkeleton from "@/components/skeletons/UserListSkeleton";

export default function PeopleLoading() {
  return (
    <article className="mt-4 h-screen w-screen">
      <UserListSkeleton numberOfItems={10} itemFullWidth />
    </article>
  );
}

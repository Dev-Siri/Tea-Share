import Skeleton from "@/components/skeletons/Skeleton";
import UpdateUserFormSkeleton from "@/components/skeletons/UpdateUserFormSkeleton";

export default function SettingsLoading() {
  return (
    <article className="ml-3 flex h-screen w-full flex-col overflow-y-auto pr-3 sm:ml-10 lg:flex-row lg:justify-around">
      <UpdateUserFormSkeleton />
      <section className="border-light-gray dark:border-semi-gray mt-10px h-fit w-[350px] rounded-md border-2 p-7 dark:bg-black sm:w-[410px]">
        <Skeleton className="h-8 w-4/5" />
        <Skeleton className="mt-7 h-[50px] w-full"></Skeleton>
        <Skeleton className="mt-10px h-[50px] w-full"></Skeleton>
      </section>
    </article>
  );
}

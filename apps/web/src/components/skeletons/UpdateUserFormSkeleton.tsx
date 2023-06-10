import Skeleton from "./Skeleton";

export default function UpdateUserFormSkeleton() {
  return (
    <form
      aria-busy
      className="border-light-gray dark:border-semi-gray mt-10px h-fit w-[350px] rounded-md border-2 p-7 pb-10 dark:bg-black sm:w-[440px]"
    >
      <Skeleton className="h-8 w-4/5" />
      <div className="mt-5 flex flex-col gap-4">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
      </div>
      <div className="mt-5 flex gap-2">
        <Skeleton className="p-10px w-36" />
        <Skeleton className="p-10px w-36" />
      </div>
    </form>
  );
}

import type { LoadingComponent } from "@types";

import Skeleton from "@components/Skeleton";
import UserListSkeleton from "@components/UserListSkeleton";

const PostInfoLoading: LoadingComponent = () => (
  <article className="flex h-screen w-full flex-col items-center overflow-y-auto pb-[10%] pl-2 sm:pl-[60px] xl:flex-row xl:items-start">
    <section className="mt-[30px] w-full pr-4 md:pr-14">
      <div className="mb-4 h-fit w-full rounded-md border-2 border-light-gray p-8 dark:border-semi-gray dark:bg-black xl:mb-0">
        <Skeleton className="text-4xl font-bold" />
        <Skeleton className="mt-4 w-[300px]" />
        <Skeleton className="mb-2 w-[200px] border-b-[1px] border-b-semi-gray" />
        <div className="flex items-center border-b-[1px] border-b-semi-gray pb-2">
          <Skeleton className="mr-[10px] hidden h-[30px] w-[30px] rounded-full md:inline" />
          <Skeleton className="w-56" />
        </div>
      </div>
      <section className="flex flex-col justify-between md:flex-row">
        <div className="mt-4 rounded-md border-2 bg-light-gray p-8 dark:border-semi-gray dark:bg-black">
          <Skeleton className="h-[300px] md:h-[450px] md:w-[450px]" />
        </div>
        <div className="mt-4 w-full md:ml-4">
          <UserListSkeleton numberOfItems={5} />
        </div>
      </section>
    </section>
  </article>
);

export default PostInfoLoading;

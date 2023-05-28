import type { FC } from "react";

import Skeleton from "./Skeleton";

const UserInfoSkeleton: FC = () => (
  <article className="border-light-gray dark:border-semi-gray mt-10 flex w-[80%] flex-col items-center rounded-md border-2 bg-white p-12 dark:bg-black sm:ml-5 md:ml-0 md:w-[30%] md:flex-row md:items-start lg:w-1/2">
    <Skeleton className="h-32 w-32 rounded-full" />
    <ul className="mt-4 text-center md:ml-8 md:mt-0 md:text-start">
      <Skeleton className="h-6 w-[280px]" />
      <Skeleton className="h-5 w-[230px]" />
      <Skeleton className="h-5 w-[200px]" />
    </ul>
  </article>
);

export default UserInfoSkeleton;

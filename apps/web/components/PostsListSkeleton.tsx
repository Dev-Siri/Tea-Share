import type { PostsListSkeletonProps } from "@/types";
import type { FC } from "react";

import Skeleton from "@/components/Skeleton";

const PostsListSkeleton: FC<PostsListSkeletonProps> = ({ numberOfItems }) => (
  <ul className="h-screen w-full overflow-auto px-4 pb-10 pt-3">
    {[...Array(numberOfItems).keys()].map(index => (
      <li key={index} className="border-light-gray dark:border-semi-gray mb-10 h-[824px] w-full rounded-xl border-2 bg-white p-6 dark:bg-black">
        <Skeleton className="h-8 w-4/5 md:w-2/5" />
        <div className="my-3">
          <Skeleton className="h-4 w-[200px]" />
        </div>
        <Skeleton className="h-[500px] w-full" />
        <div className="mt-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/5" />
        </div>
      </li>
    ))}
  </ul>
);

export default PostsListSkeleton;

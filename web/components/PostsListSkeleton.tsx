import type { PostsListSkeletonProps } from "@types";
import type { FC } from "react";

import Skeleton from "@components/Skeleton";

const PostsListSkeleton: FC<PostsListSkeletonProps> = ({ numberOfItems }) => (
  <ul className="h-screen w-full px-4 pb-10 pt-3">
    {[...Array(numberOfItems).keys()].map(index => (
      <li key={index} className="mb-10 h-[824px] w-full rounded-xl border-2 border-light-gray bg-white p-6 dark:border-semi-gray dark:bg-black">
        <Skeleton className="h-8 w-[400px]" />
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

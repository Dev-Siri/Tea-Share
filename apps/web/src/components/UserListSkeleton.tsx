import type { FC } from "react";

import Skeleton from "@/components/Skeleton";

interface Props {
  numberOfItems: number;
  itemFullWidth?: boolean;
}

const UserListSkeleton: FC<Props> = ({ numberOfItems, itemFullWidth }) => (
  <aside className="border-light-gray dark:border-semi-gray h-full w-full overflow-y-auto rounded-xl border-2 bg-white dark:bg-black">
    <section className="flex w-full items-center bg-white p-2 dark:bg-black">
      <h1 className="ml-2 mt-2 hidden text-xl font-medium min-[500px]:block">
        <Skeleton className="w-28" />
      </h1>
    </section>
    <section role="list">
      {[...Array(numberOfItems).keys()].map(index => (
        <li className="ml-2 flex w-full p-4" key={index}>
          <Skeleton className="h-10 w-11 rounded-full" />
          <div className="ml-5 w-full">
            <Skeleton className={`h-4/5 ${itemFullWidth ? "w-[90%] md:w-[98%]" : "w-[90%]"}`} />
          </div>
        </li>
      ))}
    </section>
  </aside>
);

export default UserListSkeleton;

import lazy from "next/dynamic";

import type { UserListItemProps } from "@types";
import type { FC } from "react";

import { getHandle } from "@utils/globals";

const Link = lazy(() => import("next/link"));
const Image = lazy(() => import("next/image"));

const UserListItem: FC<UserListItemProps> = ({ username, image }) => (
  <Link href={`/people/${username}`} className="flex w-full cursor-pointer items-center p-3 duration-200 hover:bg-gray-200 dark:hover:bg-semi-gray">
    <Image src={image} alt={username} height={44} width={44} className="h-11 rounded-full" />
    <div className="ml-5">
      <p>{username}</p>
      <p className="text-gray-500">{getHandle(username)}</p>
    </div>
  </Link>
);

export default UserListItem;

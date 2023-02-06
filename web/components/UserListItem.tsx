import dynamic from "next/dynamic";

import type { FC } from "react";
import type { UserListItemProps } from "../types";

const Link = dynamic(() => import("next/link"));
const Image = dynamic(() => import("next/image"));

const UserListItem: FC<UserListItemProps> = ({ username, image }) => {
  return (
    <Link
      href={`/people/${username}`}
      className="flex w-full cursor-pointer items-center p-4 duration-[250ms] hover:bg-gray-200 dark:hover:bg-semi-gray"
    >
      <Image src={image} alt={username} height={35} width={35} className="h-[35px] rounded-full" />
      <p className="ml-5">{username}</p>
    </Link>
  );
};

export default UserListItem;

import dynamic from "next/dynamic";

import type { FC } from "react";
import type { UserListItemProps } from "../types";

const Image = dynamic(() => import("next/image"));

const UserListItem: FC<UserListItemProps> = ({ username, image, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="my-5 flex w-full cursor-pointer items-center rounded-md border-2 p-5 duration-[250ms] hover:bg-gray-200 dark:border-border-gray dark:hover:bg-semi-gray"
    >
      <Image src={image} alt={username} height={35} width={35} className="h-[35px] rounded-full" />
      <p className="ml-5 leading-[1px]">{username}</p>
    </button>
  );
};

export default UserListItem;

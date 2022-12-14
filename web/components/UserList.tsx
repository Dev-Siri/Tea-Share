import dynamic from "next/dynamic";

import type { FC } from "react";
import type { UserListProps, MongoDBUser } from "../types";

const Image = dynamic(() => import("next/image"));

const UserList: FC<UserListProps> = ({ users, itemClick }) => {
  const handleItemClick = (user: MongoDBUser) => {
    itemClick.changeShowingUserInfo();
    itemClick.setSelectedUser(user);
  };

  return (
    <section className="h-screen w-[109%] self-center overflow-y-scroll rounded-tl-[10px] rounded-tr-[10px] border-t-2 border-t-gray-400 bg-white pb-40 dark:border-border-gray dark:bg-black md:w-full">
      {users.map(user => (
        <button
          onClick={() => handleItemClick(user)}
          className="m-5 flex w-[82%] cursor-pointer items-center rounded-md border-2 p-5 duration-[250ms] hover:bg-gray-200 dark:border-border-gray dark:hover:bg-semi-gray sm:w-[95%] md:w-[97%]"
          key={user?._id}
        >
          <Image src={user?.image} alt={user?.username} height={35} width={35} className="h-[35px] rounded-full" />
          <p className="ml-5 leading-[1px]">{user.username}</p>
        </button>
      ))}
    </section>
  );
};

export default UserList;

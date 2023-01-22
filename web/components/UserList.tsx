import dynamic from "next/dynamic";

import type { FC } from "react";
import type { UserListProps, MongoDBUser } from "../types";

const UserListItem = dynamic(() => import("./UserListItem"));

const UserList: FC<UserListProps> = ({ users, itemClick }) => {
  const handleItemClick = (user: MongoDBUser) => {
    itemClick.changeShowingUserInfo();
    itemClick.setSelectedUser(user);
  };

  return (
    <section className="h-screen w-full self-center overflow-y-scroll rounded-tl-[10px] rounded-tr-[10px] border-t-2 border-t-gray-400 bg-white px-4 pb-40 dark:border-border-gray dark:bg-black">
      {users.map(user => (
        <UserListItem key={user._id} username={user.username} image={user.image} onClick={() => handleItemClick(user)} />
      ))}
    </section>
  );
};

export default UserList;

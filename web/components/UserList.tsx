import React, { FC } from "react";
import Image from "next/image";

import { useStateContext } from "../context/StateContext";
import { UserListProps } from "../types";

const UserList: FC<UserListProps> = ({ users, itemClick }) => {
  const { themeMode } = useStateContext();

  return (
    <div className={`user-list ${themeMode === "dark" && "dark-list"}`}>
      {users.map((user) => (
        <div
          onClick={() => {
            itemClick.changeShowingUserInfo();
            itemClick.setSelectedUser(user);
          }}
          className={`user-list__item ${themeMode === "dark" && "dark-list__item"}`}
          key={user?._id}
        >
          <Image
            src={user?.image}
            alt={user?.username}
            height={35}
            width={35}
            style={{ borderRadius: "100%" }}
          />
          <p className="user-list__item_username">{user.username}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;

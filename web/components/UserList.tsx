import dynamic from "next/dynamic";

import type { FC } from "react";
import type { MongoDBUser, UserListProps } from "../types";

const UserListItem = dynamic(() => import("./UserListItem"));

const UserList: FC<UserListProps> = ({ title, users, onScroll, fullHeight }) => (
  <aside
    onScroll={onScroll}
    className={`w-full overflow-y-scroll rounded-xl border-2 border-light-gray bg-white pt-4 dark:border-border-gray dark:bg-black ${
      fullHeight && "h-full"
    }`}
  >
    <h1 className="ml-4 mb-4 text-xl font-medium">{title}</h1>
    <section>
      {users.map((user: MongoDBUser | Omit<Omit<MongoDBUser, "email">, "_id">, index: number) => (
        <UserListItem key={`${user.username}:${index}`} username={user.username} image={user.image} />
      ))}
    </section>
  </aside>
);

export default UserList;

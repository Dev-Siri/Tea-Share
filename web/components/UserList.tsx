import type { MongoDBUser, UserListProps } from "@types";
import type { FC } from "react";

import UserListItem from "@components/UserListItem";

const UserList: FC<UserListProps> = ({ title, users }) => (
  <aside className="h-full w-full overflow-y-auto rounded-xl border-2 border-light-gray bg-white dark:border-semi-gray dark:bg-black">
    <section className="flex w-full items-center bg-white p-2 dark:bg-black">
      <h1 className="ml-2 mt-2 hidden text-xl font-medium min-[500px]:block">{title}</h1>
    </section>
    <section role="list">
      {users.map((user: Pick<MongoDBUser, "username" | "image">, index: number) => (
        <UserListItem key={`${user.username}:${index}`} {...user} />
      ))}
    </section>
  </aside>
);

export default UserList;

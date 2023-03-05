"use client";
import { useState, type FC, type UIEventHandler } from "react";

import type { MongoDBUser, UserPresenterProps } from "@types";

import { fetchUsers } from "@api/fetchers";
import { INITIAL_PAGE_LIMIT } from "@constants/limit";

import UserListItem from "@components/UserListItem";

let currentPage: number = INITIAL_PAGE_LIMIT;

const UserList: FC<UserPresenterProps> = ({ title, limit, initialUsers }) => {
  const [users, setUsers] = useState<Pick<MongoDBUser, "username" | "image">[]>(initialUsers);

  const handleListScroll: UIEventHandler<HTMLElement> = async (event: any) => {
    const { scrollHeight, scrollTop, clientHeight } = event.target;

    const didScrollToBottom: boolean = scrollHeight - scrollTop === clientHeight;

    if (didScrollToBottom) {
      currentPage++;

      const users: MongoDBUser[] = await fetchUsers(currentPage, limit!);

      setUsers(prevUsers => [...prevUsers, ...users]);
    }
  };

  return (
    <aside
      className="h-full w-full overflow-y-auto rounded-xl border-2 border-light-gray bg-white dark:border-semi-gray dark:bg-black"
      onScroll={handleListScroll}
    >
      <section className="fixed flex h-[8%] w-full items-center bg-white p-2 dark:bg-black">
        <h1 className="ml-4 hidden text-xl font-medium min-[500px]:block">{title}</h1>
      </section>
      <section role="list" className="mt-14">
        {users.map((user: Pick<MongoDBUser, "username" | "image">, index: number) => (
          <UserListItem key={`${user.username}:${index}`} {...user} />
        ))}
      </section>
    </aside>
  );
};

export default UserList;

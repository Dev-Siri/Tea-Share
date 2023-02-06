import dynamic from "next/dynamic";
import { useState, type UIEventHandler } from "react";

import type { AllUsersViewProps, MongoDBUser } from "@types";
import type { GetStaticProps, NextPage } from "next";

import { CLIENT_USER_LIMIT, INITIAL_PAGE_LIMIT, PAGE_INC_COUNT, SERVER_USER_LIMIT } from "@constants/limit";
import useDidMountEffect from "@hooks/useDidMountEffect";

const SearchBar = dynamic(() => import("@components/SearchBar"));
const UserList = dynamic(() => import("@components/UserList"));

const AllUsersView: NextPage<AllUsersViewProps> = ({ users }) => {
  const [reactiveUsers, setReactiveUsers] = useState<MongoDBUser[]>(users);
  const [currentPage, setCurrentPage] = useState<number>(INITIAL_PAGE_LIMIT);

  const handleSearch = (searchTerm: string): void => {
    if (!searchTerm) return setReactiveUsers(users);

    const searchedUsers = users.filter(user => user?.username.toLowerCase().includes(searchTerm.toLowerCase()));
    setReactiveUsers(searchedUsers);
  };

  useDidMountEffect(() => {
    const fetchMoreUsers = async () => {
      const { fetchUsers } = await import("@api/client");

      const fetchedUsers: MongoDBUser[] = await fetchUsers(currentPage, CLIENT_USER_LIMIT);

      setReactiveUsers((prevReactiveUsers: MongoDBUser[]) => [...prevReactiveUsers, ...fetchedUsers]);
    };

    fetchMoreUsers();
  }, [currentPage]);

  const onUserListScroll: UIEventHandler<HTMLElement> = (event: any) => {
    const didScrollToBottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;

    if (didScrollToBottom) setCurrentPage(prevCurrentPage => prevCurrentPage + PAGE_INC_COUNT);
  };

  return (
    <aside className="h-screen w-screen">
      <section className="flex w-full justify-center p-4">
        <SearchBar onSearch={handleSearch} noBorder />
      </section>
      <section className="h-[87%] overflow-y-auto">
        <UserList fullHeight title="People" onScroll={onUserListScroll} users={reactiveUsers} />
      </section>
    </aside>
  );
};

export const getStaticProps: GetStaticProps<AllUsersViewProps> = async () => {
  const { fetchUsers } = await import("@api/client");
  const users: MongoDBUser[] = await fetchUsers(INITIAL_PAGE_LIMIT, SERVER_USER_LIMIT);

  return {
    props: { users },
    revalidate: 3,
  };
};

export default AllUsersView;

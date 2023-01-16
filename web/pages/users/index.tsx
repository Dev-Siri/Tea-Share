import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import type { NextPage, GetServerSideProps } from "next";
import type { AllUsersViewProps, MongoDBUser } from "../../types";

import useStateContext from "../../hooks/useStateContext";
import { INITIAL_PAGE_LIMIT, CLIENT_USER_LIMIT, SERVER_USER_LIMIT } from "../../constants/limit";

import Sidebar from "../../components/Sidebar";
const SearchBar = dynamic(() => import("../../components/SearchBar"));
const UserList = dynamic(() => import("../../components/UserList"));
const UserView = dynamic(() => import("../../components/UserView"));

const AllUsersView: NextPage<AllUsersViewProps> = ({ users }) => {
  const { searchTerm } = useStateContext();
  const [reactiveUsers, setReactiveUsers] = useState<MongoDBUser[]>(users);
  const [showUserInfo, setShowUserInfo] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(INITIAL_PAGE_LIMIT);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<MongoDBUser | null>(null);

  const handleSearch = () => {
    if (!searchTerm) return setReactiveUsers(users);

    const searchedUsers = users.filter(user => user?.username.toLowerCase().includes(searchTerm.toLowerCase()));
    setReactiveUsers(searchedUsers);
  };

  useEffect(() => {
    const fetchMoreUsers = async () => {
      setLoading(true);
      const { fetchUsers } = await import("../../api");

      const response: Response = await fetchUsers(currentPage, CLIENT_USER_LIMIT);
      const fetchedUsers: MongoDBUser[] = await response.json();

      if (reactiveUsers.length === SERVER_USER_LIMIT) {
        setReactiveUsers(fetchedUsers);
      } else {
        setReactiveUsers([...reactiveUsers, ...fetchedUsers]);
      }

      setLoading(false);
    };

    fetchMoreUsers();
  }, [currentPage]);

  return (
    <article className="flex dark:bg-dark-gray dark:text-white">
      <Sidebar
        route="users"
        scrollingOptions={{
          loading,
          setCurrentPage,
        }}
      />
      <div className="w-[82%]">
        <SearchBar onSearch={handleSearch} noBorder />
        <UserList users={reactiveUsers} itemClick={{ changeShowingUserInfo: () => setShowUserInfo(true), setSelectedUser }} />
      </div>
      {showUserInfo && <UserView user={selectedUser} closeMenu={() => setShowUserInfo(false)} />}
    </article>
  );
};

export const getServerSideProps: GetServerSideProps<AllUsersViewProps> = async () => {
  const { fetchUsers } = await import("../../api");
  const response: Response = await fetchUsers(INITIAL_PAGE_LIMIT, SERVER_USER_LIMIT);
  const users: MongoDBUser[] = await response.json();

  return {
    props: { users },
  };
};

export default AllUsersView;

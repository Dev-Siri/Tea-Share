import { useState } from "react";
import dynamic from "next/dynamic";

import type { NextPage, GetServerSideProps } from "next";
import type { AllUsersViewProps, MongoDBUser } from "../../types";

import useStateContext from "../../hooks/useStateContext";

import Sidebar from "../../components/Sidebar";
import { BsFillPeopleFill } from "react-icons/bs";
const SearchBar = dynamic(() => import("../../components/SearchBar"));
const UserList = dynamic(() => import("../../components/UserList"));
const UserView = dynamic(() => import("../../components/UserView"));

const AllUsersView: NextPage<AllUsersViewProps> = ({ users }) => {
  const { searchTerm } = useStateContext();
  const [reactiveUsers, setReactiveUsers] = useState<MongoDBUser[]>(users);
  const [showUserInfo, setShowUserInfo] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<MongoDBUser | null>(null);

  const handleSearch = () => {
    if (!searchTerm) return setReactiveUsers(users);

    const searchedUsers = users.filter(user => user?.username.toLowerCase().includes(searchTerm.toLowerCase()));
    setReactiveUsers(searchedUsers);
  };

  return (
    <article className="flex dark:bg-black dark:text-white">
      <Sidebar route="users" />
      <div className="w-[80%]">
        <div className="mt-5 flex flex-col justify-center pl-[50px]">
          <div className="flex items-center">
            <h1 className="mr-[10px] text-3xl font-bold leading-[1px]">Users</h1>
            <BsFillPeopleFill size={40} />
          </div>
        </div>
        <SearchBar onSearch={handleSearch} />
        <UserList users={reactiveUsers} itemClick={{ changeShowingUserInfo: () => setShowUserInfo(true), setSelectedUser }} />
      </div>
      {showUserInfo && <UserView user={selectedUser} closeMenu={() => setShowUserInfo(false)} />}
    </article>
  );
};

export const getServerSideProps: GetServerSideProps<AllUsersViewProps> = async () => {
  const { fetchUsers } = await import("../../api");
  const { data: users } = await fetchUsers();

  return {
    props: { users },
  };
};

export default AllUsersView;

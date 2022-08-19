import React, { useState, FC } from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';

import { AllUsersViewProps, MongoDBUserType } from '../../types';
import { fetchUsers } from '../../api';
import { useStateContext } from '../../context/StateContext';
import { Sidebar, SearchBar, UserList, UserView } from '../../components';

const AllUsersView: FC<AllUsersViewProps> = ({ users }) => {
  const { themeMode, searchTerm } = useStateContext();
  const [reactiveUsers, setReactiveUsers] = useState<MongoDBUserType[]>(users);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [selectedUser, setSelectedUser] = useState<MongoDBUserType | null>(null);

  const handleSearch = () => {
    if (!searchTerm) return setReactiveUsers(users);

    const searchedUsers = users.filter((user: MongoDBUserType) => user?.username.toLowerCase().includes(searchTerm.toLowerCase()));
    setReactiveUsers(searchedUsers);
  };

  return (
    <div className={`show-all-user ${themeMode === 'dark' && 'dark-page'}`}>
      <Sidebar isActive="users" />
      <div className="show-all-user__container">
        <div className="show-all-user__container_header">
          <div className="show-all-user__container_header-large_container">
            <h1 className="show-all-user__container_header-title">Users</h1>
            <BsFillPeopleFill size={40} />
          </div>
        </div>
        <div>
          <SearchBar handleSearch={handleSearch} />
        </div>
        <UserList users={reactiveUsers} itemClick={{ changeShowingUserInfo: () => setShowUserInfo(true), setSelectedUser }} />
      </div>
      {showUserInfo && (
        <UserView user={selectedUser} closeMenu={() => setShowUserInfo(false)} />
      )}
    </div>
  );
};

export async function getServerSideProps() {
  const { data: users } = await fetchUsers();

  return { props: { users } };
}

export default AllUsersView;

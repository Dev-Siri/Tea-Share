import React from 'react';
import type { ProfileProps } from '../../types';
import type { NextPage } from 'next';
import Image from 'next/image';

import { fetchPostByQuery, fetchUserByQuery } from '../../api';
import { Sidebar, Post } from '../../components';
import { useStateContext } from '../../context/StateContext';

const Profile: NextPage<ProfileProps> = ({ user, posts }) => {
  const { username, image } = user;

  const { themeMode } = useStateContext();

  return (
    <div className={`profile ${themeMode === 'dark' && 'dark-page'}`}>
      <Sidebar isActive="profile" />
      <div className="profile__main">
        <div className="profile__main-container">
          <div className="profile__main-container_img">
            <Image
              src={image}
              alt={username}
              height="100px"
              width="100px"
              style={{ borderRadius: '75px' }}
            />
          </div>
          <h1 className="profile__main-container_name">{username}</h1>
          <h3>
            Posts by {username} ({posts?.length})
          </h3>
          <div className="profile__main-container_post-container">
            {posts?.map((post) => (
              <Post key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const { name } = context.params;

  const { data: posts } = await fetchPostByQuery(name);
  const { data: user } = await fetchUserByQuery(name);

  return {
    props: { user, posts },
  };
}

export default Profile;

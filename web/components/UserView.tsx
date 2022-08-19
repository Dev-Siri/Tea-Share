import React, { FC, useState, useEffect } from 'react';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';

import { SidePost } from "./";
import { useStateContext } from '../context/StateContext';
import { fetchPostBySearchTerm as fetchPostsByQuery } from '../api';
import type { UserSideViewProps, PostType } from '../types';

const UserPreview: FC<UserSideViewProps> = ({ closeMenu, user }) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const { themeMode } = useStateContext();

  useEffect(() => {
    const fetchPosts = async () => {
      const { data: posts } = await fetchPostsByQuery(user?.username as string);
      setPosts(posts);
    }

    fetchPosts();
  }, [user]);

  return (
    <div className={`user-side-view ${themeMode === 'dark' && 'user-side-dark-view'}`}>
      <MdCancel size={33} style={{ margin: '10px', cursor: 'pointer' }} onClick={closeMenu} />
      <div className="user-side-view__container">
        <div className="user-side-view__container__image">
          <Image
            src={user?.image as string}
            alt={user?.username}
            height={200}
            width={200}
            style={{ borderRadius: '100%' }}
          />
        </div>
        <div>
          <h1>Posts by {user?.username}</h1>
        </div>
        <div>
          {posts?.map(post => <SidePost key={post._id} post={post} />)}
        </div>
      </div>
    </div>
  );
};

export default UserPreview;
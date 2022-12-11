import React, { type FC, useState, useEffect } from "react";
import { MdCancel } from "react-icons/md";
import dynamic from "next/dynamic";

import { fetchPostByQuery } from "../api";
import type { UserSideViewProps, Post } from "../types";

const SidePost = dynamic(() => import("./SidePost"));
const Image = dynamic(() => import("next/image"));

const UserPreview: FC<UserSideViewProps> = ({ closeMenu, user }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data: posts } = await fetchPostByQuery(`${user?.username}`);
      setPosts(posts);
    };

    fetchPosts();
  }, [user]);

  return (
    <section className="border-l-gray absolute ml-20 h-screen w-[400px] border-l-4 bg-light-gray dark:border-semi-gray dark:bg-dark-gray dark:text-white sm:ml-[40%] md:ml-[70.7%]">
      <MdCancel title="Close menu" size={33} className="m-[10px] cursor-pointer" onClick={closeMenu} />
      <div className="flex h-full w-full flex-col items-center overflow-y-auto pb-20">
        <div className="flex flex-col items-center rounded-md bg-white p-9 dark:bg-semi-gray">
          <Image
            src={`${user?.image}`}
            alt={`${user?.username}`}
            height={200}
            width={200}
            className="mt-5 rounded-full border-2 border-dark-gray bg-dark-gray p-1"
          />
          <h1 className="mt-3 max-w-[300px] break-words text-center text-3xl font-bold">{user?.username}</h1>
          <h1 className="mt-1 text-xl text-gray-500">@{user?.username?.toLowerCase().split(" ").join("-")}</h1>
        </div>
        {posts?.length ? (
          posts?.map(post => <SidePost key={post._id} post={post} />)
        ) : (
          <p className="mt-20 text-gray-500">No posts from {user?.username}</p>
        )}
      </div>
    </section>
  );
};

export default UserPreview;

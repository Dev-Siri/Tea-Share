import React, { useEffect } from "react";
import type { ProfileProps, Post } from "../../types";
import type { NextPage, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import { fetchPostByQuery, fetchUserByQuery } from "../../api";

import Sidebar from "../../components/Sidebar";
const Post = dynamic(() => import("../../components/Post"));
const Image = dynamic(() => import("next/image"));

const Profile: NextPage<ProfileProps> = ({ user, posts }) => {
  const { username, image } = user;

  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") as string);

    if (!user?.displayName) router.push(`/users/${user?.displayName}`);
  }, []);

  return (
    <section className="flex h-screen dark:bg-black dark:text-white">
      <Sidebar route="profile" />
      <article className="h-full w-[82%] overflow-y-auto">
        <div className="flex flex-col items-center">
          <div className="mt-[50px] flex w-[80%] flex-col items-center rounded-md bg-light-gray p-12 dark:bg-dark-gray sm:ml-5 md:ml-0 md:w-[30%] md:flex-row md:items-start lg:w-1/2">
            {user ? (
              <>
                <Image src={image} alt={username} height={130} width={130} className="rounded-full" />
                <div className="mt-4 text-center md:mt-0 md:ml-8 md:text-start">
                  <h1 className="text-3xl font-bold">{username}</h1>
                  <h2 className="text-xl text-gray-500">@{username?.toLowerCase()?.split(" ")?.join("-")}</h2>
                  <h3 className="mt-2 text-xl">
                    Posts by {username} ({posts?.length})
                  </h3>
                </div>
              </>
            ) : (
              <h1 className="text-3xl font-bold">Loading user...</h1>
            )}
          </div>
          <aside className="mt-6 grid grid-cols-1 place-items-center xl:grid-cols-2">
            {posts?.map(post => (
              <Post key={post._id} post={post} />
            ))}
          </aside>
        </div>
      </article>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps<ProfileProps> = async ({ params }) => {
  const { data: posts } = await fetchPostByQuery(params?.name as string);
  const { data: user } = await fetchUserByQuery(params?.name as string);

  return {
    props: { user, posts },
  };
};

export default Profile;

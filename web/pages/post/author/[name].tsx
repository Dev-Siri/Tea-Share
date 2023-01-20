import { useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import type { NextPage, GetServerSideProps } from "next";
import type { MongoDBUser, Post, PostAuthorProps } from "../../../types";

import Sidebar from "../../../components/Sidebar";
const Post = dynamic(() => import("../../../components/Post"));
const Image = dynamic(() => import("next/image"));

const Author: NextPage<PostAuthorProps> = ({ user, posts }) => {
  const { username, image } = user;

  const router = useRouter();
  const { post } = router.query;

  useEffect(() => {
    if (!user) location.reload();
  }, []);

  return (
    <section className="flex h-screen bg-white dark:bg-dark-gray dark:text-white">
      <Sidebar route="post-author-info" isOnPostInfo={{ visible: true, title: "View Post", href: `/post/${post}`, postedBy: username }} />
      <article className="h-full w-[82%] overflow-y-auto">
        <div className="flex flex-col items-center">
          <div className="mt-[50px] flex w-[80%] flex-col items-center rounded-md border-2 border-light-gray bg-white p-12 dark:border-border-gray dark:bg-black sm:ml-5 md:ml-0 md:w-[30%] md:flex-row md:items-start lg:w-1/2">
            {user ? (
              <>
                <Image src={image} alt={username} height={130} width={130} className="h-[130px] rounded-full" />
                <div className="mt-4 text-center md:mt-0 md:ml-8 md:text-start">
                  <h1 className="text-3xl font-bold">{username}</h1>
                  <h2 className="text-xl text-gray-500">@{username?.toLowerCase().split(" ").join("-")}</h2>
                  <h3 className="mt-2 text-xl">
                    Posts by {username} ({posts?.length})
                  </h3>
                </div>
              </>
            ) : (
              <h1 className="text-3xl font-bold">Loading user...</h1>
            )}
          </div>
          <aside className="mt-6 mr-10 grid grid-cols-1 place-items-center sm:mr-0 xl:grid-cols-2">
            {posts?.map(post => (
              <Post key={post._id} post={post} />
            ))}
          </aside>
        </div>
      </article>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps<PostAuthorProps> = async ({ params }) => {
  const { fetchUserByQuery, fetchPostByQuery } = await import("../../../api");

  const posts: Post[] = await fetchPostByQuery(params?.name as string);
  const user: MongoDBUser = await fetchUserByQuery(params?.name as string);

  return {
    props: { user, posts },
  };
};

export default Author;

import { useState, useEffect } from "react";
import { type NextRouter, useRouter } from "next/router";
import dynamic from "next/dynamic";

import type { User as FirebaseUser } from "firebase/auth";
import type { ProfileProps, Post, MongoDBUser } from "../../types";
import type { NextPage, GetServerSideProps } from "next";
import { getBannerImage } from "../../utils/globals";

const Sidebar = dynamic(() => import("../../components/Sidebar"));
const Post = dynamic(() => import("../../components/Post"));
const Image = dynamic(() => import("next/image"));

const Profile: NextPage<ProfileProps> = ({ user, posts }) => {
  const [isSSR, setIsSSR] = useState(true);

  const { username, image } = user;
  const router: NextRouter = useRouter();

  useEffect(() => {
    const user: FirebaseUser = JSON.parse(localStorage.getItem("user") as string);

    if (!user?.displayName) router.push(`/users/${user?.displayName}`);

    setIsSSR(false);
  }, []);

  return (
    <section className="flex h-screen dark:bg-dark-gray dark:text-white">
      <Sidebar route="profile" />
      <article className="h-full w-[82%] overflow-y-auto">
        <div className="flex flex-col items-center">
          {!isSSR && (
            <Image
              src={getBannerImage([window.innerWidth, window.innerHeight - 350], ["technology", "nature", "photography", "travel"])}
              alt="Banner Image"
              height={window.innerHeight - 350}
              width={window.innerWidth}
            />
          )}
          <div className="-mt-28 flex w-[80%] flex-col items-center rounded-md border-2 border-light-gray p-12 dark:border-border-gray dark:bg-black sm:ml-5 md:ml-0 md:w-[30%] md:flex-row md:items-start lg:w-1/2">
            {user ? (
              <>
                <Image src={image} alt={username} height={130} width={130} className="h-[130px] rounded-full" />
                <div className="mt-4 text-center md:mt-0 md:ml-8 md:text-start">
                  <h1 className="text-3xl font-bold">{username}</h1>
                  <h2 className="text-xl text-gray-500">@{username?.toLowerCase()?.split(" ")?.join("-")}</h2>
                  <h3 className="mt-2 text-xl">
                    {posts?.length} Posts By {username}
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
  const { fetchPostByQuery, fetchUserByQuery } = await import("../../api");

  const [posts, user]: [Post[], MongoDBUser] = await Promise.all([
    fetchPostByQuery(params?.name as string),
    fetchUserByQuery(params?.name as string),
  ]);

  return {
    props: { user, posts },
  };
};

export default Profile;

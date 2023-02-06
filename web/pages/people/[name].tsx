import dynamic from "next/dynamic";
import { useRouter, type NextRouter } from "next/router";
import { useEffect, useState } from "react";

import type { MongoDBUser, Post as PostType, ProfileProps } from "@types";
import type { User as FirebaseUser } from "firebase/auth";
import type { GetServerSideProps, NextPage } from "next";

import { getBannerImage, getHandle } from "@utils/globals";

const Post = dynamic(() => import("@components/Post"));
const Image = dynamic(() => import("next/image"));

const Profile: NextPage<ProfileProps> = ({ user, posts }) => {
  const [isSSR, setIsSSR] = useState(true);

  const { username, image } = user;
  const router: NextRouter = useRouter();

  useEffect(() => {
    const user: FirebaseUser = JSON.parse(localStorage.getItem("user") as string);

    if (!user?.displayName) router.push(`/people/${user?.displayName}`);

    setIsSSR(false);
  }, [router]);

  return (
    <section className="grid h-screen place-items-center overflow-y-auto">
      {!isSSR && (
        <Image
          src={getBannerImage([window.innerWidth, window.innerHeight - 400], ["technology", "nature", "travel"])}
          alt="Banner Image"
          height={window.innerHeight - 400}
          width={window.innerWidth}
        />
      )}
      <div className="-mt-28 flex w-[80%] flex-col items-center rounded-md border-2 border-light-gray bg-white p-12 dark:border-border-gray dark:bg-black sm:ml-5 md:ml-0 md:w-[30%] md:flex-row md:items-start lg:w-1/2">
        {user ? (
          <>
            <Image src={image} alt={username} height={130} width={130} className="h-[130px] rounded-full" />
            <div className="mt-4 text-center md:mt-0 md:ml-8 md:text-start">
              <h1 className="text-3xl font-bold">{username}</h1>
              <h2 className="text-xl text-gray-500">{getHandle(username)}</h2>
              <h3 className="mt-2 text-xl">
                {posts?.length} Posts By {username}
              </h3>
            </div>
          </>
        ) : (
          <h1 className="text-3xl font-bold">Loading user...</h1>
        )}
      </div>
      <aside className="mt-6 w-[90%] place-items-center pb-10">
        {posts?.map((post: PostType, index: number) => (
          <Post key={`${post._id}:${index}`} post={post} />
        ))}
      </aside>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps<ProfileProps> = async ({ params }) => {
  const { fetchPostByQuery, fetchUserByQuery } = await import("@api/client");

  const [posts, user]: [PostType[], MongoDBUser] = await Promise.all([
    fetchPostByQuery(params?.name as string),
    fetchUserByQuery(params?.name as string),
  ]);

  return {
    props: { user, posts },
  };
};

export default Profile;

import { notFound } from "next/navigation";

import type { GenerateMetadata, MongoDBUser, PageComponent, Post } from "@/types";

import { fetchPostsByQuery, fetchUsersByName } from "@/api/fetchers";

import PostList from "@/components/PostList";
import UserInfo from "@/components/UserInfo";

export const generateMetadata: GenerateMetadata = async ({ params: { name } }) => {
  const user = (await fetchUsersByName(name, { cache: "no-store" }, true)) as MongoDBUser;

  if (!user) notFound();

  const { username, image } = user;
  const title = `${username}'s Profile`;
  const description = `Visit ${title} on Tea Share.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          height: 600,
          width: 600,
          url: image,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: {
        url: image,
        alt: name,
      },
    },
  };
};

const Profile: PageComponent = async ({ params: { name } }) => {
  const [posts, user] = await Promise.all([fetchPostsByQuery(name, { cache: "no-store" }), fetchUsersByName(name, { cache: "no-store" }, true)]);

  if (!user) notFound();

  return (
    <article className="grid h-screen place-items-center overflow-y-auto">
      <UserInfo user={user as MongoDBUser} postsLength={(posts as Post[]).length} />
      <div className="mt-6 w-[90%]">
        <PostList posts={posts as Post[]} />
      </div>
    </article>
  );
};

export default Profile;

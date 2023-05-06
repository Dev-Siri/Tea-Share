import { notFound } from "next/navigation";

import type { GenerateMetadata, PageComponent, Post } from "@/types";

import { fetchPostsByQuery, fetchUsersByName } from "@/services/fetchers";

import PostList from "@/components/PostList";
import UserInfo from "@/components/UserInfo";

interface Props {
  params: {
    name: string;
  };
}

export const generateMetadata: GenerateMetadata<Props> = async ({ params: { name } }) => {
  const users = await fetchUsersByName(name, { cache: "no-store" }, true);

  if (!users?.[0]) notFound();

  const { username, image } = users[0];
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

const Profile: PageComponent<Props> = async ({ params: { name } }) => {
  const [posts, users] = await Promise.all([fetchPostsByQuery(name, { cache: "no-store" }), fetchUsersByName(name, { cache: "no-store" }, true)]);

  if (!users?.[0]) notFound();

  return (
    <article className="grid h-screen place-items-center overflow-y-auto">
      <UserInfo user={users[0]} postsLength={(posts as Post[]).length} />
      <div className="mt-6 w-[90%]">
        <PostList posts={posts as Post[]} />
      </div>
    </article>
  );
};

export default Profile;

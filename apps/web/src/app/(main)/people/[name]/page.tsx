import { notFound } from "next/navigation";

import type { GenerateMetadata, MongoDBUser, PageComponent, Post } from "@/types";

import queryClient from "@/services/queryClient";

import PostList from "@/components/ui/posts/PostList";
import UserInfo from "@/components/ui/users/UserInfo";

interface Props {
  params: {
    name: string;
  };
}

export const generateMetadata: GenerateMetadata<Props> = async ({ params: { name } }) => {
  const users = await queryClient<MongoDBUser[] | null>("/users/search", {
    cache: "no-store",
    searchParams: {
      name,
      exact: true,
    },
  });

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
  const [posts, users] = await Promise.all([
    queryClient<Post[] | null>("/posts/search", {
      cache: "no-store",
      searchParams: {
        q: name,
        fromUser: true,
      },
    }),
    queryClient<MongoDBUser[] | null>("/users/search", {
      cache: "no-store",
      searchParams: {
        name,
        exact: true,
      },
    }),
  ]);

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

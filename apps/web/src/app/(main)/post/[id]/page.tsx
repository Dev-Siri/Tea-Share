import { notFound } from "next/navigation";

import type { Post } from "@/types";
import type { Metadata } from "next";

import queryClient from "@/services/queryClient";
import { getRelativeTime } from "@/utils/globals";

import UserList from "@/components/ui/users/UserList";

import Image from "next/image";
import Link from "next/link";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params: { id } }: Props) {
  const posts = await queryClient<Post[] | null>("/posts/search", {
    cache: "no-store",
    searchParams: {
      q: id,
      fromUser: false,
    },
  });

  if (!posts?.[0]) notFound();

  const { title, description, image } = posts[0];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://tea-share.vercel.app/post/${id}`,
      images: [
        {
          width: 1080,
          height: 1920,
          url: image,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: {
        url: image,
        alt: "Post Image",
      },
    },
  } satisfies Metadata;
}

export default async function PostInfo({ params: { id } }: Props) {
  const [posts, otherPosts] = await Promise.all([
    queryClient<Post[] | null>("/posts/search", {
      cache: "no-store",
      searchParams: {
        q: id,
        fromUser: false,
      },
    }),
    queryClient<Post[]>("/posts", {
      cache: "no-store",
      searchParams: {
        page: 1,
        limit: 12,
      },
    }),
  ]);

  if (!posts?.[0]) notFound();

  const { title, description, createdAt, image, author, authorImage, people, peopleImage, _id } = posts[0];

  return (
    <article className="h-screen w-full items-center overflow-hidden overflow-y-auto xl:flex-row xl:items-start">
      <section className="mt-[30px] w-full pl-2 pr-4 sm:pl-[60px] md:pr-14">
        <div className="border-light-gray dark:border-semi-gray mb-4 h-fit w-full rounded-md border-2 p-8 dark:bg-black xl:mb-0">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="mt-4 w-[200px] sm:w-full">{description}</p>
          <p className="border-b-semi-gray mb-2 border-b-[1px] pb-2 sm:max-w-full">{getRelativeTime(createdAt)}</p>
          <div className="border-b-semi-gray flex items-center border-b-[1px] pb-2">
            <Link href={`/people/${author}`}>
              <Image height={30} width={30} src={authorImage} alt={author} className="mr-10px hidden h-[30px] rounded-full md:inline" />
            </Link>
            <p>Posted by {author}</p>
          </div>
        </div>
        <section className="flex flex-col justify-between md:flex-row">
          <div className="bg-light-gray dark:border-semi-gray mt-4 h-fit w-fit rounded-md border-2 p-8 dark:bg-black">
            <Image
              height={450}
              width={450}
              src={image}
              alt={title}
              className="border-primary rounded-md border-2 object-cover md:h-[450px] md:w-[450px]"
            />
          </div>
          <div className="mt-4 w-full md:ml-4">
            <UserList
              title="People who liked this post"
              users={people.map((person, index) => ({
                username: person,
                image: peopleImage[index],
              }))}
            />
          </div>
        </section>
      </section>
      <section className="mt-[30px] w-full pl-2 pr-4 sm:pl-[60px] md:pr-14">
        <div className="border-light-gray dark:border-semi-gray h-fit w-full rounded-md border-2 p-8 dark:bg-black xl:mb-0">
          <h1 className="text-4xl font-bold">Other Posts</h1>
        </div>
      </section>
      <section className="marquee relative h-full w-[180%] overflow-x-hidden">
        <div className="track absolute w-[180%] whitespace-nowrap pb-4 pt-10 will-change-transform">
          {otherPosts
            .filter(post => post._id !== _id)
            .map((post, index) => (
              <Link
                href={`/post/${post._id}`}
                className="inline-block aspect-square h-[400px] w-[400px] pl-10 duration-200 hover:scale-105"
                key={`${post._id}:${index}`}
              >
                <Image
                  height={500}
                  width={500}
                  src={post.image}
                  key={`${post._id}:${index}`}
                  alt={post.title}
                  className="aspect-square h-[400px] w-[400px] rounded-md object-cover "
                />
              </Link>
            ))}
        </div>
      </section>
    </article>
  );
}

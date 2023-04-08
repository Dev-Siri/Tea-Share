import lazy from "next/dynamic";
import { notFound } from "next/navigation";

import type { GenerateMetadata, PageComponent } from "@/types";

import { fetchPostsByQuery } from "@/api/fetchers";
import { PAGE_URL } from "@/constants/pageInfo";
import { getRelativeTime } from "@/utils/globals";

import UserList from "@/components/UserList";

const Image = lazy(() => import("next/image"));
const Link = lazy(() => import("next/link"));

export const generateMetadata: GenerateMetadata = async ({ params: { id } }) => {
  const posts = await fetchPostsByQuery(id, { cache: "no-store" }, false);

  if (!posts?.[0]) notFound();

  const { title, description, image } = posts[0];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${PAGE_URL}/post/${id}`,
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
  };
};

const PostInfo: PageComponent = async ({ params: { id } }) => {
  const posts = await fetchPostsByQuery(id, { cache: "no-store" }, false);

  if (!posts?.[0]) notFound();

  const { title, description, createdAt, image, author, authorImage, people, peopleImage } = posts[0];

  return (
    <article className="flex h-screen w-full flex-col items-center overflow-y-auto pb-[10%] pl-2 sm:pl-[60px] xl:flex-row xl:items-start">
      <section className="mt-[30px] w-full pr-4 md:pr-14">
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
              height={300}
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
    </article>
  );
};

export default PostInfo;

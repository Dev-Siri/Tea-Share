import dynamic from "next/dynamic";

import type { Post, PostInfoProps } from "@types";
import type { GetServerSideProps, NextPage } from "next";

import useStateContext from "@hooks/useStateContext";
import { getRelativeTime } from "@utils/globals";

const UserList = dynamic(() => import("@components/UserList"));
const Link = dynamic(() => import("next/link"));
const Image = dynamic(() => import("next/image"));

const PostInfo: NextPage<PostInfoProps> = ({ post }) => {
  const { themeColor } = useStateContext();

  const { title, description, createdAt, image, author, authorImage, people, peopleImage } = post;

  return (
    <article className="mt-[30px] flex h-screen w-full flex-col items-center overflow-y-auto pb-16 pl-2 sm:pl-[60px] xl:flex-row xl:items-start">
      <section className="w-full pr-4 md:pr-14">
        <div className="mb-4 h-fit w-full rounded-md border-2 border-light-gray p-8 dark:border-border-gray dark:bg-black xl:mb-0">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="mt-4 w-[200px] sm:w-full">{description}</p>
          <p className="mb-2 border-b-[1px] border-b-semi-gray pb-2 sm:max-w-full">{getRelativeTime(new Date(createdAt))}</p>
          <div className="flex items-center border-b-[1px] border-b-semi-gray pb-2">
            <Link href={`/people/${author}`}>
              <Image height={30} width={30} src={authorImage} alt={author} className="mr-[10px] hidden h-[30px] rounded-full md:inline" />
            </Link>
            <p>Posted by {author}</p>
          </div>
        </div>
        <section className="flex flex-col justify-between md:flex-row">
          <div className="mt-4 h-fit w-fit rounded-md border-2 bg-light-gray p-8 dark:border-border-gray dark:bg-black">
            <Image
              height={300}
              width={450}
              src={image}
              alt={title}
              style={{ borderColor: themeColor }}
              className="rounded-md border-2 object-cover md:h-[450px] md:w-[450px]"
            />
          </div>
          <div className="mt-4 w-full md:ml-4">
            <UserList
              title="People who liked this post"
              users={people.map((person: string, index: number) => ({
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

export const getServerSideProps: GetServerSideProps<PostInfoProps> = async ({ params }) => {
  try {
    const { fetchPostByQuery } = await import("@api/client");

    const posts: Post[] = await fetchPostByQuery(params?.name as string, false);

    return {
      props: { post: posts[0] ?? null },
    };
  } catch {
    return { notFound: true };
  }
};

export default PostInfo;

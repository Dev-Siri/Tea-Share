import { type NextRouter, useRouter } from "next/router";
import dynamic from "next/dynamic";

import type { GetServerSideProps, NextPage } from "next";
import type { PostInfoProps } from "../../types";

import { PostTime } from "../../utils/posts";

import Sidebar from "../../components/Sidebar";
const Link = dynamic(() => import("next/link"));
const Image = dynamic(() => import("next/image"));

const PostInfo: NextPage<PostInfoProps> = ({ post }) => {
  const router: NextRouter = useRouter();
  const { name } = router.query;

  const { title, description, createdAt, image, author, authorImage, _id } = post;

  return (
    <section className="flex dark:bg-black dark:text-white">
      <Sidebar route="post-info" isOnPostInfo={{ visible: true, title, _id, href: `/post/${name}`, postedBy: author }} />
      <article className="mt-[30px] flex w-[82%] flex-col items-center pl-2 sm:pl-[60px] xl:flex-row xl:items-start">
        <div className="mb-4 h-fit w-fit rounded-md bg-light-gray p-8 dark:bg-dark-gray xl:mb-0">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="mt-4 w-[200px] sm:w-[400px]">{description}</p>
          <p className="mb-2 max-w-[300px] border-b-[1px] border-b-semi-gray pb-2 sm:max-w-[500px]">{PostTime(createdAt)}</p>
          <div className="flex items-center border-b-[1px] border-b-semi-gray pb-2">
            <p>Posted by {author}</p>
            <Link href={`/users/${author}`}>
              <Image height={30} width={30} src={authorImage} alt={author} className="ml-[10px] hidden rounded-full md:inline" />
            </Link>
          </div>
        </div>
        <div className="h-fit w-fit rounded-md bg-light-gray p-8 dark:bg-dark-gray xl:ml-[5%]">
          <Image
            height={450}
            width={450}
            src={image}
            alt={title}
            className="h-[300px] w-[300px] rounded-md border-2 border-primary md:h-[450px] md:w-[450px]"
          />
        </div>
      </article>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps<PostInfoProps> = async ({ params }) => {
  const { fetchPostByQuery } = await import("../../api");
  const { data } = await fetchPostByQuery(params?.name as string, false);

  if (!data[0]) return { notFound: true };

  return {
    props: { post: data[0] ?? null },
  };
};

export default PostInfo;

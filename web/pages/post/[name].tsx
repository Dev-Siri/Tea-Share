import { NextRouter, useRouter } from "next/router";
import dynamic from "next/dynamic";

import type { GetServerSideProps, NextPage } from "next";
import type { PostInfoProps } from "../../types";

import { fetchPostByQuery } from "../../api";
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
      <article className="mt-[30px] flex w-[82%] pl-[60px]">
        <div className="h-fit rounded-md bg-light-gray p-8 dark:bg-dark-gray">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="mt-4 w-[400px]">{description}</p>
          <p className="mb-2 max-w-[500px] border-b-[1px] border-b-semi-gray pb-2">{PostTime(createdAt)}</p>
          <div className="flex items-center border-b-[1px] border-b-semi-gray pb-2">
            <p>Posted by {author}</p>
            <Link href={`/user/${author}`}>
              <Image height={30} width={30} src={authorImage} alt={author} className="ml-[10px] rounded-full" />
            </Link>
          </div>
        </div>
        <div className="ml-[5%] h-fit rounded-md bg-light-gray p-8 dark:bg-dark-gray">
          <Image height={450} width={450} src={image} alt={title} className="h-[450px] rounded-md border-2 border-primary" />
        </div>
      </article>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps<PostInfoProps> = async ({ params }) => {
  const { data } = await fetchPostByQuery(`${params?.name}`, false);

  return {
    props: { post: data[0] },
  };
};

export default PostInfo;

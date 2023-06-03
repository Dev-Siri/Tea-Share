import { lazy, type FC } from "react";

import type { Post } from "@/types";

import { getRelativeTime } from "@/utils/globals";

import { IoMdThumbsUp } from "@react-icons/all-files/io/IoMdThumbsUp";
import { RiThumbUpLine } from "@react-icons/all-files/ri/RiThumbUpLine";
import Image from "next/image";
import Link from "next/link";

const LikeButton = lazy(() => import("./LikeButton"));

interface PostProps {
  post: Post;
  lazyLoadImage?: boolean;
}

const likeBTNProps = {
  size: 30,
  color: "#594194",
} as const;

const Post: FC<PostProps> = ({ post: { image, title, people, description, _id, author, authorImage, createdAt }, lazyLoadImage = true }) => (
  <article role="listitem" className="border-light-gray dark:border-semi-gray mb-10 w-full rounded-xl border-2 bg-white px-8 pb-5 pt-6 dark:bg-black">
    <h3 className="text-3xl font-bold">{title}</h3>
    <p className="my-3 ml-1 overflow-y-auto break-words pb-2 text-gray-400">{getRelativeTime(createdAt)}</p>
    <Link href={`/post/${_id}`} className="cursor-pointer">
      <Image
        src={image}
        priority={!lazyLoadImage}
        alt={title}
        height={500}
        width={500}
        className="border-light-gray dark:border-semi-gray h-[500px] w-full rounded-lg border-2 object-contain"
      />
    </Link>
    <p className="mx-1 mt-8 h-16 overflow-y-auto break-words pb-5 text-gray-500">{description}</p>
    <section className="mt-16 flex items-center">
      <LikeButton people={people} postId={_id} likedIcon={<IoMdThumbsUp {...likeBTNProps} />} unlikedIcon={<RiThumbUpLine {...likeBTNProps} />} />
      <div className="ml-auto flex items-center">
        <p>Posted by {author}</p>
        <Link href={`/people/${author}`} className="hidden md:block">
          <Image height={30} width={30} src={authorImage} alt={author} className="ml-10px hidden h-[30px] rounded-full md:inline" />
        </Link>
      </div>
    </section>
  </article>
);

export default Post;

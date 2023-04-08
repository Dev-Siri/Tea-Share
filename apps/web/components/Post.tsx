import lazy from "next/dynamic";

import type { PostProps } from "@/types";
import type { FC } from "react";

import { PRIMARY_COLOR } from "@/constants/colors";
import { getRelativeTime } from "@/utils/globals";

import { IoMdThumbsUp } from "@react-icons/all-files/io/IoMdThumbsUp";
import { RiThumbUpLine } from "@react-icons/all-files/ri/RiThumbUpLine";

const LikeButton = lazy(() => import("@/components/LikeButton"));
const Image = lazy(() => import("next/image"));
const Link = lazy(() => import("next/link"));

const likeBTNProps = {
  size: 30,
  color: PRIMARY_COLOR,
} as const;

const Post: FC<PostProps> = ({ post: { image, title, people, description, _id, createdAt }, lazyLoadImage = true }) => (
  <article className="border-light-gray dark:border-semi-gray mb-10 w-full rounded-xl border-2 bg-white px-6 pb-4 pt-6 dark:bg-black">
    <h3 className="text-3xl font-bold">{title}</h3>
    <p className="my-3 ml-1 overflow-y-auto break-words pb-2 text-gray-400">{getRelativeTime(createdAt)}</p>
    <Link href={`/post/${_id}`} className="cursor-pointer">
      <Image
        src={image}
        alt={title}
        height={500}
        width={1000}
        priority={!lazyLoadImage}
        className="border-light-gray dark:border-semi-gray h-[500px] w-full rounded-lg border-2 object-cover"
      />
    </Link>
    <p className="mx-1 mt-8 h-16 overflow-y-auto break-words pb-5 text-gray-500">{description}</p>
    <LikeButton people={people} postId={_id}>
      <IoMdThumbsUp {...likeBTNProps} />
      <RiThumbUpLine {...likeBTNProps} />
    </LikeButton>
  </article>
);

export default Post;

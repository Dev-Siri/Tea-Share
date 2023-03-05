import lazy from "next/dynamic";
import { type FC } from "react";

import type { PostProps } from "@types";

const RelativeTime = lazy(() => import("@components/RelativeTime"));
const LikeButton = lazy(() => import("@components/LikeButton"));
const Image = lazy(() => import("next/image"));
const Link = lazy(() => import("next/link"));

const Post: FC<PostProps> = ({ post: { image, title, people, description, _id, createdAt }, lazyLoadImage = true }) => (
  <article className="mb-10 w-full rounded-xl border-2 border-light-gray bg-white px-6 pb-4 pt-6 dark:border-semi-gray dark:bg-black">
    <h3 className="text-3xl font-bold">{title}</h3>
    <RelativeTime className="my-3 ml-1 overflow-y-auto break-words pb-2 text-gray-500" dateString={createdAt} />
    <Link href={`/post/${_id}`} className="cursor-pointer">
      <Image
        src={image}
        alt={title}
        height={500}
        width={1000}
        priority={!lazyLoadImage}
        className="h-[500px] w-full rounded-lg border-2 border-light-gray object-cover dark:border-semi-gray"
      />
    </Link>
    <p className="mx-1 mt-8 h-16 overflow-y-auto break-words pb-5 text-gray-500">{description}</p>
    <LikeButton people={people} postId={_id} />
  </article>
);

export default Post;

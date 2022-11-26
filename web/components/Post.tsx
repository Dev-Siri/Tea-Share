import React, { type FC, type ReactElement, useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import dynamic from "next/dynamic";

import { LikedPeoples, LikePost, PostTime } from "../utils/posts";
import type { PostProps } from "../types";
import useStateContext from "../hooks/useStateContext";

const Link = dynamic(() => import("next/link"));
const Image = dynamic(() => import("next/image"));

const Post: FC<PostProps> = ({ post }) => {
  const { themeColor, user } = useStateContext();
  const { image, title, people, description, _id, createdAt } = post;

  const [likes, setLikes] = useState<string>(LikedPeoples(people, user));
  const [likeBTN, setLikeBTN] = useState<ReactElement>(
    people.includes(`${user?.displayName}`) ? <AiFillLike size={18} color={themeColor} /> : <AiOutlineLike size={18} color={themeColor} />
  );

  return (
    <article className="ml-10 mb-10 h-[570px] w-[450px] rounded-3xl border-4 border-light-gray dark:border-dark-gray">
      <Image src={image} alt={title} height={300} width={450} className="h-[300px] w-[450px] rounded-3xl object-cover" />
      <div className="pl-6">
        <h3 className="1px mt-10 text-[22px] font-bold leading-[1px]">{title}</h3>
        <p className="mt-8 h-16 w-[400px] overflow-y-auto break-words pb-5 text-gray-500">{description}</p>
        <p className="mt-3 h-16 overflow-y-auto break-words pb-2 text-gray-500">{PostTime(createdAt)}</p>
      </div>
      <div className="mt-2 flex pb-2.5">
        <button
          type="button"
          onClick={() => LikePost(setLikes, setLikeBTN, people, `${themeColor}`, user, _id)}
          disabled={people.includes(`${user?.displayName}`)}
          className="ml-5 flex h-8 w-[165px] cursor-pointer items-center border-none bg-transparent text-xs text-primary"
        >
          {likeBTN}
          <span style={{ color: themeColor }}>&nbsp;{likes}</span>
        </button>
        <Link
          href={`/post/${_id}`}
          className="pr-10px ml-44 flex h-8 cursor-pointer items-center border-none bg-transparent text-xs  text-medium-blue"
        >
          View more
        </Link>
      </div>
    </article>
  );
};

export default Post;

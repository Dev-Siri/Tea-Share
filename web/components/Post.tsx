import React, { type FC, useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import dynamic from "next/dynamic";

import { LikedPeoples, LikePost } from "../utils";
import type { PostProps } from "../types";
import { useStateContext } from "../context/StateContext";

const Link = dynamic(() => import("next/link"));
const Image = dynamic(() => import("next/image"));

const Post: FC<PostProps> = ({ post }) => {
  const { themeColor, themeMode, user } = useStateContext();
  const { image, title, people, description, _id } = post;

  const [likes, setLikes] = useState(LikedPeoples(people, user));
  const [likeBTN, setLikeBTN] = useState(people.includes(user?.displayName) ? <AiFillLike size={18} color={themeColor} /> : <AiOutlineLike size={18} color={themeColor} />);

  return (
    <div className={`post ${themeMode === "dark" && "dark-shadow"}`}>
      <div className="post__img-container">
        <Image src={image} alt={title} height={200} width={300} style={{ borderRadius: "10px", objectFit: "cover" }} />
      </div>
      <div className="post__card-media">
        <div>
          <h3 className="post__card-media_title">{title}</h3>
          <p className="post__card-media_desc">{description}</p>
        </div>
        <div className="post__card-interactions">
          <button type="button" onClick={() => LikePost(setLikes, setLikeBTN, people, themeColor, user, _id)} disabled={people.includes(user?.displayName)} className="post__card-interactions_like">
            {likeBTN}
            <span className="post__card-interactions_like-text" style={{ color: themeColor }}>
              &nbsp;{likes}
            </span>
          </button>
          <Link href={`/post/${_id}`} className="post__card-interactions_view-more">
            <span className="post__card-interactions_view-more-text">View more</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;

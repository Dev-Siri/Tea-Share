import React, { FC, useState } from "react";
import Image from "next/image";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

import { PostProps } from "../types";
import { LikePost } from "../api";
import { useStateContext } from "../context/StateContext";
import Link from "next/link";

const Post: FC<PostProps> = ({ post }) => {
  const { themeColor, themeMode, user } = useStateContext();
  const { image, title, people, description, _id } = post;

  const likedPeoples = () => {
    const result = !people.length
      ? "0 Likes"
      : people.includes(user?.displayName)
        ? people.length == 1 && people.includes(user?.displayName)
          ? "You liked this post"
          : `You and ${people.length - 1} ${people.length - 1 == 1 ? "other" : "others"}`
        : people.length - 1 == 0
          ? `${people[0]} liked this post`
          : `${people[0]} and ${people.length - 1} others`;
    return result;
  };

  const [likes, setLikes] = useState(likedPeoples());
  const [likeBTN, setLikeBTN] = useState(people.includes(user?.displayName) ? <AiFillLike size={18} color={themeColor} /> : <AiOutlineLike size={18} color={themeColor} />);

  const likePost = async () => {
    setLikes(!people?.length ? "You liked this post" : people?.length === 1 ? "You and 1 other" : `You and ${people?.length} others`);
    setLikeBTN(<AiFillLike size={18} color={themeColor} />);
    await LikePost(_id, user?.displayName, user?.photoURL);
  };

  return (
    <div className={`post ${themeMode === "dark" && "dark-shadow"}`}>
      <div className="post__img-container">
        <Image src={image} alt={title} height="200px" width="300px" style={{ borderRadius: "10px" }} />
      </div>
      <div className="post__card-media">
        <div>
          <h3 className="post__card-media_title">{title}</h3>
          <p className="post__card-media_desc">{description}</p>
        </div>
        <div className="post__card-interactions">
          <button type="button" onClick={likePost} disabled={people.includes(user?.displayName)} className="post__card-interactions_like">
            {likeBTN}
            <span className="post__card-interactions_like-text" style={{ color: themeColor }}>
              &nbsp;{likes}
            </span>
          </button>
          <Link href={`/post/${_id}`}>
            <div className="post__card-interactions_view-more">
              <span className="post__card-interactions_view-more-text">View more</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;

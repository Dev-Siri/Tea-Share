"use client";
import { useEffect, useState, type FC, type ReactNode } from "react";

import { likePost } from "@/actions/posts";
import useSession from "@/hooks/useSession";
import { LikedPeople } from "@/utils/posts";

interface Props {
  people: string[];
  postId: string;
  likedIcon: ReactNode;
  unlikedIcon: ReactNode;
}

const LikeButton: FC<Props> = ({ people, postId, likedIcon, unlikedIcon }) => {
  const [likes, setLikes] = useState("Loading...");
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const user = useSession();

    setLikes(LikedPeople(people));
    setIsLiked(people.includes(user.name));
  }, []);

  const handleLikePost = async () => {
    const { name, picture } = useSession();

    setLikes(LikedPeople([...people, name]));
    setIsLiked(true);

    likePost(postId, name, picture);
  };

  return (
    <button
      type="button"
      onClick={handleLikePost}
      disabled={isLiked}
      className="flex h-8 cursor-pointer items-center border-none text-xs text-[#E8E8E8]"
    >
      {isLiked ? likedIcon : unlikedIcon}
      <span className="text-primary mr-6 text-base md:w-full">&nbsp;{likes}</span>
    </button>
  );
};

export default LikeButton;

"use client";
import { useEffect, useState, type FC, type ReactNode } from "react";

import { likePost } from "@/actions/posts";
import useSession from "@/hooks/useSession";

interface Props {
  people: string[];
  postId: string;
  likedIcon: ReactNode;
  unlikedIcon: ReactNode;
}

const formatLikes = (people: string[]) => {
  const user = useSession();

  if (!people.length) return "0 Likes";

  if (people.includes(user.name)) {
    if (people.length === 1) return "You liked this post";

    return `You and ${people.length - 1} ${people.length - 1 === 1 ? "other" : "others"}`;
  }

  if (people.length - 1 === 0) return `${people[0]} liked this post`;

  return `${people[0]} and ${people.length - 1} others`;
};

const LikeButton: FC<Props> = ({ people, postId, likedIcon, unlikedIcon }) => {
  const [likes, setLikes] = useState("Loading...");
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const user = useSession();

    setLikes(formatLikes(people));
    setIsLiked(people.includes(user.name));
  }, []);

  const handleLikePost = async () => {
    const { name, picture } = useSession();

    setLikes(formatLikes([...people, name]));
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

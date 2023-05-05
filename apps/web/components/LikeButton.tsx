"use client";
import { useEffect, useState } from "react";

import type { LikeButtonProps } from "@/types";
import type { FC } from "react";

import { LikedPeople } from "@/utils/posts";

const LikeButton: FC<LikeButtonProps> = ({ children, people, postId }) => {
  const [likes, setLikes] = useState("Loading...");
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const setupStates = async () => {
      const { default: useSession } = await import("@/hooks/useSession");
      const user = await useSession();

      setLikes(await LikedPeople(people));
      setIsLiked(people.includes(user.name));
    };

    setupStates();
  }, [people]);

  const handleLikePost = async () => {
    const { LikePost } = await import("@/utils/posts");

    setLikes(!people.length ? "You liked this post" : people.length === 1 ? "You and 1 other" : `You and ${people.length} others`);
    setIsLiked(true);

    LikePost(postId);
  };

  return (
    <button
      type="button"
      onClick={handleLikePost}
      disabled={isLiked}
      className="text-primary flex h-8 cursor-pointer items-center border-none text-xs"
    >
      {isLiked ? children[0] : children[1]}
      <span className="text-primary mr-6 text-base md:w-full">&nbsp;{likes}</span>
    </button>
  );
};

export default LikeButton;

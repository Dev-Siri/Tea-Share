"use client";
import { useEffect, useState } from "react";

import type { LikeButtonProps } from "@/types";
import type { FC } from "react";

import { LikedPeople } from "@/utils/posts";

const LikeButton: FC<LikeButtonProps> = ({ children, people, postId }) => {
  const [likes, setLikes] = useState("Loading...");
  const [isLikeButtonDisabled, setisLikeButtonDisabled] = useState(true);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const setupStates = async () => {
      const { default: useSession } = await import("@/hooks/useSession");
      const user = await useSession();

      setLikes(await LikedPeople(people));
      setisLikeButtonDisabled(people.includes(user.name));
      setIsLiked(people.includes(user.name));
    };

    setupStates();
  }, [people]);

  const handleLikePost = async () => {
    const { LikePost } = await import("@/utils/posts");

    LikePost(setLikes, setIsLiked, setisLikeButtonDisabled, people, postId);
  };

  return (
    <button
      type="button"
      onClick={handleLikePost}
      disabled={isLikeButtonDisabled}
      className="text-primary mt-16 flex h-8 cursor-pointer items-center border-none text-xs"
    >
      {isLiked ? children[0] : children[1]}
      <span className="text-primary mr-6  text-base md:w-full">&nbsp;{likes}</span>
    </button>
  );
};

export default LikeButton;

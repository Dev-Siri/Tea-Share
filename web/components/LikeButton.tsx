"use client";
import { useEffect, useState, type ReactElement } from "react";

import type { LikeButtonProps } from "@types";
import type { FC } from "react";

import { PRIMARY_COLOR } from "@constants/colors";
import { LikedPeople } from "@utils/posts";

import { IoMdThumbsUp } from "@react-icons/all-files/io/IoMdThumbsUp";
import { RiThumbUpLine } from "@react-icons/all-files/ri/RiThumbUpLine";

const likeBTNProps = {
  size: 30,
  color: PRIMARY_COLOR,
} as const;

const LikeButton: FC<LikeButtonProps> = ({ people, postId }) => {
  const [likes, setLikes] = useState("Loading...");
  const [isLikeButtonDisabled, setisLikeButtonDisabled] = useState(true);
  const [likeBTN, setLikeBTN] = useState<ReactElement>(<RiThumbUpLine {...likeBTNProps} />);

  useEffect(() => {
    const setupStates = async () => {
      const { default: useSession } = await import("@hooks/useSession");
      const user = useSession();

      setLikes(await LikedPeople(people));
      setisLikeButtonDisabled(people.includes(user.name));
      setLikeBTN(people.includes(user.name) ? <IoMdThumbsUp {...likeBTNProps} /> : <RiThumbUpLine {...likeBTNProps} />);
    };

    setupStates();
  }, [people]);

  const handleLikePost = async () => {
    const { LikePost } = await import("@utils/posts");
    const { default: useSession } = await import("@hooks/useSession");

    const user = useSession();

    LikePost(setLikes, setLikeBTN, setisLikeButtonDisabled, people, user, postId);
  };

  return (
    <button
      type="button"
      onClick={handleLikePost}
      disabled={isLikeButtonDisabled}
      className="mt-16 flex h-8 cursor-pointer items-center border-none text-xs text-primary"
    >
      {likeBTN}
      <span className="mr-6 text-base  text-primary md:w-full">&nbsp;{likes}</span>
    </button>
  );
};

export default LikeButton;

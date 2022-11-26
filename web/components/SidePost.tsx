import React, { type FC } from "react";
import dynamic from "next/dynamic";
import type { PostProps } from "../types";

const Link = dynamic(() => import("next/link"));
const Image = dynamic(() => import("next/image"));

const SidePost: FC<PostProps> = ({ post }) => {
  const { title, image } = post;

  return (
    <Link
      href={`/post/${post._id}`}
      role="button"
      className="mt-[50px] cursor-pointer rounded-md bg-white pb-4 text-center duration-[250ms] hover:scale-105 dark:bg-semi-gray"
    >
      <Image src={image} alt={title} height={250} width={250} className="rounded-xl" />
      <h3 className="mt-4 text-xl">{title}</h3>
    </Link>
  );
};

export default SidePost;

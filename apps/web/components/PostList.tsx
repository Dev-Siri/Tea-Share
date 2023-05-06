import type { Post as PostType } from "@/types";
import type { FC } from "react";

import Post from "@/components/Post";

interface Props {
  posts: PostType[];
}

const PostList: FC<Props> = ({ posts }) => (
  <article role="list" className="w-full pb-10">
    {posts?.map((post: PostType, index: number) => (
      <Post key={`${post._id}:${index}`} post={post} lazyLoadImage={!!index} />
    ))}
  </article>
);

export default PostList;

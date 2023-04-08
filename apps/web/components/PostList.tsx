import type { Post as PostType, PostsListProps } from "@/types";
import type { FC } from "react";

import Post from "@/components/Post";

const PostList: FC<PostsListProps> = ({ posts }) => (
  <article role="list" className="w-full pb-10">
    {posts?.map((post: PostType, index: number) => (
      <Post key={`${post._id}:${index}`} post={post} lazyLoadImage={!!index} />
    ))}
  </article>
);

export default PostList;

import type { Post as PostType, PostsListProps } from "@types";
import type { FC } from "react";

import Post from "@components/Post";

const PostList: FC<PostsListProps> = ({ posts }) => (
  <ul className="w-full pb-10">
    {posts?.map((post: PostType, index: number) => (
      <Post key={`${post._id}:${index}`} post={post} lazyLoadImage={!!index} />
    ))}
  </ul>
);

export default PostList;

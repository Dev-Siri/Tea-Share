import type { Post as PostType } from "@/types";

import Post from "./Post";

interface Props {
  posts: PostType[];
}

export default function PostList({ posts }: Props) {
  return (
    <article role="list" className="w-full pb-10">
      {posts?.map((post: PostType, index: number) => (
        <Post key={`${post._id}:${index}`} post={post} lazyLoadImage={!!index} />
      ))}
    </article>
  );
}

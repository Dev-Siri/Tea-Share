import queryClient from "../../../services/queryClient";

import { error } from "@sveltejs/kit";
import type { Post } from "../../../app";

export const load = async ({ params }) => {
  const [posts, otherPosts] = await Promise.all([
    queryClient<Post[] | null>("/posts/search", {
      searchParams: {
        q: params.id,
        fromUser: false,
      },
    }),
    queryClient<Post[]>("/posts", {
      searchParams: {
        page: 1,
        limit: 12,
      },
    }),
  ]);

  if (!posts?.[0]) throw error(404, { message: "Not Found" });

  return { post: posts[0], otherPosts };
};

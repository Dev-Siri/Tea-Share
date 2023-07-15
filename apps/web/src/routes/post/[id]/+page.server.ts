import { error } from "@sveltejs/kit";

import type { Post } from "../../../app";
import type { PageServerLoad } from "./$types";

import queryClient from "$lib/utils/queryClient";

export const load: PageServerLoad = async ({ params }) => {
  const [posts, otherPosts] = await Promise.all([
    queryClient<Post[] | null>("/posts/search", {
      searchParams: {
        q: params.id,
        type: "id",
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

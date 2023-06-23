import type { Post, User } from "@/app";
import type { Config } from "@sveltejs/adapter-vercel";
import type { PageServerLoad } from "./$types";

import queryClient from "@/utils/queryClient";

export const config: Config = {
  runtime: "edge",
};

export const load: PageServerLoad = async () => {
  const [posts, users] = await Promise.all([
    queryClient<Post[]>("/posts", {
      searchParams: {
        page: 1,
        limit: 8,
      },
    }),
    queryClient<User[]>("/users", {
      searchParams: {
        page: 1,
        limit: 8,
      },
    }),
  ]);

  return { posts, users };
};

import type { Config } from "@sveltejs/adapter-vercel";
import type { Post, User } from "../app";

import queryClient from "$lib/utils/queryClient";

export const config: Config = {
  runtime: "edge",
  split: true,
};

export async function load() {
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
}

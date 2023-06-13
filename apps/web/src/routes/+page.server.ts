// import queryClient from "../services/queryClient";

import type { Config } from "@sveltejs/adapter-vercel";
// import type { MongoDBUser, Post } from "../app";

export const config: Config = {
  runtime: "edge",
};

export const load = async () => {
  // const [posts, users] = await Promise.all([
  //   queryClient<Post[]>("/posts", {
  //     searchParams: {
  //       page: 1,
  //       limit: 8,
  //     },
  //   }),
  //   queryClient<MongoDBUser[]>("/users", {
  //     searchParams: {
  //       page: 1,
  //       limit: 8,
  //     },
  //   }),
  // ]);

  return { posts: [], users: [] };
};

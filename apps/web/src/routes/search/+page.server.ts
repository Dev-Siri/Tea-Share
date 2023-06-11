import queryClient from "../../services/queryClient";

import type { MongoDBUser, Post } from "../../app";

export const load = async ({ url }) => {
  const query = url.searchParams.get("query");

  const [posts, users] = await Promise.all([
    queryClient<Post[]>("/posts/search", {
      searchParams: {
        q: query,
        fromUser: false,
      },
    }),
    queryClient<MongoDBUser[]>("/users/search", {
      searchParams: {
        name: query,
        exact: false,
      },
    }),
  ]);

  return { posts, users };
};

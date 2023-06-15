import queryClient from "../../services/queryClient";

import type { Post, User } from "../../app";

export const load = async ({ url }) => {
  const query = url.searchParams.get("query");

  const [posts, users] = await Promise.all([
    queryClient<Post[]>("/posts/search", {
      searchParams: {
        q: query,
        fromUser: false,
      },
    }),
    queryClient<User[]>("/users/search", {
      searchParams: {
        name: query,
        exact: false,
      },
    }),
  ]);

  return { posts, users };
};

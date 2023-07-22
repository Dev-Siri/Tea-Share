import type { Post, User } from "$lib/types";

import queryClient from "$lib/utils/queryClient";

export async function load({ url, fetch }) {
  const query = url.searchParams.get("query");

  const [posts, users] = await Promise.all([
    queryClient<Post[]>("/posts/search", {
      customFetch: fetch,
      searchParams: {
        q: query,
        page: 1,
        limit: 8,
      },
    }),
    queryClient<User[]>("/users/search", {
      customFetch: fetch,
      searchParams: {
        name: query,
        page: 1,
        limit: 8,
      },
    }),
  ]);

  return { posts, users };
}

import queryClient from "../../../services/queryClient";

import { error } from "@sveltejs/kit";
import type { MongoDBUser, Post } from "../../../app";

export const load = async ({ params: { name } }) => {
  const [posts, users] = await Promise.all([
    queryClient<Post[] | null>("/posts/search", {
      searchParams: {
        q: name,
        fromUser: true,
      },
    }),
    queryClient<MongoDBUser[] | null>("/users/search", {
      searchParams: {
        name,
        exact: true,
      },
    }),
  ]);

  if (!users?.[0]) throw error(404, "Not Found");

  const usersPosts = posts || [];

  return {
    posts: usersPosts,
    profileUser: users[0],
  };
};

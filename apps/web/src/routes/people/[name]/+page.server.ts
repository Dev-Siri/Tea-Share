import { error } from "@sveltejs/kit";

import type { Post, User } from "../../../app";
import type { PageServerLoad } from "./$types";

import queryClient from "../../../services/queryClient";

export const load: PageServerLoad = async ({ params: { name } }) => {
  const [posts, users] = await Promise.all([
    queryClient<Post[] | null>("/posts/search", {
      searchParams: {
        q: name,
        fromUser: true,
      },
    }),
    queryClient<User[] | null>("/users/search", {
      searchParams: {
        name,
        exact: true,
      },
    }),
  ]);

  if (!users) throw error(404, { message: "Not Found" });

  const usersPosts = posts || [];

  return {
    posts: usersPosts,
    profileUser: users[0],
  };
};

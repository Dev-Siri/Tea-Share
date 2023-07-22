import { error, redirect, type Actions } from "@sveltejs/kit";

import type { Post, User } from "$lib/types";

import queryClient from "$lib/utils/queryClient";

export const actions: Actions = {
  async logout({ cookies }) {
    cookies.delete("auth_token", {
      httpOnly: true,
      sameSite: true,
      path: "/",
    });

    throw redirect(303, "/auth");
  },
};

export async function load({ params: { name } }) {
  const [posts, users] = await Promise.all([
    queryClient<Post[] | null>("/posts/search", {
      searchParams: {
        q: name,
        type: "user",
        page: 1,
        limit: 8,
      },
    }),
    queryClient<User[] | null>("/users/search", {
      searchParams: {
        name,
        exact: true,
      },
    }),
  ]);

  if (!users?.[0]) throw error(404, { message: "Not Found" });

  const usersPosts = posts || [];

  return {
    posts: usersPosts,
    user: users[0],
  };
}

import { redirect, type Actions } from "@sveltejs/kit";

import type { Post } from "$lib/types";
import type { Config } from "@sveltejs/adapter-vercel";

import queryClient from "$lib/utils/queryClient";

export const config: Config = {
  runtime: "edge",
  split: true,
};

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

export async function load() {
  const posts = await queryClient<Post[]>("/posts", {
    searchParams: {
      page: 1,
      limit: 8,
    },
  });

  return { posts };
}

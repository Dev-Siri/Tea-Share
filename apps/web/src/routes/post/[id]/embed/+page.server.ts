import { dev } from "$app/environment";
import { error } from "@sveltejs/kit";

import type { Post } from "$lib/types";

import queryClient from "$lib/utils/queryClient";

export const csr = dev;

export async function load({ params, url: { searchParams } }) {
  const posts = await queryClient<Post[] | null>("/posts/search", {
    searchParams: {
      q: params.id,
      type: "id",
    },
  });

  if (!posts?.[0]) throw error(404, { message: "Not Found" });

  return {
    post: posts[0],
    embedInfo: {
      theme: searchParams.get("theme") ?? "light",
      imageSize: searchParams.get("imageSize") ?? "100%",
    }
  };
}
import { fail, redirect, type Actions } from "@sveltejs/kit";
import jwtDecode from "jwt-decode";

import type { User } from "../../app";

import { encodeToBase64 } from "$lib/server/encoding";
import queryClient from "$lib/utils/queryClient";

export const actions: Actions = {
  async default({ request, cookies }) {
    const authToken = cookies.get("auth_token");

    if (!authToken) throw redirect(307, "/auth");

    const formData = await request.formData();

    const title = formData.get("title");
    const description = formData.get("description");
    const image = formData.get("image");

    if (!title || !description || !image || title instanceof Blob || description instanceof Blob || typeof image === "string" || title.length < 4)
      return fail(400, { incorrect: true });

    const { userId } = jwtDecode<User>(authToken);
    const encodedImage = await encodeToBase64(image);

    await queryClient("/posts", {
      method: "POST",
      body: {
        title,
        description,
        postImage: encodedImage,
        userId,
      },
    });

    throw redirect(303, "/");
  },
};

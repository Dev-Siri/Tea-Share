import { fail, type Actions } from "@sveltejs/kit";

import type { User } from "../../app";

import { encodeToBase64 } from "$lib/server/encoding";
import queryClient from "$lib/utils/queryClient";

export const actions: Actions = {
  async default({ request, locals }) {
    const formData = await request.formData();

    const username = formData.get("username");
    const email = formData.get("email");
    const image = formData.get("image");

    if (email instanceof Blob || username instanceof Blob || !image || typeof image === "string")
      return fail(400, {
        errorMessage: "The updated information you provided are invalid.",
      });

    const fetchedUsers = await queryClient<User[] | null>("/users/search", {
      searchParams: {
        name: locals.user.username,
        exact: true,
      },
    });

    if (!fetchedUsers?.[0]) return fail(500, { errorMessage: "Failed to fetch your information. Please try again later." });

    const encodedImage = encodeToBase64(image);

    await queryClient(`/users/${fetchedUsers[0].userId}/update`, {
      method: "PUT",
      body: {
        username,
        userImage: encodedImage,
        email,
      },
    });

    return { success: true };
  },
};

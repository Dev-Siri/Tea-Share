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

    const username = formData.get("username");
    const email = formData.get("email");
    const image = formData.get("image");

    if (email instanceof Blob || username instanceof Blob || !image || typeof image === "string")
      return fail(400, {
        errorMessage: "The updated information you provided are invalid.",
      });

    const { username: currentUsername } = jwtDecode<User>(authToken);

    const fetchedUsers = await queryClient<User[] | null>("/users/search", {
      searchParams: {
        name: currentUsername,
        exact: true,
      },
    });

    if (!fetchedUsers) return fail(500, { errorMessage: "Failed to fetch your information. Please try again later." });

    const encodedImage = encodeToBase64(image);

    queryClient(`/users/${fetchedUsers[0].userId}/update`, {
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

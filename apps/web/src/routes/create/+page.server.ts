import { fail, redirect, type Actions } from "@sveltejs/kit";

import { encodeToBase64 } from "$lib/server/encoding";
import validatePostForm from "$lib/server/validation/post/validatePostFormSchema";
import queryClient from "$lib/utils/queryClient";

export const actions: Actions = {
  async default({ request, locals }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    const postValidationResult = validatePostForm(data);

    if (!postValidationResult.success)
      return fail(400, {
        ...postValidationResult,
        suppliedValues: {
          title: data["title"],
          description: data["description"],
        },
      });

    const { title, description, image } = postValidationResult.data;

    const encodedImage = await encodeToBase64(image);

    await queryClient("/posts", {
      method: "POST",
      body: {
        title,
        description,
        postImage: encodedImage,
        userId: locals.user.userId,
      },
    });

    throw redirect(303, "/");
  },
};

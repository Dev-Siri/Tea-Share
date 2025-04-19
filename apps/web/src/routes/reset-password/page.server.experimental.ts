import { fail, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
  async default({ request }) {
    const formData = await request.formData();

    const email = formData.get("email");

    if (
      !email ||
      email instanceof Blob ||
      !email.includes("@") ||
      !email.includes(".")
    )
      return fail(400, { email, incorrect: true });

    // await sendPasswordResetEmail(auth, email);

    return { success: true };
  },
};

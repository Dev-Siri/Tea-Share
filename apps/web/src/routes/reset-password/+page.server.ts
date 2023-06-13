import { fail } from "@sveltejs/kit";
import { sendPasswordResetEmail } from "firebase/auth";

import { auth } from "../../services/firebase";

export const actions = {
  async default({ request }) {
    const formData = await request.formData();

    const email = formData.get("email");

    if (!email || email instanceof Blob || !email.includes("@") || !email.includes(".")) return fail(400, { email, incorrect: true });

    await sendPasswordResetEmail(auth, email);

    return { success: true };
  },
};

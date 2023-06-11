import { redirect } from "@sveltejs/kit";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import jwtDecode from "jwt-decode";

import type { FirebaseUser } from "../../app";

import { storage } from "../../services/firebase";
import queryClient from "../../services/queryClient";

export const actions = {
  async default({ request, cookies }) {
    const authToken = cookies.get("auth_token");

    if (!authToken) throw redirect(307, "/auth");

    const formData = await request.formData();

    const title = formData.get("title");
    const description = formData.get("description");
    const image = formData.get("image");

    if (!title || !description || !image || title instanceof Blob || description instanceof Blob || typeof image === "string" || title.length < 4)
      return;

    const { name, picture } = jwtDecode<FirebaseUser>(authToken);

    const imageRef = ref(storage, `posts/${crypto.randomUUID()}`);

    await uploadBytes(imageRef, await image.arrayBuffer(), { contentType: image.type });

    const imageLink = await getDownloadURL(imageRef);

    await queryClient("/posts", {
      method: "POST",
      body: {
        title,
        description,
        image: imageLink,
        author: name,
        authorImage: picture,
      },
    });

    throw redirect(303, "/");
  },
};

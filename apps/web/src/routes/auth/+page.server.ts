import { fail, redirect } from "@sveltejs/kit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import jwtDecode from "jwt-decode";

import type { FirebaseUser } from "../../app";

import { auth, storage } from "../../services/firebase";
import queryClient from "../../services/queryClient";
import userStore from "../../stores/user";

export const actions = {
  async login({ request, cookies }) {
    const formData = await request.formData();

    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password || email instanceof Blob || password instanceof Blob) return fail(400, { email, incorrect: true });

    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const authToken = await user.getIdToken();

    cookies.set("auth_token", authToken, {
      expires: new Date(9999, 0, 1),
      sameSite: true,
      httpOnly: false,
    });

    userStore.set(jwtDecode<FirebaseUser>(authToken));

    throw redirect(301, "/");
  },
  async signup({ request, cookies }) {
    const formData = await request.formData();

    const email = formData.get("email");
    const image = formData.get("image");
    const username = formData.get("username");
    const password = formData.get("password");

    if (
      !email ||
      !password ||
      !username ||
      !image ||
      email instanceof Blob ||
      password instanceof Blob ||
      username instanceof Blob ||
      typeof image === "string"
    )
      return fail(400, { username, email, incorrect: true });

    const imageName = crypto.randomUUID();
    const imageRef = ref(storage, `users/${imageName}`);

    await uploadBytes(imageRef, image);

    const imageLink = await getDownloadURL(imageRef);
    const { user } = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(user, {
      displayName: username,
      photoURL: imageLink,
    });

    await queryClient("/users", {
      method: "POST",
      body: {
        username,
        image: imageLink,
        email,
      },
    });

    const authToken = await user.getIdToken();

    cookies.set("auth_token", authToken, {
      expires: new Date(9999, 0, 1),
      sameSite: true,
      httpOnly: false,
    });

    userStore.set(jwtDecode<FirebaseUser>(authToken));

    throw redirect(301, "/");
  },
};

export const load = ({ cookies }) => {
  const authToken = cookies.get("auth_token");

  if (authToken) throw redirect(301, "/");
};

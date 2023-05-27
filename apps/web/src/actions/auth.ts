// This is partially used at the moment. In the future, this will
// be used as a auth-related server-action export
"use server";
import { createUserWithEmailAndPassword, getIdToken, signInWithEmailAndPassword, updateEmail, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

import { auth, storage } from "@/services/firebase";
import queryClient from "@/services/queryClient";
import { redirect } from "next/navigation";

// interface PostFormData {
//   title: string;
//   description: string;
//   image: File | string | null;
//   author: string;
//   authorImage: string;
// }

export const logout = async () => {
  await auth.signOut();
  cookies().delete("auth_token");

  redirect("/auth");
};

export const updateUserProfile = async (formData: FormData) => {
  interface UserFormData {
    email: string;
    username: string;
    image: File;
    id: string;
  }

  const data = Object.fromEntries(formData.entries()) as Partial<UserFormData>;

  if (Object.values(data).some(key => key == null)) return;

  const { username, image, email, id } = data as UserFormData;

  const imageRef = ref(storage, `users/${crypto.randomUUID()}`);

  await uploadBytes(imageRef, await image.arrayBuffer(), { contentType: image.type });

  const uploadedImage = await getDownloadURL(imageRef);

  await updateProfile(auth.currentUser!, {
    displayName: username,
    photoURL: uploadedImage,
  });

  await updateEmail(auth.currentUser!, email);

  await queryClient(`/users?id=${id}`, {
    method: "PUT",
    body: {
      _id: id,
      image: uploadedImage,
      username,
      email,
    },
  });

  const authToken = await auth.currentUser!.getIdToken();

  cookies().set("auth_token", authToken);

  revalidatePath("/settings");
};

export const login = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password || email instanceof Blob || password instanceof Blob) return;

  const { user } = await signInWithEmailAndPassword(auth, email, password);
  const authToken = await user.getIdToken();

  cookies().set("auth_token", authToken);
  redirect("/");
};

export const signup = async (formData: FormData) => {
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
    return;

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

  const authToken = await getIdToken(user);

  cookies().set("auth_token", authToken);
  redirect("/");
};
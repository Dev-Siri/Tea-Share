// This is unused at the moment. In the future, this will
// be used as a auth-related server-action export

"use server";
import { getIdToken, updateEmail, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

import type { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";

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
export const logoutAction = async () => {
  await auth.signOut();
  (cookies() as RequestCookies).delete("auth_token");

  redirect("/auth");
};

export const updateProfileAction = async (formData: FormData) => {
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

  await queryClient(`/users/${id}`, {
    method: "PATCH",
    body: {
      _id: id,
      image: uploadedImage,
      username,
      email,
    },
  });

  const authToken = await getIdToken(auth.currentUser!);

  (cookies() as RequestCookies).set("auth_token", authToken);

  revalidatePath("/settings");
};

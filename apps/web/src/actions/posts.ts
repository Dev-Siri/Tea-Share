"use server";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { redirect } from "next/navigation";

import useServerSession from "@/hooks/useServerSession";
import { storage } from "@/services/firebase";
import queryClient from "@/services/queryClient";

export const likePost = async (id: string, username: string, image: string) =>
  await queryClient(`/posts/like?id=${id}`, {
    method: "PATCH",
    body: {
      username,
      image,
    },
  });

export const createPost = async (formData: FormData) => {
  const title = formData.get("title");
  const description = formData.get("description");
  const image = formData.get("image");

  if (!title || !description || !image || title instanceof Blob || description instanceof Blob || typeof image === "string" || title.length < 4)
    return;

  const { name, picture } = useServerSession();

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

  redirect("/");
};

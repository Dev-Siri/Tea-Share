import dynamic from "next/dynamic";

import type { CreatePostSubmitHandler, LikedPeopleCalculator, LikePostHandler } from "../types";

export const CreatePost: CreatePostSubmitHandler = async (formData, router, setIsCreatingPost) => {
  const { ref, uploadBytes, getDownloadURL } = await import("firebase/storage");
  const { createPost } = await import("@api/client");
  const { storage } = await import("@api/firebase");
  const { toast } = await import("react-hot-toast");

  if (!formData.title || (!formData.image && formData.title.length > 3)) return;

  setIsCreatingPost(true);

  toast.loading("Creating post...", { id: "creating-post-toast" });

  const characters: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890" as const;
  let imageName: string = "";

  for (let i = 0; i < characters.length; i++) {
    imageName += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  const imageRef = ref(storage, `posts/${imageName}`);

  await uploadBytes(imageRef, formData.image as File);

  const imageLink = await getDownloadURL(imageRef);

  const newFormData = {
    ...formData,
    image: imageLink,
  };

  await createPost(newFormData);

  toast.remove("creating-post-toast");
  toast.success("Post created successfully");

  setIsCreatingPost(false);
  router.push("/");
};

export const LikedPeople: LikedPeopleCalculator = (people, user) => {
  if (!people.length) return "0 Likes";

  if (people.includes(user?.displayName as string)) {
    if (people.length === 1 && people.includes(user?.displayName as string)) return "You liked this post";

    return `You and ${people.length - 1} ${people.length - 1 === 1 ? "other" : "others"}`;
  }

  if (people.length - 1 === 0) return `${people[0]} liked this post`;

  return `${people[0]} and ${people.length - 1} others`;
};

export const LikePost: LikePostHandler = async (setLikes, setLikeBTN, people, themeColor, user, _id) => {
  const { LikePost: LikePostAPI } = await import("@api/client");
  const IoMdThumbsUp = dynamic(() => import("@react-icons/all-files/io/IoMdThumbsUp").then(({ IoMdThumbsUp }) => IoMdThumbsUp));

  setLikes(!people?.length ? "You liked this post" : people?.length === 1 ? "You and 1 other" : `You and ${people?.length} others`);
  setLikeBTN(<IoMdThumbsUp size={25} color={themeColor} />);
  await LikePostAPI(_id, user?.displayName as string, user?.photoURL as string);
};

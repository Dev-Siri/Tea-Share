import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { AiFillLike } from "react-icons/ai";

import { createPost, storage } from "../api";
import type { CreatePostSubmitHandler, LikedPeople, LikePostHandler, PostTimeCalculator } from "../types";

export const CreatePost: CreatePostSubmitHandler = async (formData, router, loading) => {
  const { ref, uploadBytes, getDownloadURL } = await import("firebase/storage");
  const { toast } = await import("react-hot-toast");

  if (!formData.title || (!formData.image && formData.title.length > 3) || loading) return;

  toast.loading("Creating post...", { id: "creating-post-toast" });

  const characters: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890" as const;
  let imgName: string = "";

  for (let i = 0; i < characters.length; i++) {
    imgName += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  const imageRef = ref(storage, `posts/${imgName}.jpg`);

  await uploadBytes(imageRef, new Blob([formData.image as File]));

  const imageLink = await getDownloadURL(imageRef);

  const newFormData = {
    ...formData,
    image: imageLink,
  };

  await createPost(newFormData);

  toast.remove("creating-post-toast");
  toast.success("Post created successfully");
  router.push("/");
};

export const LikedPeoples: LikedPeople = (people, user) => {
  if (!people.length) return "0 Likes";

  if (people.includes(user?.displayName as string)) {
    if (people.length === 1 && people.includes(user?.displayName as string)) return "You liked this post";

    return `You and ${people.length - 1} ${people.length - 1 === 1 ? "other" : "others"}`;
  }

  if (people.length - 1 === 0) return `${people[0]} liked this post`;

  return `${people[0]} and ${people.length - 1} others`;
};

export const PostTime: PostTimeCalculator = createdAt => {
  dayjs.extend(relativeTime);
  const defaultTime = dayjs(createdAt).fromNow();
  const result = `${defaultTime.charAt(0).toUpperCase()}${defaultTime.slice(1)}`;
  return result;
};

export const LikePost: LikePostHandler = async (setLikes, setLikeBTN, people, themeColor, user, _id) => {
  const { LikePost: LikePostAPI } = await import("../api");

  setLikes(!people?.length ? "You liked this post" : people?.length === 1 ? "You and 1 other" : `You and ${people?.length} others`);
  setLikeBTN(<AiFillLike size={18} color={themeColor} />);
  await LikePostAPI(_id, user?.displayName as string, user?.photoURL as string);
};

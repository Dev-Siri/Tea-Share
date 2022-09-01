import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { toast } from 'react-hot-toast';
import { AiFillLike } from "react-icons/ai";

import { createPost, storage, LikePost as LikePostAPI } from '../api';
import type { CreatePostSubmitHandler, LikedPeople, LikePostHandler } from '../types';

export const CreatePost: CreatePostSubmitHandler = async (event, formData, setFormData, router, loading) => {
  event.preventDefault();

  if (!formData.title || (!formData.image && formData.title.length > 3) || loading) return;

  toast.loading("Creating post...", { id: "creating-post-toast" });

  const characters: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  let imgName: string = '';

  for (let i = 0; i < characters.length; i++) {
    imgName += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  const imageRef = ref(storage, `posts/${imgName}.jpg`);

  await uploadString(imageRef, formData.image, 'data_url');

  const imageLink = await getDownloadURL(imageRef);

  setFormData({ ...formData, image: imageLink });

  await createPost(formData);

  toast.remove("creating-post-toast");
  toast.success("Post created successfully");
  router.push("/");
};

export const LikedPeoples: LikedPeople = (people, user) => {
  const result = !people.length
    ? "0 Likes"
    : people.includes(user?.displayName)
      ? people.length == 1 && people.includes(user?.displayName)
        ? "You liked this post"
        : `You and ${people.length - 1} ${people.length - 1 == 1 ? "other" : "others"}`
      : people.length - 1 == 0
        ? `${people[0]} liked this post`
        : `${people[0]} and ${people.length - 1} others`;
  return result;
};

export const LikePost: LikePostHandler = async (setLikes, setLikeBTN, people, themeColor, user, _id) => {
  setLikes(!people?.length ? "You liked this post" : people?.length === 1 ? "You and 1 other" : `You and ${people?.length} others`);
  setLikeBTN(<AiFillLike size={18} color={themeColor} />);
  await LikePostAPI(_id, user?.displayName, user?.photoURL);
}
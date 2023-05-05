import type { CreatePostSubmitHandler, LikedPeopleCalculator, LikePostHandler } from "@/types";

export const CreatePost: CreatePostSubmitHandler = async formData => {
  if (!formData.title || (!formData.image && formData.title.length > 3)) return;

  const { ref, uploadBytes, getDownloadURL } = await import("firebase/storage");
  const { default: useSession } = await import("@/hooks/useSession");
  const { getRandomString } = await import("./globals");
  const { createPost } = await import("@/services/fetchers");
  const { storage } = await import("@/services/firebase");
  const { toast } = await import("react-hot-toast");

  const user = await useSession();

  const loadingToast = toast.loading("Creating post...");

  const imageName = getRandomString();

  const imageRef = ref(storage, `posts/${imageName}`);

  await uploadBytes(imageRef, formData.image as File);

  const imageLink = await getDownloadURL(imageRef);

  await createPost({
    ...formData,
    image: imageLink,
    author: user.name,
    authorImage: user.picture,
  });

  toast.remove(loadingToast);
  toast.success("Post created successfully");
};

export const LikedPeople: LikedPeopleCalculator = async people => {
  const { default: useSession } = await import("@/hooks/useSession");

  const user = await useSession();

  if (!people.length) return "0 Likes";

  if (people.includes(user.name)) {
    if (people.length === 1) return "You liked this post";

    return `You and ${people.length - 1} ${people.length - 1 === 1 ? "other" : "others"}`;
  }

  if (people.length - 1 === 0) return `${people[0]} liked this post`;

  return `${people[0]} and ${people.length - 1} others`;
};

export const LikePost: LikePostHandler = async id => {
  const { default: useSession } = await import("@/hooks/useSession");
  const { likePost } = await import("@/services/fetchers");
  const user = await useSession();

  await likePost(id, user.name, user.picture);
};

import type { CreatePostSubmitHandler, LikedPeopleCalculator, LikePostHandler } from "@/types";

export const CreatePost: CreatePostSubmitHandler = async formData => {
  if (!formData.title || (!formData.image && formData.title.length > 3)) return;

  const { ref, uploadBytes, getDownloadURL } = await import("firebase/storage");
  const { default: queryClient } = await import("@/services/queryClient");
  const { default: useSession } = await import("@/hooks/useSession");
  const { storage } = await import("@/services/firebase");
  const { toast } = await import("react-hot-toast");

  const user = await useSession();
  const loadingToast = toast.loading("Creating post...");

  const imageName = crypto.randomUUID();
  const imageRef = ref(storage, `posts/${imageName}`);

  await uploadBytes(imageRef, formData.image as File);

  const imageLink = await getDownloadURL(imageRef);

  await queryClient("/posts", {
    method: "POST",
    body: {
      ...formData,
      image: imageLink,
      author: user.name,
      authorImage: user.picture,
    },
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
  const { default: queryClient } = await import("@/services/queryClient");

  const { name, picture } = await useSession();

  await queryClient(`/posts/${id}/like`, {
    method: "PATCH",
    body: {
      name,
      image: picture,
    },
  });
};

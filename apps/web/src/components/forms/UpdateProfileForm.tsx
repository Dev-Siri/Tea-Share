"use client";
import type { FormEvent, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  userId: string;
  currentImage: string;
}

export default function UpdateProfileForm({ children, currentImage, userId }: Props) {
  const handleUpdateProfile = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { UpdateProfile } = await import("@/utils/auth");

    const form = new FormData(event.currentTarget);
    const { email, username, image } = Object.fromEntries(form.entries());

    if (email instanceof Blob || username instanceof Blob || image instanceof Blob) return;

    await UpdateProfile(email, username, image || currentImage, userId);
  };

  return (
    <form
      className="border-light-gray dark:border-semi-gray mt-10px h-fit w-[350px] rounded-md border-2 p-7 pb-10 dark:bg-black sm:w-[440px]"
      onSubmit={handleUpdateProfile}
    >
      {children}
    </form>
  );
}

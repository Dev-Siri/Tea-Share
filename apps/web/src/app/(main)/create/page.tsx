import { lazy } from "react";

import { createPost } from "@/actions/posts";

import LoadingSpinner from "@/components/ui/LoadingSpinner";

const SubmitButton = lazy(() => import("@/components/forms/buttons/SubmitButton"));
const PreviewImage = lazy(() => import("@/components/ui/PreviewImage"));

export default function Create() {
  return (
    <section className="h-screen w-full overflow-y-scroll">
      <form action={createPost} className="flex w-full flex-col items-center py-2">
        <input
          className="dark:bg-semi-gray w-[90%] rounded-tl-lg rounded-tr-lg p-4 text-4xl font-light outline-none duration-200 dark:text-white"
          placeholder="Title"
          name="title"
          required
        />
        <input
          className="dark:bg-semi-gray mb-4 w-[90%] rounded-bl-lg rounded-br-lg p-4 pl-5 font-normal outline-none duration-200 dark:text-white"
          placeholder="What's on your mind?"
          name="description"
          required
        />
        <PreviewImage />
        <SubmitButton
          loadingSpinner={<LoadingSpinner height={20} width={20} />}
          className="bg-primary hover:bg-primary-dark mb-[30%] mt-4 w-[90%] cursor-pointer rounded-md border-none p-3 text-white duration-200 sm:mb-[10%]"
        >
          Create Post!
        </SubmitButton>
      </form>
    </section>
  );
}

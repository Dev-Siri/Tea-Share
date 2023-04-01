"use client";
import lazy from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState, type FormEventHandler } from "react";

import type { PageComponent, PostFormData } from "@/types";

const Image = lazy(() => import("next/image"));

const Create: PageComponent = () => {
  const [previewImage, setPreviewImage] = useState<File | null>(null);

  const router = useRouter();

  const handleCreate: FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const formData = Object.fromEntries(form.entries()) as Pick<PostFormData, "title" | "description" | "image">;

    if (!(formData.image as File).type.includes("image")) {
      const { toast } = await import("react-hot-toast");
      return toast.error("The uploaded file is not an image.");
    }

    const { CreatePost } = await import("@/utils/posts");

    await CreatePost(formData);

    router.push("/");
  };

  return (
    <section className="h-screen w-full overflow-y-scroll">
      <form className="flex w-full flex-col items-center p-2" onSubmit={handleCreate}>
        <input
          className="dark:bg-semi-gray w-[90%] rounded-tl-lg rounded-tr-lg p-4 text-4xl font-extralight outline-none duration-200 dark:text-white"
          placeholder="Title"
          name="title"
        />
        <input
          className="dark:bg-semi-gray w-[90%] rounded-bl-lg rounded-br-lg p-4 pl-5 font-extralight outline-none duration-200 dark:text-white"
          placeholder="What's on your mind?"
          name="description"
        />
        <input
          className="dark:bg-semi-gray mt-4 w-[90%] rounded-lg p-4 outline-none duration-200 dark:text-white"
          type="file"
          name="image"
          aria-label="Post File Upload"
          onChange={event => setPreviewImage(event.target.files?.[0] as File | null)}
        />
        {previewImage && (
          <div className="mt-4 w-[90%]">
            <Image
              src={URL.createObjectURL(previewImage)}
              className="h-fit rounded-xl"
              alt="Selected Image"
              height={previewImage.size}
              width={previewImage.size}
            />
          </div>
        )}
        <button
          type="submit"
          className="bg-primary hover:bg-primary-dark mb-20 mt-4 w-[90%] cursor-pointer rounded-md border-none p-3 text-white duration-200"
        >
          Create Post!
        </button>
      </form>
    </section>
  );
};

export default Create;

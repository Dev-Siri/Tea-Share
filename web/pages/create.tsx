import dynamic from "next/dynamic";
import { useRouter, type NextRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

import type { User as FirebaseUser } from "firebase/auth";
import type { NextPage } from "next";

import useStateContext from "@hooks/useStateContext";

const Image = dynamic(() => import("next/image"));

const Create: NextPage = () => {
  const [isCreatingPost, setIsCreatingPost] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<File | string | undefined | null>(null);
  const [author, setAuthor] = useState<string>("");
  const [authorImage, setAuthorImage] = useState<string>("");

  const { themeColor, themeMode } = useStateContext();
  const router: NextRouter = useRouter();

  useEffect(() => {
    const user: FirebaseUser = JSON.parse(localStorage.getItem("user") as string);

    setAuthor(user.displayName as string);
    setAuthorImage(user.photoURL as string);
  }, []);

  const handleCreate = async (event: any) => {
    event.preventDefault();
    const { CreatePost } = await import("@utils/posts");

    if ((image as File).type.match("image.*")) {
      CreatePost(
        {
          title,
          description,
          image,
          author,
          authorImage,
        },
        router,
        setIsCreatingPost
      );
    } else {
      const { toast } = await import("react-hot-toast");
      toast.error("Upload file type is not an image.");
    }
  };

  const optimizedImage = useMemo(
    () => (!image ? (themeMode === "dark" ? "/images/select-dark.webp" : "/images/select-light.webp") : URL.createObjectURL(image as File)),
    [image, themeMode]
  );

  return (
    <section className="z-50 flex h-screen w-full items-center justify-center overflow-auto">
      <form
        className="flex h-[570px] w-[70%] flex-col rounded-[20px] border-2 border-light-gray bg-white p-5 dark:border-border-gray dark:bg-black sm:h-[740px] lg:mt-0 lg:mb-0 lg:h-[440px] lg:w-[85%] lg:flex-row"
        onSubmit={event => handleCreate(event)}
      >
        <Image
          src={optimizedImage}
          className="mr-[10px] h-[200px] w-full rounded-xl sm:h-[380px] lg:w-[490px]"
          alt="Selected Image"
          height={300}
          width={400}
        />
        <div className="mx-5 hidden h-full w-[5px] rounded-3xl bg-light-gray dark:bg-semi-gray lg:inline" />
        <div className="w-full lg:w-[70%]">
          <h1 className="mt-[30px] mb-4 hidden text-center text-3xl leading-[1px] lg:block">Create a Post</h1>
          <div className="w-[98%]">
            <input
              className="mt-5 ml-[5px] w-full rounded-md border-[1px] border-light-gray p-[15px] outline-none duration-[250ms] focus:border-primary dark:border-semi-gray dark:bg-semi-gray dark:text-white"
              value={title}
              placeholder="Title"
              name="title"
              onChange={event => setTitle(event.target.value)}
            />
            <input
              className="mt-5 ml-[5px] w-full rounded-md border-[1px] border-light-gray p-[15px] outline-none duration-[250ms] focus:border-primary dark:border-semi-gray dark:bg-semi-gray dark:text-white"
              value={description}
              placeholder="About The Post"
              name="description"
              onChange={event => setDescription(event.target.value)}
            />
            <input
              className="mt-5 ml-[5px] w-full rounded-md border-[1px] border-light-gray p-[15px] outline-none duration-[250ms] focus:border-primary dark:border-semi-gray dark:bg-semi-gray dark:text-white"
              type="file"
              aria-label="Post File Upload"
              onChange={event => setImage(event.target.files?.[0])}
            />
          </div>
          <button
            type="submit"
            disabled={isCreatingPost}
            className="mt-5 ml-[5px] w-[98%] cursor-pointer rounded-md border-none bg-primary p-[13px] text-white duration-[250ms] hover:bg-primary-dark lg:mt-[50px]"
            style={{ backgroundColor: themeColor }}
          >
            Create Post!
          </button>
        </div>
      </form>
    </section>
  );
};

export default Create;

import React, { useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import SelectImageLight from "../assets/SelectLight.png";
import SelectImageDark from "../assets/Select.png";

import type { ChangeHandler, PostFormData } from "../types";
import useStateContext from "../hooks/useStateContext";

import Sidebar from "../components/Sidebar";
const Image = dynamic(() => import("next/image"));

const Create: NextPage = () => {
  const { themeColor, themeMode, user } = useStateContext();
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(true);
  const [formData, setFormData] = useState<PostFormData>({
    title: "",
    description: "",
    image: null,
    author: `${user?.displayName}`,
    authorImage: `${user?.photoURL}`,
  });

  const handleChange: ChangeHandler = event => setFormData({ ...formData, [event.target.name]: event.target.value });

  const handleCreate = async (event: any) => {
    event.preventDefault();
    const { CreatePost } = await import("../utils/posts");

    CreatePost(formData, router, loading);
  };

  return (
    <section className="relative flex items-center dark:bg-black dark:text-white">
      <Sidebar route="create" />
      <article className="z-50 flex w-[82%] flex-col items-center">
        <form
          className="flex h-[440px] w-[950px] rounded-[20px] border-8 border-light-gray p-5 dark:border-dark-gray"
          onSubmit={event => handleCreate(event)}
        >
          <Image
            src={
              !formData.image || loading ? (themeMode === "dark" ? SelectImageDark : SelectImageLight) : URL.createObjectURL(formData.image as Blob)
            }
            className="mr-[50px] rounded-[10px]"
            alt="Selected Image"
            height={300}
            width={400}
          />
          <div className="mx-5 h-full w-[5px] rounded-3xl bg-light-gray dark:bg-semi-gray" />
          <div className="w-[70%]">
            <h1 className="mt-[30px] mb-4 text-center text-3xl leading-[1px]">Create a Post</h1>
            <div className="w-[98%]">
              <input
                className="mt-5 ml-[5px] w-full rounded-md border-[1px] border-light-gray p-[15px] outline-none duration-[250ms] focus:border-primary dark:border-semi-gray dark:bg-semi-gray dark:text-white"
                value={formData.title}
                placeholder="Title"
                name="title"
                onChange={handleChange}
              />
              <input
                className="mt-5 ml-[5px] w-full rounded-md border-[1px] border-light-gray p-[15px] outline-none duration-[250ms] focus:border-primary dark:border-semi-gray dark:bg-semi-gray dark:text-white"
                value={formData.description}
                placeholder="About The Post"
                name="description"
                onChange={handleChange}
              />
              <input
                className="mt-5 ml-[5px] w-full rounded-md border-[1px] border-light-gray p-[15px] outline-none duration-[250ms] focus:border-primary dark:border-semi-gray dark:bg-semi-gray dark:text-white"
                type="file"
                aria-label="Post File Upload"
                onChange={event => {
                  setFormData({ ...formData, image: event.target.files?.[0] });
                  setLoading(false);
                }}
              />
            </div>
            <button
              type="submit"
              className="mt-[50px] ml-[5px] w-[98%] cursor-pointer rounded-[5px] border-none bg-primary p-[15px] text-white duration-[250ms] hover:bg-primary-dark"
              style={{ backgroundColor: themeColor }}
            >
              Create Post!
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Create;

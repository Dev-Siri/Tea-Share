import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { type NextRouter, useRouter } from "next/router";

import type { ChangeHandler, PostFormData } from "../types";
import type { User as FirebaseUser } from "firebase/auth";
import type { NextPage } from "next";

import SelectImageLight from "../assets/SelectLight.png";
import SelectImageDark from "../assets/Select.png";

import useStateContext from "../hooks/useStateContext";

import Sidebar from "../components/Sidebar";
const Image = dynamic(() => import("next/image"));

const Create: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [formData, setFormData] = useState<PostFormData>({
    title: "",
    description: "",
    image: null,
    author: "",
    authorImage: "",
  });

  const { themeColor, themeMode } = useStateContext();
  const router: NextRouter = useRouter();

  useEffect(() => {
    const user: FirebaseUser = JSON.parse(localStorage.getItem("user") as string);

    setFormData({
      ...formData,
      author: user.displayName as string,
      authorImage: user.photoURL as string,
    });

    // console.log(formData);
  }, []);

  const handleChange: ChangeHandler = event => setFormData({ ...formData, [event.target.name]: event.target.value });

  const handleCreate = async (event: any) => {
    event.preventDefault();
    const { CreatePost } = await import("../utils/posts");

    CreatePost(formData, router, loading);
  };

  return (
    <section className="relative flex items-center dark:bg-black dark:text-white">
      <Sidebar route="create" />
      <article className="z-50 flex h-screen w-[82%] items-center justify-center overflow-auto">
        <form
          className="mt-40 mb-4 flex h-[570px] w-[70%] flex-col rounded-[20px] border-8 border-light-gray p-5 dark:border-dark-gray sm:h-[740px] lg:mt-0 lg:mb-0 lg:h-[440px] lg:w-[85%] lg:flex-row"
          onSubmit={event => handleCreate(event)}
        >
          <Image
            src={
              !formData.image || loading ? (themeMode === "dark" ? SelectImageDark : SelectImageLight) : URL.createObjectURL(formData.image as Blob)
            }
            className="mr-[10px] h-[200px] w-full rounded-[10px] sm:h-[380px] lg:w-[490px]"
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
              className="mt-5 ml-[5px] w-[98%] cursor-pointer rounded-[5px] border-none bg-primary p-[13px] text-white duration-[250ms] hover:bg-primary-dark lg:mt-[50px]"
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

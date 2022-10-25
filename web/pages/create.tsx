import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

import SelectImageLight from "../assets/SelectLight.png";
import SelectImageDark from "../assets/Select.png";

import type { ChangeHandler, PostFormData } from "../types";
import { useStateContext } from "../context/StateContext";
import { CreatePost } from "../utils";

import Sidebar from "../components/Sidebar";
const Image = dynamic(() => import("next/image"));

const Create: NextPage = () => {
  const { themeColor, themeMode, user } = useStateContext();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<PostFormData>({ title: "", description: "", image: "", author: user?.displayName, authorImage: user?.photoURL });

  const handleChange: ChangeHandler = event => setFormData({ ...formData, [event.target.name]: event.target.value });

  return (
    <div className={`create ${themeMode === "dark" && "dark-page"}`}>
      <Sidebar isActive="create" />
      <div className="create__container">
        <form className={`create__container_form ${themeMode === "dark" && "dark-form"}`} onSubmit={event => CreatePost(event, formData, setFormData, router, loading)}>
          <Image
            src={!formData.image || loading ? (themeMode === "dark" ? SelectImageDark : SelectImageLight) : formData.image}
            style={{
              marginRight: "50px",
              borderRadius: "10px",
            }}
            alt="selected-image"
            height={300}
            width={600}
          />
          <div className="seperator" />
          <div className="create__container_form__inner">
            <h1 className="create__container-title">Create a Post</h1>
            <div className="create__container_form-input_container">
              <input className={`create__container_form-input ${themeMode === "dark" && "dark-input"}`} value={formData.title} placeholder="Title" name="title" onChange={handleChange} />
              <input className={`create__container_form-input ${themeMode === "dark" && "dark-input"}`} value={formData.description} placeholder="About The Post" name="description" onChange={handleChange} />
              <div className={`create__container_form-input ${themeMode === "dark" && "dark-input"}`}>
                <FileBase64
                  onDone={({ base64 }: any) => {
                    setFormData({ ...formData, image: base64 });
                    setLoading(false);
                  }}
                />
              </div>
            </div>
            <button type="submit" className="create__container_form-btn" style={{ backgroundColor: themeColor }}>
              Create Post!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;

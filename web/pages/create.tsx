import React, { FC, useState } from "react";
import FileBase64 from "react-file-base64";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import Image from "next/image";

import SelectImageLight from "../assets/SelectLight.png";
import SelectImageDark from "../assets/Select.png";
import { CreatePostSubmitHandlerType, ChangeHandlerType, PostFormDataType } from "../types";
import { createPost } from "../api";
import { useStateContext } from "../context/StateContext";
import { Sidebar } from "../components";

const Create: FC = () => {
  const { themeColor, themeMode, user } = useStateContext();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<PostFormDataType>({
    title: "",
    description: "",
    image: "",
    author: user?.displayName,
    authorImage: user?.photoURL,
  });

  const handleSubmit: CreatePostSubmitHandlerType = async (event) => {
    event.preventDefault();

    if (!formData.title || (!formData.image && formData.title.length > 3) || loading) return;

    toast.loading("Creating post...", { id: "creating-post-toast" });

    await createPost(formData);
    toast.remove("creating-post-toast");
    toast.success("Post created successfully");
    router.push("/");
  };

  const handleChange: ChangeHandlerType = (event) => setFormData({ ...formData, [event.target.name]: event.target.value });

  return (
    <div className={`create ${themeMode === "dark" && "dark-page"}`}>
      <Sidebar isActive="create" />
      <div className="create__container">
        <form className={`create__container_form ${themeMode === "dark" && "dark-form"}`} onSubmit={handleSubmit}>
          <Image
            src={!formData.image || loading ? (themeMode === "dark" ? SelectImageDark : SelectImageLight) : formData.image}
            style={{
              marginRight: "50px",
              borderRadius: "10px",
            }}
            height={300}
            width={600}
          />
          <div className="seperator" />
          <div className="create__container_form__inner">
            <h1 className="create__container-title">Create a Post</h1>
            <div className="create__container_form-input_container">
              <input
                className={`create__container_form-input ${themeMode === "dark" && "dark-input"}`}
                value={formData.title}
                placeholder="Title"
                name="title"
                onChange={handleChange}
              />
              <input
                className={`create__container_form-input ${themeMode === "dark" && "dark-input"}`}
                value={formData.description}
                placeholder="About The Post"
                name="description"
                onChange={handleChange}
              />
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

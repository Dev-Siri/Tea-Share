import React from "react";
import type { ProfileProps } from "../../types";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

import { fetchPostByQuery, fetchUserByQuery } from "../../api";
import { useStateContext } from "../../context/StateContext";

import Sidebar from "../../components/Sidebar";
const Post = dynamic(() => import("../../components/Post"));
const Image = dynamic(() => import("next/image"));

const Profile: NextPage<ProfileProps> = ({ user, posts }) => {
  const { username, image } = user;

  const { themeMode } = useStateContext();

  return (
    <div className={`profile ${themeMode === "dark" && "dark-page"}`}>
      <Sidebar isActive="profile" />
      <div className="profile__main">
        <div className="profile__main-container">
          <div className="profile__main-container_img">
            <Image src={image} alt={username} height={100} width={100} style={{ borderRadius: "75px" }} />
          </div>
          <h1 className="profile__main-container_name">{username}</h1>
          <h3>
            Posts by {username} ({posts?.length})
          </h3>
          <div className="profile__main-container_post-container">
            {posts?.map(post => (
              <Post key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  const { name } = context.params;

  const { data: posts } = await fetchPostByQuery(name);
  const { data: user } = await fetchUserByQuery(name);

  return {
    props: { user, posts },
  };
};

export default Profile;

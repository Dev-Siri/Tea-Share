import React, { FC } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import { fetchUserByQuery, fetchPostByQuery } from "../../../api";
import { useStateContext } from "../../../context/StateContext";
import { PostAuthorProps } from "../../../types";

import Sidebar from "../../../components/Sidebar";
const Post = dynamic(() => import("../../../components/Post"));

const Author: FC<PostAuthorProps> = ({ user, posts }) => {
  const router = useRouter();
  const { post } = router.query;

  const { themeMode } = useStateContext();
  const { image, username } = user;

  return (
    <div className={`profile ${themeMode === "dark" && "dark-page"}`}>
      <Sidebar isActive="post-author-info" isOnPostInfo={{ visible: true, title: "View Post", href: `/post/${post}`, postedBy: username }} />
      <div className="profile__main">
        <div className="profile__spacer" />
        <div className="profile__main-container">
          <picture>
            <img src={image} alt={username} height="100px" width="100px" style={{ borderRadius: "75px" }} />
          </picture>
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

export async function getServerSideProps(context: any) {
  const { name } = context.params;

  const { data: posts } = await fetchPostByQuery(name);
  const { data: user } = await fetchUserByQuery(name);

  return {
    props: { user, posts },
  };
}

export default Author;

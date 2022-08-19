import React, { FC } from "react";
import { useRouter } from "next/router";

import { fetchUserBySearchTerm, fetchPostBySearchTerm } from "../../../api";
import { useStateContext } from "../../../context/StateContext";
import { Sidebar, Post } from "../../../components";
import { PostType, PostAuthorProps } from "../../../types";

const Author: FC<PostAuthorProps> = ({ user, posts }) => {
  const router = useRouter();
  const { post } = router.query;

  const { themeMode } = useStateContext();
  const { image, username } = user[0];

  return (
    <div className={`profile ${themeMode === "dark" && "dark-page"}`}>
      <Sidebar isActive="post-author-info" isOnPostInfo={{ visible: true, title: 'View Post', href: `/post/${post}`, postedBy: username }} />
      <div className="profile__main">
        <div className="profile__spacer" />
        <div className="profile__main-container">
          <picture>
            <img src={image} alt={username} height="100px" width="100px" style={{ borderRadius: "75px" }} />
          </picture>
          <h1 className="profile__main-container_name">
            {username}
          </h1>
          <h3>Posts by {username} ({posts?.length})</h3>
          <div className="profile__main-container_post-container">
            {posts?.map((post: PostType) => (
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

  const { data: posts } = await fetchPostBySearchTerm(name);
  const { data: user } = await fetchUserBySearchTerm(name);

  return {
    props: { user, posts },
  };
}

export default Author;

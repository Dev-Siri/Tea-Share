import React, { FC } from "react";
import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import moment from "moment";
import Link from "next/link";

import { useStateContext } from "../../context/StateContext";
import { PostInfoProps } from "../../types";
import { fetchPostBySearchTerm } from "../../api";
import { Sidebar } from "../../components";

const PostInfo: FC<PostInfoProps> = ({ post }) => {
  const router: NextRouter = useRouter();
  const { name }: ParsedUrlQuery = router.query;
  const { themeMode } = useStateContext();

  const { title, description, createdAt, image, author, authorImage, _id } = post;

  const time = () => {
    const defaultTime = moment(createdAt).fromNow();
    const result = `${defaultTime.charAt(0).toUpperCase()}${defaultTime.slice(1)}`;
    return result;
  };

  return (
    post && (
      <div className={`post-info ${themeMode === "dark" && "dark-page"}`}>
        <Sidebar
          isActive="post-info"
          isOnPostInfo={{
            visible: true,
            title,
            _id,
            href: `/post/${name}`,
            postedBy: author,
          }}
        />
        <div className="post-info__container">
          <div>
            <h1 className="post-info__container_title">{title}</h1>
            <p className="post-info__container_desc">{description}</p>
            <p className="post-info__container_desc">{time()}</p>
            <div className="seperator" />
            <div className="post-info__container_author-container">
              <p className="post-info__container_desc">Posted by {author}</p>
              <Link href={`/user/${author}`}>
                <picture>
                  <img src={authorImage} alt={author} className="post-info__container_author-image" />
                </picture>
              </Link>
            </div>
            <div className="seperator" />
          </div>
          <picture className="post-info__container_image-wrapper">
            <img src={image} alt={title} className="post-info__container_image" />
          </picture>
        </div>
      </div>
    )
  );
};

export async function getServerSideProps(context: any) {
  const { name } = context.params;

  const { data } = await fetchPostBySearchTerm(name, false);

  return {
    props: { post: data[0] },
  };
}

export default PostInfo;

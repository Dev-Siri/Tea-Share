"use client";
import { useState, type FC, type UIEventHandler } from "react";

import type { Post as PostType, PostsPresenterProps } from "@types";

import { fetchPosts } from "@api/fetchers";
import { INITIAL_PAGE_LIMIT, POST_LIMIT } from "@constants/limit";

import Post from "@components/Post";

let currentPage: number = INITIAL_PAGE_LIMIT;

const PostsPresenter: FC<PostsPresenterProps> = ({ initialPosts }) => {
  const [posts, setPosts] = useState<PostType[]>(initialPosts);

  const onPostListScroll: UIEventHandler<HTMLElement> = async (event: any) => {
    const { scrollHeight, scrollTop, clientHeight } = event.target;
    const didScrollToBottom: boolean = scrollHeight - scrollTop === clientHeight;

    if (didScrollToBottom) {
      currentPage++;

      const fetchedPosts = await fetchPosts(currentPage, POST_LIMIT);

      setPosts(prevPosts => [...prevPosts, ...fetchedPosts]);
    }
  };

  return (
    <article onScroll={onPostListScroll} className="h-screen w-full overflow-y-auto px-4 pt-4 pb-10 min-[1002px]:w-[70%]">
      {posts.map?.((post, index) => (
        <Post key={`${post._id}:${index}`} post={post} lazyLoadImage={!!index} />
      ))}
    </article>
  );
};

export default PostsPresenter;

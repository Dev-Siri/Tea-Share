import React, { useEffect, useState, FC } from "react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

import type { PostType, HomeProps } from "../types";
import { useStateContext } from "../context/StateContext";
import { Sidebar, Post, SearchBar } from "../components";
import { fetchPosts } from "../api";

const Home: FC<HomeProps> = ({ posts = null }) => {
  const [reactivePosts, setReactivePosts] = useState<PostType[] | null | undefined>(posts);
  const [postLimit, setPostLimit] = useState(9);
  const { searchTerm, user, themeMode, themeColor } = useStateContext();
  const router = useRouter();

  useEffect(() => {
    toast.remove();

    if (!user) router.replace("/auth");
  }, []);

  useEffect(() => {
    const fetchMorePosts = async () => {
      const { data: posts } = await fetchPosts(postLimit);
      setReactivePosts(posts);
    }

    fetchMorePosts();
  }, [postLimit]);

  const search = () => {
    if (!searchTerm) return setReactivePosts(posts);

    const searchedPosts = posts?.filter(
      (post: PostType) =>
        post?.title.toLowerCase().includes(searchTerm.toLowerCase()) || post?.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setReactivePosts(searchedPosts);
  };

  return (
    <div className={`home__container ${themeMode === "dark" && "dark-page"}`}>
      <Sidebar isActive="home" />
      <div className="home__container-main">
        <SearchBar handleSearch={search} />
        <div className="post__container">
          {reactivePosts?.map((post: PostType) => (
            <Post key={post._id} post={post} />
          ))}
          {postLimit < (reactivePosts?.length as number) && (
            <div className="home__container-main_show-more">
              <button onClick={() => setPostLimit(prevPostLimit => prevPostLimit + 9)} style={{ backgroundColor: themeColor }} type="button" className="home__container-main_show-more__button">
                Show more
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const { data } = await fetchPosts(9);

  return {
    props: { posts: data },
  };
}

export default Home;
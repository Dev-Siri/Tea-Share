import { type FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { toast } from "react-hot-toast";

import type { Post as PostType, HomeProps } from "../types";
import type { GetStaticProps } from "next";

import useStateContext from "../hooks/useStateContext";
import { fetchPosts } from "../api";

import Sidebar from "../components/Sidebar";
import { brotliDecompress } from "zlib";
const Post = dynamic(() => import("../components/Post"));
const SearchBar = dynamic(() => import("../components/SearchBar"));

const Home: FC<HomeProps> = ({ posts }) => {
  const [reactivePosts, setReactivePosts] = useState<PostType[]>(posts);
  const [postLimit, setPostLimit] = useState<number>(18);
  const [loading, setLoading] = useState(false);

  const { searchTerm, themeColor } = useStateContext();
  const router = useRouter();

  useEffect(() => {
    toast.remove();

    if (!JSON.parse(localStorage.getItem("user") as string)) router.replace("/auth");
  }, []);

  useEffect(() => {
    const fetchMorePosts = async () => {
      setLoading(true);
      const { data: posts } = await fetchPosts(postLimit);

      setReactivePosts(posts);
      setLoading(false);
    };

    fetchMorePosts();
  }, [postLimit]);

  const search = () => {
    if (!searchTerm) return setReactivePosts(posts);

    const searchedPosts = posts?.filter(
      post => post?.title.toLowerCase().includes(searchTerm.toLowerCase()) || post?.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setReactivePosts(searchedPosts);
  };

  return (
    <section className="flex dark:bg-black dark:text-white">
      <Sidebar route="home" />
      <article className="w-[82%]">
        <SearchBar onSearch={search} />
        <button
          onClick={() => setPostLimit(prevPostLimit => prevPostLimit + 9)}
          style={{ backgroundColor: themeColor }}
          type="button"
          className="absolute z-[1] ml-[32%] mt-[75vh] flex w-[190px] cursor-pointer justify-center rounded-md border-none p-[14px] text-white"
        >
          {loading ? "Loading..." : "Show more"}
        </button>
        <aside className="flex h-screen w-full flex-wrap justify-around overflow-y-auto p-[30px] pb-[100px]">
          {reactivePosts?.map?.(post => (
            <Post key={post._id} post={post} />
          ))}
        </aside>
      </article>
    </section>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const { data } = await fetchPosts(6);

  return {
    props: { posts: data },
    revalidate: 10,
  };
};

export default Home;

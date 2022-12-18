import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { toast } from "react-hot-toast";
import { type NextRouter, useRouter } from "next/router";

import type { Post as PostType, HomeProps } from "../types";
import type { NextPage, GetStaticProps } from "next";
import type { User as FirebaseUser } from "firebase/auth";

import useStateContext from "../hooks/useStateContext";

import Sidebar from "../components/Sidebar";
const Post = dynamic(() => import("../components/Post"));
const SearchBar = dynamic(() => import("../components/SearchBar"));

const Home: NextPage<HomeProps> = ({ posts }) => {
  const [reactivePosts, setReactivePosts] = useState<PostType[]>(posts);
  const [postLimit, setPostLimit] = useState<number>(18);
  const [loading, setLoading] = useState<boolean>(false);

  const { searchTerm } = useStateContext();
  const router: NextRouter = useRouter();

  useEffect(() => {
    // Remove the toast that is displayed when trying to login
    toast.remove();

    const user: FirebaseUser = JSON.parse(localStorage.getItem("user") as string);

    if (!user) router.replace("/auth");
  }, []);

  const search = () => {
    if (!searchTerm) return setReactivePosts(posts);

    const searchedPosts = posts?.filter(
      post => post?.title.toLowerCase().includes(searchTerm.toLowerCase()) || post?.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setReactivePosts(searchedPosts);
  };

  useEffect(() => {
    const fetchMorePosts = async () => {
      setLoading(true);
      const { fetchPosts } = await import("../api");
      const { data: posts } = await fetchPosts(postLimit);

      setReactivePosts(posts);
      setLoading(false);
    };

    fetchMorePosts();
  }, [postLimit]);

  return (
    <section className="flex dark:bg-black dark:text-white">
      <Sidebar
        route="home"
        scrollingOptions={{
          setLimit: setPostLimit,
          loading,
        }}
      />
      <article className="w-[82%]">
        <SearchBar onSearch={search} />
        <aside className="flex h-screen w-full flex-wrap justify-around overflow-y-auto p-[30px] pl-0 pb-[100px] md:pl-[30px]">
          {reactivePosts?.map?.(post => (
            <Post key={post._id} post={post} />
          ))}
        </aside>
      </article>
    </section>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const { fetchPosts } = await import("../api");
  const { data } = await fetchPosts(6);

  return {
    props: { posts: data },
    revalidate: 10,
  };
};

export default Home;

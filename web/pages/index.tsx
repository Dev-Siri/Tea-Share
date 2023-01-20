import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { type NextRouter, useRouter } from "next/router";

import type { Post as PostType, HomeProps } from "../types";
import type { NextPage, GetStaticProps } from "next";
import type { User as FirebaseUser } from "firebase/auth";

import useStateContext from "../hooks/useStateContext";
import { INITIAL_PAGE_LIMIT, SERVER_POST_LIMIT } from "../constants/limit";

import Sidebar from "../components/Sidebar";
const Post = dynamic(() => import("../components/Post"));
const SearchBar = dynamic(() => import("../components/SearchBar"));

const Home: NextPage<HomeProps> = ({ posts }) => {
  const [reactivePosts, setReactivePosts] = useState<PostType[]>(posts);
  const [currentPage, setCurrentPage] = useState<number>(INITIAL_PAGE_LIMIT);
  const [loading, setLoading] = useState<boolean>(false);

  const { searchTerm } = useStateContext();
  const router: NextRouter = useRouter();

  useEffect(() => {
    const onPageLoad = async () => {
      const { toast } = await import("react-hot-toast");
      // Remove the toast that is displayed when trying to login
      toast.remove();

      const user: FirebaseUser = JSON.parse(localStorage.getItem("user") as string);

      if (!user) router.replace("/auth");
    };

    onPageLoad();
  }, []);

  const search = () => {
    if (!searchTerm) return setReactivePosts(posts);

    const searchedPosts: PostType[] = posts?.filter(
      post => post?.title.toLowerCase().includes(searchTerm.toLowerCase()) || post?.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setReactivePosts(searchedPosts);
  };

  useEffect(() => {
    const fetchMorePosts = async () => {
      setLoading(true);
      const { fetchPosts } = await import("../api");
      const { CLIENT_POST_LIMIT } = await import("../constants/limit");

      const fetchedPosts: PostType[] = await fetchPosts(currentPage, CLIENT_POST_LIMIT);

      if (reactivePosts.length === SERVER_POST_LIMIT) {
        setReactivePosts(fetchedPosts);
      } else {
        setReactivePosts([...reactivePosts, ...fetchedPosts]);
      }

      setLoading(false);
    };

    fetchMorePosts();
  }, [currentPage]);

  return (
    <section className="flex dark:bg-dark-gray dark:text-white">
      <Sidebar
        route="home"
        scrollingOptions={{
          setCurrentPage,
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
  const posts: PostType[] = await fetchPosts(INITIAL_PAGE_LIMIT, SERVER_POST_LIMIT);

  return {
    props: { posts },
    revalidate: 3,
  };
};

export default Home;

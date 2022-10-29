import { type FC, useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { toast } from "react-hot-toast";

import type { Post as PostType, HomeProps } from "../types";
import { useStateContext } from "../context/StateContext";
import { fetchPosts } from "../api";

import Sidebar from "../components/Sidebar";
const Post = dynamic(() => import("../components/Post"));
const SearchBar = dynamic(() => import("../components/SearchBar"));

const Home: FC<HomeProps> = ({ posts }) => {
  const [reactivePosts, setReactivePosts] = useState<PostType[] | undefined>(posts);
  const [postLimit, setPostLimit] = useState(18);

  const { searchTerm, user, themeMode, themeColor } = useStateContext();
  const router = useRouter();
  const postObserver = useRef<HTMLDivElement>(null);

  useEffect(() => {
    toast.remove();

    if (!user) router.replace("/auth");
  }, []);

  useEffect(() => {
    const fetchMorePosts = async () => {
      const { data: posts } = await fetchPosts(postLimit);
      setReactivePosts(posts);
    };

    fetchMorePosts();
  }, [postLimit]);

  const search = () => {
    if (!searchTerm) return setReactivePosts(posts);

    const searchedPosts = posts?.filter(post => post?.title.toLowerCase().includes(searchTerm.toLowerCase()) || post?.description.toLowerCase().includes(searchTerm.toLowerCase()));

    setReactivePosts(searchedPosts);
  };

  return (
    <div className={`home__container ${themeMode === "dark" && "dark-page"}`}>
      <Sidebar isActive="home" />
      <div className="home__container-main">
        <SearchBar handleSearch={search} />
        <button onClick={() => setPostLimit(prevPostLimit => prevPostLimit + 9)} style={{ backgroundColor: themeColor }} type="button" className="home__container-main__button">
          Show more
        </button>
        <div className="post__container">
          {reactivePosts?.map((post: PostType) => (
            <Post key={post._id} post={post} />
          ))}
          <div ref={postObserver} />
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const { data } = await fetchPosts(6);

  return {
    props: { posts: data },
  };
};

export default Home;

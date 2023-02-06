import dynamic from "next/dynamic";
import { useRouter, type NextRouter } from "next/router";
import { useEffect, useState, type UIEventHandler } from "react";

import type { HomeProps, MongoDBUser, Post as PostType } from "@types";
import type { GetStaticProps, NextPage } from "next";

import { CLIENT_POST_LIMIT, INITIAL_PAGE_LIMIT, PAGE_INC_COUNT, SERVER_POST_LIMIT, SERVER_USER_LIMIT } from "@constants/limit";
import useDidMountEffect from "@hooks/useDidMountEffect";

const UserList = dynamic(() => import("@components/UserList"));
const Post = dynamic(() => import("@components/Post"));

const Home: NextPage<HomeProps> = ({ posts, users }) => {
  const [reactivePosts, setReactivePosts] = useState<PostType[]>(posts);
  const [currentPage, setCurrentPage] = useState<number>(INITIAL_PAGE_LIMIT);

  const router: NextRouter = useRouter();

  useEffect(() => {
    const onPageLoad = async () => {
      const { toast } = await import("react-hot-toast");
      const user: string | null = localStorage.getItem("user");

      toast.remove();

      if (!user) router.replace("/auth");
    };

    onPageLoad();
  }, [router]);

  useDidMountEffect(() => {
    const fetchMorePosts = async (): Promise<void> => {
      const { fetchPosts } = await import("@api/client");

      const fetchedPosts: PostType[] = await fetchPosts(currentPage, CLIENT_POST_LIMIT);

      setReactivePosts((prevReactivePosts: PostType[]) => [...prevReactivePosts, ...fetchedPosts]);
    };

    fetchMorePosts();
  }, [currentPage]);

  const onPostListScroll: UIEventHandler<HTMLElement> = (event: any) => {
    const didScrollToBottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;

    if (didScrollToBottom) setCurrentPage(prevCurrentPage => prevCurrentPage + PAGE_INC_COUNT);
  };

  return (
    <aside className="flex w-full min-[1002px]:pr-4">
      <section onScroll={onPostListScroll} className="h-screen w-full overflow-y-auto px-4 pt-4 min-[1002px]:w-[70%]">
        {reactivePosts?.map?.((post: PostType, index: number) => (
          <Post key={`${post._id}:${index}`} post={post} />
        ))}
      </section>
      <section className="hidden py-4 min-[1002px]:block min-[1002px]:w-[30%]">
        <UserList title="Suggested Accounts" users={users} />
      </section>
    </aside>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const { fetchPosts, fetchUsers } = await import("@api/client");

  const [posts, users]: [PostType[], MongoDBUser[]] = await Promise.all([
    fetchPosts(INITIAL_PAGE_LIMIT, SERVER_POST_LIMIT),
    fetchUsers(INITIAL_PAGE_LIMIT, SERVER_USER_LIMIT / 2),
  ]);

  return {
    props: { posts, users },
    revalidate: 3,
  };
};

export default Home;

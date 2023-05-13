import lazy from "next/dynamic";

import type { MongoDBUser, PageComponent, Post } from "@/types";
import type { Metadata, ServerRuntime } from "next";

import { INITIAL_PAGE_LIMIT, POST_LIMIT, USER_LIMIT } from "@/constants/limit";
import queryClient from "@/services/queryClient";

import PostList from "@/components/PostList";
import UserList from "@/components/UserList";

const PostsPresenter = lazy(() => import("@/components/PostsPresenter"));

export const runtime: ServerRuntime = "edge";

export const metadata: Metadata = {
  title: "Home",
};

interface Props {
  searchParams: {
    page: number;
  };
}

const Home: PageComponent<Props> = async ({ searchParams: { page = 1 } }) => {
  const [posts, users] = await Promise.all([
    queryClient<Post[]>("/posts", {
      cache: "no-store",
      searchParams: {
        page: INITIAL_PAGE_LIMIT,
        limit: POST_LIMIT,
      },
    }),
    queryClient<MongoDBUser[]>("/users", {
      searchParams: {
        page: INITIAL_PAGE_LIMIT,
        limit: USER_LIMIT - 2,
      },
    }),
  ]);

  return (
    <aside className="flex w-full min-[1002px]:pr-4">
      <PostsPresenter currentPage={page}>
        <PostList posts={posts} />
      </PostsPresenter>
      <section className="hidden h-[91vh] py-4 min-[1002px]:block min-[1002px]:w-[30%]">
        <UserList title="Suggested Accounts" users={users} />
      </section>
    </aside>
  );
};

export default Home;

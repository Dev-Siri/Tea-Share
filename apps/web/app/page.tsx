import lazy from "next/dynamic";

import type { PageComponent } from "@/types";
import type { Metadata } from "next";

import { fetchPosts, fetchUsers } from "@/api/fetchers";
import { INITIAL_PAGE_LIMIT, POST_LIMIT, USER_LIMIT } from "@/constants/limit";

import UserList from "@/components/UserList";

const PostsPresenter = lazy(() => import("@/components/PostsPresenter"));

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Home",
};

const Home: PageComponent = async () => {
  const [posts, users] = await Promise.all([fetchPosts(INITIAL_PAGE_LIMIT, POST_LIMIT), fetchUsers(INITIAL_PAGE_LIMIT, USER_LIMIT - 2)]);

  return (
    <aside className="flex w-full min-[1002px]:pr-4">
      <PostsPresenter initialPosts={posts} />
      <section className="hidden h-[91vh] py-4 min-[1002px]:block min-[1002px]:w-[30%]">
        <UserList title="Suggested Accounts" users={users} />
      </section>
    </aside>
  );
};

export default Home;

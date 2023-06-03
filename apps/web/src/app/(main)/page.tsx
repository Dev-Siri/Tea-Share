import type { MongoDBUser, PageComponent, Post } from "@/types";
import type { Metadata, ServerRuntime } from "next";

import queryClient from "@/services/queryClient";

import { AiOutlineArrowLeft } from "@react-icons/all-files/ai/AiOutlineArrowLeft";
import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight";

import PostList from "@/components/ui/posts/PostList";
import UserList from "@/components/ui/users/UserList";
import Link from "next/link";

export const runtime: ServerRuntime = "edge";

export const metadata: Metadata = {
  title: "Home",
  openGraph: {
    title: "Home",
  },
  twitter: {
    title: "Home",
  },
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
        page,
        limit: 8,
      },
    }),
    queryClient<MongoDBUser[]>("/users", {
      searchParams: {
        page: 1,
        limit: 8,
      },
    }),
  ]);

  return (
    <aside className="flex w-full min-[1002px]:pr-4">
      <header className="bg-light-gray dark:bg-semi-gray fixed mx-2 my-4 flex h-[13%] w-[95%] justify-between rounded-md bg-opacity-90 p-4 min-[1002px]:mx-4 min-[1002px]:w-[67%]">
        <Link
          href={`/?page=${Number(page) === 1 ? 1 : page - 1}`}
          className="bg-primary hover:bg-primary-dark border-primary border-px mb-10 flex items-center gap-2 rounded-md p-6 text-white duration-200"
        >
          <AiOutlineArrowLeft size={20} />
          Prev
        </Link>
        <p className="my-auto">
          Page <span className="font-bold">{page}</span>
        </p>
        <Link
          href={`/?page=${++page}`}
          className="bg-primary hover:bg-primary-dark border-primary border-px mb-10 flex items-center gap-2 rounded-md p-6 text-white duration-200 focus:scroll-m-8"
        >
          Next
          <AiOutlineArrowRight size={20} />
        </Link>
      </header>
      <section className="h-screen w-full overflow-y-auto px-4 pb-10 pt-28 min-[1002px]:w-[70%]">
        <PostList posts={posts} />
      </section>
      <section className="hidden h-[91vh] py-4 min-[1002px]:block min-[1002px]:w-[30%]">
        <UserList title="Suggested Accounts" users={users} />
      </section>
    </aside>
  );
};

export default Home;

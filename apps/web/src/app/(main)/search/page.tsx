import type { GenerateMetadata, MongoDBUser, PageComponent, Post } from "@/types";

import queryClient from "@/services/queryClient";

import PostList from "@/components/PostList";
import UserList from "@/components/UserList";
import { FaUserAltSlash } from "@react-icons/all-files/fa/FaUserAltSlash";
import { FiCameraOff } from "@react-icons/all-files/fi/FiCameraOff";

interface Props {
  searchParams: {
    query: string;
  };
}

export const generateMetadata: GenerateMetadata<Props> = ({ searchParams: { query } }) => ({
  title: `Search - ${query}`,
  description: "Posts & People who have `${query}` in their names and titles.",
  openGraph: {
    title: `Search - ${query}`,
    description: "Posts & People who have `${query}` in their names and titles.",
  },
  twitter: {
    title: `Search - ${query}`,
    description: "Posts & People who have `${query}` in their names and titles.",
  },
});

const Search: PageComponent<Props> = async ({ searchParams: { query } }) => {
  const [posts, users] = await Promise.all([
    queryClient<Post[]>("/posts/search", {
      cache: "no-store",
      searchParams: {
        q: query,
        fromUser: false,
      },
    }),
    queryClient<MongoDBUser[]>("/users/search", {
      cache: "no-store",
      searchParams: {
        name: query,
        exact: false,
      },
    }),
  ]);

  return (
    <aside className="flex h-screen w-full flex-col-reverse min-[1002px]:flex-row min-[1002px]:pr-4">
      <section className="h-screen flex-[2] overflow-y-auto px-4 min-[1002px]:mt-3">
        {posts?.length ? (
          <PostList posts={posts} />
        ) : (
          <aside className="border-light-gray dark:border-semi-gray flex h-full w-full flex-col items-center justify-center rounded-xl border-2 bg-white py-4 dark:bg-black">
            <FiCameraOff size={44} />
            <p className="mt-4 text-center">No posts found with query &apos;{query}&apos;</p>
          </aside>
        )}
      </section>
      <section className="h-2/5 w-full p-4 min-[1002px]:h-3/5 min-[1002px]:w-[30%] min-[1002px]:px-0">
        {users ? (
          <UserList title="People" users={users} />
        ) : (
          <aside className="border-light-gray dark:border-semi-gray grid w-full place-items-center rounded-xl border-2 bg-white py-4 dark:bg-black">
            <FaUserAltSlash size={44} />
            <p className="mt-4 px-4 text-center">No people found with name &apos;{query}&apos;</p>
          </aside>
        )}
      </section>
    </aside>
  );
};

export default Search;

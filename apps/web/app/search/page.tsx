import type { GenerateMetadata, MongoDBUser, PageComponent } from "@/types";

import { fetchPostsByQuery, fetchUsersByName } from "@/api/fetchers";

import PostList from "@/components/PostList";
import UserList from "@/components/UserList";
import { FaUserAltSlash } from "@react-icons/all-files/fa/FaUserAltSlash";
import { FiCameraOff } from "@react-icons/all-files/fi/FiCameraOff";

export const dynamic = "force-dynamic";

export const generateMetadata: GenerateMetadata = ({ searchParams: { query } }) => ({
  title: `Search - ${query}`,
});

const Search: PageComponent = async ({ searchParams: { query } }) => {
  const [posts, users] = await Promise.all([fetchPostsByQuery(query, false), fetchUsersByName(query)]);

  return (
    <aside className="flex h-screen w-full flex-col-reverse min-[1002px]:flex-row min-[1002px]:pr-4">
      <section className="h-screen flex-[2] overflow-y-auto px-4 min-[1002px]:mt-3">
        {posts?.length ? (
          <PostList posts={posts} />
        ) : (
          <aside className="flex h-full w-full flex-col items-center justify-center rounded-xl border-2 border-light-gray bg-white py-4 dark:border-semi-gray dark:bg-black">
            <FiCameraOff size={44} />
            <p className="mt-4 text-center">No posts found with query &apos;{query}&apos;</p>
          </aside>
        )}
      </section>
      <section className="h-2/5 w-full p-4 min-[1002px]:h-3/5 min-[1002px]:w-[30%] min-[1002px]:px-0">
        {(users as MongoDBUser[] | null)?.length ? (
          <UserList title="People" users={users as MongoDBUser[]} />
        ) : (
          <aside className="grid w-full place-items-center rounded-xl border-2 border-light-gray bg-white py-4 dark:border-semi-gray dark:bg-black">
            <FaUserAltSlash size={44} />
            <p className="mt-4 px-4 text-center">No people found with name &apos;{query}&apos;</p>
          </aside>
        )}
      </section>
    </aside>
  );
};

export default Search;

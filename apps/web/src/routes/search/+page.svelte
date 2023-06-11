<script lang="ts">
  import FaUserAltSlash from "svelte-icons/fa/FaUserAltSlash.svelte";
  import FaVideoSlash from "svelte-icons/fa/FaVideoSlash.svelte";

  import { page } from "$app/stores";
  import PostList from "../../components/PostList.svelte";
  import UserList from "../../components/UserList.svelte";

  export let data;

  const query = $page.url.searchParams.get("query");

  const { posts, users } = data;
</script>

<svelte:head>
  <title>Search - {query}</title>
  <meta name="description" content="Posts & People who have \`{query}\` in their names and titles." />
  <meta name="og:title" content="Search - {query}" />
  <meta name="og:description" content="Posts & People who have \`{query}\` in their names and titles." />
  <meta name="twitter:title" content="Search - {query}" />
  <meta name="twitter:description" content="Posts & People who have \`{query}\` in their names and titles." />
</svelte:head>

<aside class="flex h-screen w-full flex-col-reverse min-[1002px]:flex-row min-[1002px]:pr-4">
  <section class="h-screen flex-[2] overflow-y-auto px-4 min-[1002px]:mt-3">
    {#if posts?.length}
      <PostList {posts} />
    {:else}
      <aside
        class="border-light-gray dark:border-semi-gray flex h-full w-full flex-col items-center justify-center rounded-xl border-2 bg-white py-4 dark:bg-black"
      >
        <div class="h-11">
          <FaVideoSlash />
        </div>
        <p class="mt-4 text-center">No posts found with query &apos;{query}&apos;</p>
      </aside>
    {/if}
  </section>
  <section class="h-2/5 w-full p-4 min-[1002px]:h-3/5 min-[1002px]:w-[30%] min-[1002px]:px-0">
    {#if users}
      <UserList title="People" {users} />
    {:else}
      <aside class="border-light-gray dark:border-semi-gray grid w-full place-items-center rounded-xl border-2 bg-white py-4 dark:bg-black">
        <div class="h-11">
          <FaUserAltSlash />
        </div>
        <p class="mt-4 px-4 text-center">No people found with name &apos;{query}&apos;</p>
      </aside>
    {/if}
  </section>
</aside>

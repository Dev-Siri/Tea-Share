<script lang="ts">
  import { page } from "$app/stores";

  import type { Post, User } from "@/app.js";

  import SearchResults from "@/components/SearchResults.svelte";

  export let data;

  let currentPage = 1;

  $: paginatedPosts = data.posts;
  $: paginatedUsers = data.users;

  $: query = $page.url.searchParams.get("query") ?? "";
  $: type = ($page.url.searchParams.get("type") ?? "posts") as "posts" | "people";

  const loadMoreItems = async (event: any) => {
    const { scrollHeight, scrollTop, clientHeight } = event.target;

    const didScrollToBottom: boolean = scrollHeight - scrollTop === clientHeight;

    if (didScrollToBottom) {
      currentPage++;
      const { default: queryClient } = await import("@/utils/queryClient");

      const items = await queryClient<Post[] | User[]>(`/${type === "people" ? "users" : "posts"}`, {
        searchParams: {
          page: currentPage,
          limit: 8,
        },
      });

      if (!items) return;

      if (type === "posts") {
        paginatedPosts = [...paginatedPosts, ...(items as Post[])];
      } else {
        paginatedUsers = [...paginatedUsers, ...(items as User[])];
      }
    }
  };
</script>

<svelte:head>
  <title>Search - {query}</title>
  <meta name="description" content="Posts & People who have \`{query}\` in their names and titles." />
  <meta name="og:title" content="Search - {query}" />
  <meta name="og:description" content="Posts & People who have \`{query}\` in their names and titles." />
  <meta name="twitter:title" content="Search - {query}" />
  <meta name="twitter:description" content="Posts & People who have \`{query}\` in their names and titles." />
</svelte:head>

<article class="h-screen pb-10 overflow-y-auto" on:scroll={loadMoreItems}>
  <header class="p-5 gap-10 text-2xl flex">
    <a class:active-link={type === "posts"} href="/search?query={query}&type=posts">Posts</a>
    <a class:active-link={type === "people"} href="/search?query={query}&type=people">People</a>
  </header>
  <section class="w-full border-radius min-[1002px]:pr-4" class:p-4={type === "posts"}>
    <SearchResults users={paginatedUsers} posts={paginatedPosts} {type} />
  </section>
</article>

<style lang="postcss">
  .active-link {
    @apply border-b-primary border-b-4 pb-2 font-bold duration-200;
  }
</style>

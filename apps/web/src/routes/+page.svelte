<script lang="ts">
  import type { Post } from "../app";

  import PostCard from "$lib/components/PostCard.svelte";
  import UserList from "$lib/components/UserList.svelte";

  export let data;

  const { posts, users } = data;

  let currentPage = 1;
  let paginatedPosts = posts;

  const loadMorePosts = async (event: UIEvent & { currentTarget: EventTarget & HTMLElement }) => {
    const { scrollHeight, scrollTop, clientHeight } = event.currentTarget;

    const didScrollToBottom: boolean = scrollHeight - scrollTop === clientHeight;

    if (didScrollToBottom) {
      currentPage++;
      const { default: queryClient } = await import("$lib/utils/queryClient");

      const posts = await queryClient<Post[]>("/posts", {
        searchParams: {
          page: currentPage,
          limit: 8,
        },
      });

      if (posts) paginatedPosts = [...paginatedPosts, ...posts];
    }
  };
</script>

<aside class="flex w-full h-screen min-[1002px]:pr-4">
  <section role="list" on:scroll={loadMorePosts} class="h-screen w-full overflow-y-auto overflow-hidden px-4 pb-10 pt-4 min-[1002px]:w-[70%]">
    {#each paginatedPosts as post, index}
      <PostCard {post} lazyLoadImage={!!index} />
    {/each}
  </section>
  <section class="hidden h-[91vh] py-4 min-[1002px]:block min-[1002px]:w-[30%]">
    <UserList title="Suggested Accounts" {users} />
  </section>
</aside>

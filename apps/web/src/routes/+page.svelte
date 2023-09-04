<script lang="ts">
  import type { Post } from "$lib/types";

  import PostCard from "$lib/components/PostCard.svelte";

  export let data;

  let currentPage = 1;
  let paginatedPosts = data.posts;

  async function loadMorePosts(event: UIEvent & { currentTarget: EventTarget & HTMLElement }) {
    const { scrollHeight, scrollTop, clientHeight } = event.currentTarget;
    const didScrollToBottom = scrollHeight - scrollTop === clientHeight;

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
  }
</script>

<div role="list" on:scroll={loadMorePosts} class="h-full sm:h-screen w-full overflow-y-auto overflow-hidden pb-10">
  {#each paginatedPosts as post, index}
    <PostCard {post} lazyLoadImage={!!index} />
  {/each}
</div>

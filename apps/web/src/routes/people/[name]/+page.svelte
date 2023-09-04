<script lang="ts">
  import { page } from "$app/stores";

  import type { Post } from "$lib/types";

  import { getHandle } from "$lib/utils/globals";

  import Image from "$lib/components/Image.svelte";
  import PostCard from "$lib/components/PostCard.svelte";

  export let data;

  let currentPage = 1;
  let paginatedPosts = data.posts;

  const { username, userImage } = data.user;

  const loadMorePosts = async (event: UIEvent & { currentTarget: EventTarget & HTMLElement }) => {
    const { scrollHeight, scrollTop, clientHeight } = event.currentTarget;

    const didScrollToBottom: boolean = scrollHeight - scrollTop === clientHeight;

    if (didScrollToBottom) {
      currentPage++;
      const { default: queryClient } = await import("$lib/utils/queryClient");

      const posts = await queryClient<Post[] | null>("/posts/search", {
        searchParams: {
          q: $page.params["name"],
          type: "user",
          page: currentPage,
          limit: 8,
        },
      });

      if (posts) paginatedPosts = [...paginatedPosts, ...posts];
    }
  };
</script>

<svelte:head>
  <title>{username}'s Profile</title>
  <meta name="description" content="Visit {username} on Tea Share." />
  <meta name="og:title" content="{username}'s Profile" />
  <meta name="og:description" content="Visit {username} on Tea Share." />
  <meta name="og:image" content={userImage} />
  <meta name="og:image:width" content="600" />
  <meta name="og:image:height" content="600" />
  <meta name="twitter:title" content="{username}'s Profile" />
  <meta name="twitter:description" content="Visit {username} on Tea Share." />
  <meta name="twitter:image" content={userImage} />
  <meta name="twitter:image:alt" content={username} />
</svelte:head>

<article class="h-screen overflow-y-auto pb-32" on:scroll={loadMorePosts}>
  <section class="flex w-full gap-4 items-center border-b dark:border-semi-gray border-light-gray bg-white p-10 dark:bg-black">
    <Image src={userImage} alt={username} height={100} width={100} class="h-[100px] rounded-full" />
    <div>
      <h1 class="text-4xl font-bold">{username}</h1>
      <h2 class="text-xl text-gray-400">{getHandle(username)}</h2>
    </div>
  </section>
  <section class="h-full">
    {#if paginatedPosts.length}
      {#each paginatedPosts as post, index}
        <PostCard {post} lazyLoadImage={!!index} />
      {/each}
    {:else}
      <div class="h-2/3 flex items-center justify-center">
        <p class="text-gray-500">
          No posts by {username}
        </p>
      </div>
    {/if}
  </section>
</article>

<script lang="ts">
  import { enhance } from "$app/forms";
  import { page } from "$app/stores";
  import IoMdLogOut from "svelte-icons/io/IoMdLogOut.svelte";

  import type { Post } from "../../../app";

  import user from "$lib/stores/user";
  import { getHandle } from "$lib/utils/globals";

  import Image from "$lib/components/Image.svelte";
  import PostCard from "$lib/components/PostCard.svelte";

  export let data;

  let currentPage = 1;
  let paginatedPosts = data.posts;

  const { username, userImage, userId } = data.profileUser;

  const loadMorePosts = async (event: any) => {
    const { scrollHeight, scrollTop, clientHeight } = event.target;

    const didScrollToBottom: boolean = scrollHeight - scrollTop === clientHeight;

    if (didScrollToBottom) {
      currentPage++;
      const { default: queryClient } = await import("$lib/utils/queryClient");

      const posts = await queryClient<Post[] | null>("/posts/search", {
        searchParams: {
          q: $page.params.name,
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

<article class="grid h-screen place-items-center overflow-y-auto pb-32" on:scroll={loadMorePosts}>
  <section
    class="border-light-gray dark:border-semi-gray mt-10 flex w-[80%] flex-col items-center rounded-md border-2 bg-white p-12 dark:bg-black sm:ml-5 md:ml-0 md:w-[30%] md:flex-row md:items-start lg:w-1/2"
  >
    <Image src={userImage} alt={username} height={130} width={130} class="h-[130px] rounded-full" />
    <div class="mt-4 text-center md:ml-8 md:mt-5 md:text-start">
      <h1 class="text-4xl font-bold">{username}</h1>
      <h2 class="text-xl text-gray-400">{getHandle(username)}</h2>
    </div>
    {#if userId === $user.userId}
      <form method="POST" action="?/logout" class="mt-auto ml-auto" use:enhance>
        <button type="submit" class="bg-light-gray dark:bg-semi-gray p-3 rounded-full">
          <div class="h-7">
            <IoMdLogOut />
          </div>
        </button>
      </form>
    {/if}
  </section>
  <section class="mt-6 w-[90%]">
    {#each paginatedPosts as post, index}
      <PostCard {post} lazyLoadImage={!!index} />
    {/each}
  </section>
</article>

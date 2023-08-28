<script lang="ts">
  import FaRegThumbsUp from "svelte-icons/fa/FaRegThumbsUp.svelte";
  import FaThumbsUp from "svelte-icons/fa/FaThumbsUp.svelte";

  import type { Post } from "$lib/types";

  import user from "$lib/stores/user";

  export let postId: string;
  export let likes: Post["likes"];
  export let alwaysShow: boolean = false;

  let isLiking = false;
  let formattedLikes = formatLikes(likes);
  let isLiked = likes.some(({ username }) => username === $user.username);

  function formatLikes(people: typeof likes) {
    if (!people.length) return "0 Likes";

    if (people.some(({ username }) => username === $user.username)) {
      if (people.length === 1) return "You liked this post";

      return `You and ${people.length - 1} ${people.length - 1 === 1 ? "other" : "others"}`;
    }

    if (people.length - 1 === 0) return `${people[0]?.username ?? "Someone"} liked this post`;

    return `${people[0]?.username ?? "Someone"} and ${people.length - 1} others`;
  }

  async function likePost() {
    if (isLiked) return;

    setTimeout(() => (isLiking = false), 250);
    isLiking = true;

    const { username, userImage } = $user;

    formattedLikes = formatLikes([
      ...likes,
      {
        username,
        userImage,
      },
    ]);

    isLiked = true;

    const { default: queryClient } = await import("$lib/utils/queryClient");

    await queryClient(`/posts/${postId}/like?userId=${$user.userId}`, { method: "PATCH" });
  }
</script>

<button
  type="button"
  on:click={likePost}
  disabled={isLiked}
  class="flex h-8 cursor-pointer items-center border-none text-xs text-[#E8E8E8] group mr-4 hover:mr-0"
  class:pop={isLiking}
>
  <span class="h-6 text-primary">
    {#if isLiked}
      <FaThumbsUp />
    {:else}
      <FaRegThumbsUp />
    {/if}
  </span>
  <span class="text-primary ml-2 mr-6 text-base group-hover:block slide" class:hidden={!alwaysShow}>
    &nbsp;{formattedLikes}
  </span>
</button>

<style lang="postcss">
  @keyframes slide {
    0% {
      opacity: 0;
      translate: -50px;
    }
    100% {
      opacity: 1;
      translate: 5px;
    }
  }

  @keyframes pop {
    0% {
      scale: 1;
    }
    0% {
      scale: 0.85;
    }
    100% {
      scale: 1;
    }
  }

  .pop {
    animation: pop 250ms ease-in-out;
  }

  .slide {
    animation: slide 250ms ease-in;
  }
</style>

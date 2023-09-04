<script lang="ts">
  import HeartIcon from "svelte-material-icons/Heart.svelte";
  import HeartOutlineIcon from "svelte-material-icons/HeartOutline.svelte";

  import type { Post } from "$lib/types";

  import user from "$lib/stores/user";

  export let postId: string;
  export let likes: Post["likes"];

  let likeCount = likes.length;
  let isLiked = likes.some(({ username }) => username === $user.username);

  async function likePost(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
    event.stopPropagation();
    if (isLiked) return;

    likeCount++;
    isLiked = true;

    const { default: queryClient } = await import("$lib/utils/queryClient");

    await queryClient(`/posts/${postId}/like?userId=${$user.userId}`, { method: "PATCH" });
  }
</script>

<button type="button" on:click={likePost} disabled={isLiked} class="flex cursor-pointer items-center border-none text-xs dark:text-[#E8E8E8]">
  <span class="text-primary">
    {#if isLiked}
      <HeartIcon size={25} />
    {:else}
      <HeartOutlineIcon size={25} />
    {/if}
  </span>
  <span class="ml-2 mr-4 text-base">
    &nbsp;<span class="font-bold">{likeCount}</span>
    {likeCount < 2 ? "Like" : "Likes"}
  </span>
</button>

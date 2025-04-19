<script lang="ts">
  import HeartIcon from "svelte-material-icons/Heart.svelte";
  import HeartOutlineIcon from "svelte-material-icons/HeartOutline.svelte";

  import type { Post } from "$lib/types";

  import user from "$lib/stores/user";
  import Button from "./ui/Button.svelte";

  export let postId: string;
  export let likes: Post["likes"];

  let likeCount = likes.length;
  let isLiked = likes.some(({ username }) => username === $user.username);

  async function likePost(event: MouseEvent) {
    event.stopPropagation();
    if (isLiked) return;

    likeCount++;
    isLiked = true;

    const { default: queryClient } = await import("$lib/utils/queryClient");

    await queryClient(`/posts/${postId}/like?userId=${$user.userId}`, { method: "PATCH" });
  }
</script>

<Button variant="text" type="button" on:click={likePost} disabled={isLiked}>
  <span class="text-primary">
    {#if isLiked}
      <HeartIcon size={25} />
    {:else}
      <HeartOutlineIcon size={25} />
    {/if}
  </span>
  <span class="mr-4 text-base text-black dark:text-white">
    &nbsp;<span class="font-bold">{likeCount}</span>
    {likeCount < 2 ? "Like" : "Likes"}
  </span>
</Button>

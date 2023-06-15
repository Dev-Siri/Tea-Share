<script lang="ts">
  import type { Post } from "../app";

  import PostCard from "./PostCard.svelte";

  export let posts: Post[];
</script>

<article role="list" class="w-full pb-10">
  {#each posts as post, index}
    <PostCard {post} lazyLoadImage={!!index} />
  {/each}
</article>

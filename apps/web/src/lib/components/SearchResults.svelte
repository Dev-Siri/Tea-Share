<script lang="ts">
  import FaUserAltSlash from "svelte-icons/fa/FaUserAltSlash.svelte";
  import FaVideoSlash from "svelte-icons/fa/FaVideoSlash.svelte";
  
  import type { Post, User } from "$lib/types";
  
  import PostCard from "./PostCard.svelte";
  import UserListItem from "./UserListItem.svelte";

  export let posts: Post[];
  export let users: User[];
  export let type: "posts" | "people";
</script>

{#if (type === "posts" && !posts) || (type === "people" && !users)}
  <article class="flex h-full w-full flex-col items-center justify-center">
    <div class="h-20">
      {#if type === "posts"}
        <FaVideoSlash />
      {:else}
        <FaUserAltSlash />
      {/if}
    </div>
    <p class="mt-4 text-xl text-center">
      No {type} found with your provided search term.
    </p>
  </article>
{:else if type === "posts"}
  {#each posts as post, index}
    <PostCard {post} lazyLoadImage={!!index} />
  {/each}
{:else}
  {#each users as { username, userImage }}
    <UserListItem {username} {userImage} />
  {/each}
{/if}

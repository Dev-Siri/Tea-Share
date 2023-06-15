<script lang="ts">
  import UserListItem from "./UserListItem.svelte";

  import type { User } from "../app";

  export let title: string;
  export let users: (Pick<User, "username" | "userImage"> & Partial<Pick<User, "userImage" | "userId">>)[];
</script>

<aside class="border-light-gray dark:border-semi-gray h-full w-full overflow-y-auto rounded-xl border-2 bg-white dark:bg-black">
  <section class="flex w-full items-center bg-white p-2 dark:bg-black">
    <h1 class="ml-2 mt-2 hidden text-xl font-medium min-[500px]:block">{title}</h1>
  </section>
  <section role="list">
    {#each users as { username, userImage }}
      <UserListItem {username} {userImage} />
    {/each}
  </section>
</aside>

<script lang="ts">
  import type { User } from "$lib/types";

  import UserListItem from "$lib/components/UserListItem.svelte";

  export let data;

  let users = data.initialUsers;
  let currentPage = 1;

  const loadMoreUsers = async (event: UIEvent & { currentTarget: EventTarget & HTMLElement }) => {
    const { scrollHeight, scrollTop, clientHeight } = event.currentTarget;

    const didScrollToBottom: boolean = scrollHeight - scrollTop === clientHeight;

    if (didScrollToBottom) {
      currentPage++;
      const { default: queryClient } = await import("$lib/utils/queryClient");

      const fetchedUsers = await queryClient<User[]>("/users", {
        searchParams: {
          page: currentPage,
          limit: 8,
        },
      });

      if (fetchedUsers) users = [...users, ...fetchedUsers];
    }
  };
</script>

<svelte:head>
  <title>People</title>
  <meta name="og:title" content="People" />
  <meta name="twitter:title" content="People" />
</svelte:head>

<aside class="h-screen overflow-y-auto" on:scroll={loadMoreUsers}>
  {#each users as { username, userImage }}
    <UserListItem {username} {userImage} />
  {/each}
</aside>

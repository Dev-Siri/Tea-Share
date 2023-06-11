<script lang="ts">
  import type { MongoDBUser } from "../../app";

  import UserListItem from "../../components/UserListItem.svelte";

  export let data;

  let users = data.initialUsers;
  let currentPage = 1;

  const loadMoreUsers = async (event: any) => {
    const { scrollHeight, scrollTop, clientHeight } = event.target;

    const didScrollToBottom: boolean = scrollHeight - scrollTop === clientHeight;

    if (didScrollToBottom) {
      currentPage++;
      const { default: queryClient } = await import("../../services/queryClient");

      const fetchedUsers = await queryClient<MongoDBUser[]>("/users", {
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

<aside
  class="border-light-gray mt-4 h-screen w-screen dark:border-semi-gray overflow-y-auto rounded-xl border-2 bg-white dark:bg-black"
  on:scroll={loadMoreUsers}
>
  <section class="fixed flex h-[8%] w-full items-center bg-white p-2 dark:bg-black">
    <h1 class="ml-4 text-xl font-medium min-[500px]:block">People</h1>
  </section>
  <section role="list" class="mt-14">
    {#each users as { username, image }}
      <UserListItem {username} {image} />
    {/each}
  </section>
</aside>

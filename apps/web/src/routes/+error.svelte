<script lang="ts">
  import { page } from "$app/stores";

  const isNotFound = $page.error?.message === "Not Found";
</script>

<article class="dark:bg-dark-gray -mt-16 flex h-screen w-full flex-col items-center justify-center dark:text-white">
  <h1 class="mb-4 mt-2 text-7xl font-bold">
    {#if isNotFound}
      404
    {:else}
      Oops!
    {/if}
  </h1>
  <h3 class="mb-2 text-3xl">
    {#if isNotFound}
      This page could not be found.
    {:else}
      An error has occured.
    {/if}
  </h3>
  {#if !isNotFound}
    <p class="text-center">{$page.error?.message}</p>
  {/if}
</article>

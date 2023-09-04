<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  import FaSearch from "svelte-icons/fa/FaSearch.svelte";

  let searchInput: HTMLInputElement;

  onMount(() => {
    function focusInput(e: KeyboardEvent) {
      const { activeElement } = document;
      const isInputFocused = activeElement instanceof HTMLInputElement || activeElement instanceof HTMLTextAreaElement;

      // focuses search input only when the user isn't focusing other inputs.
      if (e.key === "/" && !isInputFocused) {
        e.preventDefault();
        searchInput.focus();
      }
    }

    window.addEventListener("keydown", focusInput);

    return () => window.removeEventListener("keydown", focusInput);
  });
</script>

<form action="/search" method="GET" class="bg-light-gray w-full dark:bg-semi-gray flex px-4 items-center rounded-full">
  <input
    type="text"
    placeholder="Search"
    name="query"
    class="bg-light-gray dark:bg-semi-gray rounded-full p-2 outline-none"
    value={$page.url.pathname === "/search" ? $page.url.searchParams.get("query") : ""}
    bind:this={searchInput}
  />
  <button type="submit" aria-label="Search" class="ml-auto rounded-full">
    <div class="h-4 w-4">
      <FaSearch />
    </div>
  </button>
</form>

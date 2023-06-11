<script lang="ts">
  import FaSearch from "svelte-icons/fa/FaSearch.svelte";
</script>

<form
  action="/search"
  method="GET"
  class="bg-white dark:bg-semi-gray absolute mt-24 flex w-screen px-4 min-[700px]:static min-[700px]:ml-auto min-[700px]:mr-2 min-[700px]:mt-0 min-[700px]:w-fit min-[700px]:items-center min-[700px]:rounded-full"
>
  <input type="text" placeholder="Search" name="query" class="bg-white dark:bg-semi-gray rounded-full p-2 outline-none" />
  <button type="submit" aria-label="Search" class="ml-auto min-[700px]:rounded-full">
    <div class="h-5">
      <FaSearch />
    </div>
  </button>
</form>

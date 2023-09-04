<script lang="ts">
  import SearchBar from "./SearchBar.svelte";
</script>

<header
  class="block p-4 border-b border-b-light-gray bg-white bg-opacity-90 backdrop-blur-lg z-50 w-screen sm:flex sm:w-full dark:border-b-semi-gray dark:bg-black"
>
  <h1 class="font-bold text-2xl hidden lg:block">Tea Share</h1>
  <section class="flex items-center gap-2 lg:hidden">
    <SearchBar />
  </section>
</header>

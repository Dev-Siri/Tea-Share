<script lang="ts">
  import Logout from "./Logout.svelte";
  import SearchBar from "./SearchBar.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";
  import UpdateProfile from "./UpdateProfile.svelte";
</script>

<header
  class="block p-4 pb-0 sm:pb-4 border-b border-b-light-gray bg-white bg-opacity-90 backdrop-blur-lg z-50 w-screen sm:flex sm:w-full dark:border-b-semi-gray dark:bg-black"
>
  <h1 class="font-bold text-2xl hidden lg:block">Tea Share</h1>
  <section class="flex items-center gap-2 lg:hidden">
    <SearchBar />
  </section>
  <section class="w-full flex items-center justify-end gap-2 lg:hidden">
    <UpdateProfile />
    <ThemeToggle />
    <Logout />
  </section>
</header>

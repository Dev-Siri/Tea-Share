<script>
  import MdFreeBreakfast from "svelte-icons/md/MdFreeBreakfast.svelte";
  import MdHome from "svelte-icons/md/MdHome.svelte";
  import MdPeople from "svelte-icons/md/MdPeople.svelte";
  import MdPerson from "svelte-icons/md/MdPerson.svelte";

  import user from "$lib/stores/user";
</script>

<nav class="flex h-[10%] p-4 items-center justify-around sm:hidden">
  <a href="/" aria-label="Home" class="flex mt-4 p-4 gap-3 duration-200 rounded-full items-center hover:bg-light-gray dark:hover:bg-dark-gray">
    <div class="h-7 w-7">
      <MdHome />
    </div>
  </a>
  <a
    href="/people"
    aria-label="People"
    class="flex mt-4 p-4 gap-3 duration-200 rounded-full items-center hover:bg-light-gray dark:hover:bg-dark-gray"
  >
    <div class="h-7 w-7">
      <MdPeople />
    </div>
  </a>
  <a
    href="/create"
    aria-label="Create"
    class="flex mt-4 p-4 gap-3 duration-200 rounded-full items-center hover:bg-light-gray dark:hover:bg-dark-gray"
  >
    <div class="h-7 w-7">
      <MdFreeBreakfast />
    </div>
  </a>
  <a
    href="/people/{$user.username}"
    aria-label="Profile"
    class="flex mt-4 p-4 gap-3 duration-200 rounded-full items-center hover:bg-light-gray dark:hover:bg-dark-gray"
  >
    <div class="h-7 w-7">
      <MdPerson />
    </div>
  </a>
</nav>

<script lang="ts">
  import TeaIcon from "svelte-material-icons/Tea.svelte";

  import user from "$lib/stores/user";

  import PeopleIcon from "$lib/components/icons/People.svelte";
  import PersonIcon from "$lib/components/icons/Person.svelte";
</script>

<nav
  class="absolute inset-0 mt-auto flex h-20 pb-4 items-center dark:bg-black border-t border-t-light-gray dark:border-t-dark-gray justify-around sm:hidden"
>
  <a href="/" aria-label="Home" class="flex mt-4 p-4 gap-3 duration-200 rounded-full items-center hover:bg-light-gray dark:hover:bg-dark-gray">
    <TeaIcon size={28} />
  </a>
  <a
    href="/people"
    aria-label="People"
    class="flex mt-4 p-4 gap-3 duration-200 rounded-full items-center hover:bg-light-gray dark:hover:bg-dark-gray"
  >
    <PeopleIcon />
  </a>
  <a
    href="/people/{$user.username}"
    aria-label="Profile"
    class="flex mt-4 p-4 gap-3 duration-200 rounded-full items-center hover:bg-light-gray dark:hover:bg-dark-gray"
  >
    <PersonIcon />
  </a>
</nav>

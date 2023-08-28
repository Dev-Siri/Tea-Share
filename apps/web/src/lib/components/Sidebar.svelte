<script>
  import MdFreeBreakfast from "svelte-icons/md/MdFreeBreakfast.svelte";
  import MdHome from "svelte-icons/md/MdHome.svelte";
  import MdPeople from "svelte-icons/md/MdPeople.svelte";
  import MdPerson from "svelte-icons/md/MdPerson.svelte";

  import user from "$lib/stores/user";
  import { getHandle } from "$lib/utils/globals";

  import AppIcon from "./AppIcon.svelte";
  import Image from "./Image.svelte";
  import Logout from "./Logout.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";
</script>

<aside
  class="flex flex-col p-4 bg-white border-light-gray border-r h-screen w-full items-center lg:items-stretch dark:border-semi-gray dark:bg-black lg:px-8"
>
  <a href="/" class="w-fit">
    <AppIcon class="bg-primary rounded-full" height={50} width={50} />
  </a>
  <a href="/" class="flex mt-4 p-4 gap-3 duration-200 rounded-full items-center hover:bg-light-gray dark:hover:bg-dark-gray">
    <div class="h-7 w-7">
      <MdHome />
    </div>
    <span class="text-xl hidden lg:block">Home</span>
  </a>
  <a href="/people" class="flex mt-4 p-4 gap-3 duration-200 rounded-full items-center hover:bg-light-gray dark:hover:bg-dark-gray">
    <div class="h-7 w-7">
      <MdPeople />
    </div>
    <span class="text-xl hidden lg:block">People</span>
  </a>
  <a href="/people/{$user.username}" class="flex mt-4 p-4 gap-3 duration-200 rounded-full items-center hover:bg-light-gray dark:hover:bg-dark-gray">
    <div class="h-7 w-7">
      <MdPerson />
    </div>
    <span class="text-xl hidden lg:block">Profile</span>
  </a>
  <a
    href="/create"
    class="flex my-4 p-3 gap-2 duration-200 rounded-full items-center justify-center text-white border border-primary bg-primary hover:bg-primary-dark"
  >
    <span class="font-bold text-md hidden lg:block">Brew</span>
    <div class="h-7 w-7">
      <MdFreeBreakfast />
    </div>
  </a>
  <article class="flex flex-col mt-auto justify-center items-center w-full lg:flex-row">
    <Image src={$user.userImage} alt={$user.username} height={48} width={48} class="h-12 w-12 rounded-full" />
    <section class="ml-3">
      <h6 class="font-bold hidden lg:block">{$user.username}</h6>
      <p class="text-gray-500 text-xs hidden lg:block">{getHandle($user.username)}</p>
    </section>
    <section class="flex flex-col gap-2 justify-center w-full items-center ml-auto mt-4 lg:mt-0 lg:flex-row">
      <ThemeToggle />
      <Logout />
    </section>
  </article>
</aside>

<script>
  import FaCog from "svelte-icons/fa/FaCog.svelte";
  import FaPlus from "svelte-icons/fa/FaPlus.svelte";
  import IoMdPeople from "svelte-icons/io/IoMdPeople.svelte";

  import user from "@/stores/user";

  import Image from "./Image.svelte";
  import Logo from "./Logo.svelte";
  import SearchBar from "./SearchBar.svelte";
</script>

<nav class="bg-light-gray mb-9 flex h-16 items-center justify-between dark:bg-black dark:text-white min-[700px]:mb-0">
  <Logo />
  <SearchBar />
  <section class="ml-auto mr-2 flex">
    <a title="Create a Post" href="/create" class="bg-primary mr-2 flex items-center justify-center rounded-full p-3.5 text-white sm:w-40 sm:p-0">
      <div class="h-4 px-1.5">
        <FaPlus />
      </div>
      <p class="ml-2 hidden text-sm sm:block">Create a Post</p>
    </a>
    <a title="People" href="/people" class="place-center dark:bg-semi-gray mr-2 grid rounded-full bg-white p-3.5 duration-200 hover:bg-gray-100">
      <div class="h-6">
        <IoMdPeople />
      </div>
    </a>
    <a
      title="Settings"
      href="/settings"
      class="place-center place-items-center dark:bg-semi-gray mr-2 grid rounded-full bg-white p-3.5 duration-200 hover:bg-gray-100"
    >
      <div class="h-5 px-0.5">
        <FaCog />
      </div>
    </a>
    <label for="user-dropdown" class="cursor-pointer">
      <Image src={$user.userImage} alt={$user.username} height={75} width={75} class="h-[50px] w-[50px] rounded-full" />
    </label>
  </section>
</nav>

<script lang="ts">
  import FaUser from "svelte-icons/fa/FaUser.svelte";
  import IoMdSettings from "svelte-icons/io/IoMdSettings.svelte";
  import Toggle from "svelte-toggle/src/Toggle.svelte";

  import user from "$lib/stores/user";
  import { getHandle } from "$lib/utils/globals";

  import theme from "$lib/stores/theme";
  import Image from "./Image.svelte";

  const toggleTheme = async (e: any) => {
    e.stopPropagation();

    const newTheme = $theme === "dark" ? "light" : "dark";

    theme.set(newTheme);

    const { setCookie } = await import("$lib/utils/cookies");

    setCookie("theme", newTheme);
  };

  let isOpen = false;
</script>

<svelte:body on:click={() => (isOpen = false)} />

<input type="checkbox" id="user-dropdown" bind:checked={isOpen} class="hidden" />
<aside
  id="user-dropdown-menu"
  class="absolute z-10 ml-auto mr-5 right-0 -mt-10 min-[700px]:-mt-0 border-2 border-gray-600 rounded-md bg-white text-black dark:text-white dark:bg-black"
  class:hidden={!isOpen}
>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click={e => e.stopPropagation()} class="p-4 pr-14 flex gap-4">
    <Image src={$user.userImage} alt={$user.username} height={90} width={90} class="rounded-full" />
    <div class="self-center">
      <h1 class="text-2xl font-bold">
        {$user.username}
      </h1>
      <p class="text-gray-400">
        {getHandle($user.username)}
      </p>
    </div>
  </div>
  <a class="flex items-center p-5 gap-2 hover:dark:bg-semi-gray hover:bg-light-gray duration-200" href="/people/{$user.username}">
    <div class="h-4">
      <FaUser />
    </div>
    <p class="font-bold">Your Profile</p>
  </a>
  <a class="flex items-center p-5 gap-2 hover:dark:bg-semi-gray hover:bg-light-gray duration-200" href="/update-profile">
    <div class="h-4">
      <IoMdSettings />
    </div>
    <p class="font-bold">Update Profile</p>
  </a>
  <button class="flex items-center pl-4 p-5 gap-2 w-full hover:dark:bg-semi-gray hover:bg-light-gray duration-200" on:click={toggleTheme}>
    <Toggle hideLabel toggled={$theme === "dark"} label="{$theme} Theme" />
    {$theme === "dark" ? "Dark" : "Light"} Theme
  </button>
</aside>

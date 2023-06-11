<script lang="ts">
  import FaMoon from "svelte-icons/fa/FaMoon.svelte";
  import FaSun from "svelte-icons/fa/FaSun.svelte";

  import theme from "../stores/theme";

  export let type: "light" | "dark";

  const changeTheme = async () => {
    theme.set(type);
    const { setCookie } = await import("../utils/cookies");

    setCookie("theme", type);
  };
</script>

<button
  on:click={changeTheme}
  class="shadow-dark gap-2 hover:bg-light-gray dark:shadow-light mt-10px flex h-[50px] w-full cursor-pointer items-center rounded-md border-none bg-white p-4 text-left text-black duration-200"
>
  <span class="h-4">
    {#if type === "dark"}
      <FaMoon />
    {:else}
      <FaSun />
    {/if}
  </span>
  <p>{`${type.charAt(0).toUpperCase()}${type.slice(1)}`}</p>
</button>

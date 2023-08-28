<script lang="ts">
  import SvelteToolTip from "sv-tooltip";
  import FaMoon from "svelte-icons/fa/FaMoon.svelte";
  import FaSun from "svelte-icons/fa/FaSun.svelte";

  import theme from "$lib/stores/theme";

  async function toggleTheme() {
    const newTheme = $theme === "dark" ? "light" : "dark";

    theme.set(newTheme);

    const { setCookie } = await import("$lib/utils/cookies");

    setCookie("theme", newTheme);
  }
</script>

<SvelteToolTip tip="{$theme.charAt(0).toUpperCase() + $theme.slice(1)} Theme" right class="bg-light-gray dark:bg-dark-gray">
  <button class="p-3 rounded-full hover:bg-light-gray dark:hover:bg-dark-gray" on:click={toggleTheme}>
    <div class="h-5 w-5">
      {#if $theme === "dark"}
        <FaMoon />
      {:else}
        <FaSun />
      {/if}
    </div>
  </button>
</SvelteToolTip>

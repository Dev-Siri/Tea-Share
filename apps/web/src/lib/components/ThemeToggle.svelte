<script lang="ts">
  import SvelteToolTip from "sv-tooltip";
  import MoonWaxingCrescentIcon from "svelte-material-icons/MoonWaxingCrescent.svelte";
  import SunIcon from "svelte-material-icons/SunAngle.svelte";

  import theme from "$lib/stores/theme";

  async function toggleTheme() {
    const newTheme = $theme === "dark" ? "light" : "dark";

    theme.set(newTheme);

    const { setCookie } = await import("$lib/utils/cookies");

    setCookie("theme", newTheme);
  }
</script>

<SvelteToolTip tip="{$theme.charAt(0).toUpperCase()}{$theme.slice(1)} Theme" right class="bg-light-gray dark:bg-dark-gray">
  <button class="p-3 rounded-full hover:bg-light-gray dark:hover:bg-dark-gray" on:click={toggleTheme}>
    {#if $theme === "dark"}
      <MoonWaxingCrescentIcon size={20} />
    {:else}
      <SunIcon size={20} />
    {/if}
  </button>
</SvelteToolTip>

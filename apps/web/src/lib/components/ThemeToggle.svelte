<script lang="ts">
  import SvelteToolTip from "sv-tooltip";
  import MoonWaxingCrescentIcon from "svelte-material-icons/MoonWaxingCrescent.svelte";
  import WhiteBalanceSunnyIcon from "svelte-material-icons/WhiteBalanceSunny.svelte";

  import theme from "$lib/stores/theme";

  import IconButton from "./ui/IconButton.svelte";

  async function toggleTheme() {
    const newTheme = $theme === "dark" ? "light" : "dark";

    theme.set(newTheme);

    const { setCookie } = await import("$lib/utils/cookies");

    setCookie("theme", newTheme);
  }
</script>

<SvelteToolTip tip="{$theme.charAt(0).toUpperCase()}{$theme.slice(1)} Theme" top>
  <IconButton on:click={toggleTheme}>
    {#if $theme === "dark"}
      <MoonWaxingCrescentIcon size={20} />
    {:else}
      <WhiteBalanceSunnyIcon size={20} />
    {/if}
  </IconButton>
</SvelteToolTip>

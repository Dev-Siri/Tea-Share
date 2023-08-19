<script lang="ts">
  import { browser } from "$app/environment";
  import "../app.css";

  import { BASE_URL } from "$lib/env";
  import theme from "$lib/stores/theme";
  import user from "$lib/stores/user";

  import Navbar from "$lib/components/Navbar.svelte";
  import UserDropdown from "$lib/components/UserDropdown.svelte";
  import { fly } from "svelte/transition";

  export let data;

  theme.set(data.global.theme);

  $: user.set(data.global.user!);
  $: if (browser) document.documentElement.classList.replace($theme === "dark" ? "light" : "dark", $theme);

  const description =
    "Tea Share is an online social networking platform where you can share images with everyone. Get the best experience of Tea Share by signing up today!";
</script>

<svelte:head>
  <meta name="description" content={description} />
  <meta name="og:title" content="Home" />
  <meta name="og:description" content={description} />
  <meta name="og:image" content="{BASE_URL}/images/og.png" />
  <meta name="twitter:title" content="Home" />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content="{BASE_URL}/images/twitter.png" />
  <title>Home</title>
</svelte:head>

<!-- a small client-side validation to prevent zod from running down the network -->
{#if $user?.userId}
  <Navbar />
  <UserDropdown />
{/if}
{#key data.global.transitionKey}
  <main class="overflow-hidden duration-200" in:fly={{ x: 30 }}>
    <slot />
  </main>
{/key}

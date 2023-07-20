<script lang="ts">
  import { browser } from "$app/environment";
  import "../app.css";

  import theme from "$lib/stores/theme";
  import user from "$lib/stores/user";
  import { BASE_URL } from "../env";

  import Navbar from "$lib/components/Navbar.svelte";
  import UserDropdown from "$lib/components/UserDropdown.svelte";

  export let data;

  theme.set(data.global.theme);

  $: user.set(data.global.user!);
  $: if (browser) document.body.classList.replace($theme === "dark" ? "light" : "dark", $theme);
</script>

<svelte:head>
  <meta name="application-name" content="Tea Share" />
  <meta name="keywords" content="Tea Share, Tea, Social Media, Social Networking, News, Connect, Share" />
  <meta name="creator" content="Dev-Siri" />
  <meta name="robots" content="index, follow" />
  <meta name="googlebot" content="noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
  <meta name="google-site-verification" content="9ZQX0PW-jAHsoHd2iQ8HzgApN3A0t0aiClpRHZrnf-M" />
  <meta name="yandex-verification" content="8b3345a29cecf753" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-title" content="Tea Share" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  <meta name="og:title" content="Home" />
  <meta
    name="og:description"
    content="Tea Share is an online social networking platform where you can share images with everyone. Get the best experience of Tea Share by signing up today!"
  />
  <meta name="og:image" content="{BASE_URL}/images/og.png" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Home" />
  <meta name="twitter:image" content="{BASE_URL}/images/twitter.png" />
  <meta
    name="twitter:description"
    content="Tea Share is an online social networking platform where you can share images with everyone. Get the best experience of Tea Share by signing up today!"
  />
  <meta
    name="description"
    content="Tea Share is an online social networking platform where you can share images with everyone. Get the best experience of Tea Share by signing up today!"
  />
  <title>Home</title>
</svelte:head>

<!-- a small client-side validation to prevent zod from running down the network -->
{#if $user?.userId?.length === 36}
  <Navbar />
  <UserDropdown />
{/if}
<main class="dark:bg-dark-gray h-screen w-screen overflow-hidden duration-200 dark:text-white">
  <slot />
</main>

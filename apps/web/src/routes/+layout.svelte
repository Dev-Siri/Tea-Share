<script lang="ts">
  import { browser } from "$app/environment";
  import { onNavigate } from "$app/navigation";
  import { onMount } from "svelte";
  import { Toasts } from "svoast";
  import { pwaInfo } from "virtual:pwa-info";
  import "../app.css";

  import { BASE_URL } from "$lib/env";
  import theme from "$lib/stores/theme";
  import user from "$lib/stores/user";

  import BottomNavigationBar from "$lib/components/BottomNavigationBar.svelte";
  import Header from "$lib/components/Header.svelte";
  import SearchBar from "$lib/components/SearchBar.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import UserList from "$lib/components/UserList.svelte";

  export let data;

  theme.set(data.global.theme);

  $: user.set(data.global.user!);
  $: if (browser) document.documentElement.classList.replace($theme === "dark" ? "light" : "dark", $theme);
  $: isLoggedIn = $user?.userId && !data.global.transitionKey.endsWith("/embed");

  const description =
    "Tea Share is an online social networking platform where you can share images with everyone. Get the best experience of Tea Share by signing up today!";

  onMount(async () => {
    if (pwaInfo) {
      const { useRegisterSW } = await import("virtual:pwa-register/svelte");

      useRegisterSW({ immediate: true });
    }
  });

  onNavigate(navigation => {
    if (!document.startViewTransition) return;

    return new Promise(resolve =>
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      })
    );
  });

  $: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : "";
</script>

<svelte:head>
  <meta name="description" content={description} />
  <meta name="og:title" content="Home" />
  <meta name="og:description" content={description} />
  <meta name="og:image" content="{BASE_URL}/images/og.png" />
  <meta name="twitter:title" content="Home" />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content="{BASE_URL}/images/twitter.png" />
  {@html webManifest}
  <title>Home</title>
</svelte:head>

<main class="h-[90%] sm:h-full flex overflow-hidden duration-200">
  {#if isLoggedIn}
    <section class="w-[16%] sm:w-[10%] h-screen lg:w-[24%] hidden sm:block">
      <Sidebar />
    </section>
  {/if}
  <section class={isLoggedIn ? "w-screen sm:w-[90%] lg:w-1/2" : "w-full"}>
    {#if isLoggedIn}
      <Header />
    {/if}
    <div id="main-view">
      <slot />
    </div>
  </section>
  {#if isLoggedIn}
    <section class="w-[26%] bg-white p-4 border-l border-l-light-gray dark:border-l-semi-gray dark:bg-black hidden lg:block">
      <div class="w-full">
        <SearchBar />
      </div>
      <div class="mt-3 pl-1">
        <UserList title="Suggested Accounts" users={data.global.users} />
      </div>
    </section>
  {/if}
</main>
{#if isLoggedIn}
  <BottomNavigationBar />
{/if}

<Toasts position="bottom-right" />

<script lang="ts">
  import type { MaybePromise } from "@sveltejs/kit";

  interface Option {
    name: string;
    Icon: ConstructorOfATypedSvelteComponent;
    onClick(): MaybePromise<void>;
  }

  export let options: Option[];

  let menuOpen = false;

  const toggleMenu = () => (menuOpen = true);

  $: console.log(menuOpen);
</script>

<div class="relative inline-block text-left">
  <details class="relative">
    <!-- svelte-ignore a11y-no-redundant-roles -->
    <summary
      class="flex items-center cursor-pointer font-bold p-2 px-3 rounded-full duration-200 hover:bg-light-gray hover:dark:bg-dark-gray active:bg-dark-gray"
      on:click={toggleMenu}
      on:keydown={toggleMenu}
      role="button"
      tabindex={0}
      aria-label="Options"
    >
      ⋮
    </summary>
    <ul
      class:hidden={!menuOpen}
      class:absolute={menuOpen}
      class="left-0 z-50 transform -translate-x-[80%] rounded-md bg-white border-2 border-light-gray min-w-max dark:border-semi-gray dark:bg-dark-gray"
    >
      {#each options as { name, Icon, onClick }}
        <li>
          <button
            on:click={() => {
              onClick();
              menuOpen = false;
            }}
            type="button"
            class="flex items-center gap-2 px-4 py-2 w-full"
          >
            <div class="h-5">
              <Icon />
            </div>
            {name}
          </button>
        </li>
      {/each}
    </ul>
  </details>
</div>

<style lang="postcss">
  details {
    user-select: none;
  }
</style>

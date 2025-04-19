<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";

  interface $$Props extends HTMLButtonAttributes {
    component?: string;
    iconOnly?: boolean;
    href?: `/${string}`;
  }

  export let component: $$Props["component"] = "button";
  export let iconOnly = false;
</script>

<svelte:element
  this={component}
  on:click
  role={null}
  {...$$restProps}
  class="rounded-full duration-200"
  class:icon={!iconOnly}
>
  <slot />
</svelte:element>

<style lang="postcss">
  .icon {
    @apply p-3 hover:bg-light-gray dark:hover:bg-dark-gray;
  }
</style>

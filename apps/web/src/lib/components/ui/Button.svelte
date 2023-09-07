<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";

  type Variant = "primary" | "secondary" | "text" | "disabled";

  interface $$Props extends HTMLButtonAttributes {
    component?: string;
    href?: `/${string}`;
    variant?: Variant;
  }

  export let component: $$Props["component"] = "button";
  export let variant: $$Props["variant"] = "primary";
  let className: $$Props["class"] = "";

  export { className as class };
</script>

<svelte:element
  this={component}
  role={null}
  on:click
  {...$$restProps}
  class="flex p-10px cursor-pointer items-center justify-center rounded-full px-4 text-center text-white duration-200 {variant} {className}"
>
  <slot />
</svelte:element>

<style lang="postcss">
  .primary {
    @apply bg-primary dark:bg-primary-muted hover:bg-primary-dark;
  }

  .secondary {
    @apply bg-light-gray hover:bg-slate-400 dark:bg-dark-gray dark:hover:bg-semi-gray;
  }

  .disabled {
    @apply bg-primary dark:bg-primary-muted opacity-50 cursor-not-allowed;
  }

  .text {
    @apply bg-transparent p-0;
  }
</style>

<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements";

  interface $$Props extends HTMLInputAttributes {}

  let className: $$Props["class"] = "";
  export { className as class };
</script>

<input
  on:input
  on:change
  {...$$restProps}
  class="bg-light-gray dark:bg-dark-gray w-full rounded-full pl-5 p-4 outline-none duration-200 dark:text-white {className}"
/>

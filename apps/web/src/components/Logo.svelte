<script lang="ts">
  import AppIcon from "./AppIcon.svelte";

  export let bigger: boolean = false;
</script>

<section class="flex items-center" class:mt-3={bigger}>
  <a href="/" class="bg-primary mx-2 rounded-full">
    <AppIcon height={bigger ? 60 : 50} width={bigger ? 60 : 50} />
  </a>
  <p class={bigger ? "text-3xl font-bold" : "hidden md:block"}>Tea Share</p>
</section>

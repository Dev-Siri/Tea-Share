<script lang="ts">
  import MdCheck from "svelte-icons/md/MdCheck.svelte";

  export let message: string;
</script>

<div class="flex border-l-8 border-l-green-600 items-center text-green-600 p-1 ml-1 mt-5 rounded-md bg-green-300">
  <span class="h-10 text-green-500 bg-green-300 rounded-full p-2">
    <MdCheck />
  </span>
  <p>{message}</p>
</div>

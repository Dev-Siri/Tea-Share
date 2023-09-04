<script lang="ts">
  import { enhance } from "$app/forms";
  import SvelteToolTip from "sv-tooltip";
  import LogOutIcon from "svelte-material-icons/Logout.svelte";
</script>

<!-- Calling the server action named "login" defined in `src/routes/+page.server.ts` -->
<form action="/?/logout" method="POST" use:enhance>
  <SvelteToolTip tip="Logout" right class="bg-light-gray dark:bg-dark-gray">
    <button type="submit" aria-label="Logout" class="p-3 rounded-full text-red-600 hover:bg-light-gray dark:hover:bg-dark-gray">
      <LogOutIcon size={24} />
    </button>
  </SvelteToolTip>
</form>

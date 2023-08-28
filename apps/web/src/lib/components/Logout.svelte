<script lang="ts">
  import { enhance } from "$app/forms";
  import SvelteToolTip from "sv-tooltip";
  import IoIosLogOut from "svelte-icons/io/IoIosLogOut.svelte";
</script>

<!-- Calling the server action named "login" defined in `src/routes/+page.server.ts` -->
<form action="/?/logout" method="POST" use:enhance>
  <SvelteToolTip tip="Logout" right class="bg-light-gray dark:bg-dark-gray">
    <button type="submit" aria-label="Logout" class="p-3 rounded-full hover:bg-light-gray dark:hover:bg-dark-gray">
      <div class="h-6 w-6">
        <IoIosLogOut />
      </div>
    </button>
  </SvelteToolTip>
</form>

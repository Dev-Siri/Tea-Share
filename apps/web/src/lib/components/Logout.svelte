<script lang="ts">
  import { enhance } from "$app/forms";
  import SvelteToolTip from "sv-tooltip";
  import LogOutIcon from "svelte-material-icons/Logout.svelte";

  import IconButton from "./ui/IconButton.svelte";
</script>

<!-- Calling the server action named "login" defined in `src/routes/+page.server.ts` -->
<form action="/?/logout" method="POST" use:enhance>
  <SvelteToolTip tip="Logout" top>
    <IconButton type="submit" aria-label="Logout">
      <LogOutIcon size={24} color="red" />
    </IconButton>
  </SvelteToolTip>
</form>

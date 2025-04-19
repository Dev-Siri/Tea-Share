<script lang="ts">
  import SvelteToolTip from "sv-tooltip";
  import PencilIcon from "svelte-material-icons/Pencil.svelte";
</script>

<SvelteToolTip tip="Update Profile" right class="bg-light-gray dark:bg-dark-gray">
  <a href="/update-profile" class="p-3 rounded-full hover:bg-light-gray dark:hover:bg-dark-gray">
    <PencilIcon size={25} />
  </a>
</SvelteToolTip>

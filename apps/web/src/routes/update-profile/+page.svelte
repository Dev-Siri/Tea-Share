<script lang="ts">
  import { enhance } from "$app/forms";
  import Circle from "svelte-loading-spinners/Circle.svelte";
  import CameraIcon from "svelte-material-icons/Camera.svelte";

  import SuccessMessage from "$lib/components/SuccessMessage.svelte";
  import Button from "$lib/components/ui/Button.svelte";
  import Input from "$lib/components/ui/Input.svelte";
  import user from "$lib/stores/user";

  export let form;

  let loading = false;
  let previewImage: File | undefined;

  const selectImage = (event: Event & { currentTarget: EventTarget & HTMLInputElement }) => (previewImage = event?.currentTarget?.files?.[0]);
</script>

<form
  action="/update-profile"
  method="POST"
  enctype="multipart/form-data"
  class="p-6 overflow-y-auto h-screen"
  use:enhance={() => {
    loading = true;

    return ({ update }) => {
      loading = false;
      update();
    };
  }}
>
  <h2 class="text-2xl font-bold">Update your Profile</h2>
  <div class="w-full mt-10 flex justify-center">
    <label for="profile-picture-upload">
      {#if previewImage}
        <img src={URL.createObjectURL(previewImage)} alt="Profile" class="cursor-pointer rounded-full h-36" />
      {:else}
        <div class="rounded-full cursor-pointer bg-black p-10 border-2 border-gray-600 w-fit items-center">
          <CameraIcon size={40} />
        </div>
      {/if}
    </label>
  </div>
  <input type="file" name="image" aria-label="Profile Picture Upload" on:change={selectImage} id="profile-picture-upload" class="hidden" />
  <Input name="username" value={$user.username} class="input" placeholder="Username" />
  <Input name="email" value={$user.email} class="input" placeholder="Email" type="email" />
  {#if form?.errorMessage}
    <p class="bg-red-200 w-full ml-1 rounded-md border-2 border-red-600 p-3 mt-4 text-red-800 font-bold text-center">
      {form.errorMessage}
    </p>
  {/if}
  {#if form?.success}
    <SuccessMessage message="Your profile has been updated successfully" />
  {/if}
  <Button type="submit" class="mt-5" variant={loading ? "disabled" : "primary"} disabled={loading}>
    Update Profile
    {#if loading}
      <Circle size={20} color="white" />
    {/if}
  </Button>
</form>

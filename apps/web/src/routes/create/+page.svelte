<script lang="ts">
  import { enhance } from "$app/forms";
  import FaCloudUploadAlt from "svelte-icons/fa/FaCloudUploadAlt.svelte";
  import Circle from "svelte-loading-spinners/Circle.svelte";

  import type { ActionData } from "./$types";

  export let form: ActionData;

  let loading = false;
  let previewImage: File | null = null;

  const selectImage = (event: any) => (previewImage = event?.target?.files?.[0]);
</script>

<section class="h-screen w-full overflow-y-scroll">
  <form
    method="POST"
    class="flex w-full flex-col items-center py-2"
    use:enhance={() => {
      loading = true;
    }}
  >
    <input
      class="dark:bg-semi-gray bg-light-gray w-[90%] rounded-tl-lg rounded-tr-lg p-4 text-4xl font-light outline-none duration-200 dark:text-white"
      placeholder="Title"
      name="title"
      required
    />
    <input
      class="dark:bg-semi-gray bg-light-gray mb-4 w-[90%] rounded-bl-lg rounded-br-lg p-4 pl-5 font-normal outline-none duration-200 dark:text-white"
      placeholder="What's on your mind?"
      name="description"
      required
    />
    <input class="hidden" type="file" name="image" id="image-upload" aria-label="Post File Upload" on:change={selectImage} required />
    <label
      for="image-upload"
      class="flex border-2 border-gray-400 dark:border-gray-600 items-center justify-center flex-col rounded-xl cursor-pointer w-[90%]"
    >
      {#if previewImage}
        <img
          src={URL.createObjectURL(previewImage)}
          class="rounded-xl"
          alt="Selected"
          loading="eager"
          height={previewImage.size}
          width={previewImage.size}
        />
      {:else}
        <div class="h-20 mt-16 w-20">
          <FaCloudUploadAlt />
        </div>
        <p>Select an image to upload.</p>
        <p class="text-gray-500 mt-20 mb-16 px-8 text-center">It is recommended to upload images of type PNG, JPG, WEBP, AVIF or GIF.</p>
      {/if}
    </label>
    {#if form?.incorrect}
      <p class="mt-5 bg-red-300 text-red-900 border-red-900 font-bold w-[90%] text-center p-4 rounded-md border-2">
        The provided information is invalid.
      </p>
    {/if}
    <button
      type="submit"
      class="bg-primary flex justify-center items-center gap-2 hover:bg-primary-dark mb-[30%] mt-4 w-[90%] cursor-pointer rounded-md border-none p-3 text-white duration-200 sm:mb-[10%]"
    >
      Create Post!
      {#if loading}
        <Circle size={20} color="white" />
      {/if}
    </button>
  </form>
</section>

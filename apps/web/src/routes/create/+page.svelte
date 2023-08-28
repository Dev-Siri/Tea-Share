<script lang="ts">
  import { enhance } from "$app/forms";
  import FaImage from "svelte-icons/fa/FaImage.svelte";
  import Circle from "svelte-loading-spinners/Circle.svelte";

  export let form;

  let loading = false;
  let previewImage: File | undefined;

  const selectImage = (event: Event & { currentTarget: EventTarget & HTMLInputElement }) => (previewImage = event?.currentTarget?.files?.[0]);
</script>

<section class="h-screen w-full overflow-y-scroll">
  <form
    method="POST"
    class="flex w-full flex-col items-center"
    enctype="multipart/form-data"
    use:enhance={() => {
      loading = true;

      return ({ update }) => {
        loading = false;
        update();
      };
    }}
  >
    <input
      class="h-0 w-0"
      type="file"
      name="image"
      accept="image/*"
      id="image-upload"
      aria-label="Post File Upload"
      on:change={selectImage}
      required
    />
    <label for="image-upload" class="flex items-center justify-center flex-col rounded-xl cursor-pointer">
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
        <div class="flex flex-col gap-2 justify-center items-center p-6 h-60">
          <div class="h-20 w-20">
            <FaImage />
          </div>
          <h1 class="text-2xl text-center">Upload a Tea-Lightful image</h1>
        </div>
      {/if}
    </label>
    {#if !form?.success && form?.errors["image"]}
      <p class="error">{form.errors["image"]}</p>
    {/if}
    <input
      class="dark:bg-semi-gray bg-light-gray w-full p-4 text-4xl font-light outline-none duration-200 dark:text-white"
      placeholder="Title"
      name="title"
      value={form?.suppliedValues.title ?? ""}
      minlength="4"
      maxlength="255"
      required
    />
    {#if !form?.success && form?.errors["title"]}
      <p class="error">{form.errors["title"]}</p>
    {/if}
    <textarea
      class="dark:bg-semi-gray bg-light-gray w-full p-4 font-normal outline-none duration-200 dark:text-white"
      placeholder="What's on your mind?"
      name="description"
      cols="30"
      rows="2"
      value={form?.suppliedValues.description ?? ""}
    />
    {#if !form?.success && form?.errors["description"]}
      <p class="error">{form.errors["description"]}</p>
    {/if}
    <button
      type="submit"
      class="bg-primary flex justify-center items-center gap-2 hover:bg-primary-dark mb-[30%] mt-4 self-end mr-2 cursor-pointer rounded-md border-none p-3 text-white duration-200 sm:mb-[10%]"
      disabled={loading}
    >
      Sip and Share
      {#if loading}
        <Circle size={20} color="white" />
      {/if}
    </button>
  </form>
</section>

<style lang="postcss">
  .error {
    @apply w-[90%] p-2 text-red-300;
  }
</style>

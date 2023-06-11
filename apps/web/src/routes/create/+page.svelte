<script lang="ts">
  import { enhance } from "$app/forms";
  import Circle from "svelte-loading-spinners/Circle.svelte";

  import Image from "../../components/Image.svelte";

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
    <input
      class="dark:bg-semi-gray bg-light-gray w-[90%] rounded-lg p-4 outline-none duration-200 dark:text-white"
      type="file"
      name="image"
      aria-label="Post File Upload"
      on:change={selectImage}
      required
    />
    {#if previewImage}
      <Image
        src={URL.createObjectURL(previewImage)}
        class="mt-7 h-fit w-[90%] rounded-xl"
        alt="Selected"
        loading="eager"
        height={previewImage.size}
        width={previewImage.size}
      />
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

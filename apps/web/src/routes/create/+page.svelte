<script lang="ts">
  import { enhance } from "$app/forms";
  import Circle from "svelte-loading-spinners/Circle.svelte";
  import ImageIcon from "svelte-material-icons/Image.svelte";
  import TeaIcon from "svelte-material-icons/Tea.svelte";

  export let form;

  let loading = false;
  let previewImage: File | undefined;

  const selectImage = (event: Event & { currentTarget: EventTarget & HTMLInputElement }) => (previewImage = event?.currentTarget?.files?.[0]);
</script>

<section class="h-full w-full overflow-y-scroll">
  <form
    method="POST"
    class="flex w-full flex-col items-center"
    action="?"
    enctype="multipart/form-data"
    use:enhance={() => {
      loading = true;

      return ({ update }) => {
        loading = false;
        update();
      };
    }}
  >
    <div class="h-[95%] w-full">
      <textarea
        class="dark:bg-dark-gray bg-light-gray w-full p-4 text-2xl font-light outline-none duration-200 dark:text-white"
        placeholder="What's on your mind?"
        name="caption"
        value={form?.suppliedValues.caption ?? ""}
        rows="15"
        required
      />
    </div>
    {#if !form?.success && form?.errors["caption"]}
      <p class="p-2 text-red-300">{form.errors["caption"]}</p>
    {/if}
    {#if previewImage}
      <img
        src={URL.createObjectURL(previewImage)}
        class="rounded-xl"
        alt="Selected"
        loading="eager"
        height={previewImage.size}
        width={previewImage.size}
      />
    {/if}
    <section class="flex items-center justify-between p-2 w-full">
      <div class="flex items-center pl-2">
        <input class="h-0 w-0" type="file" name="image" accept="image/*" id="image-upload" aria-label="Post File Upload" on:change={selectImage} />
        <label for="image-upload" class="cursor-pointer p-2 duration-200 rounded-full hover:bg-light-gray hover:dark:bg-dark-gray">
          <ImageIcon size={20} color="white" />
        </label>
      </div>
      <div class="flex gap-2 items-center">
        {#if !form?.success && form?.errors["image"]}
          <p class="p-2 text-red-300">{form.errors["image"]}</p>
        {/if}
        <button type="submit" class="btn gap-2" disabled={loading}>
          <TeaIcon size={20} color="white" />
          Brew it!
          {#if loading}
            <Circle size={20} color="white" />
          {/if}
        </button>
      </div>
    </section>
  </form>
</section>

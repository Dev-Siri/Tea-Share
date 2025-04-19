<script lang="ts">
  import AppIcon from "$lib/components/AppIcon.svelte";
  import Image from "$lib/components/Image.svelte";

  import { BASE_URL } from "$lib/env";
  import { getHandle, getRelativeTime } from "$lib/utils/globals";

  export let data;

  const { title, description, postImage, createdAt, postId, username, userImage } = data.post;
  const { imageSize, theme } = data.embedInfo;
</script>

<article class="border-2 p-6 border-light-gray {theme}" class:border-semi-gray={theme === "dark"} class:bg-dark-gray={theme === "dark"}>
  <a href="{BASE_URL}/post/{postId}" class="rounded-md dark:text-white dark:bg-dark-gray" target="_blank" rel="noreferrer noopener">
    <div class="flex justify-between items-center">
      <h1 class="font-bold text-4xl">{title}</h1>
      <AppIcon class="bg-primary rounded-full" height={70} width={70} />
    </div>
    <time datetime={createdAt} class="ml-1 text-gray-500">
      {getRelativeTime(createdAt)}
    </time>
    <p class="ml-1 mt-4">
      {description}
    </p>
    <Image
      src={postImage}
      alt={title}
      height={400}
      width={400}
      loading="eager"
      class="mt-5 w-full object-contain border-2 rounded-md border-light-gray dark:border-semi-gray"
      style="height: {imageSize}"
    />
    <div class="flex items-center justify-end gap-2 mt-4">
      <div class="flex flex-col items-end">
        <p>
          {username}
        </p>
        <p class="text-xs text-gray-400">
          {getHandle(username)}
        </p>
      </div>
      <Image src={userImage} alt={username} height={48} width={48} class="h-12 w-12 rounded-full" />
    </div>
  </a>
</article>

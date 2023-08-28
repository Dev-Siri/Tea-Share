<script lang="ts">
  import type { Post } from "$lib/types";

  import { BASE_URL } from "$lib/env";
  import theme from "$lib/stores/theme";
  import { getRelativeTime } from "$lib/utils/globals";

  import FaComment from "svelte-icons/fa/FaComment.svelte";
  import FaRegComment from "svelte-icons/fa/FaRegComment.svelte";
  import IoIosCode from "svelte-icons/io/IoIosCode.svelte";

  import Comments from "./Comments.svelte";
  import Image from "./Image.svelte";
  import LikeButton from "./LikeButton.svelte";
  import ThreeDotsMenu from "./ThreeDotsMenu.svelte";

  export let post: Post;
  export let lazyLoadImage: boolean = true;

  const { postId, title, description, postImage, username, userImage, createdAt, likes } = post;

  let showComments = false;

  const postActions = [
    {
      name: "Embed Post",
      Icon: IoIosCode,
      async onClick() {
        const { toast } = await import("svoast");

        const snippet = `<iframe src="${BASE_URL}/post/${postId}/embed?theme=${$theme}&imageSize=260px" height="600" width="600" frameborder="0" style="border-radius: 6px;"></iframe>`;
        navigator.clipboard.writeText(snippet);

        toast.success("Embed Snippet copied to clipboard succcessfully!");
      },
    },
  ];
</script>

<svelte:head>
  {#if !lazyLoadImage}
    <link rel="preload" href="/api/image?url={encodeURIComponent(postImage)}&h=800" as="image" />
  {/if}
</svelte:head>

<article role="listitem" class="border-b-light-gray dark:border-b-semi-gray w-full border-b bg-white px-8 pb-5 pt-6 dark:bg-black">
  <section class="flex items-center">
    <a href="/people/{username}" class="flex">
      <Image height={50} width={50} src={userImage} alt={username} loading={lazyLoadImage ? "lazy" : "eager"} class="h-[50px] rounded-full" />
      <div class="flex flex-col ml-2 justify-center">
        <span class="font-bold">
          {username}
        </span>
        <span class="text-sm text-gray-500">
          {getRelativeTime(createdAt)}
        </span>
      </div>
    </a>
    <div class="relative inline-block text-left ml-auto">
      <ThreeDotsMenu options={postActions} />
    </div>
  </section>
  <h3 class="text-3xl font-bold my-5 w-full">{title}</h3>
  <a href="/post/{postId}" class="cursor-pointer">
    <Image
      src={postImage}
      alt={title}
      height={800}
      width={500}
      loading={lazyLoadImage ? "lazy" : "eager"}
      class="border-light-gray dark:border-semi-gray h-[500px] w-full rounded-lg border-2 object-contain"
    />
  </a>
  <p class="mx-1 mt-4 h-16 overflow-y-auto break-words pb-5 text-gray-500">{description}</p>
  <section class="mt-3 flex items-center">
    <LikeButton {likes} {postId} />
    <button type="button" class="flex h-7 text-primary" on:click={() => (showComments = !showComments)}>
      {#if showComments}
        <FaComment />
      {:else}
        <FaRegComment />
      {/if}
    </button>
  </section>
  {#if showComments}
    <Comments class="mt-4 max-h-42 overflow-y-hidden" {postId} />
  {/if}
</article>

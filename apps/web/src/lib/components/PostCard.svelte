<script lang="ts">
  import type { Post } from "$lib/types";

  import { BASE_URL } from "$lib/env";
  import theme from "$lib/stores/theme";
  import { getRelativeTime } from "$lib/utils/globals";

  import CodeTagsIcon from "svelte-material-icons/CodeTags.svelte";
  import CommentIcon from "svelte-material-icons/Comment.svelte";

  import Image from "./Image.svelte";
  import LikeButton from "./LikeButton.svelte";
  import ThreeDotsMenu from "./ThreeDotsMenu.svelte";

  export let post: Post;
  export let lazyLoadImage: boolean = true;

  const { postId, caption, postImage, username, userImage, createdAt, likes } = post;

  const postActions = [
    {
      name: "Embed Post",
      Icon: CodeTagsIcon,
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
  {#if !lazyLoadImage && postImage}
    <link rel="preload" href="/api/image?url={encodeURIComponent(postImage)}&h=800" as="image" />
  {/if}
</svelte:head>

<article role="listitem" class="border-b-light-gray dark:border-b-semi-gray w-full border-b bg-white px-5 pb-5 pt-5 dark:bg-black">
  <a href="/post/{postId}" class="cursor-pointer">
    <section class="flex items-center">
      <a href="/people/{username}" class="flex">
        <Image height={50} width={50} src={userImage} alt={username} loading={lazyLoadImage ? "lazy" : "eager"} class="h-[50px] rounded-full" />
        <div class="flex flex-col ml-2 justify-center">
          <span>
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
    <h3 class="text-md my-5 w-full" style="view-transition-name: {postId}">{caption}</h3>
    {#if postImage}
      <Image
        src={postImage}
        alt={caption}
        height={800}
        width={500}
        loading={lazyLoadImage ? "lazy" : "eager"}
        class="border-light-gray dark:border-semi-gray h-[500px] w-full rounded-lg border object-contain"
        style="view-transition-name: {`${postId}-image`}"
      />
    {/if}
    <section class="mt-3 flex items-center">
      <LikeButton {likes} {postId} />
      <a href="/post/{postId}#comments" class="flex">
        <CommentIcon class="text-primary" size={25} />
        <span class="ml-2 text-base">Comments</span>
      </a>
    </section>
  </a>
</article>

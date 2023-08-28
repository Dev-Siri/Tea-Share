<script lang="ts">
  import { getRelativeTime } from "$lib/utils/globals";

  import Comments from "$lib/components/Comments.svelte";
  import Image from "$lib/components/Image.svelte";
  import LikeButton from "$lib/components/LikeButton.svelte";

  export let data;

  const { postId, title, description, createdAt, postImage, likes, username, userImage } = data.post;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="og:title" content={title} />
  <meta name="og:description" content={description} />
  <meta name="og:url" content="https://tea-share.vercel.app/post/{postId}" />
  <meta name="og:image" content={userImage} />
  <meta name="og:image:width" content="1080" />
  <meta name="og:image:height" content="1920" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={userImage} />
  <meta name="twitter:image:alt" content="Post Image" />
</svelte:head>

<article class="h-screen w-full p-8 items-center bg-white overflow-hidden overflow-y-auto dark:bg-black">
  <a href="/people/{username}" class="flex">
    <Image height={50} width={50} src={userImage} alt={username} loading="eager" class="h-[50px] rounded-full" />
    <div class="flex flex-col ml-2 justify-center">
      <span class="font-bold">
        {username}
      </span>
      <span class="text-sm text-gray-500">
        {getRelativeTime(createdAt)}
      </span>
    </div>
  </a>
  <h1 class="text-4xl font-bold mt-4">{title}</h1>
  <p class="my-4 w-[200px] sm:w-full">{description}</p>
  <Image height={450} width={450} src={postImage} alt={title} class="rounded-md border-2 mb-4 border-light-gray dark:border-semi-gray w-full" />
  <LikeButton {likes} {postId} alwaysShow />
  <Comments class="my-4 w-full mb-20" {postId} />
</article>

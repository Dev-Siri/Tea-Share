<script lang="ts">
  import type { Post } from "../app";

  import user from "../stores/user";
  import { getRelativeTime } from "../utils/globals";

  import FaRegThumbsUp from "svelte-icons/fa/FaRegThumbsUp.svelte";
  import FaThumbsUp from "svelte-icons/fa/FaThumbsUp.svelte";
  import queryClient from "../services/queryClient";

  import Image from "./Image.svelte";

  export let post: Post;
  export let lazyLoadImage: boolean = true;

  const { title, description, image, author, authorImage, createdAt, people, _id } = post;

  const formatLikes = (people: string[]) => {
    if (!people.length) return "0 Likes";

    if (people.includes($user.name)) {
      if (people.length === 1) return "You liked this post";

      return `You and ${people.length - 1} ${people.length - 1 === 1 ? "other" : "others"}`;
    }

    if (people.length - 1 === 0) return `${people[0]} liked this post`;

    return `${people[0]} and ${people.length - 1} others`;
  };

  let likes = formatLikes(post.people);
  let isLiked = people.includes($user.name);

  const likePost = async () => {
    if (!$user) return;

    const { name, picture } = $user;

    likes = formatLikes([...people, name]);
    isLiked = true;

    await queryClient(`/posts/like?id=${_id}`, {
      method: "PATCH",
      body: {
        username: name,
        image: picture,
      },
    });
  };
</script>

<svelte:head>
  {#if !lazyLoadImage}
    <link rel="preload" href="/api/image?url={encodeURIComponent(image)}&h=800" as="image" />
  {/if}
</svelte:head>

<article role="listitem" class="border-light-gray dark:border-semi-gray mb-10 w-full rounded-xl border-2 bg-white px-8 pb-5 pt-6 dark:bg-black">
  <h3 class="text-3xl font-bold">{title}</h3>
  <p class="my-3 ml-1 overflow-y-auto break-words pb-2 text-gray-400">
    {getRelativeTime(createdAt)}
  </p>
  <a href="/post/{_id}" class="cursor-pointer">
    <Image
      src={image}
      alt={title}
      height={800}
      width={500}
      loading={lazyLoadImage ? "lazy" : "eager"}
      class="border-light-gray dark:border-semi-gray h-[500px] w-full rounded-lg border-2 object-contain"
    />
  </a>
  <p class="mx-1 mt-8 h-16 overflow-y-auto break-words pb-5 text-gray-500">{description}</p>
  <section class="mt-16 flex items-center">
    <button type="button" on:click={likePost} disabled={isLiked} class="flex h-8 cursor-pointer items-center border-none text-xs text-[#E8E8E8]">
      <span class="h-6 text-primary">
        {#if isLiked}
          <FaThumbsUp />
        {:else}
          <FaRegThumbsUp />
        {/if}
      </span>
      <span class="text-primary mr-6 text-base md:w-full">
        &nbsp;{likes}
      </span>
    </button>
    <div class="ml-auto flex items-center">
      <p>Posted by {author}</p>
      <a href="/people/{author}" class="hidden md:block">
        <Image
          height={30}
          width={30}
          src={authorImage}
          alt={author}
          loading={lazyLoadImage ? "lazy" : "eager"}
          class="ml-10px hidden h-[30px] rounded-full md:inline"
        />
      </a>
    </div>
  </section>
</article>

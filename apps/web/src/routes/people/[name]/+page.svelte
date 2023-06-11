<script lang="ts">
  import Image from "../../../components/Image.svelte";
  import PostList from "../../../components/PostList.svelte";

  import { getHandle } from "../../../utils/globals";

  export let data;

  const { username, image } = data.profileUser;
</script>

<svelte:head>
  <title>{username}'s Profile</title>
  <meta name="description" content="Visit {username} on Tea Share." />
  <meta name="og:title" content="{username}'s Profile" />
  <meta name="og:description" content="Visit {username} on Tea Share." />
  <meta name="og:image" content={image} />
  <meta name="og:image:width" content="600" />
  <meta name="og:image:height" content="600" />
  <meta name="twitter:title" content="{username}'s Profile" />
  <meta name="twitter:description" content="Visit {username} on Tea Share." />
  <meta name="twitter:image" content={image} />
  <meta name="twitter:image:alt" content={username} />
</svelte:head>

<article class="grid h-screen place-items-center overflow-y-auto">
  <article
    class="border-light-gray dark:border-semi-gray mt-10 flex w-[80%] flex-col items-center rounded-md border-2 bg-white p-12 dark:bg-black sm:ml-5 md:ml-0 md:w-[30%] md:flex-row md:items-start lg:w-1/2"
  >
    <Image src={image} alt={username} height={130} width={130} class="h-[130px] rounded-full" />
    <div class="mt-4 text-center md:ml-8 md:mt-0 md:text-start">
      <h1 class="text-3xl font-bold">{username}</h1>
      <h2 class="text-xl text-gray-400">{getHandle(username)}</h2>
      <h3 class="mt-2 text-xl">
        {data.posts.length} Posts By {username}
      </h3>
    </div>
  </article>
  <div class="mt-6 w-[90%]">
    <PostList posts={data.posts} />
  </div>
</article>

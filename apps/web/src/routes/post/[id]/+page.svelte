<script lang="ts">
  import { getRelativeTime } from "../../../utils/globals";

  import Image from "../../../components/Image.svelte";
  import UserList from "../../../components/UserList.svelte";

  export let data;

  const { title, description, createdAt, image, author, authorImage, people, peopleImage, _id } = data.post;
  const filteredOtherPosts = data.otherPosts.filter(post => post._id !== _id);
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="og:title" content={title} />
  <meta name="og:description" content={description} />
  <meta name="og:url" content="https://tea-share.vercel.app/post/{_id}" />
  <meta name="og:image" content={image} />
  <meta name="og:image:width" content="1080" />
  <meta name="og:image:height" content="1920" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
  <meta name="twitter:image:alt" content="Post Image" />
</svelte:head>

<article class="h-screen w-full items-center overflow-hidden overflow-y-auto xl:flex-row xl:items-start">
  <section class="mt-[30px] w-full pl-2 pr-4 sm:pl-[60px] md:pr-14">
    <div class="border-light-gray dark:border-semi-gray mb-4 h-fit w-full rounded-md border-2 p-8 dark:bg-black xl:mb-0">
      <h1 class="text-4xl font-bold">{title}</h1>
      <p class="mt-4 w-[200px] sm:w-full">{description}</p>
      <p class="border-b-semi-gray mb-2 border-b-[1px] pb-2 sm:max-w-full">{getRelativeTime(createdAt)}</p>
      <div class="border-b-semi-gray flex items-center border-b-[1px] pb-2">
        <a href="/people/{author}">
          <Image height={30} width={30} src={authorImage} alt={author} loading="eager" class="mr-10px hidden h-[30px] rounded-full md:inline" />
        </a>
        <p>Posted by {author}</p>
      </div>
    </div>
    <section class="flex flex-col justify-between md:flex-row">
      <div class="bg-light-gray dark:border-semi-gray mt-4 h-fit w-fit rounded-md border-2 p-8 dark:bg-black">
        <Image height={450} width={450} src={image} alt={title} class="border-primary rounded-md border-2 object-cover md:h-[450px] md:w-[450px]" />
      </div>
      <div class="mt-4 w-full md:ml-4">
        <UserList
          title="People who liked this post"
          users={people.map((person, index) => ({
            username: person,
            image: peopleImage[index],
          }))}
        />
      </div>
    </section>
  </section>
  <section class="mt-[30px] w-full pl-2 pr-4 sm:pl-[60px] md:pr-14">
    <div class="border-light-gray dark:border-semi-gray h-fit w-full rounded-md border-2 p-8 dark:bg-black xl:mb-0">
      <h1 class="text-4xl font-bold">Other Posts</h1>
    </div>
  </section>
  <section class="marquee relative h-full w-[180%] overflow-x-hidden">
    <div class="track absolute w-[180%] whitespace-nowrap pb-4 pt-10 will-change-transform">
      {#each filteredOtherPosts as post}
        <a href="/post/{post._id}" class="inline-block aspect-square h-[400px] w-[400px] pl-10 duration-200 hover:scale-105">
          <Image
            height={500}
            width={500}
            loading="lazy"
            src={post.image}
            alt={post.title}
            class="aspect-square h-[400px] w-[400px] rounded-md object-cover"
          />
        </a>
      {/each}
    </div>
  </section>
</article>

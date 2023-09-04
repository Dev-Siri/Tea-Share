<script lang="ts">
  import { enhance } from "$app/forms";
  import Circle from "svelte-loading-spinners/Circle.svelte";
  import TeaIcon from "svelte-material-icons/Tea.svelte";

  import type { Comment, CommentsResponse } from "$lib/types";

  import user from "$lib/stores/user";
  import { getRelativeTime } from "$lib/utils/globals";
  import queryClient from "$lib/utils/queryClient";

  import { onDestroy, onMount, tick } from "svelte";
  import Image from "./Image.svelte";

  export let postId: string;
  export let comments: Comment[];
  export let pageRef: HTMLElement;
  export let totalComments: number;
  let className = "";

  export { className as class };

  let page = 1;
  let isCreatingComment = false;

  async function fetchMoreComments() {
    const { scrollHeight, scrollTop, clientHeight } = pageRef;
    if (scrollHeight - scrollTop !== clientHeight) return;
    page++;

    const commentsResponse = await queryClient<CommentsResponse>(`/posts/${postId}/comments`, {
      searchParams: {
        page,
        limit: 4,
      },
    });

    comments = [...commentsResponse.comments, ...comments];
  }

  onMount(async () => {
    await tick();
    pageRef?.addEventListener("scroll", fetchMoreComments);
  });

  onDestroy(async () => {
    await tick();
    pageRef?.removeEventListener("scroll", fetchMoreComments);
  });
</script>

<section class={className}>
  <h1 class="font-bold text-2xl">
    {totalComments}
    {totalComments === 1 ? "Comment" : "Comments"}
  </h1>
  <form
    action="/post/{postId}?/comment"
    method="POST"
    class="flex flex-col items-end gap-2"
    use:enhance={() => {
      isCreatingComment = true;

      return async ({ update, result, formData }) => {
        isCreatingComment = false;
        update();

        if (result.type === "success") {
          comments = [
            {
              comment: String(formData.get("comment")),
              createdAt: new Date().toISOString(),
              username: $user.username,
              userImage: $user.userImage,
            },
            ...comments,
          ];
          totalComments++;
        }
      };
    }}
  >
    <input type="text" name="comment" placeholder="Add your comment..." class="input h-full" required />
    <button type="submit" class="btn gap-2 h-full" aria-label="Comment">
      <TeaIcon size={20} />
      <span>Take my cup of tea</span>
      {#if isCreatingComment}
        <Circle size={20} color="white" />
      {/if}
    </button>
  </form>
  <div role="list" class="flex flex-col gap-2 mt-2" on:scroll={fetchMoreComments}>
    {#if comments.length}
      {#each comments as { username, userImage, createdAt, comment }}
        <article role="listitem" class="p-3 flex rounded-md items-center gap-2">
          <Image src={userImage} alt={username} height={50} width={50} class="rounded-full" />
          <div>
            <a href="/people/{encodeURIComponent(username)}" class="font-bold">
              {username}
              <span class="text-gray-400 font-normal">
                {getRelativeTime(createdAt)}
              </span>
            </a>
            <p>
              {comment}
            </p>
          </div>
        </article>
      {/each}
    {/if}
  </div>
</section>

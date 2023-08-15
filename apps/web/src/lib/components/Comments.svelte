<script lang="ts">
  import { enhance } from "$app/forms";
  import FaCommentSlash from "svelte-icons/fa/FaCommentSlash.svelte";
  import MdSend from "svelte-icons/md/MdSend.svelte";
  import Circle from "svelte-loading-spinners/Circle.svelte";

  import type { User } from "$lib/types";

  import user from "$lib/stores/user";
  import queryClient from "$lib/utils/queryClient";
  import { onMount, tick } from "svelte";

  import { getRelativeTime } from "$lib/utils/globals";
  import Image from "./Image.svelte";

  interface Comment extends Omit<User, "email" | "userId"> {
    comment: string;
    createdAt: string;
  }

  interface CommentsResponse {
    total: number;
    comments: Comment[];
  }

  export let postId: string;
  let className = "";

  export { className as class };

  // No {#await} block here because I need to update the comments when the user adds more comments
  let comments: Comment[] = [];
  let isCreatingComment = false;
  let commentsList: HTMLDivElement;
  let totalComments: number;
  let isLoading = true;
  let page = 1;

  async function getComments() {
    const commentsResponse = await queryClient<CommentsResponse>(`/posts/${postId}/comments`, {
      searchParams: {
        page,
        limit: 4,
      },
    });

    comments = commentsResponse.comments;
    totalComments = commentsResponse.total;
  }

  async function fetchMoreComments(event: UIEvent & { currentTarget: EventTarget & HTMLElement }) {
    if (event.currentTarget.scrollTop !== 0) return;
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
    await getComments();
    isLoading = false;

    await tick();
    commentsList.scrollTo(0, commentsList.scrollHeight);
  });
</script>

<section class={className}>
  {#if isLoading}
    <div class="flex flex-col items-center p-4 gap-3" aria-busy>
      <Circle size={40} color="white" />
      <p>Loading comments...</p>
    </div>
  {:else}
    <h1 class="font-bold text-2xl">
      {totalComments}
      {totalComments === 1 ? "Comment" : "Comments"}
    </h1>
    <div
      role="list"
      class="flex flex-col gap-2 mt-2 h-64 overflow-y-auto border-2 border-light-gray rounded-md dark:border-semi-gray"
      bind:this={commentsList}
      on:scroll={fetchMoreComments}
    >
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
      {:else}
        <div class="flex flex-col items-center justify-center h-full">
          <div class="h-20">
            <FaCommentSlash />
          </div>
          <p class="text-2xl mt-2">No comments yet</p>
          <p class="text-xl mt-2 text-center [text-wrap:balance]">Be the first one to comment on this post!</p>
        </div>
      {/if}
    </div>
    <form
      action="/post/{postId}?/comment"
      method="POST"
      class="flex h-12 mt-2 items-center"
      use:enhance={() => {
        isCreatingComment = true;

        return async ({ update, result, formData }) => {
          isCreatingComment = false;
          update();

          if (result.type === "success") {
            comments = [
              ...comments,
              {
                comment: String(formData.get("comment")),
                createdAt: new Date().toISOString(),
                username: $user.username,
                userImage: $user.userImage,
              },
            ];

            await tick();
            commentsList.scrollTo(0, commentsList.scrollHeight);
          }
        };
      }}
    >
      <input type="text" name="comment" placeholder="Add your comment..." class="input h-full mt-[0!important] w-3/4" required />
      <button type="submit" class="btn gap-2 w-1/4 h-full" aria-label="Comment">
        <div class="h-5">
          <MdSend />
        </div>
        {#if isCreatingComment}
          <Circle size={20} color="white" />
        {/if}
      </button>
    </form>
  {/if}
</section>

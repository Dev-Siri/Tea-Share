<script lang="ts">
  import { enhance } from "$app/forms";
  import MdArrowBack from "svelte-icons/md/MdArrowBack.svelte";
  import MdCheck from "svelte-icons/md/MdCheck.svelte";
  import Circle from "svelte-loading-spinners/Circle.svelte";

  import Logo from "../../components/Logo.svelte";

  import user from "../../stores/user";

  export let form;

  let loading = false;
</script>

<svelte:head>
  <title>Reset Password</title>
  <meta name="description" content="Login to Tea Share to connect and share posts with your friends online." />
  <meta name="og:title" content="Reset Password" />
  <meta name="og:description" content="Login to Tea Share to connect and share posts with your friends online." />
  <meta name="twitter:title" content="Reset Password" />
  <meta name="twitter:description" content="Login to Tea Share to connect and share posts with your friends online." />
</svelte:head>

<article class="p-6">
  <Logo bigger />
  <h1 class="ml-2 mt-3 text-3xl font-bold">Send a reset link to your email.</h1>
  <form
    method="POST"
    use:enhance={() => {
      loading = true;
    }}
  >
    <input class="input" placeholder="Email" type="email" name="email" value={form?.email ?? ""} required />
    {#if form?.incorrect}
      <p class="ml-1 mt-4 w-96 rounded-md border-2 border-red-600 bg-red-200 p-3 text-center font-bold text-red-800">The given email is invalid</p>
    {/if}
    {#if form?.success}
      <div class="flex border-l-8 border-l-green-600 items-center text-green-600 p-1 ml-1 mt-5 rounded-md bg-green-300">
        <span class="h-10 text-green-500 bg-green-300 rounded-full p-2">
          <MdCheck />
        </span>
        <p>A reset link has been sent to your email.</p>
      </div>
    {/if}
    <div class="mt-[30px] ml-1 gap-2 flex h-fit items-center">
      {#if !$user}
        <a href="/auth" class="btn h-10 w-[220px!important]">
          <span class="h-4 mr-2">
            <MdArrowBack />
          </span>
          Go Back to Auth Page
        </a>
      {/if}
      <button disabled={loading} type="submit" class="btn h-10 gap-2">
        Send Reset Link
        {#if loading}
          <Circle size={20} color="white" />
        {/if}
      </button>
    </div>
  </form>
</article>

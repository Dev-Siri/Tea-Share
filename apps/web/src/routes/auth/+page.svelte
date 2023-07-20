<script lang="ts">
  import { enhance } from "$app/forms";
  import FaCamera from "svelte-icons/fa/FaCamera.svelte";
  import Circle from "svelte-loading-spinners/Circle.svelte";

  import type { ActionData } from "./$types";

  import Logo from "$lib/components/Logo.svelte";
  import Google from "$lib/components/icons/Google.svelte";
  import { getHandle } from "$lib/utils/globals";

  export let form: ActionData;

  let isSignup = false;
  let loading = false;
  let errorOccured = false;
  let previewImage: File | undefined;
  let username: string = form?.username ?? "";

  $: handle = getHandle(username.trim() || "Username");

  const toggleMode = () => (isSignup = !isSignup);
  const selectImage = (e: Event & { currentTarget: EventTarget & HTMLInputElement }) => (previewImage = e?.currentTarget?.files?.[0]);
  const updateUsername = (e: Event & { currentTarget: EventTarget & HTMLInputElement }) => (username = e?.currentTarget?.value);
</script>

<svelte:head>
  <title>Login | Sign up</title>
  <meta name="description" content="Login to Tea Share to connect and share posts with your friends online." />
  <meta name="og:title" content="Login | Sign up" />
  <meta name="og:description" content="Login to Tea Share to connect and share posts with your friends online." />
  <meta name="twitter:title" content="Login | Sign up" />
  <meta name="twitter:description" content="Login to Tea Share to connect and share posts with your friends online." />
</svelte:head>

<article class="p-6 overflow-y-auto h-screen">
  <Logo bigger />
  <h1 class="ml-2 mt-3 text-3xl font-bold">{isSignup ? "Signup to join the community!" : "Welcome back! Login to continue."}</h1>
  <form
    method="POST"
    action={isSignup ? "?/signup" : "?/login"}
    enctype="multipart/form-data"
    use:enhance={() => {
      loading = true;
    }}
  >
    {#if isSignup}
      <div class="w-full mt-10 flex justify-center">
        <label for="profile-picture-upload">
          {#if previewImage}
            <img src={URL.createObjectURL(previewImage)} alt="Profile" class="cursor-pointer rounded-full h-36 w-36" />
          {:else}
            <div class="rounded-full cursor-pointer bg-black p-10 border-2 border-gray-600 w-fit items-center">
              <div class="h-10">
                <FaCamera />
              </div>
            </div>
          {/if}
        </label>
      </div>
      <h2 class="font-bold text-center text-3xl mt-2">
        {username.trim() || "Username"}
      </h2>
      <h3 class="text-center text-gray-400 text-xl mt-2">
        {handle}
      </h3>
      <input type="file" name="image" aria-label="Profile Picture Upload" on:change={selectImage} id="profile-picture-upload" class="hidden" />
    {/if}
    {#if isSignup}
      <input
        class="input"
        placeholder="Username"
        name="username"
        minlength="3"
        maxlength="100"
        value={form?.username ?? ""}
        on:input={updateUsername}
        required
      />
    {/if}
    <input class="input" placeholder="Email" type="email" name="email" value={form?.email ?? ""} required />
    <input class="input" placeholder="Password" type="password" name="password" required />
    {#if form?.errorMessage}
      <p class="error">{form?.errorMessage}</p>
    {/if}
    {#if errorOccured}
      <p class="error">An error occured</p>
    {/if}
    <div class="mt-[30px] mb-4 flex h-fit items-center">
      <button disabled={!form?.errorMessage && loading} type="submit" class="btn w-36 ml-2 h-10 gap-2">
        {isSignup ? "Signup" : "Login"}
        {#if !form?.errorMessage && loading}
          <Circle size={20} color="white" />
        {/if}
      </button>
      <p class="ml-10px w-[390px] text-sm">
        {isSignup ? "Already an user? " : "Don't have an account? "}
        <span
          role="button"
          tabindex="0"
          class="text-primary hover:text-primary-dark cursor-pointer duration-200"
          on:click={toggleMode}
          on:keydown={toggleMode}
        >
          {isSignup ? "Login" : "Signup"}
        </span>
      </p>
    </div>
    {#if isSignup}
      <p class="ml-10px w-full my-5 text-sm">
        By creating your account, you accept our
        <a href="/terms-of-service" class="text-primary underline">Terms of Service</a>
      </p>
    {/if}
    <button
      type="submit"
      formaction="?/googleLogin"
      formnovalidate
      class="border-light-gray hover:bg-light-gray ml-2 mt-5 flex w-[250px] cursor-pointer items-center justify-center rounded-md border-2 bg-white p-3 duration-200"
    >
      <Google />
      <p class="ml-10px text-black">Sign in with Google</p>
    </button>
    <!-- <p class="ml-10px w-[390px] my-5 text-sm">
      Forgot Password?
      <a href="/reset-password" class="text-primary hover:text-primary-dark">Reset</a>
    </p> -->
  </form>
</article>

<style lang="postcss">
  .error {
    @apply w-96 p-2 text-red-300;
  }
</style>

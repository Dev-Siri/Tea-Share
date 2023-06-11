<script lang="ts">
  import { enhance } from "$app/forms";
  import Circle from "svelte-loading-spinners/Circle.svelte";

  import Logo from "../../components/Logo.svelte";
  import Google from "../../components/icons/Google.svelte";

  export let form;

  let isSignup = false;
  let loading = false;
  let errorOccured = false;

  const toggleMode = () => (isSignup = !isSignup);

  const loginWithGoogle = async () => {
    const { signInWithPopup, GoogleAuthProvider } = await import("firebase/auth");
    const { default: queryClient } = await import("../../services/queryClient");
    const { auth } = await import("../../services/firebase");
    const { setCookie } = await import("../../utils/cookies");

    try {
      const provider = new GoogleAuthProvider();

      const { user } = await signInWithPopup(auth, provider);

      await queryClient("/users", {
        method: "POST",
        body: {
          email: user.email!,
          username: user.displayName!,
          image: user.photoURL!,
        },
      });

      const authToken = await user.getIdToken();

      setCookie("auth_token", authToken);
    } catch {
      errorOccured = true;
    }
  };
</script>

<svelte:head>
  <title>Login | Sign up</title>
  <meta name="description" content="Login to Tea Share to connect and share posts with your friends online." />
  <meta name="og:title" content="Login | Sign up" />
  <meta name="og:description" content="Login to Tea Share to connect and share posts with your friends online." />
  <meta name="twitter:title" content="Login | Sign up" />
  <meta name="twitter:description" content="Login to Tea Share to connect and share posts with your friends online." />
</svelte:head>

<article class="p-6">
  <Logo bigger />
  <h1 class="ml-2 mt-3 text-3xl font-bold">{isSignup ? "Signup to join the community!" : "Welcome back! Login to continue."}</h1>
  <form
    method="POST"
    action={isSignup ? "?/signup" : "?/login"}
    use:enhance={() => {
      loading = true;
    }}
  >
    {#if isSignup}
      <input class="input" placeholder="Username" name="username" value={form?.username ?? ""} required />
    {/if}
    <input class="input" placeholder="Email" type="email" name="email" value={form?.email ?? ""} required />
    <input class="input" placeholder="Password" type="password" name="password" required />
    {#if isSignup}
      <input type="file" name="image" aria-label="Profile Picture Upload" class="input" required />
    {/if}
    {#if form?.incorrect}
      <p class="error">The credentials provided are invalid.</p>
    {/if}
    {#if errorOccured}
      <p class="error">An error occured</p>
    {/if}
    <div class="mt-[30px] flex h-fit items-center">
      <button disabled={loading} type="submit" class="btn ml-2 h-10 gap-2">
        {isSignup ? "Signup" : "Login"}
        {#if loading}
          <Circle size={20} color="white" />
        {/if}
      </button>
      <p class="ml-10px w-[390px] text-sm">
        {isSignup ? "Already an user? " : "Don't have an account? "}
        <span class="text-primary hover:text-primary-dark cursor-pointer duration-200" on:click={toggleMode} on:keydown={toggleMode}>
          {isSignup ? "Login" : "Signup"}
        </span>
      </p>
    </div>
  </form>
  <button
    type="button"
    class="border-light-gray hover:bg-light-gray ml-2 mt-5 flex w-[250px] cursor-pointer items-center justify-center rounded-md border-2 bg-white p-3 duration-200"
    on:click={loginWithGoogle}
  >
    <Google />
    <p class="ml-10px text-black">Sign in with Google</p>
  </button>
</article>

<style lang="postcss">
  .error {
    @apply ml-1 mt-4 w-96 rounded-md border-2 border-red-600 bg-red-200 p-3 text-center font-bold text-red-800;
  }
</style>

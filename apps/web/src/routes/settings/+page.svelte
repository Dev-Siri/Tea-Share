<script lang="ts">
  import Circle from "svelte-loading-spinners/Circle.svelte";

  import ThemeOption from "../../components/ThemeOption.svelte";

  import { goto } from "$app/navigation";
  import user from "../../stores/user";

  export let data;

  let logoutLoading = false;
  let updateProfileLoading = false;
  let errorOccured = false;

  const handleUpdateProfile = async (event: any) => {
    event.preventDefault();

    updateProfileLoading = true;

    const form = new FormData(event.target as HTMLFormElement);
    const { email, username, image } = Object.fromEntries(form.entries());

    if (email instanceof Blob || username instanceof Blob || image instanceof Blob) return;

    const { getDownloadURL, ref, uploadBytes } = await import("firebase/storage");
    const { default: queryClient } = await import("../../services/queryClient");
    const { updateEmail, updateProfile } = await import("firebase/auth");
    const { storage, auth } = await import("../../services/firebase");
    const { setCookie } = await import("../../utils/cookies");

    try {
      const imageName = crypto.randomUUID();
      const imageRef = ref(storage, `users/${imageName}`);

      await uploadBytes(imageRef, (image || $user.picture) as unknown as File);

      const uploadedImage = await getDownloadURL(imageRef);

      await updateProfile(auth.currentUser!, {
        displayName: username,
        photoURL: uploadedImage,
      });

      await updateEmail(auth.currentUser!, email);

      await queryClient(`/users?id=${data.userId}`, {
        method: "PUT",
        body: {
          userId: data.userId,
          image: uploadedImage,
          username,
          email,
        },
      });

      const authToken = await auth.currentUser!.getIdToken();

      setCookie("auth_token", authToken);

      location.reload();
    } catch (error: any) {
      updateProfileLoading = false;
      errorOccured = true;
    }
  };

  const logout = async () => {
    logoutLoading = true;
    const { auth } = await import("../../services/firebase");
    const { removeCookie } = await import("../../utils/cookies");

    await auth.signOut();
    removeCookie("auth_token");
    goto("/auth");
  };
</script>

<svelte:head>
  <title>Settings</title>
  <meta name="og:title" content="Settings" />
  <meta name="twitter:title" content="Settings" />
</svelte:head>

<article class="ml-3 flex h-screen w-full flex-col overflow-y-auto pr-3 sm:ml-10 lg:flex-row lg:justify-around">
  <form
    class="border-light-gray dark:border-semi-gray mt-10px h-fit w-[350px] rounded-md border-2 p-7 pb-10 dark:bg-black sm:w-[500px]"
    method="POST"
    on:submit={handleUpdateProfile}
  >
    <h2 class="text-2xl font-bold">Your Profile</h2>
    <input name="username" value={$user.name} class="input" placeholder="Username" />
    <input name="email" value={$user.email} class="input" placeholder="Email" type="email" />
    <input name="image" class="input" type="file" />
    {#if errorOccured}
      <p class="bg-red-200 w-full ml-1 rounded-md border-2 border-red-600 p-3 mt-4 text-red-800 font-bold text-center">
        An error occured when trying to update your profile.
      </p>
    {/if}
    <div class="ml-1 mt-5 flex">
      <button type="submit" class="flex gap-2 justify-center bg-primary p-10px ml-1 w-36 cursor-pointer rounded-md border-none text-white">
        Update Profile
        {#if updateProfileLoading}
          <Circle size={20} color="white" />
        {/if}
      </button>
      <button
        type="button"
        class="flex gap-2 justify-center bg-primary p-10px ml-2 w-36 cursor-pointer rounded-md border-none text-white"
        on:click={logout}
      >
        Logout
        {#if logoutLoading}
          <Circle size={20} color="white" />
        {/if}
      </button>
    </div>
  </form>
  <section class="border-light-gray dark:border-semi-gray mt-10px h-fit w-[350px] rounded-md border-2 p-7 dark:bg-black sm:w-[500px]">
    <h2 class="text-2xl font-bold">Theme mode</h2>
    <ThemeOption type="dark" />
    <ThemeOption type="light" />
  </section>
</article>

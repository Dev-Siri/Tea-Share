<form
  action="?/updateProfile"
  class="border-light-gray dark:border-semi-gray mt-10px h-fit w-[350px] rounded-md border-2 p-7 pb-10 dark:bg-black sm:w-[500px]"
  method="POST"
  use:enhance={() => {
    loading = true;
  }}
>
  <h2 class="text-2xl font-bold">Your Profile</h2>
  <input name="username" value={$user.username} class="input" placeholder="Username" />
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
      {#if loading}
        <Circle size={20} color="white" />
      {/if}
    </button>
  </div>
</form>

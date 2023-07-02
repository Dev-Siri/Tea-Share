<script lang="ts">
  import { invalidateAll } from "$app/navigation";

  export let data;
</script>

<article class="overflow-y-auto h-screen">
  <section class="grid place-items-center text-center p-20">
    <h1 class="font-bold text-5xl leading-relaxed">The Future of Tea Share</h1>
    <p class="text-lg">The migration from MongoDB & Firebase -> MySQL</p>
  </section>
  <section class="px-10">
    <label for="progress-tracker" class="mb-1 text-lg font-medium dark:text-white">Progress Tracker</label>
    <div id="progress-tracker" role="progressbar" class="w-full h-6 mt-3 bg-gray-200 rounded-full dark:bg-dark-gray">
      <div class="flex justify-between mb-1">
        <span class="text-sm font-medium text-blue-700 dark:text-white mb-2">{data.progress}%</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div class="bg-blue-600 h-2.5 rounded-full" style="width: {data.progress}%" />
      </div>
    </div>
    <div class="flex justify-end px-20 w-screen">
      <button type="button" class="p-4 bg-blue-500 rounded-md mt-10" on:click={invalidateAll}>Refresh data</button>
    </div>
  </section>
  <section class="grid place-items-center text-center p-20">
    <h1 class="font-bold leading-relaxed text-5xl">Why am I seeing this page & not the Tea Share app?</h1>
    <p class="text-lg">
      The Tea Share app is currently under going a migration from the MongoDB database to MySQL <br />
      which is a relational database that fits this app better than what MongoDB offers. Firebase is also a service from Google <br />
      & Tea Share uses it to handle authentication & storage. But these services are two seperate pieces that Tea Share tries to tie together to build
      <br />
      the app. It was hard to handle these two. So it is being unified into a single database with Auth logic being offloaded entirely to the Go app
      <br />
      Wanna see the new app's architecture, oh boy have I made a diagram that is hard to read for you:
    </p>
    <img src="/images/architecture.avif" alt="Tea Share Architecture" height={500} width={1000} class="rounded-md border-2 border-gray-700 mt-4" />
    <p class="text-lg mt-4">
      Confused? good. But if you did understand, then you can see how much more simpler it looks on the surface right? But actually <br />
      the complexity is going nowhere. Rather, it would actually increase. Instead of the complexity being two seperate pieces, its now one giant Blob!
      Instead of two concerns, the backend handles everything. So the migration is actually from frontend doing some stuff then backend doing some stuff
      to now only backend does stuff. So we are not fixing any complexity problems, but instead moving it to the backend and painting a smiley face on
      top of it. As you can see, GCP FS (Google Cloud Platform's File Storage) is now handled on the Go backend so basically we need to send base64 strings
      to the backend now.
    </p>
  </section>
</article>

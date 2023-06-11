<script lang="ts">
  import { getHandle } from "../utils/globals";

  import Image from "./Image.svelte";

  export let username: string;
  export let image: string;
</script>

<a
  href="/people/{encodeURIComponent(username)}"
  class="dark:hover:bg-semi-gray flex w-full cursor-pointer items-center p-3 duration-200 hover:bg-gray-200"
>
  <Image src={image} alt={username} height={44} width={44} class="h-11 rounded-full" />
  <div class="ml-5">
    <p>{username}</p>
    <p class="text-gray-500">{getHandle(username)}</p>
  </div>
</a>

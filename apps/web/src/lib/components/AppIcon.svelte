<script lang="ts">
  export let height = 269;
  export let width = 274;
  export let className: string | null = null;
</script>

<svg class={className} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" {width} {height} fill="none">
  <title>Tea Share</title>
  <path fill="url(#a)" d="M0 0h274v269H0z" />
  <defs>
    <pattern id="a" width={1} height={1} patternContentUnits="objectBoundingBox">
      <use xlink:href="#b" transform="scale(.00365 .00372)" />
    </pattern>
    <image xlink:href="/images/icon.avif" id="b" {width} {height} />
  </defs>
</svg>

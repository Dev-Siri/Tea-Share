<script lang="ts">
  export let src: string;
  export let alt: string;
  export let height: number;
  export let width: number;
  export let loading: "lazy" | "eager" = "lazy";

  let className = "";
  export { className as class };
</script>

<img src="/api/image?url={encodeURIComponent(src)}&h={height}" {alt} {height} {width} {loading} class={className} />

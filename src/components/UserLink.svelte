<script>
  export let icon = "custom";
  export let url = "";
  export let title = "Title";
  export let first = false;
</script>

{#if url}
  <a
    href={url}
    target="_blank"
    class="tooltip stack w-full max-w-md text-center bg-base-300 flex justify-center items-center p-4 rounded-lg not-prose no-underline"
    class:mt-5={!first}
    data-tip={url}
  >
    <img src={`${icon}.png`} alt={icon} width="32" height="32" class="w-8" />
    <span class="text-lg text-white font-bold">{title}</span>
  </a>
{:else}
  <div
    class="stack w-full max-w-md text-center bg-base-300 flex justify-center items-center p-4 rounded-lg not-prose no-underline"
    class:mt-5={!first}
  >
    <img src={`${icon}.png`} alt={icon} width="32" height="32" class="w-8" />
    <span class="text-lg text-white font-bold">{title}</span>
</div>
{/if}

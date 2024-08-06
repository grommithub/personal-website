<script lang="ts">
  import type { NumericRange } from "@sveltejs/kit";
  import { fly } from "svelte/transition";

  export let type = fly;
  export let duration: number = 0;
  export let x: number = 0;
  export let y: number = 0;
  export let delay: number = 0;
  export let lastElement: boolean = false;
</script>

<div
  class="content card bg-base-300 rounded-box grid place-items-start p-5 lg:px-10 uw:p-10 shadow-lg leading-loose"
  class:mb-5={!lastElement}
  in:type={{ duration, x, y, delay }}
>
  <slot />
</div>

<style>
  :global(.content h2) {
   @apply divider;
   @apply divider-start;
   @apply w-full;
  }
  :global(.content p) {
    @apply lg:pl-5;
    @apply text-base;
    @apply lg:text-lg;
    @apply uw:text-xl;
    @apply lg:leading-snug;
    @apply text-wrap;
  }
</style>

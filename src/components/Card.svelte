<script lang="ts">
  import type { NumericRange } from "@sveltejs/kit";
  import { fly } from "svelte/transition";

  export let type = fly;
  export let duration: number = 0;
  export let x: number = 0;
  export let y: number = 0;
  export let delay: number = 0;
  export let lastElement:boolean = false;
</script>

<div
  class="card bg-base-300 rounded-box grid place-items-start p-5 shadow-lg"
  class:mb-5={!lastElement}
  in:type={{ duration, x, y, delay }}
  out:fly={{duration:250, y:1000 }}>
  <slot />
</div>

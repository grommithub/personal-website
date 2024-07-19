<script lang="ts">
  import { fly } from "svelte/transition";
  import type { PageData } from "./$types";
  import { onMount } from "svelte";

  let flyIn = false;
  onMount(() => (flyIn = true));

  export let data: PageData;
</script>

{#if flyIn}
  <div class="flex w-full flex-col-reverse lg:flex-row p-5 overflow-hidden">
    <img
      transition:fly={{ x: -1000, duration: 1000 }}
      class="card bg-base-300 rounded-box lg:w-1/3 w-full"
      src="https://media.discordapp.net/attachments/960675848724283452/1242758181659087040/20240430_200445-1.jpg?ex=669b773f&is=669a25bf&hm=a28910ac9bb70266f106da66d572071b2e0782544041ad497c1b45a1ebf38c88&=&format=webp&width=526&height=701"
    />
    <div class="divider lg:divider-horizontal"></div>
    <div
      transition:fly={{ x: 1000, duration: 1000 }}
      class="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center my-auto p-5"
    >
      <h1 class="text-xl">Hello, you</h1>
      <p class="text-base text-wrap">
        My name is Dan and I develop software both as a profession and as a
        hobby.
      </p>
    </div>
  </div>
{/if}
<!-- <div class="flex w-full flex-row-reverse p-5 justify-center">
  <img
    class="card bg-base-300 rounded-box w-2/6"
    src="https://media.discordapp.net/attachments/960675848724283452/1242758181659087040/20240430_200445-1.jpg?ex=669b773f&is=669a25bf&hm=a28910ac9bb70266f106da66d572071b2e0782544041ad497c1b45a1ebf38c88&=&format=webp&width=526&height=701"
  />
  <div class="divider divider-horizontal"></div>
  <div
    class="card bg-base-300 rounded-box h-fit p-5 justify-start text-wrap"
  >

  </div>
</div> -->

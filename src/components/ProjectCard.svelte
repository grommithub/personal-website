<script lang="ts">
  interface Link {
    url: string;
    display: string;
  }

  export let link: Link = null;
  export let title: string = "Title";
  export let tags: string[] = [];
  export let src: string = "https://i.imgur.com/VnIKHN9.gif";
  export let mobile_src= "";
</script>

<div
  class="project card bg-base-300 w-full shadow-xl m-auto flex-col lg:flex-row mb-5 grid lg:grid-cols-2 justify-between overflow-hidden"
>
  <div class="w-full h-full bg-black content-center">
    <img {src} class="w-full h-fit" alt={title} 
    class:hidden={mobile_src != ""}
    class:lg:block={mobile_src != ""}/>
    {#if mobile_src != ""}
      <img src={mobile_src} class="w-full h-fit block" alt={title} 
      class:lg:hidden={mobile_src != ""}/>
    {/if}
  </div>

  <div class="card-body w-full">
    <h2 class="divider w-full divider-start">
      {title}
    </h2>
    <p class="text-wrap h-fit my-auto">
      <slot></slot>
    </p>
    <div class="card-actions justify-start"></div>
    <div class="divider"></div>

    <div class="w-full flex justify-between">
      <div>
        {#each tags as tag}
          <div class="badge badge-accent badge-outline mx-1">{tag}</div>
        {/each}
      </div>

      {#if link != null}
        <a
          href={link.url}
          target="_blank"
          class="tooltip ml-5"
          data-tip={link.url}
        >
          <button class="btn btn-primary">{link.display}</button>
        </a>
      {/if}
    </div>
  </div>
</div>

<style>
  :global(ul) {
    @apply list-disc;
    @apply pl-4;
    @apply m-2;
    @apply leading-tight;
  }

  :global(.project p) {
    @apply lg:pl-5;
    @apply text-base;
    @apply lg:text-lg;
    @apply uw:text-xl;
    @apply lg:leading-snug;
  }

  :global(.project h2) {
    @apply text-xl;
    @apply lg:text-2xl;
    @apply uw:text-3xl;
    @apply lg:leading-snug;
  }
</style>

<script lang="ts">

    interface Link{
        url:string;
        display:string;
    }

    export let link:Link = null;
    export let title:string = "Title";
    export let tags:string[] = ["Test 1","Test 2"];
    export let src:string = "https://i.imgur.com/VnIKHN9.gif";
</script>



<div class="card bg-base-300 w-full shadow-xl m-auto flex-col lg:flex-row mb-5 grid lg:grid-cols-2">
    <div class="w-full rounded">
      <img
        {src}
        class="w-full h-auto"
        alt="Shoes"
      />
    </div>
    <div class="card-body  w-full">
      <h2 class="card-title">
        {title}
      </h2>
      <p class=" text-wrap">
        <slot></slot>
      </p>
      <div class="card-actions justify-start">
    </div>
    
    <div class="w-full flex justify-between">
        <div>
            {#each tags as tag}
            <div class="badge badge-accent badge-outline mx-1">{tag}</div>
            {/each}
        </div>  
        
        {#if link != null}      
        <a href="{link.url}" target="_blank" class="tooltip ml-5" data-tip={link.url}>

            <button class="btn btn-primary">{link.display}</button>
        </a>
        {/if}
        </div>
    </div>
  </div>
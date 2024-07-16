<!-- <div class="text-center">

    <h1 class="text-3xl text-green-600">Welcome to Dan Burt's Website</h1>
    <p>
        Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
    </p>
    
    <p>
        Press
        <kbd class="kbd kbd-sm">F</kbd>
        to pay respects.
    </p>
</div> -->

<script>
    import { onMount } from "svelte";
import { fly } from "svelte/transition";

    let flyIn = false;

    onMount(()=> flyIn = true)
</script>

<img class=" w-screen h-screen -z-20 absolute" src="https://cdn.discordapp.com/attachments/1079554025550266438/1079555135530873064/Claudius_gzE1ntGoS2.gif?ex=6697b3d1&is=66966251&hm=e11e7420c0dc17d4b80e8824ee4327e1f251acc8b72a2a2edbaa50d31a67f50e&">
<div class=" w-screen h-screen -z-10 bg-primary-content opacity-90 absolute"></div>


{#if flyIn}
<div class="flex mx-24" transition:fly={{delay: 500, duration: 1000, x:-500}}>
    <div class="avatar mx-14">
        <div class=" w-56  mask mask-hexagon">
            <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
        </div>
    </div>
    
    <div class="flex flex-col justify-center">
    <p class="text-5xl" transition:fly={{delay: 1000, duration: 1000, x:-500}}>Dan Burt</p>
    <ul class="text-xl" transition:fly={{delay: 1500, duration: 1000, x:-500}}>
        <li transition:fly={{delay: 2000, duration: 1000, x:-500}}>Software engineer</li>
        <li transition:fly={{delay: 2500, duration: 1000, x:-500}}>Game developer</li>
        <li transition:fly={{delay: 3000, duration: 1000, x:-500}}>Web designer</li>
    </ul>
</div>
</div>
{/if} 


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

  let titles = [
    "Software engineer",
    "Game developer",
    "Web designer",
    "Talented young man",
  ];

  onMount(() => (flyIn = true));
</script>

{#if flyIn}
  <div class="absolute h-screen w-screen -z-20 m-auto overflow-hidden">
    <img
      class="-z-20 absolute h-full object-cover translate-x-0.5"
      alt="Maze generator"
      src="https://cdn.discordapp.com/attachments/1079554025550266438/1079555135530873064/Claudius_gzE1ntGoS2.gif?ex=6697b3d1&is=66966251&hm=e11e7420c0dc17d4b80e8824ee4327e1f251acc8b72a2a2edbaa50d31a67f50e&"
    />
    <div class="bg-base-200 opacity-90 w-full h-full"></div>
  </div>

  <div class="hero flex grow">
    <div class="hero-content flex-col lg:flex-row">
      <div class="avatar mx-14">
        <div class=" w-56 mask mask-hexagon">
          <img
            transition:fly={{ delay: 0, duration: 1000, x: -500 }}
            src="https://cdn.discordapp.com/attachments/960675848724283452/1263209620818890832/image.png?ex=66996722&is=669815a2&hm=a03cc5703edc83ae113701afa2241a7fce957dbe0103bd253cdd6b1d7e8b4fa7&"
            alt="Dan's face"
          />
        </div>
      </div>
      <div>
        <a class="text-5xl font-bold" transition:fly={{ delay: 1000, duration: 1000, x: -500 }} href="/about">
          Dan Burt
        </a>
        <div class="flex flex-col justify-center">
          <ul class="text-xl">

            <li transition:fly={{ delay: 1500, duration: 1000, x: -500 }}>
                
                <a class="link" href="https://github.com/grommithub">Software engineer</a>
            </li>
            <li transition:fly={{ delay: 2000, duration: 1000, x: -500 }}>
              <a class="link" href="https://grommitchio.itch.io/" target="_blank">Game developer</a>
            </li>
            <li transition:fly={{ delay: 2500, duration: 1000, x: -500 }}>
              <a class="link" href="/about">Web designer</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
{/if}

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
  <!-- <button class="btn btn-primary"></button>
<button class="btn btn-secondary"></button>
<button class="btn btn-accent"></button> -->
  <div
    class="absolute h-screen w-screen -z-20 m-auto overflow-hidden flex justify-center"
  >
    <video class="h-screen -z-20 absolute" muted autoplay>
      <source src="maze-bg-zoomed.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="bg-base-200 bg-opacity-95 w-full h-full"></div>

    <!-- <img
      class="-z-20 absolute h-full object-cover translate-x-0.5"
      alt="Maze generator"
      src="bg-maze"
    /> -->
  </div>

  <div class="hero flex grow">
    <div class="hero-content flex-col lg:flex-row">
      <div class="avatar mx-14">
        <div class=" w-56 mask mask-hexagon">
          <img
            transition:fly={{ delay: 0, duration: 1000, x: -500 }}
            src="dan-face.png"
            alt="Dan's face"
          />
        </div>
      </div>
      <div>
        <a
          class="text-5xl font-bold"
          transition:fly={{ delay: 1000, duration: 1000, x: -500 }}
          href="/about"
        >
          Dan Burt
        </a>

        <div class="flex flex-col justify-center">
          <ul class="text-xl list-disc">
            <li transition:fly={{ delay: 1500, duration: 1000, x: -500 }}>
              <a class="link" href="https://github.com/grommithub"
                >Software engineer</a
              >
            </li>
            <li transition:fly={{ delay: 2000, duration: 1000, x: -500 }}>
              <a
                class="link"
                href="https://grommitchio.itch.io/"
                target="_blank">Game developer</a
              >
            </li>
            <li transition:fly={{ delay: 2500, duration: 1000, x: -500 }}>
              <a class="link" href="/about">Web designer</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>


  <div class="toast toast-end" transition:fly={{delay:43000, x: 500, duration: 500}}>
    <div class="alert alert-info">
      <div class="flex flex-col">

        <p>Mesmerized by the maze generation?</p>
        <p>Check out the C++ source code <a href="https://github.com/grommithub/Maze-Writer" target="_blank" class="link">here</a></p>
      </div>
      </div>
  </div>
{/if}

<script lang="ts">
  import { fly } from "svelte/transition";
  import type { PageData } from "./$types";
  import { onMount } from "svelte";
  import Card from "../../components/Card.svelte";

  let flyIn = false;
  onMount(() => (flyIn = true));

  export let data: PageData;
</script>

{#if flyIn}
  <div class="flex w-full flex-col-reverse lg:flex-row p-5 overflow-hidden">
    <img
      transition:fly={{ x: -1000, duration: 1000 }}
      class="card bg-base-300 rounded-box lg:w-1/2 w-full h-auto shadow-lg"
      src="https://media.discordapp.net/attachments/960675848724283452/1242758181659087040/20240430_200445-1.jpg?ex=669b773f&is=669a25bf&hm=a28910ac9bb70266f106da66d572071b2e0782544041ad497c1b45a1ebf38c88&=&format=webp&width=526&height=701"
    />
    <div
      class="divider lg:divider-horizontal"
      transition:fly={{ y: -1000, duration: 1000, delay: 750 }}
    ></div>
    <div class=" flex flex-col">
      <!-- <div
        transition:fly={{ x: 1000, duration: 1000 }}
        class="card bg-base-300 rounded-box grid place-items-center my-auto p-5 mb-5"
      >
        <h2 class="text-xl">Hello, you</h2>
        <p class="text-base text-wrap">
          My name is Dan and I develop software both as a profession and as a
          hobby.
        </p>
      </div> -->
      <Card x={1000} duration={1000}>
        <h2 class="text-xl">Introduction</h2>
        <p class="text-base text-wrap">
          My name is Dan and I develop software both as a profession and as a
          hobby.
        </p>
      </Card>
      <Card x={1000} duration={1000} delay={250}>
        <h2 class="text-xl">Education</h2>
        <p class="text-base text-wrap">
          I have a bachelor's degree in <a
            href="https://www.uu.se/en/study/programme/bachelors-programme-game-design-and-programming"
            target="_blank"
            class="link tooltip"
            data-tip="About the program"
            >Game Design and Programming from Uppsala
            University</a>.
            Noteworthy projects from this time include the game <a href="https://grommitchio.itch.io/aescension" target="_blank" class="link tooltip" data-tip="Info and game download">Aescension</a> and a <a href="https://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1669633&dswid=789" target="_blank" class="link tooltip" data-tip="Read it here">thesis</a> I co-authored about spread mechanics in first-person shooters.
        </p>
      </Card>
      <Card x={1000} duration={1000} delay={500}>
        <h2 class="text-xl">Professional Experience</h2>
        <p class="text-base text-wrap">
          I have professional experience working as a consultant at the <a
            class="link tooltip"
            data-tip="Visit their government website"
            href="https://www.livsmedelsverket.se/"
            target="_blank">Swedish Food Agency</a
          > where I worked on various internal websites, an app and several miscellaneous
          pieces.
        </p>
      </Card>
      <Card x={1000} duration={1000} delay={750}>
        <h1 class="text-xl">Introduction</h1>
        <p class="text-base text-wrap">
          My name is Dan and I develop software both as a profession and as a
          hobby.
        </p>
      </Card>
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

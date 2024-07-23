<script lang="ts">
  import { fly } from "svelte/transition";
  import type { PageData } from "./$types";
  import { onMount } from "svelte";
  import Card from "../../components/Card.svelte";

  let flyIn = false;
  onMount(() => (flyIn = true));

  export let data: PageData;
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
/>

{#if flyIn}
  <div class="flex flex-col-reverse lg:flex-row p-5 w-full overflow-hidden">
    <div class="w-full lg:w-2/3 uw:w-1/4 m-auto">
      <img
        width="100%"
        transition:fly={{ x: -1000, duration: 1000, delay: 500 }}
        alt="Me squatting next to a climbing rock"
        class="card bg-base-300 rounded-box shadow-lg m-auto"
        src="goblin.jpg"
      />
    </div>
    <div
      class="divider lg:divider-horizontal"
      transition:fly={{ y: -1000, duration: 1000, delay: 500 }}
    ></div>
    <div class="flex flex-grow flex-col justify-evenly p-5">
      <h2 class="text-3xl" transition:fly={{x:1000, duration: 1000}}>About</h2>
      <div class="divider divider-start w-full" transition:fly={{ x: 1000, duration: 1000, delay: 250 }}></div>
      <Card x={1000} duration={1000} delay={500}>
        <p class="text-xl text-wrap">
          My name is Dan and I develop software.
        </p>
        <div class="divider divider-start w-full">Education</div>
        <p class="text-base text-wrap">
          I have a bachelor's degree in <a
            href="https://www.uu.se/en/study/programme/bachelors-programme-game-design-and-programming"
            target="_blank"
            class="link tooltip"
            data-tip="About the program">Game Design and Programming</a
          >
          from Uppsala University. Noteworthy projects from this time include the
          game
          <a
            href="https://grommitchio.itch.io/aescension"
            target="_blank"
            class="link tooltip"
            data-tip="Info and game download">Aescension</a
          >
          and a
          <a
            href="https://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1669633&dswid=789"
            target="_blank"
            class="link tooltip"
            data-tip="Read it here">thesis</a
          > I co-authored about spread mechanics in first-person shooters.
        </p>
        <div class="divider divider-start w-full">Professional Experience</div>
        <p class="text-base text-wrap">
          I have professional experience working as a consultant at the <a
            class="link tooltip"
            data-tip="Visit their government website"
            href="https://www.livsmedelsverket.se/"
            target="_blank">Swedish Food Agency</a
          >
          where I worked on various internal websites, an app, several API's and
          other pieces of miscellaneous software. Working full-stack meant dealing
          with everything from the SQL-database to the HTML-interface and everything
          in-between.
        </p>
        <div class="divider divider-start w-full">Current Activity</div>
        <p class="text-base text-wrap">
          Since my employment contract expired I've been looking for a job in
          tech and working on personal projects. If you're curious I implore you
          to browse my portfolio and if you like what you see you're free to get
          in touch.
        </p>
      </Card>
    </div>
  </div>
{/if}

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
      alt="Me squatting next to a climbing rock"
      class="card bg-base-300 rounded-box w-full lg:w-1/3 uw:w-1/4 h-fit shadow-lg m-auto"
      src="goblin.jpg"
    />
    <div
      class="divider lg:divider-horizontal"
      transition:fly={{ y: -1000, duration: 1000, delay: 750 }}
    ></div>
    <div class="flex flex-col justify-evenly">
      <Card x={1000} duration={1000}>
        <h2 class="text-xl">Introduction</h2>
        <p class="text-base text-wrap">
          My name is Dan and I develop software both as a profession and as a
          hobby.
          <br>
          I make:
        </p>
        <ul class="text-lg">
          <li>Games</li>
          <li>Applications</li>
          <li>Websites (like this one!)</li>
        </ul>
      </Card>
      <Card x={1000} duration={1000} delay={250}>
        <h2 class="text-xl">Education</h2>
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
      </Card>
      <Card x={1000} duration={1000} delay={500}>
        <h2 class="text-xl">Professional Experience</h2>
        <p class="text-base text-wrap">
          I have professional experience working as a consultant at the <a
            class="link tooltip"
            data-tip="Visit their government website"
            href="https://www.livsmedelsverket.se/"
            target="_blank">Swedish Food Agency</a
          >
          where I worked on various internal websites, an app, several API's and other pieces of miscellaneous software.
          Working full-stack meant dealing with everything from the SQL-database to the HTML-interface and everything in-between.  
        </p>
      </Card>
      <Card x={1000} duration={1000} delay={750} lastElement={true}>
        <h1 class="text-xl">Introduction</h1>
        <p class="text-base text-wrap">
          My name is Dan and I develop software both as a profession and as a
          hobby.
        </p>
      </Card>
    </div>
  </div>
{/if}

<script lang="ts">
  import { fly } from "svelte/transition";
  import type { PageData } from "./$types";
  import { onMount } from "svelte";
  import Card from "../../components/Card.svelte";
  import { page } from "$app/stores";

  let flyIn = false;
  $: shown = flyIn && $page.route.id?.match("about");
  onMount(() => (flyIn = true));

  export let data: PageData;
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
/>

<div
  class="flex flex-col-reverse lg:flex-row p-5 w-full lg:w-5/6 uw:w-3/5 m-auto overflow-hidden lg:grid-cols-2"
  class:hidden={!shown}
  class:absolute={!shown}
>
  <div class="w-full m-auto">
    <img
      in:fly={{ x: -1000, duration: 1000, delay: 500 }}
      alt="Me squatting next to a climbing rock"
      class="card bg-base-300 rounded-box shadow-lg m-auto"
      src="goblin.jpg"
    />
  </div>
  <div
    class="divider lg:divider-horizontal"
    in:fly={{ y: -1000, duration: 1000, delay: 500 }}
  ></div>
  <div class="flex flex-grow flex-col justify-center p-5">
    <h2 class="text-5xl" in:fly={{ x: 1000, duration: 1000 }}>About</h2>
    <div
      class="divider divider-start w-full"
      in:fly={{ x: 1000, duration: 1000, delay: 750 }}
    ></div>
    <Card x={1000} duration={1000} delay={500}>
      <h3 class="text-3xl uw:text-4xl text-wrap">
        My name is Dan and I develop software.
      </h3>
      <div class="divider divider-start w-full">Education</div>
      <p>
        I have a bachelor's degree in <a
          href="https://www.uu.se/en/study/programme/bachelors-programme-game-design-and-programming"
          target="_blank"
          class="link tooltip"
          data-tip="About the program">Game Design and Programming</a
        >
        from Uppsala University. Noteworthy projects from this time include the game
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
      <p>
        I have professional experience working as a consultant at the <a
          class="link tooltip"
          data-tip="Visit their government website"
          href="https://www.livsmedelsverket.se/"
          target="_blank">Swedish Food Agency</a
        >
        where I contributed to various internal websites, an app, several API's and other
        pieces of miscellaneous software. Working full-stack meant dealing with everything
        from the SQL-database to the HTML-interface and everything in-between.
      </p>
      <div class="divider divider-start w-full">Current Activity</div>
      <p>
        Currently I work full-time as a software developer at <a href="https://bogio.tech/" target="_blank" class="link tooltip" data-tip="Check out their website">Bogio</a>, where my primary responsibility is working full-stack in Ruby on Rails.
        I also teach Game Design at <a class="link tooltip" data-tip="Visit their website" href="https://nannaskolan.uppsala.se/" target="">Nannaskolan</a> part-time.
        Additionally I've been helping <a class="link tooltip" href="https://www.regionvarmland.se/folkhogskolor/kristinehamns-folkhogskola/vara-utbildningar" data-tip="Their website">Kristinehamns folkhögskola</a> set up an upcoming game programmer course, also part-time. I'm a busy beaver! 🦫
      </p>
      <div class="divider divider-start w-full"></div>
      <p>Feel free to take a look at my <a href="/portfolio" class="link">portfolio</a> or <a href="/contact" class="link">get in touch</a> if you'd like!</p>
    </Card>
  </div>
</div>


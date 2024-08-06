<script lang="ts">
  import ProjectCard from "../../components/ProjectCard.svelte";
  import type { PageData } from "./$types";
  import Card from "../../components/Card.svelte";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  export let data: PageData;
  let flyIn = false;
  onMount(()=> flyIn = true)
</script>

<!-- <div class="mockup-browser bg-base-300 border w-fit h-fit w-1/3">
        <img src="https://i.imgur.com/VnIKHN9.gif"/>
  </div> -->

<div class="px-5 pb-5 w-full lg:w-5/6 m-auto uw:w-1/2 overflow-hidden text-wrap" class:invisible={!flyIn}>
  <h1 class="text-3xl lg:text-5xl pt-5 w-full divider my-10 z-20" in:fly={{ y: -500, duration: 1000 }}>
    Software Portfolio
  </h1>
  <Card y={-1000} duration={1000} delay={500}>
    <div class="text-base lg:text-lg uw:text-2xl mb-5 text-center pt-5">
      Here you can find some of the noteworthy software I've worked on in recent
      years.
      <br />
    </div>
    <h3 class="text-xl divider w-full">Watch a playthrough of my playable CV</h3>
    <div class="aspect-video w-full lg:w-1/2 m-auto">
      <iframe
        class="w-full h-full"
        src="https://www.youtube.com/embed/Bmz75Dwe8GY?si=DWtGUik7oY2UfflY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  </Card>
  <div class="divider" in:fly={{ x: 1000, duration: 1000, delay: 3000}}></div>

  <!--Aescension-->
  <ProjectCard
    title={"Aescension"}
    tags={["Unreal Engine", "Blueprints", "Audio"]}
    src={"https://img.itch.zone/aW1hZ2UvOTkwMDA0LzYwOTc0NTkuZ2lm/794x1000/mAcv5T.gif"}
    link={{
      url: "https://grommitchio.itch.io/aescension",
      display: "Itch.io",
    }}
  >
    Aescension is a thriller game I scripted the gameplay for.
    <br />
    I worked on:
    <ul>
      <li>Puzzles and their logic</li>
      <li>Player controller</li>
      <li>Implementation of all audio and certain visual effects</li>
      <li>Scripted sequences</li>
    </ul>
    The game won a
    <div
      class="tooltip underline"
      data-tip="#1 Best Art Direction, #1 Best Audio, #3 Best Overall and #3 Best Storytelling "
    >
      few awards
    </div>
    at the<a
      class="link"
      href="https://gotlandgameconference.com/2021/the-awards/"
      target="_blank">2021 Gotland Game Conference</a
    >.
  </ProjectCard>

  <!--Chatfindr-->
  <ProjectCard
    title={"ChatFindr"}
    src={"ChatFindr.gif"}
    tags={["C#", "ASP.NET", "Javascript", "Websockets"]}
  >
    A realtime anonymous chat for the browser. Works well for both mobile and
    desktop. Developed full-stack by me.
    <br />
    Allows for chats between random strangers. Also supports the use of tagged matchmaking,
    allowing you to match with other users who share your interests.
  </ProjectCard>

  <!--Unscrabble-->
  <ProjectCard
    title={"Unscrabble"}
    src={"unscrabble.gif"}
    tags={["Svelte", "Javascript", "HTML", "Tailwind"]}
  >
    Unscrabble is a word game for the browser where you Unscrabble™️ words.
  </ProjectCard>

  <!--Zelda-->
  <ProjectCard
    title={"Zelda Clone"}
    src={"zelda.gif"}
    tags={["C++", "SDL2"]}
    link={{
      url: "https://github.com/grommithub/Cpp-Zelda-2019",
      display: "Github",
    }}
  >
    A partial clone of 1986's The Legend of Zelda programmed in C++.
    <br />Features:
    <ul>
      <li>Sprite animations</li>
      <li>File-based tilemap generation</li>
      <li>Enemies</li>
      <li>Item drops</li>
    </ul>

    Made as a school project. Graphics and audio are taken from the original
    game.
  </ProjectCard>

  <!--Maze writer-->
  <ProjectCard
    title={"Maze Writer"}
    src={"maze.gif"}
    tags={["C++", "SDL2"]}
    link={{
      url: "https://github.com/grommithub/Maze-Writer",
      display: "Github",
    }}
  >
    A maze generator which writes things. Uses a depth-first search algorithm
    with a recursive backtracker and is highly customizable.
    <br /><br />
    Simply put, the tracker wanders around randomly across unvisited cells, drawing
    its path. When the tracker gets stuck it'll backtrack its journey until it finds
    a cell which has at least one unvisited neighbour, then continues wandering randomly
    from there. Once it cannot find a cell in its history without any unvisited neighbours,
    the maze is complete.
    <br />
    <br />
    Before the maze is generated the text is overlayed on the grid and all the cells
    that make up the text are marked as already visited, preventing the tracker from
    ever drawing over them.
  </ProjectCard>

  <!--Holiday halfpipe-->
  <ProjectCard
    title={"Holiday Halfpipe"}
    src={"holiday-halfpipe.gif"}
    link={{
      url: "https://lemorrows.itch.io/holiday-halfpipe",
      display: "Itch.io",
    }}
    tags={["Unity", "C#"]}
  >
    This is a Christmas-themed snowboarding game. The goal is to do tricks to
    score as many points as possible before dying.<br /><br />Made in Unity with
    a small team for the Ludum Dare 53 game jam.
  </ProjectCard>

  <!--Thesis-->
  <ProjectCard
    title={"I'll Be Missing You (Thesis project)"}
    src={"thesis.jpg"}
    link={{
      url: "https://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1669633&dswid=-4993",
      display: "Read it here",
    }}
    tags={["Unreal", "C++", "Excel", "Yaml"]}
  >
    This is a thesis I co-wrote and coded the test environment for. The purpose
    was to study the effects movement inaccuracy has on FPS gameplay. We had 28
    participants conduct 420 completions of a target practice course(total) and
    collected 90,000+ data points to analyze FPS gameplay in this 69 page
    thesis.
  </ProjectCard>

  <!--Game changer-->
  <ProjectCard
    title={"Game Changer"}
    src={"game-changer.gif"}
    tags={["Unity", "C#"]}
  >
    This is a top-down arcade-style shooter where the goal is to score as many
    points as possible. However, the rules for what scores you points changes
    every 10 seconds.
  </ProjectCard>
  <!-- Endless runner-->
  <ProjectCard title={"Endless Runner"} tags={["C++", "SDL2"]}>
    This is an endless runner game made from scratch in C++ using SDL2.
    <br />
    Key features include:
    <ul>
      <li>Stores any number of viewable replays</li>
      <li>Sprite animations</li>
      <li>Particle systems</li>
      <li>Screenshake</li>
      <li>Parallaxing background</li>
    </ul>
    Everything was made by me as part of a school project.
  </ProjectCard>

  <ProjectCard
    title={"Spacetime"}
    src={"spacetime.gif"}
    tags={["Unity", "C#"]}
    link={{ url: "https://grommitchio.itch.io/spacetime", display: "Itch.io" }}
  >
    This is a space-shooter where you can reverse time.
  </ProjectCard>

  <ProjectCard title={"This very website!"} src={"mobile.gif"} mobile_src={"desktop.png"} tags={["SvelteKit", "Tailwind"]}>
      <p class="hidden lg:block">Did you know that it dynamically adapts to mobile displays?</p>
      <p class="block lg:hidden">Did you know that it dynamically adapts to desktop displays?</p>
  </ProjectCard>

  <div class="divider w-full"></div>
  <Card>
    Not everything is documented here but more can be found on my itch, github
    and linkedin.
  </Card>
</div>

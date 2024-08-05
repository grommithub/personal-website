<script lang="ts">
  import ProjectCard from "../../components/ProjectCard.svelte";
  import type { PageData } from "./$types";
  import Card from "../../components/Card.svelte";

  export let data: PageData;
</script>

<!-- <div class="mockup-browser bg-base-300 border w-fit h-fit w-1/3">
        <img src="https://i.imgur.com/VnIKHN9.gif"/>
  </div> -->

<div class="px-5 pb-5 w-full lg:w-2/3 m-auto uw:w-1/2">
  <h1 class="text-5xl pt-5 w-full divider divider-start my-10">
    Software Portfolio
  </h1>
  <Card>
    <div class="text-lg lg:text-xl uw:text-2xl">
      Here you can browse some of the noteworthy software I've worked on in recent
      years. 
    </div>

    <!-- <div class="aspect-video w-full">
        <iframe
        class=" w-full h-full"
        src="https://www.youtube.com/embed/Bmz75Dwe8GY?si=DWtGUik7oY2UfflY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        ></iframe>
        </div> -->
  </Card>
  <div class="divider"></div>

  <ProjectCard
    title={"Endless Runner"}
    tags={["C++", "SDL2"]}
  >
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
    at the <a
      class="link"
      href="https://gotlandgameconference.com/2021/the-awards/"
      target="_blank">2021 Gotland Game Conference</a
    >.
  </ProjectCard>

  <ProjectCard title={"ChatFindr"} src={"ChatFindr.gif"} tags={["C#", "ASP.NET", "Javascript", "Websockets"]}>
    A realtime anonymous chat for the browser. Works well for both mobile and desktop. Developed full-stack by me.
    <br>
    Allows for chats between random strangers. Also supports the use of tagged matchmaking, allowing you to match with other users who share your interests.
  </ProjectCard>

  <Card>
    Not everything is documented here but more can be found on my itch, github
    and linkedin.
  </Card>
</div>

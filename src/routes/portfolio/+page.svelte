<script lang="ts">
  import ProjectCard from "../../components/ProjectCard.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<!-- <div class="mockup-browser bg-base-300 border w-fit h-fit w-1/3">
        <img src="https://i.imgur.com/VnIKHN9.gif"/>
  </div> -->

<div class="px-5 pb-5 w-full lg:w-2/3 m-auto">
  <h2 class="text-5xl pt-5 text-center">Software Portfolio</h2>
  <div class="divider"></div>
  <ProjectCard
    title={"Hello!"}
    tags={[
      "C++",
      "SDL2",
      "asdfasdf",
      "asdfasdf",
      "asdfasdf",
      "asdfasdf",
      "asdfasdf",
    ]}
    link={{
      url: "https://github.com/grommithub/Asteroids",
      display: "Source code",
    }}>Hi!</ProjectCard
  >
  <ProjectCard
    title={"Aescension"}
    tags={["Unreal Engine", "Blueprints", "Audio"]}
    src={"https://img.itch.zone/aW1hZ2UvOTkwMDA0LzYwOTc0NTkuZ2lm/794x1000/mAcv5T.gif"}
    link={{url:"https://grommitchio.itch.io/aescension", display:"Itch.io"}}
  >
    Aescension is a thriller puzzle game I scripted the gameplay, puzzles and audio for.
  </ProjectCard>
  <ProjectCard></ProjectCard>
</div>

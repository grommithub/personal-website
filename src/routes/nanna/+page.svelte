<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  import ProjectCard from "../../components/ProjectCard.svelte";
  import Card from "../../components/Card.svelte";
  let flyIn = false;
  $: shown = flyIn && $page.route.id?.match("about");
  onMount(() => (flyIn = true));
</script>

<div
  class="pb-5 m-auto w-11/12 lg:w-4/6 uw:w-1/2 overflow-hidden text-wrap project"
  class:invisible={!flyIn}
>
  <h1
    class="text-3xl lg:text-5xl pt-5 w-full divider my-10 z-20"
    in:fly={{ y: -500, duration: 1000 }}
  >
    För Nannaskolan
  </h1>
  <Card>
    <h2 class="divider w-full divider-start">Moment 1</h2>
    <div class="pb-10">
      <div class="w-full h-full flex flex-row">
        <div class="aspect-video w-full">
          Video
          <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/SRm4Y9fnhBY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="w-full h-full flex flex-col flex-grow">
          Resultat
          <div class="content-center bg-black h-full w-full">
            <img
              class="m-auto"
              src="lesson1.gif"
              alt="Resultatet från lektion 1"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </div>
    <p class="py-5">
      I moment 1 skapar vi ett projekt samt en enkel spelare som kan röra sig på
      ett osynligt golv.
    </p>
    <a
      href="https://godotengine.org/download/windows/"
      target="_blank"
      class="link">Ladda ner Godot här</a
    >
  </Card>
  <Card>
    <h2 class="divider w-full divider-start">Moment 2</h2>
    <div class="pb-10">
      <div class="w-full h-full flex flex-row">
        <div class="aspect-video w-full">
          Video
          <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/HQ9j8OvKHrM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="w-full h-full flex flex-col flex-grow">
          Resultat
          <div class="content-center bg-black h-full w-full">
            <img
              class="m-auto"
              src="lesson2.gif"
              alt="Resultatet från lektion 2"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </div>
    <p class="py-5">
      I moment 2 skapar vi en tilemap som vi kan bygga banor med. Vi ställer
      också in kameran så att den följer spelaren.
    </p>
    I videon används den här texturen för vår tilemap. Den behövs ladda ner till
    projektet. Vid senare tillfälle kan man få byta eller modifiera texturen om man vill.
    <code class="bg-black"
      >Högerklick -> Spara bild som -> D:/[DITT PROJEKTNAMN]/</code>
      ↓↓↓↓↓
    <img src="tile_atlas.png" width="20%" alt="tile atlas" />
  </Card>
  <Card>
    <h2 class="divider w-full divider-start">Moment 3</h2>
    <div class="pb-10">
      <div class="w-full h-full flex flex-row">
        <div class="aspect-video w-full">
          Video
          <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/7NGjo-CZz7I?si=u7QbgSGA9pzr-p2s"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="w-full h-full flex flex-col flex-grow">
          Resultat
          <div class="content-center bg-black h-full w-full">
            <img
              class="m-auto"
              src="lesson3.gif"
              alt="Resultatet från lektion 3"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </div>
    <p class="py-5">
      I moment 3 får man se hur man ändrar på spelarkaraktärens egenskaper samt hur man får spelet att starta om när man faller av banan.
    </p>
    Kod för att ändra spelarens egenskaper i inspektorvyn:
    <div class=" divider divider-horizontal">
    </div>

      <code>
        @export var SPEED = 500.0<br>
        @export var JUMP_VELOCITY = -400.0
      </code>
    Kod för att starta om banan:
    <code>
    get_tree().reload_current_scene()
    </code>
  </Card>
</div>

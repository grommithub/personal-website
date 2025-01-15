<script lang="ts">
  import { fly } from "svelte/transition";
  import UserLink from "../../components/UserLink.svelte";

  import type { PageData } from "./$types";
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  export let data: PageData;

  let flyIn = false;
  $: shown = flyIn && $page.route.id?.match('contact');


  onMount(()=> flyIn = true)
</script>
<div class="flex flex-col justify-center m-auto w-fit" transition:fly={{duration:500, y:100}}
class:hidden={!shown}>
  <h2 class="text-5xl">
    <b>Get in touch!</b>
  </h2>
  <div class="divider">Professional</div>
  <UserLink
  icon={"LinkedIn"}
  url="https://www.linkedin.com/in/daniel-burt/"
  title="LinkedIn"
  first={true}
  />
  <UserLink
    icon={"github"}
    url="https://github.com/grommithub"
    title="Github"
  />
  <UserLink
  icon={"phone"}
  url=""
  title="(+46)704090823"
/>
<UserLink
icon={"mail"}
url="mailto:daniel.burt2000@gmail.com"
title="daniel.burt2000@gmail.com"
/>
<div class="divider">Casual</div>
<UserLink
icon={"discord"}
url="https://discord.com/users/243013753371623425"
title="@grommit"
first="true"
/>
</div>
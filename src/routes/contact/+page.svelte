<script lang="ts">
  import { fly } from "svelte/transition";
  import UserLink from "../../components/UserLink.svelte";

  import type { PageData } from "./$types";
  import { onMount } from "svelte";

  export let data: PageData;

  let flyIn = false;
  onMount(()=> flyIn = true)
</script>
{#if flyIn}
<div class="flex flex-col justify-center uw:w-1/3 m-auto w-fit" transition:fly={{duration:500, y:100}}>
  <h1 class=" text-5xl">
    <b>Get in touch!</b>
  </h1>
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
</div>
{/if}
<script lang="ts">
  import UserLink from "../../components/UserLink.svelte";

  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="flex flex-col justify-center uw:w-1/3 m-auto w-fit">
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
  icon={"github"}
  url=""
  title="(+46)704090823"
/>
<UserLink
icon={"github"}
url="mailto:daniel.burt2000@gmail.com"
title="daniel.burt2000@gmail.com"
/>

  <div class="divider">Casual</div>
</div>

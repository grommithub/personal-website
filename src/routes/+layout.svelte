<script>
  import "../app.css";
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  import { page } from "$app/stores";

  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

  injectSpeedInsights();

</script>

<head>
  <title>Dan Burt {$page.route.id?.slice(1).charAt(0).toUpperCase() + $page.route.id?.slice(2)}</title>

  <link rel="icon" href="favicon.gif" type="image/gif">
  <link rel="shortcut icon" href="favicon.ico" type="image/x">

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
    rel="stylesheet"
  />
</head>

<div class="min-h-screen flex flex-col justify-between">
  <Navbar />
  <slot />
  <Footer />
</div>

<style>

:global(ul) {
    @apply list-disc;
    @apply pl-4;
    @apply leading-tight;
  }

  div {
    font-family: "Roboto", monospace;
  }
</style>

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

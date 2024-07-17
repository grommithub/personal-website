<script>
  import "../app.css";
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<style>
  div{
    font-family: monospace;
  }
</style>

<div class="min-h-screen flex flex-col justify-between">
  <Navbar />
  <slot/>
  <Footer />
</div>

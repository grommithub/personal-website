<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;

    let scrollableDiv:any;

    onMount(() => {
        const intervalId = setInterval(()=> scrollableDiv.scrollLeft += 15, 500);

        // Clear the interval when the component is destroyed
        return () => clearInterval(intervalId);
    });
</script>

<!-- <div class="mockup-browser bg-base-300 border w-fit h-fit w-1/3">
        <img src="https://i.imgur.com/VnIKHN9.gif"/>
  </div> -->

  

<div class="carousel carousel-center rounded-box" bind:this={scrollableDiv}>
    <div class="carousel-item">
      <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Pizza" />
    </div>
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
        alt="Pizza" />
    </div>
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
        alt="Pizza" />
    </div>
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
        alt="Pizza" />
    </div>
    <div class="carousel-item">
      <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Pizza" />
    </div>
    <div class="carousel-item">
      <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Pizza" />
    </div>
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
        alt="Pizza" />
    </div>
  </div>
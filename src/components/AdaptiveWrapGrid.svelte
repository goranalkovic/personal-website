<script>
  export let narrow = false;

  let isDown = false;
  let startX;
  let scrollLeft;
  let grid;

  function skillsMouseDown(e) {
    isDown = true;
    startX = e.pageX - grid.offsetLeft;
    scrollLeft = grid.scrollLeft;
  }

  function skillsMouseLeave() {
    isDown = false;
  }

  function skillsMouseUp() {
    isDown = false;
  }

  function skillsMouseMove(e) {
    if (!isDown) return;
    const x = e.pageX - grid.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    grid.scrollLeft = scrollLeft - walk;
  }
</script>

<style>
  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, var(--card-width));
    grid-auto-rows: var(--card-height);
    gap: var(--card-gap);
    justify-content: center;

    padding: 1rem 0;
    margin: 0;
    margin-top: 1rem;
  }

  .narrow {
    width: 65%;
  }

  @media screen and (max-width: 944px) {
    div::-webkit-scrollbar {
      display: none;
    }

    div,
    div.narrow {
      min-height: 20rem;
      width: 80vw;

      overflow-x: auto;
      -webkit-overflow-scrolling: touch;

      grid-template-rows: var(--card-height);
      grid-template-columns: repeat(12, var(--card-width));
      row-gap: 0;
      column-gap: var(--card-gap);
      justify-content: start;
    }
  }
</style>

<div
  bind:this={grid}
  on:mouseup={skillsMouseUp}
  on:mousemove|preventDefault={skillsMouseMove}
  on:mousedown={skillsMouseDown}
  on:mouseleave={skillsMouseLeave}
  class:narrow>
  <slot />
</div>

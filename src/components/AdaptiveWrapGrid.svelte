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
    width: 100%;
    max-width: 1300px;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    margin-bottom: 6rem;
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
      /* width: calc(100vw - 1.05rem); */
      width: 100vw;

      /* padding: 1rem 0.5rem 0 0.5rem; */
      padding: 0;
      margin-top: 1rem;
      margin-bottom: 4rem;
      margin-right: 0;
      margin-left: 0;

      overflow-x: auto;
      -webkit-overflow-scrolling: touch;

      align-items: center;
      justify-content: flex-start;
      flex-wrap: nowrap;
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

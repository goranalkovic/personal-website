<script>
  export let skill;

  import { slide, fade, fly } from 'svelte/transition';
  import { flip } from 'svelte/animate';

  let childrenVisible = false;

  function toggleChildren() {
    childrenVisible = !childrenVisible;
  }
</script>

<style>
  .rotate {
    transition: 0.25s transform;
  }

  .rotate-0 {
    transform: scaleY(1);
  }

  .rotate-180 {
    transform: scaleY(-1);
  }

  .bg-texture {
    /* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 4 4'%3E%3Cpath fill='%23B2F5EA' fill-opacity='0.14' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"); */
  }
</style>

<button aria-describedby="Skill"
  class="bg-white transition-shadow transition-width transition-250 flex items-stretch
  shadow hover:shadow-lg focus:shadow-lg rounded-lg hover:cursor-pointer mx-1 my-4 md:mx-4 p-5 flex flex-col
  items-center text-center select-none {childrenVisible ? 'md:w-9/12' : 'w-full md:w-4/12 lg:w-3/12'} {childrenVisible ? 'shadow-lg' : ''}
  "
  on:click={toggleChildren}>

  <div class="flex flex-col md:flex-row md:justify-between items-center w-full">
  <h4 class="text-2xl font-display {childrenVisible ? 'font-semibold' : ''}">
    <span class="icon {skill.iconColor}" aria-hidden="true">
      <i class={skill.icon} />
    </span>
    <span class="ml-2">{skill.name}</span>
  </h4>
  <p aria-roledescription="See more"
    class="text-gray-400 icon-arrow-down rotate my-1 {childrenVisible ? 'rotate-180 mb-4' : 'rotate-0'}" />
  </div>

  <div
    class="flex text-center md:text-left justify-center w-full flex-wrap flex-1"
    transition:fade>
    {#if childrenVisible}
      {#each skill.items as item, i}
        <ul class="md:ml-10 flex-grow" transition:fade>
          <li transition:slide>
            <b class="{skill.iconColor} text-xl">{item.section}</b>
          </li>

          {#each item.items as itm, ind (ind)}
            <li
              class="m-2 md:flex-1"
              animate:flip
              transition:slide={{ delay: 50 * ind }}>

              <b class="">
                {@html itm.name}
              </b>

              {#if itm.subtitle != null}
                <br />
                <span class="">
                  {@html itm.subtitle}
                </span>
              {/if}

              <br />
              <span
                class="text-xs font-semibold text-gray-600 uppercase
                tracking-widest">
                {@html itm.level}
              </span>

            </li>
          {/each}
        </ul>
      {/each}
    {/if}
  </div>
</button>

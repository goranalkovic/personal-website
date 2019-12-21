<script>
  export let skill;

  import { slide, fade, fly } from 'svelte/transition';
  import { flip } from 'svelte/animate';

  let childrenVisible = true;

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

  
  <div class="sm-max:text-center select-none" >
   <div
    class="flex text-center md:text-left justify-center w-full flex-wrap sm-max:flex-no-wrap sm-max:flex-col flex-1"
    transition:fade>
    {#if childrenVisible}
       {#each skill.items as item, i (i)}
        <ul class="md:ml-10 flex-grow" transition:fade={{ duration: 200, delay: 50 * i }} 
        animate:flip={{ duration: 200 }}>
          <li  >
            <b class="{skill.iconColor} text-xl">{item.section}</b>
          </li>

          {#each item.items as itm, ind (ind)}
            <li
            animate:flip={{ duration: 200 }}
              class="m-2 md:flex-1"
              transition:slide={{ duration: 200 }}>

              <b class="">
                {@html itm.name}
              </b>

              {#if itm.subtitle != null}
                <br />
                <span class="">
                  {@html itm.subtitle}
                </span>
              {/if}

             

            </li>
          {/each}
        </ul>
      {/each}
    {/if}
  </div>
</div>

<button aria-describedby="Skill" on:click={toggleChildren}>

  <!-- <div class="flex flex-col md:flex-row md:justify-between items-center w-full">
  <h4 class="text-2xl font-display {childrenVisible ? 'font-semibold' : ''}">
    <span class="icon {skill.iconColor}" aria-hidden="true">
      <i class={skill.icon} />
    </span>
    <span class="ml-2">{skill.name}</span>
  </h4> 
  <p aria-roledescription="See more"
    class="text-gray-400 icon-arrow-down rotate my-1 {childrenVisible ? 'rotate-180 mb-4' : 'rotate-0'}" />
  </div> -->

 
</button>

<script>
  export let project;

  let currentYear = new Date().getFullYear();
  let yearEnd = project.yearEnd == null ? currentYear : '';
  let yearSep = project.yearStart !== project.yearEnd ? '-' : '';

  let projectContainer;

  function showGallery() {
    lightGallery(projectContainer, {
      dynamic: true,
      hideControlOnEnd: true,
      preload: 2,
      download: false,
      dynamicEl: project.images,
      mode: 'lg-slide'
    });
  }
</script>

<style>
  abbr {
    text-decoration: none;
    cursor: help;
    background: rgba(216, 49, 49, 0.05);
    padding: 0 4px;
    border-radius: 4px;
  }

  .border-1 {
    border-width: 1px;
  }

</style>

<button aria-describedby="Project"
  class="w-8/12 md:w-4/12 lg:w-3/12 bg-white dark:bg-gray-900 border-1 hover:border-white border-solid border-gray-200 dark:border-gray-800 dark-hover:bg-gray-800 transition-border focus:shadow-lg hover:shadow-lg rounded-lg
  hover:cursor-pointer m-4 p-5 flex flex-col items-center text-center transition-shadow transition-all transition-300 select-none"
  on:click={showGallery}
  bind:this={projectContainer}>
    <img class="h-16" src={project.heroImage} alt={project.name} aria-hidden="true" />

    <h4 class="text-xl font-semibold leading-tight font-display dark:text-purple-400">
      {@html project.name}
    </h4>
    <h6 class="text-gray-600 dark:text-gray-500 text-sm font-semibold">{project.yearStart} {yearSep} {yearEnd}</h6>

    <p class="text-sm mt-3 text-white text-gray-600 dark:text-gray-600">
      {@html project.description}
    </p>

</button>

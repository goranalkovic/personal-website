<script>
  export let href;
  export let icon;
</script>

<style>

</style>

<a
  {href}
  class="mx-2 p-3 py-2 bg-purple-100 text-purple-700  rounded inline-flex items-baseline
  hover:bg-purple-700 hover:text-white xs:text-lg transition-bg transition-color transition-250 dark:bg-gray-700 dark:text-gray-500 dark-hover:bg-gray-600 dark-hover:text-white">
  <i class="{icon} mr-1 xs:mr-0 inline-block" aria-hidden="true" />
  <div class="xs:hidden">
  <slot />
  </div>
</a>

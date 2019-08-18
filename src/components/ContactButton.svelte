<script>
  export let href;
  export let icon;
</script>

<style>
  /* your styles go here */
</style>

<a
  {href}
  class="mx-2 p-3 py-2 bg-purple-100 text-purple-700  rounded inline-flex items-baseline
  hover:bg-purple-700 hover:text-white xs:text-lg transition-bg transition-color transition-500">
  <i class="{icon} mr-1 xs:mr-0 inline-block" aria-hidden="true" />
  <div class="xs:hidden">
  <slot />
  </div>
</a>

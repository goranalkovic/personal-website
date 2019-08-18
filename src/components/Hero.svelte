<script>
  import BrandLogo from './BrandLogo.svelte';
</script>

<style>
    .bg-texture {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.6' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    }
</style>

<section
  class="bg-purple-200 bg-texture py-8 md:py-10 flex flex-col items-center justify-center select-none">

  <div
    class="flex flex-col-reverse items-center md:items-end w-10/12 md:w-auto">

    <div
      class="text-center md:text-left p-4 bg-white rounded-lg shadow-lg
      leading-relaxed">
      <h1
        class="mt-6 md:mt-0 font-semibold font-display text-2xl text-purple-700
        leading-none">
        Goran Alković
      </h1>
      <p class="font-display text-gray-800">Designer and developer</p>
      <p class="mt-4 md:mt-2 text-sm text-gray-700 ">
        I'm a bachelor of informatics from Varaždin, Croatia.
        <br />
        Always learning new things and doing amazing stuff with things I already
        know.
        <br />
        I love all kinds of design, but I also love making something amazing out
        of my designs.
      </p>
    </div>
    <BrandLogo customClass="-mb-6 md:-mb-10 md:-mr-16" />

  </div>

  <a href="files/Goran_Alkovic_CV.pdf" class="mt-6 -mb-4 bg-purple-200 border border-purple-300 py-1 px-2 text-purple-500 flex items-baseline justify-center rounded hover:border-purple-700 hover:text-purple-100 hover:bg-purple-700 select-none transition-border transition-bg transition-color transition-500">
  <i class="icon-doc mr-1"></i>
  <span class="inline-block">Get the CV</span>
  </a>
</section>

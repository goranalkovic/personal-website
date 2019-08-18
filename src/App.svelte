<script>
  import Hero from './components/Hero.svelte';
  import SectionHeader from './components/SectionHeader.svelte';
  import SkillList from './components/SkillList.svelte';
  import ProjectCard from './components/ProjectCard.svelte';
  import ContactButton from './components/ContactButton.svelte';
  import { flip } from 'svelte/animate';
  import { slide } from 'svelte/transition';

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function loadSkills() {
    // await sleep(2000);
    let response = await fetch('files/cv.json');
    return response.json();
  }

  async function loadProjects() {
    let response = await fetch('files/projects.json');
    return response.json();
  }

  let skills = loadSkills();
  let projects = loadProjects();

  let projectContainer;
</script>

<style>
  .bg-texture-footer {
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 20l1.732 1-10 17.32-1.732-1 10-17.32zM58.16 4.134l1 1.732-17.32 10-1-1.732 17.32-10zm-40 40l1 1.732-17.32 10-1-1.732 17.32-10zM80 9v2H60V9h20zM20 69v2H0v-2h20zm79.32-55l-1 1.732-17.32-10L82 4l17.32 10zm-80 80l-1 1.732-17.32-10L2 84l17.32 10zm96.546-75.84l-1.732 1-10-17.32 1.732-1 10 17.32zm-100 100l-1.732 1-10-17.32 1.732-1 10 17.32zM38.16 24.134l1 1.732-17.32 10-1-1.732 17.32-10zM60 29v2H40v-2h20zm19.32 5l-1 1.732-17.32-10L62 24l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM111 40h-2V20h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zM40 49v2H20v-2h20zm19.32 5l-1 1.732-17.32-10L42 44l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM91 60h-2V40h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM39.32 74l-1 1.732-17.32-10L22 64l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM71 80h-2V60h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM120 89v2h-20v-2h20zm-84.134 9.16l-1.732 1-10-17.32 1.732-1 10 17.32zM51 100h-2V80h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM100 109v2H80v-2h20zm19.32 5l-1 1.732-17.32-10 1-1.732 17.32 10zM31 120h-2v-20h2v20z' fill='%23d6bbfc' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
  }

  .bg-texture-skills {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23b2f5ea' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  }

  .bg-texture-projects {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23fefcbf' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  }
</style>

<Hero />

<div class="p-8 pb-0">
  <h1 class="text-3xl text-center px-4 py-2 text-purple-600 select-none">
    What I do
  </h1>

  <div class="flex w-full flex-wrap justify-center max-w-6xl mx-auto">
    {#await skills}
      <p class="has-text-centered">⏳</p>
    {:then value}
      {#each value as skill, index (index)}
        <SkillList {skill} />
      {/each}
    {:catch error}
      <p>Something went wrong while loading skill list: {error.message}</p>
    {/await}
  </div>
</div>

<div class="p-8">
  <h1 class="text-3xl text-center px-4 py-2 text-purple-600 select-none">
    Projects
  </h1>

<div class="flex flex-wrap w-full justify-center max-w-6xl mx-auto">

  {#await projects}
    <p class="has-text-centered">⏳</p>
  {:then value}
    {#each value as project}
      <ProjectCard {project} />
    {/each}
  {:catch error}
    <p>Something went wrong while loading project list: {error.message}</p>
  {/await}

</div>
</div>

<p class="text-center text-gray-500 pt-4 select-none">&copy; Goran Alković, 2019</p>
<p class="text-center text-gray-200 pb-4 select-none">
  Made with Svelte and Tailwind.css, hosted on GitHub
</p>

<footer
  class="flex flex-row sm-max:flex-col bg-white p-5 items-center
  md:items-baseline justify-center sticky bottom-0 shadow-2xl bg-texture-footer
  rounded-tr-lg rounded-tl-lg select-none">
  <h4 class=" sm-max:mb-2 sm-max:mr-0 mb-0 xs:mr-1 mr-2 text-lg font-semibold">
    Get in touch
  </h4>
  <div class="flex">
    <ContactButton href="mailto:goran.alkovic@hotmail.com" icon="icon-envelope">
      E-mail
    </ContactButton>
    <ContactButton
      href="https://github.com/goranalkovic"
      icon="icon-social-github">
      GitHub
    </ContactButton>
    <ContactButton href="tel:+385976480800" icon="icon-phone">
      Mobile
    </ContactButton>
  </div>
</footer>

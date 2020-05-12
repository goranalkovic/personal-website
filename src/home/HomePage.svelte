<script>
  import { links } from "svelte-routing";

  import Spinner from "../components/Spinner.svelte";
  import AdaptiveWrapGrid from "../components/AdaptiveWrapGrid.svelte";
  import ProjectCard from "../components/ProjectCard.svelte";
  import SkillCard from "../components/SkillCard.svelte";
  import SkillTitleCard from "../components/SkillTitleCard.svelte";
  import Icon from "../components/Icon.svelte";

  import { icons } from "../icons.js";

  async function loadSkills() {
    let response = await fetch("files/cv.json");
    return response.json();
  }

  async function loadProjects() {
    let response = await fetch("files/projects.json");
    return response.json();
  }
</script>

<style>
  header {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .about-me {
    text-align: justify;
    text-align-last: center;
    line-height: 150%;

    max-width: 50ch;

    margin: 1rem auto;
  }

  .hero-img {
    width: 8rem;
    border-radius: 3px;
    overflow: hidden;
    margin: 4rem auto 0 auto;
  }

  .flex {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
  }

  @media screen and (max-width: 944px) {
    header .about-me {
      max-width: 80vw;
      line-height: 180%;
      text-align: justify;
      text-align-last: center;
    }

    .about-me {
      max-width: 85vw;
      margin: 2rem auto;
      text-align: justify;
      text-align-last: center;
    }

    .hero-img {
      margin-top: 4rem;
    }

    .flex {
      margin-bottom: 4rem;
    }
  }
</style>

<header>
  <!-- <img
    src="../img/logo/logo-v1.svg"
    alt="Goran Alković"
    loading="lazy"
    class="hero-img" /> -->

  <svg
    class="hero-img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 166.09 113.65">
    <style>
      path {
        fill: var(--link);
        transition: fill 0.3s ease;
      }
    </style>
    <g>
      <path
        d="M91.24,11.53c.31-.41,6-5.22,2.6-4.39C93.59,7.66,87.93,12,91.24,11.53Z" />
      <path
        d="M0,0V113.65H166.09V0ZM154.07,3.73c-3.27,2.51-5.82,2.51-9.09,0ZM141.25,15.59,128.91,60.88H126l-.65-2.59L139.14,8Zm-8.93,57.79h-2.93c-3.73,0,13-52.66,12.83-54.22l2.44,8.93Zm13.31-41.72,2.44,8.93L135.73,85.88H132.8C129.07,85.85,145.76,33.23,145.63,31.66ZM106.18,3.73,84.91,81.34V3.73Zm-54.55,0h6.66C56.45,5,53.79,6.36,51.63,5.36Zm0,2.76c4.29,1.85,8.88-5.1,13-.81L62.18,8.6c-3.67-1.33-7,4.29-10.55,2.12Zm0,5.36c3.3,1.68,6.45-2.51,9.74-2.27l-5.85,6.66a6.46,6.46,0,0,1-3.89,0Zm0,5.52a4.62,4.62,0,0,0,2.76.16l-2.76,3.41ZM45.13,3.73,42.21,7.14H26.46C31.22,3.31,39.47,3.52,45.13,3.73ZM41.4,8.12l-5.19,6H17.86a47.7,47.7,0,0,1,7-6ZM3.73,3.73H30.2A26.09,26.09,0,0,0,24,7.14H3.73Zm0,4.39H22.4a43.67,43.67,0,0,0-6.33,6H3.73Zm0,7.14H15.1c-.47.6-2.12,2-.49,2.27.42,0,1.94-2,2.27-2.27H35.39L30.2,21.11H12.34c.84-.66.28-2.16-.81-1.14l-.65,1.14H3.73Zm2.11,20c.65-2.11,1.47-4.06,2.28-6H23.38l-5.2,6Zm11.53,1-5.19,6H4.06a35.29,35.29,0,0,1,1.46-6Zm-8.77-8a35.4,35.4,0,0,1,3.09-6h17.7l-5.2,6Zm-4.87-6h6.5a35.4,35.4,0,0,0-3.09,6H3.73Zm0,7H6.66a63.89,63.89,0,0,0-2.28,6H3.73Zm0,14.13h7.63L6.17,49.19H3.73Zm0,21.1H6.17l5.19,5.85H3.73Zm1.79,13a35.52,35.52,0,0,1-1.46-6h8.12l5.19,6Zm12.66,1,5.2,6H8.12c-.81-1.94-1.63-3.89-2.28-6Zm-14.45,0h.65a62.65,62.65,0,0,0,2.28,6H3.73Zm0,7H7.14c.37.43,1.32,3.87,2.11,3.73,1.75-.31-.53-3-.65-3.73H24.19l5.2,6H3.73Zm0,7.14H30.2l5.19,5.85H16.88a25.46,25.46,0,0,1-3.08-3.9c-3.06-.79.67,3.14,1.3,3.9H3.73Zm0,7H16.07l1.3,1.46c1.12.57,1.41-1,.49-1.46H36.21l5.19,6H3.73Zm30.36,10.39A25.43,25.43,0,0,1,27.28,107c-3.28.14,2,2.66,2.92,2.92H3.73V106.5H42.21l2.92,3.41Zm14.29-1L3.9,56.82,48.38,4.71v20L21.76,55.85a1.48,1.48,0,0,0,0,1.95L48.38,89Zm3.25.16v-4.38c2.72,1.3,5.76-1.21,8.28-2.27l4.71,5.68C60.38,104.09,56.05,110.84,51.63,109.1Zm5-10.39,2.44,2.92c-2.08,1-5.12,3.58-7.47,2V99.36A5.59,5.59,0,0,0,56.66,98.71Zm-5-.49V93.84l1.13.33L56,97.9C55,98.74,52.76,98.66,51.63,98.22Zm4.71,11.69a6.88,6.88,0,0,1,9.25,0Zm16.39,0c-1-1.35,2.16-55.59-1.62-54.71H56.5a1.63,1.63,0,0,0,0,3.25h13v50.33l-44.32-52L69.49,4.71V42.37c0,2,3.24,2,3.24,0V3.73h8.45V109.91Zm12.18,0V93.35L109.43,3.73h27.43L108,109.91Zm26.3,0,12.5-45.62,12.34,45.62ZM149,44.16l2.43,8.93L139,98.39h-2.76C132.48,98.35,149.17,45.73,149,44.16Zm-10.39,63.16c-.18-.31,13.8-50.33,13.8-50.66l2.43,8.93-11.36,41.73Zm6,2.59,11.2-40.75,2.43,8.93-8.76,31.82Zm6.81,0,7.8-28.41,2.43,9.09-5.35,19.32Zm11,0h-4.22l4.22-15.1Zm0-28.57-1.29-4.55a4.6,4.6,0,0,0,1.29.65Zm0-5a6.37,6.37,0,0,1-1.62-1l-1.46-5.19a9.56,9.56,0,0,0,3.08,1.78Zm0-5.52c-1-.16-2.65-1.64-3.4-2l-1.3-4.71c1.51.13,3.29,2.07,4.7,2.27Zm0-5.52c-1.53-.51-3.39-2.24-5-2.28l-1.13-4.22c2.13-.43,4.3,1.76,6.16,2.27Zm0-5.36c-2-.87-4.11-2.71-6.49-2.27l-1.14-4.06c2.58-1.3,5.46,1.06,7.63,2.11Zm0-5.36c-2.35-1.44-5.09-3.41-7.95-1.95l-1-3.73c3-2.57,6.11-.08,8.92,1.3Zm0-5.52c-2.72-1.78-6.15-3.45-9.25-1.14l-1-3.57c4.22-3.56,6.12-1.89,10.22.33Zm0-5.52c-3.4-2.19-6.95-3.36-10.39-.32L151,39.29c5.19-2.73,6.18-3.29,11.52-.16Zm0-5.36c-4.63-3.64-7.24-2.5-11.85.17l-1.13-4.39c6.45-1.26,6-4.88,13-.16Zm0-5.52c-6-4.66-7.68-.85-13.31.33l-1.13-4.55c7,.75,6.36-5.94,14.44-.16Zm0-5.52c-7.65-5.64-8.29,1.36-14.77,0l-1.46-4.87c6.9,3.14,8.34-5.33,16.23.49Zm0-5.36c-7.81-6.83-10,3.8-16.72-1.13l-1.3-5.2c7.78,6.61,9.41-4.84,18,2Zm0-5.51c-8.82-7.12-9.77,4.88-18.34-2.11l-1.3-4.55c12.88,7.41,8.51-4.9,19.64,2.27Zm0-5.52c-11.14-6.75-6.49,4.63-20-2.28l-1.13-4.38a5.6,5.6,0,0,1,4.06,1.3c7.53,5.05,8.54-5.54,17,1.13Zm0-5.36c-.7-.23-1.92-1.23-2.76-1.63h2.76Z" />
      <path
        d="M90.92,48.71l-3.41,3.41c-.74.66.34,1.42,1,1l3.41-3.41A.69.69,0,1,0,90.92,48.71Z" />
      <path
        d="M97.09,17.37c.16.49.48.49,1,0l3.25-3.24c.65-.65-.16-1.63-.81-1C100.37,13.62,95.94,16.84,97.09,17.37Z" />
      <path
        d="M89.62,26.3,93,22.89c.84-3.35-4,2.29-4.39,2.6C87.87,25.87,89.26,27.34,89.62,26.3Z" />
      <path
        d="M97.41,28.25,94,31.66c-.74.66.35,1.43,1,1l3.41-3.41A.69.69,0,0,0,97.41,28.25Z" />
      <path
        d="M122.25,89.62c-1.78-1.46-4.06.81-2.43,2.43C121.28,93.52,123.88,91.08,122.25,89.62Z" />
      <path
        d="M122.41,104.07a1.72,1.72,0,1,0,2.44,2.43C126.31,105,123.88,102.45,122.41,104.07Z" />
      <path
        d="M117.54,98.06c-2.12,2.59,2.81,4.3,2.93,1.14A1.75,1.75,0,0,0,117.54,98.06Z" />
      <path
        d="M87.51,40.75c.16.49.65.49.81,0s6-5.14,2.43-4.22C90.63,37,86.39,40.24,87.51,40.75Z" />
      <path
        d="M113.16,105.85a1.72,1.72,0,0,0,2.43,2.44A1.72,1.72,0,0,0,113.16,105.85Z" />
      <path
        d="M132,108.29a1.72,1.72,0,0,0-2.43-2.44A1.72,1.72,0,1,0,132,108.29Z" />
      <path
        d="M122.25,77.28a1.73,1.73,0,0,0,2.44,2.44A1.73,1.73,0,0,0,122.25,77.28Z" />
      <path
        d="M127.61,84.75a1.72,1.72,0,0,0-2.92,1.13C125.05,89,129.61,87.24,127.61,84.75Z" />
      <path
        d="M127,99.2c1.46,1.46,4.06-1,2.43-2.44A1.72,1.72,0,1,0,127,99.2Z" />
    </g>
  </svg>

  <h1>Hi, I'm Goran</h1>

  <p class="about-me">
    I'm studying
    <em>Databases and knowledge bases</em>
    in Varaždin, Croatia. Always learning new things and doing amazing stuff
    with things I already know. I love all kinds of design, but I also love
    making something amazing out of my designs.
  </p>
</header>

<div class="flex" use:links>
  <a
    href="https://goranalkovic.github.io/files/Goran_Alkovic_CV.pdf"
    class="link-btn"
    target="_blank"
    rel="noreferrer"
    noroute>
    <Icon icon={icons.cv} />
    Download my CV
  </a>
</div>

<h2>Skills</h2>
{#await loadSkills()}
  <Spinner />
{:then skillCategories}
  <AdaptiveWrapGrid>
    {#each skillCategories as category}
      {#if category.hide == null}
        <SkillTitleCard {category} />

        {#each category.items as skill}
          <SkillCard {skill} />
        {/each}
      {/if}
    {/each}
  </AdaptiveWrapGrid>
{:catch error}
  <p>Error while loading</p>
{/await}

<h2>Projects</h2>
{#await loadProjects()}
  <Spinner />
{:then projects}
  <AdaptiveWrapGrid>
    {#each projects as project}
      <ProjectCard {project} />
    {/each}
  </AdaptiveWrapGrid>
{:catch error}
  <p>Error while loading</p>
{/await}

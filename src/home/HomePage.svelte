<script>
  import { links } from "svelte-routing";

  import Spinner from "../components/Spinner.svelte";
  import AdaptiveWrapGrid from "../components/AdaptiveWrapGrid.svelte";
  import ProjectCard from "../components/ProjectCard.svelte";
  import SkillCard from "../components/SkillCard.svelte";
  import SkillTitleCard from "../components/SkillTitleCard.svelte";

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
    border-radius: 4px;
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
  <img src="../img/logo/logo-v1.svg" alt="Goran Alković" class="hero-img" />

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
    noroute>
    <i class="bx bx-download" />
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

<script>
  import { onMount } from "svelte";

  import Spinner from "../components/Spinner.svelte";
  import AdaptiveWrapGrid from "../components/AdaptiveWrapGrid.svelte";
  import ProjectCard from "../components/ProjectCard.svelte";
  import SkillCard from "../components/SkillCard.svelte";
  import SkillTitleCard from "../components/SkillTitleCard.svelte";
  import Icon from "../components/Icon.svelte";
  import IconButton from "../components/IconButton.svelte";
  import CvEntry from "../components/CvEntry.svelte";
  import Logo from "../components/Logo.svelte";

  import { fade, draw, fly } from "svelte/transition";
  import { flip } from "svelte/animate";

  import { icons } from "../icons.js";

  import { url, goto } from "@sveltech/routify";

  import anime from "animejs/lib/anime.es.js";
  import Cv from "./cv.svelte";
  import Project from "./projects/[project].svelte";

  async function loadProjects() {
    let response = await fetch("files/projects.json");
    // await sleep(2000);
    projects = await response.json();
  }

  async function loadCv() {
    let response = await fetch("files/new-cv.json");
    // await sleep(2000);
    return response.json();
  }

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  onMount(async () => {
    await sleep(200);
    if (!window.location.href.includes("#")) {
      const svgPath = document.querySelectorAll(
        ".hero-img .d,.hero-img .e,.hero-img .a, .hero-img .b,.hero-img .c,.hero-img .f"
      );

      anime({
        targets: svgPath,
        loop: false,
        direction: "alternate",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeOutSine",
        duration: 1400,
        delay: (el, i) => 100 + i * 10,
      });

      anime({
        targets: "header h1",
        opacity: ["0", "1"],
        translateY: ["-30px", "0"],
        easing: "easeOutElastic(1, .8)",
        delay: 800,
        duration: 800,
      });

      anime({
        targets: "header p",
        opacity: ["0", "1"],
        translateY: ["-30px", "0"],
        easing: "easeOutElastic(1, .8)",
        delay: 1200,
      });

      anime({
        targets: "header",
        height: ["100vh", "30vh"],
        marginTop: ["0", "4rem"],
        easing: "easeOutElastic(1, .8)",
        delay: 1800,
        duration: 1000,
      });

      anime({
        targets: "#projects",
        opacity: ["0", "1"],
        scale: ["0.95", "1"],
        easing: "easeOutQuad",
        delay: 1800,
        duration: 500,
      });
    }
    loadProjects();
  });

  let projects = null;
  let currentProjectIndex = null;

  $: currentProject =
    projects == null
      ? null
      : currentProjectIndex == null
      ? null
      : projects[currentProjectIndex];
</script>

<style>
  header {
    height: 30vh;
    /* width: 100vw; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    /* margin: -2rem; */
    margin: 0;
    margin-top: 4rem;
    padding: 0;

    background-image: radial-gradient(transparent 0%, var(--background) 55%),
      url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%239C92AC' fill-opacity='0.12' fill-rule='evenodd'/%3E%3C/svg%3E");
  }

  :global(html.dark-theme) header {
    background-image: radial-gradient(transparent 0%, var(--background) 55%),
      url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%239C92AC' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E");
  }

  header p {
    margin-top: 0.5rem;
    font-size: 1.8rem;
    font-weight: 300;
    /* opacity: 0; */
    /* transform: translateY(-30px); */
  }

  header span.amp {
    color: var(--link);
  }

  .justify {
    text-align: justify;
    text-align-last: left;
  }

  #resume {
    display: flex;
    justify-content: space-between;
  }

  .flex-btns {
    display: flex;
  }

  #resume div {
    display: flex;
  }

  #resume div :global(button) {
    margin-right: 0.5rem;
  }

  @media screen and (max-width: 944px) {
    header p {
      margin-top: -0.5rem;
      font-size: 1.2rem;
    }

    #resume {
      flex-direction: column;
    }

    #resume h2 {
      margin-bottom: 1rem;
    }

    .flex-btns {
      flex-direction: column;
    }
  }
</style>

<header>
  <div>
    <Logo />
    <h1>Goran Alković</h1>
    <p>
      Designer
      <span class="amp">&amp;</span>
      developer
    </p>
  </div>
</header>

<section id="projects">
  <h2>Featured projects</h2>

  {#if projects == null}
    <Spinner />
  {:else}
    <AdaptiveWrapGrid>
      {#each projects as project, i}
        <ProjectCard {project} />
      {/each}
    </AdaptiveWrapGrid>
  {/if}
</section>

<section id="resume">
  <h2>Quick résumé</h2>

  <div>
    <IconButton
      icon={icons.print}
      label="Print"
      on:click={() => window.print()} />
    <IconButton href={$url('/cv')} icon={icons.cv} label="Full résumé" />
  </div>
</section>

{#await loadCv()}
  <section>
    <Spinner />
  </section>
{:then cv}
  <hr class="print-only" />
  <h3 class="print-only home-quick-resume-title">Quick résumé</h3>
  <section class="cv-block print-only cv-contact">
    <h3>Contact</h3>
    <ul>
      <li>
        <span>E-mail</span>
        <br />
        goran.alkovic@hotmail.com
      </li>
      <li>
        <span>GitHub</span>
        <br />
        github.com/goranalkovic
      </li>
      <li>
        <span>Phone</span>
        <br />
        +385 976 480 800
      </li>
    </ul>
  </section>

  <section class="cv-block">

    <h3>About me</h3>
    <p class="justify" style="padding : 0; margin: 0;">{cv.about}</p>
  </section>

  <section class="cv-block work">
    <h3>Featured work</h3>
    <ul>
      {#each cv.work as job}
        {#if job.featured != null}
          <li>
            <CvEntry
              when={job.when}
              title={job.who}
              subtitle={job.what}
              details={job.summary} />
          </li>
        {/if}
      {/each}
    </ul>
  </section>

  <section class="cv-block skills print-home-skills">
    <h3>Skills</h3>

    <ul>
      {#each cv.skills as skill}
        <li>
          <CvEntry title={skill.name} details={skill.description} />
        </li>
      {/each}
    </ul>

  </section>

{:catch error}
  <p>Error while loading</p>
{/await}

<section class="cv-block no-print">
  <h3>Contact me</h3>
  <div class="flex-btns">
    <IconButton
      href="mailto:goran.alkovic@hotmail.com"
      label="E-mail"
      icon={icons.email}
      style="margin: 5px;"
      external />
    <IconButton
      href="https://github.com/goranalkovic"
      label="GitHub"
      icon={icons.github}
      style="margin: 5px;"
      external />
    <IconButton
      href="tel:+385976480800"
      label="Phone"
      icon={icons.call}
      style="margin: 5px;"
      external />
  </div>
</section>

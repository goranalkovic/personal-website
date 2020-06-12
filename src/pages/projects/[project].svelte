<script>
  import { params } from "@sveltech/routify";

  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  import { url } from "@sveltech/routify";

  import Spinner from "../../components/Spinner.svelte";
  import AdaptiveWrapGrid from "../../components/AdaptiveWrapGrid.svelte";
  import Icon from "../../components/Icon.svelte";
  import IconButton from "../../components/IconButton.svelte";
  import { icons } from "../../icons.js";

  let project = null;
  let currentYear = new Date().getFullYear();
  let yearSep, yearEnd;
  let modalVisible = false;
  let modalImage = { src: null, desc: null };

  onMount(async () => {
    let response = await fetch("../../files/projects.json");
    let projects = await response.json();

    project = projects.filter((p) => p.slug === $params.project)[0];

    yearEnd = project.yearEnd == null ? currentYear : "";
    yearSep = project.yearStart !== project.yearEnd ? "-" : "";
  });
</script>

<style>
  header {
    width: 100vw;
    text-align: left;
    margin: 0;
    padding: 2rem 4rem;
    position: sticky;
    top: 0;
    background: hsla(var(--background-values), 0.8);
    backdrop-filter: blur(40px) saturate(180%);
    -webkit-backdrop-filter: blur(40px) saturate(180%);

    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-areas: "back title right";
  }

  header .description {
    margin-left: 1rem;
    grid-area: title;
  }

  header .flex-btns {
    grid-area: right;
  }

  header h1 {
    margin: 0;
    padding: 0;
    font-size: 2.5rem;
    max-width: 17ch;
    line-height: 125%;
    letter-spacing: -2px;
    text-align: left;
  }

  header h2 {
    margin: 0;
    margin-top: -0.25rem;
    padding: 0;
    font-size: 1.4rem;
    font-weight: 400;
    opacity: 0.6;
    letter-spacing: -1px;
    text-align: left;
  }

  header p {
    margin: 0;
    padding: 0;
    font-size: 0.9rem;
    line-height: 150%;
    text-align: left;
  }

  /* header img {
    height: 3rem;
    width: 3rem;
    margin: 0 1rem;
  } */

  /* html.dark-theme header img {
    filter: brightness(200%) contrast(50%);
  } */

  .flex-btns {
    display: flex;
    margin: 0 0 2rem 0;
    align-items: center;
    justify-content: center;
  }

  .flex-btns *:not(:last-child) {
    margin-right: 1rem;
  }

  .gallery {
    padding: 20px 8rem;
    margin: 0 auto;

    display: grid;
    grid-gap: 1rem;
    /* grid-template-columns: repeat(2, 1fr); */
    grid-template-columns: repeat(auto-fit, minmax(40vw, 1fr));
    grid-auto-rows: 40vmax;
    /* display: grid;
    grid-gap: 1rem;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-auto-flow: dense; */
  }

  .gallery img {
    width: 100%;
    height: 100%;
    min-width: 4rem;
    min-height: 24rem;

    object-fit: cover;

    cursor: zoom-in;
  }

  @media screen and (max-width: 600px) {
    .gallery {
      padding: 20px 1rem;
      grid-template-columns: 1fr;
      grid-auto-rows: 40rem;
    }
    header {
      /* flex-direction: column;
      align-items: center; */
      padding: 1rem;
      grid-template-columns: auto 1fr;
      grid-template-rows: auto auto;
      grid-template-areas: "back title" "blank right";
      grid-gap: 1rem;
      /* position: static; */
    }

    header .description {
      margin-left: 0;
      /* margin-top: 1rem; */
      grid-area: title;
    }

    header .flex-btns {
      justify-content: flex-start;
      margin: 0;
    }
  }
</style>

{#if project == null}
  <Spinner />
{:else}
  <header>
    <div class="backbtn">
      <IconButton href="/#projects" icon={icons.arrowBack} />
    </div>
    <!-- <img src="../{project.heroImage}" alt="{project.name} - logo" /> -->

    <div class="description">
      <h1>{project.name}</h1>

      <h2>{project.yearStart} {yearSep} {yearEnd}</h2>

      <p>
        {@html project.description}
      </p>
    </div>
    <div class="flex-btns">
      {#if project.url != null}
        <a class="link-btn" href={project.url} target="_blank">
          <!-- <i class="bx bx-link-external colored-icon" /> -->
          <Icon icon={icons.externalLink} />
          Open
        </a>
      {/if}

      {#if project.githubUrl != null}
        <a class="link-btn" href={project.githubUrl} target="_blank">
          <!-- <i class="bx bxl-github colored-icon" /> -->
          <Icon icon={icons.github} />
          GitHub
        </a>
      {/if}
    </div>

  </header>

  <div class="gallery">
    {#each project.images as image}
      <img src="../{image.src}" alt={image.subHtml} loading="lazy" />
    {/each}
  </div>
{/if}

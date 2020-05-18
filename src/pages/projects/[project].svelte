<script>
  import { params } from "@sveltech/routify";

  import { onMount, afterUpdate } from "svelte";
  import { fade } from "svelte/transition";

  import { url } from "@sveltech/routify";

  import Spinner from "../../components/Spinner.svelte";
  import AdaptiveWrapGrid from "../../components/AdaptiveWrapGrid.svelte";
  import Icon from "../../components/Icon.svelte";
  import { icons } from "../../icons.js";

  let project = null;
  let currentYear = new Date().getFullYear();
  let yearSep, yearEnd;
  let modalVisible = false;
  let modalImage = { src: null, desc: null };

  afterUpdate(() => {
    // window.scrollTo(0, 0);
  });

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
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 2rem;
  }

  header h1 {
    margin: 2rem auto;
    margin-bottom: 1rem;
    font-size: 4rem;
    max-width: 17ch;
    line-height: 4.1rem;
    letter-spacing: -2px;
  }

  header h2 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 500;
    opacity: 0.6;
    letter-spacing: -1px;
  }

  header img {
    max-height: 10rem;
    max-width: 400px;
    min-height: 8rem;
    margin-left: auto;
    margin-right: auto;
  }

  html.dark-theme header img {
    filter: brightness(200%) contrast(50%);
  }

  header p {
    max-width: 40ch;
    margin: 1rem auto 2rem auto;
    font-size: 1.1rem;
    line-height: 1.5rem;
  }

  .thumb {
    width: 12rem;
    height: 12rem;
    object-fit: cover;
    border-radius: var(--border-radius);
    transition: var(--transition);
    cursor: pointer;
    border: 1px solid var(--border-color);
    background: #d6d6d6;
    margin: var(--card-gap);
  }

  .thumb:hover {
    transform: scale(0.95);
  }

  .modal-backdrop {
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.92);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .modal {
    z-index: 200;
    user-select: none;
  }

  .modal img {
    max-width: 85vw;
    max-height: 60vh;
    border-radius: 8px;
    pointer-events: none;
    background-color: black;
  }

  .muted {
    text-align: center;
    color: var(--input-disabled-text-color);
    opacity: 0.8;
  }

  .description {
    font-size: 1.2rem;
    text-align: center;
    z-index: 200;
    color: #aaa;
  }

  .flex-btns {
    display: flex;
    margin: 0 0 2rem 0;
    align-items: center;
    justify-content: center;
  }

  .flex-btns *:not(:last-child) {
    margin-right: 1rem;
  }

  .back-btn {
    display: inline-flex;
    position: fixed;
    top: 2rem;
    left: 2rem;
    right: 2rem;
    z-index: 5;
    width: 6rem;
  }

  @media screen and (max-width: 600px) {
    header h1 {
      font-size: 3rem;
      max-width: 80vw;
      line-height: 3.5rem;
    }

    header p {
      max-width: 80vw;
    }

    .back-btn {
      top: 0;
      left: 0;
      justify-content: center;
      padding: 0.5rem 0;
      margin-bottom: 2rem;

      background: var(--background);
      width: 100vw;
      border-radius: 0;
    }
  }
</style>

<a href={$url('/')} class="link-btn back-btn">
  <Icon icon={icons.arrowBack} />
  Home
</a>

{#if project == null}
  <Spinner />
{:else}
  <header>
    <img src="../{project.heroImage}" alt="{project.name} - logo" />

    <h1>{project.name}</h1>

    <h2>{project.yearStart} {yearSep} {yearEnd}</h2>

    <p>
      {@html project.description}
    </p>
  </header>

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

  <AdaptiveWrapGrid narrow>
    {#each project.images as image}
      <img
        class="thumb"
        src="../{image.src}"
        alt={image.subHtml}
        loading="lazy"
        on:click={() => {
          modalImage = { src: image.src, desc: image.subHtml };
          modalVisible = true;
        }} />
    {/each}
  </AdaptiveWrapGrid>
  {#if modalVisible}
    <div
      class="modal-backdrop"
      on:click={() => (modalVisible = false)}
      transition:fade>
      <div class="modal">
        <p class="muted">Click or tap anywhere to close</p>
        <img src="../{modalImage.src}" alt={modalImage.desc} loading="lazy" />
        <p class="description">
          {@html modalImage.desc}
        </p>
      </div>
    </div>
  {/if}
{/if}

<script>
  import { url } from "@sveltech/routify";
  import { goto } from "@sveltech/routify";

  export let project;

  const navigate = () => {
    $goto("/projects/:id", { id: project.slug });
  };
</script>

<style>
  a,
  button {
    width: calc(var(--card-width) - 2px);
    height: calc(var(--card-height) - 2px);

    border-radius: var(--border-radius);
    padding: var(--card-padding);
    margin: var(--card-gap);
    border: 1px solid var(--border-color);
    background: var(--background);
    /* transition: var(--transition-qui); */
    cursor: pointer;

    display: grid;
    grid-template-rows: 3rem 1fr 3rem;

    color: var(--text-color);
    text-align: center;
  }

  a:hover,
  button:hover {
    border: 1px solid var(--border-hover-color);
    background: hsla(var(--text-color-values), 0.03);
    color: var(--text-color);
  }

  a:focus,
  button:focus {
    border: 1px solid var(--border-focus-color);
  }

  a .proj-name,
  button .proj-name {
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    opacity: 0;
    transition: opacity 0.1s ease, transform 0.3s ease;
    transform: scale(0.5);
    align-self: center;
    justify-self: center;
    width: 100%;
  }

  a:hover .proj-name,
  a:focus .proj-name,
  button:hover .proj-name,
  button:focus .proj-name {
    opacity: 1;
    transform: scale(1);
  }

  a .proj-year,
  button .proj-year {
    font-size: 0.9rem;
    opacity: 0;
    transition: opacity 0.1s ease, transform 0.3s ease;
    transform: scale(0.5);
    align-self: center;
    justify-self: center;
    width: 100%;
  }

  a:hover .proj-year,
  a:focus .proj-year,
  button:hover .proj-year,
  button:focus .proj-year {
    opacity: 0.5;
    transform: scale(1);
  }

  a img,
  button img {
    transition: transform 0.4s ease, filter 0.4s ease;

    align-self: center;
    justify-self: center;

    height: 6rem;
    max-width: 10rem;
  }

  a:hover img,
  a:focus img,
  button:hover img,
  button:focus img {
    transform: scale(1.1);
    filter: none;
  }

  html.dark-theme a img,
  html.dark-theme button img {
    filter: saturate(60%) contrast(60%) brightness(120%);
  }

  html.dark-theme a:hover img,
  html.dark-theme a:focus img,
  html.dark-theme button:hover img,
  html.dark-theme button:focus img {
    filter: saturate(80%) contrast(90%) brightness(110%);
  }

  @media screen and (max-width: 944px) {
    a,
    button {
      min-width: calc(var(--card-width) - 2px);
      min-height: calc(var(--card-height-mobile) - 2px);
      height: 100%;
    }

    a .proj-name,
    button .proj-name {
      opacity: 1;
      font-size: 1.25rem;
      width: 100%;
      max-width: 100%;
      align-self: center;
      transform: scale(1);
    }

    a .proj-year,
    button .proj-year {
      opacity: 0.5;
      font-size: 1rem;
      width: 100%;
      max-width: 100%;
      align-self: center;
      transform: scale(1);
    }

    a img,
    button img {
      height: 6rem;
    }
    html.dark-theme a img,
    html.dark-theme button img {
      filter: contrast(60%);
    }

    html:not(.dark-theme) a img,
    html:not(.dark-thme) button img {
      filter: none;
    }
  }
</style>

<button on:click={navigate}>

  <!-- <a href={$url('/projects/:id', { id: project.slug })} class="link-btn"> -->
  <span class="proj-name">{project.name}</span>
  <img src={project.heroImage} loading="lazy" alt={project.slug} />
  <span class="proj-year">
    {project.yearStart}{project.yearStart !== project.yearEnd ? '-' : ''}{project.yearEnd == null ? new Date().getFullYear() : ''}
  </span>
  <!-- </a> -->
</button>

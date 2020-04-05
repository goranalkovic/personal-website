<script>
  import { onMount } from "svelte";
  import { Route, Router } from "svelte-routing";
  import { fade, fly } from "svelte/transition";

  import { currentThemeMode } from "./store.js";
  currentThemeMode.useLocalStorage();

  import ProjectHome from "./projects/ProjectHome.svelte";
  import HomePage from "./home/HomePage.svelte";

  export let url = "";
  let themeMode = 0;

  function switchTheme(newMode) {
    currentThemeMode.set(newMode);
    themeMode = newMode;

    let isAutoDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (themeMode === 1 || (themeMode === 0 && !isAutoDark)) {
      document.querySelector("html").classList.remove("dark-theme");
    }
    if (themeMode === 2 || (themeMode === 0 && isAutoDark)) {
      document.querySelector("html").classList.add("dark-theme");
    }
  }

  onMount(() => switchTheme($currentThemeMode));
</script>

<style>
  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 0;
    padding: 5rem 20vw;

    background: hsla(var(--text-color-values), 0.02);
  }

  footer p span {
    display: block;
  }

  footer p span:first-of-type {
    font-size: 0.95rem;
    margin-bottom: 0.3rem;
    opacity: 0.8;
  }

  footer p span:last-of-type {
    font-size: 0.75rem;
    opacity: 0.4;
  }

  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2rem;
    margin-bottom: 6rem;
  }

  .flex-btns {
    display: flex;
  }

  div:not(.theme-switch).flex-btns *:not(:last-child) {
    margin-right: 1rem;
  }

  .theme-switch button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 3rem;
    height: 3rem;
    padding: 0.5rem;
  }

  .theme-switch button:first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .theme-switch button:nth-of-type(2) {
    border-radius: 0;
  }

  .theme-switch button:last-of-type {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .theme-switch button i {
    display: inline;
    font-size: 1.5rem;
    margin: 0 0 0.3rem 0;
    padding: 0;
    text-align: center;
    color: var(--text-color);
  }

  .theme-switch button span {
    display: block;
    font-size: 0.85rem;
    margin: 0;
    margin-left: 0.3rem;
    padding: 0;
    text-transform: uppercase;
    letter-spacing: 0;
    width: 0;
    overflow-x: hidden;
  }

  .theme-switch button.active {
    pointer-events: none;
    color: var(--link);
    border-color: var(--link);
    width: 6rem;
  }

  .theme-switch button.active span {
    font-weight: 600;
    width: fit-content;
  }
  .theme-switch button.active i {
    color: var(--link);
  }

  @media screen and (max-width: 944px) {
    footer {
      flex-direction: column;

      padding: 3rem 0;
    }

    footer p {
      text-align: center;
      margin-bottom: 1.5rem;
    }
  }

  @media screen and (max-width: 400px) {
    .flex-btns:not(.theme-switch) {
      flex-direction: column;
    }

    div:not(.theme-switch).flex-btns *:not(:last-child) {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
</style>

<Router {url}>
  <main>
    <Route path="/projects/:id" let:params>
      <div
        in:fly={{ y: 200, duration: 500, delay: 150 }}
        out:fly={{ y: 200, duration: 150, delay: 0 }}>
        <ProjectHome id={params.id} />
      </div>
    </Route>
    <Route path="/">
      <div
        in:fade={{ duration: 150, delay: 250 }}
        out:fly={{ y: -200, duration: 150, delay: 150 }}>
        <HomePage />
      </div>
    </Route>

  </main>
</Router>

<section class="contact">
  <h2>Contact me</h2>
  <div class="flex-btns">
    <a href="mailto:goran.alkovic@hotmail.com" class="link-btn" target="_blank">
      <i class="bx bx-envelope" />
      E-mail
    </a>
    <a href="https://github.com/goranalkovic" class="link-btn" target="_blank">
      <i class="bx bxl-github" />
      GitHub
    </a>
    <a href="tel:+385976480800" class="link-btn" target="_blank">
      <i class="bx bx-phone" />
      Phone
    </a>
  </div>
</section>

<footer>
  <p>
    <span>Copyright Goran Alković, 2020</span>
    <span>Made with Svelte, hosted on Netlify</span>
  </p>

  <div class="flex-btns theme-switch">
    <button on:click={() => switchTheme(0)} class:active={themeMode == 0}>
      <i class="bx bx-adjust" />
      <span>Auto</span>
    </button>
    <button on:click={() => switchTheme(1)} class:active={themeMode == 1}>
      <i class="bx bx-sun" />
      <span>Light</span>
    </button>
    <button on:click={() => switchTheme(2)} class:active={themeMode == 2}>
      <i class="bx bx-moon" />
      <span>Dark</span>
    </button>
  </div>
</footer>

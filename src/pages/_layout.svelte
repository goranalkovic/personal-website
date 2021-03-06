<script>
  import { writable } from "svelte/store";
  import { fade, fly } from "svelte/transition";
  import { BaseTransition } from "@sveltech/routify/decorators";

  import { currentThemeMode } from "../store.js";
  currentThemeMode.useLocalStorage();

  import Icon from "../components/Icon.svelte";
  import IconButton from "../components/IconButton.svelte";
  import { icons } from "../icons.js";
  import { onMount } from "svelte";

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

  const configs = [
    {
      condition: (meta) => true,
      transition: fly,
      /** inParams: {},  optional **/
      /** outParams: {}  optional **/
    },
  ];

  import { TabsTransition } from "@sveltech/routify/decorators";
  const width = writable();
</script>

<style>
  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 0;
    padding: 4rem 20vw;

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

  .flex-btns {
    display: flex;
    justify-content: flex-end;
  }

  div:not(.theme-switch).flex-btns *:not(:last-child) {
    margin-right: 1rem;
  }

  .theme-switch button {
    width: 3rem;
    height: 3rem;
    padding: 0;
    fill: var(--text-color);
  }

  .theme-switch button:first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .theme-switch button:nth-of-type(2) {
    border-radius: 0;
    margin: 0 1px;
  }

  .theme-switch button:last-of-type {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .theme-switch button:not(.active) :global(svg) {
    padding: 0;
    margin: 0;
    fill: var(--text-color);
  }

  .theme-switch button span {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0;
    width: 0;
    overflow-x: hidden;
  }

  .theme-switch button.active {
    pointer-events: none;
    color: var(--link);
    fill: var(--link) !important;
    width: 6rem;
  }

  .theme-switch button.active span {
    font-weight: 600;
    width: fit-content;
  }

  main {
    min-height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
  }

  .content {
    margin-left: auto;
    margin-right: auto;
    flex-grow: 1;
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 944px) {
    footer {
      padding: 4rem 10vw;
    }
  }

  @media screen and (max-width: 600px) {
    footer {
      flex-direction: column;
    }

    footer p {
      text-align: center;
      margin-bottom: 1.5rem;
    }
    .flex-btns:not(.theme-switch) {
      flex-direction: column;
    }

    div:not(.theme-switch).flex-btns *:not(:last-child) {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
</style>

<main>
  <div bind:offsetWidth={$width} class="content">
    <slot decorator={TabsTransition} scoped={{ width }} />
  </div>

  <footer>
    <p>
      <span>Copyright Goran Alković, 2020</span>
      <span>Made with Svelte, hosted on Netlify</span>
    </p>

    <div class="flex-btns theme-switch">
      <button on:click={() => switchTheme(0)} class:active={themeMode == 0}>
        <Icon icon={icons.autoTheme} />
        <span>Auto</span>
      </button>
      <button on:click={() => switchTheme(1)} class:active={themeMode == 1}>
        <Icon icon={icons.lightTheme} />
        <span>Light</span>
      </button>
      <button on:click={() => switchTheme(2)} class:active={themeMode == 2}>
        <!-- <i class="bx bx-moon" /> -->
        <Icon icon={icons.darkTheme} />
        <span>Dark</span>
      </button>
    </div>
  </footer>

</main>

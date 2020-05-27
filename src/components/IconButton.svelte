<script>
  import Icon from "./Icon.svelte";
  import { url } from "@sveltech/routify";
  import { icons } from "../icons.js";

  export let href;
  export let label;
  export let icon;
  export let style;
  export let isBack = false;
</script>

<style>
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

{#if href != null && !isBack}
  <a {href} {style} class="link-btn" target="_blank" rel="noreferrer">
    <Icon {icon} />
    {label}
  </a>
{:else if isBack}
  <a href={$url('/')} class="link-btn back-btn">
    <Icon icon={icons.arrowBack} />
    Back
  </a>
{:else}
  <button {style} on:click>
    <Icon {icon} />
    {label}
  </button>
{/if}

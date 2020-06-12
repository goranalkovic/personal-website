<script>
  import Icon from "./Icon.svelte";
  import { url } from "@sveltech/routify";
  import { icons } from "../icons.js";

  export let href = null;
  export let label = null;
  export let icon = null;
  export let style = null;
  export let external = false;
</script>

<style>
  .square {
    width: 3rem;
    height: 3rem;
    padding: 0;
  }

  .square :global(svg) {
    margin: 0;
  }
</style>

{#if href != null}
  {#if external}
    <a
      {href}
      {style}
      class="link-btn"
      class:square={label == null}
      target="_blank"
      rel="noreferrer">
      <Icon {icon} />
      {#if label != null}{label}{/if}
    </a>
  {:else}
    <a {href} {style} class="link-btn" class:square={label == null}>
      <Icon {icon} />
      {#if label != null}{label}{/if}
    </a>
  {/if}
{:else}
  <button {style} on:click class:square={label == null}>
    <Icon {icon} />
    {#if label != null}{label}{/if}
  </button>
{/if}

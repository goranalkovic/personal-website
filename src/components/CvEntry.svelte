<script>
  export let when = null;
  export let title;
  export let subtitle = null;
  export let details = null;
</script>

<style>
  .when {
    opacity: 0.6;
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .title {
    font-weight: 600;
    margin: 0.2rem 0;
    padding: 0;
    font-size: 1.25rem;
    color: var(--link);
  }

  .subtitle {
    margin: 0;
    padding: 0;
    margin-bottom: 0.8rem;
  }

  .details {
    margin: 0;
    margin-top: 0.5rem;
    padding: 0;
    font-size: 0.9rem;
    max-width: 60ch;
    line-height: 1.5;
    text-align: justify;
    text-align-last: left;
  }
</style>

{#if when != null}
  <p class="when">
    {@html when}
  </p>
{/if}

<h4 class="title">
  {@html title}
</h4>

{#if subtitle != null}
  <p class="subtitle">
    {@html subtitle}
  </p>
{/if}

{#if Array.isArray(details)}
  {#each details as item}
    <p class="details">
      {@html item}
    </p>
  {/each}
{:else if details != null}
  <p class="details">
    {@html details}
  </p>
{/if}

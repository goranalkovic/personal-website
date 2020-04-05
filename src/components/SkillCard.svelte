<script>
  export let skill;
</script>

<style>
  div {
    width: calc(var(--card-width) - 2px);
    height: calc(var(--card-height) - 2px);

    /* background: var(--skill-gradient); */
    /* color: #fff; */
    color: var(--text-color);

    border: var(--card-border);
    border-radius: var(--border-radius);

    padding: var(--card-padding);
    margin: var(--card-gap);

    display: flex;
    flex-direction: column;

    overflow-x: hidden;
    overflow-y: auto;

    transition: var(--transition);
  }

  .subtitle {
    display: block;

    margin-top: 0.1rem;

    opacity: 0.5;

    font-size: 0.9rem;

    transition: var(--transition);
    transform-origin: top left;
  }

  h4 {
    margin: 0 0 0.5rem 0;

    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;

    color: var(--link);
  }

  li:not(:first-child) {
    margin-top: 0.5rem;
  }

  li:not(:last-child) {
    margin-bottom: 0.2rem;
  }

  /* div::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: transparent;
    margin: 4px;
  }

  div::-webkit-scrollbar {
    width: 4px;
    background-color: transparent;
  }

  div::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: var(--scrollbar-color);
  } */

  @media screen and (max-width: 944px) {
    div {
      min-width: calc(var(--card-width) - 2px);
      min-height: calc(var(--card-height-mobile) - 2px);
    }
  }
</style>

<div>
  {#if skill.section != null}
    <h4>{skill.section}</h4>
  {/if}
  <ul>
    {#each skill.items as concreteSkill}
      <li>
        {concreteSkill.name}
        <span class={concreteSkill.subtitle != null ? 'subtitle' : ''}>
          {@html concreteSkill.subtitle || ''}
        </span>
      </li>
    {/each}
  </ul>
</div>

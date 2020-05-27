<script>
  import Icon from "./Icon.svelte";
  export let category;
</script>

<style>
  div {
    position: relative;
    width: var(--card-width);
    height: var(--card-height);

    /* border: var(--card-border); */
    border-radius: var(--border-radius);
    border: 0;

    background: var(--skill-gradient);

    padding: var(--card-padding);
    margin: var(--card-gap);

    transition: var(--transition);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    /* position: absolute;
    top: var(--card-padding);
    left: var(--card-padding); */

    font-size: 2rem;
    word-wrap: break-word;
    font-weight: 500;
    letter-spacing: -1px;
    max-width: 6ch !important;
    line-height: 1;

    padding: 0;
    margin: 0;

    text-align: center;
  }

  @media screen and (max-width: 944px) {
    div {
      min-width: var(--card-width);
      min-height: var(--card-height-mobile);
    }
  }
</style>

<div>
  <h3>
    <Icon icon={category.icon} style="fill: var(--link)" large />
    <br />
    {@html category.name}
  </h3>
</div>

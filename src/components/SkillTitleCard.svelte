<script>
  export let category;
</script>

<style>
  div {
    position: relative;
    width: var(--card-width);
    height: var(--card-height);

    /* border: var(--card-border); */
    border-radius: var(--border-radius);

    background: var(--skill-gradient);

    padding: var(--card-padding);
    margin: var(--card-gap);

    transition: var(--transition);
  }

  h3 {
    position: absolute;
    top: var(--card-padding);
    left: var(--card-padding);

    font-size: 2.8rem;
    word-wrap: break-word;
    font-weight: 200;
    letter-spacing: -1px;

    padding: 0;
    margin: 0;
  }

  i {
    position: absolute;
    bottom: 0.5rem;
    right: 0.6rem;

    font-size: 5rem;

    margin: 0;
    padding: 0;

    opacity: 0.15;
    color: var(--link);
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
    {@html category.name}
  </h3>
  <i class="bx {category.icon}" />
</div>

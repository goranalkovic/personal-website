<script>
  import { url } from "@sveltech/routify";
  import Logo from "../components/Logo.svelte";
</script>

<style>
  a {
    font-weight: 600;
    font-size: 1.2rem;
  }

  h1,
  h2,
  a {
    padding: 0;
    margin: 0.5rem 0;
  }

  h1 {
    font-weight: 600;
    font-size: 5rem;
  }

  h2 {
    font-weight: 400;
    font-size: 2rem;
  }

  a {
    margin-top: 3rem;
    margin-bottom: 6rem;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20vmin;
  }

  div :global(svg) {
    margin: 3rem 0;
    height: 5rem;
    stroke: grey !important ;
  }
</style>

<div>
  <Logo />

  <h1>404</h1>
  <h2>Page not found</h2>

  <a href={$url('/')}>Take me home</a>

</div>

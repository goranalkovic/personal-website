<script>
  import Spinner from "../components/Spinner.svelte";
  import Logo from "../components/Logo.svelte";
  import CvEntry from "../components/CvEntry.svelte";
  import AdaptiveWrapGrid from "../components/AdaptiveWrapGrid.svelte";
  import IconButton from "../components/IconButton.svelte";
  import { icons } from "../icons.js";

  async function loadCv() {
    let response = await fetch("files/new-cv.json");
    return response.json();
  }
</script>

<style>
  h1 {
    text-align: left;
    width: 100%;
  }

  .top-bar {
    align-items: center;
  }

  .cv-flex {
    display: flex;
    justify-content: space-between;
  }
</style>

<div class="padded cv-flex">
  <IconButton icon={icons.arrowBack} href="/#resume" />
  <IconButton
    icon={icons.print}
    label="Print"
    on:click={() => window.print()} />
</div>

<section class="cv-block top-bar">
  <Logo />

  <div>
    <h1>Résumé</h1>
    <h1 class="print-only">Goran Alković</h1>
    <h2 class="print-only">
      Designer
      <span>&amp;</span>
      developer
    </h2>
  </div>
</section>

{#await loadCv()}
  <section>
    <Spinner />
  </section>
{:then cv}

  <section class="cv-block print-only cv-contact">
    <h3>Contact</h3>
    <ul>
      <li>
        <span>E-mail</span>
        <br />
        goran.alkovic@hotmail.com
      </li>
      <li>
        <span>GitHub</span>
        <br />
        github.com/goranalkovic
      </li>
      <li>
        <span>Phone</span>
        <br />
        +385 976 480 800
      </li>
    </ul>
  </section>

  <section class="cv-block">
    <h3>About me</h3>
    <p class="justify">
      {@html cv.about}
    </p>
  </section>

  <section class="cv-block work">
    <h3>Work</h3>
    <ul>
      {#each cv.work as job}
        <li>
          <CvEntry
            when={job.when}
            title={job.who}
            subtitle={job.what}
            details={job.summary} />
        </li>
      {/each}
    </ul>
  </section>

  <section class="cv-block skills">
    <h3>Skills</h3>
    <ul>
      {#each cv.skills as skill}
        <li>
          <CvEntry title={skill.name} details={skill.description} />
        </li>
      {/each}
    </ul>
  </section>

  <section class="cv-block">
    <h3>Awards and certificates</h3>
    <ul>
      {#each cv.certsAndAwards as cert}
        <li>
          <CvEntry
            when={cert.when}
            title={cert.title}
            details={cert.description} />
        </li>
      {/each}
    </ul>
  </section>

  <section class="cv-block">
    <h3>Education</h3>
    <ul>
      {#each cv.education as edu}
        <li>
          <CvEntry when={edu.when} title={edu.what} details={edu.description} />
        </li>
      {/each}
    </ul>
  </section>
{:catch error}
  <p>Error while loading</p>
{/await}

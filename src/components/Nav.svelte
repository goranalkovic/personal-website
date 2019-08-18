<script>

    import BrandLogo from './BrandLogo.svelte';
    import { fade, fly } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import { heroHeight, s1Height, s2Height, s3Height, s4Height } from './store.js';

    let scrollY;

    let mobileOpen = false;

    $: mobileMenuClass = mobileOpen ? "is-active" : "";

    let shadowClass = "";

    let showBrandLogo = false;

    let heroH, s1H, s2H, s3H, s4H;

    let marR = "margin-right: auto";

    const unsubscribe = heroHeight.subscribe(value => {
        heroH = value;
    });

    const unsubscribe2 = s1Height.subscribe(value => {
        s1H = value;
    });

    const unsubscribe3 = s2Height.subscribe(value => {
        s2H = value;
    });

    const unsubscribe4 = s3Height.subscribe(value => {
        s3H = value;
    });

    const unsubscribe5 = s4Height.subscribe(value => {
        s4H = value;
    });

    $: onS1 = scrollY >= (heroH * 0.95) && scrollY < (heroH * 0.95 + s2H) ? "active" : "";
    $: onS2 = scrollY >= (heroH * 0.95 + s2H) && scrollY < (heroH * 0.95 + s3H) ? "active" : "";
    $: onS3 = scrollY >= (heroH * 0.95 + s3H) && scrollY < (heroH * 0.95 + s4H) ? "active" : "";
    $: onS4 = scrollY >= (heroH * 0.95 + s4H) ? "active" : "";

    function scrolly() {
        //let windowHeight = document.documentElement.clientHeight;
        //let heroHeight = document.querySelector('#page-hero').scrollHeight;

        let pastHero = scrollY >= heroH;

        showBrandLogo = pastHero;

        shadowClass = pastHero ? "navbar-shadow" : "";

        marR = pastHero ? "margin-right: 0;" : "margin-right: auto;";

    }

    function scrollTo(selector) {
        let y = heroH * 0.95;

        if(selector === 'learnmore') y += s1H;
        if(selector === 'skills') y += s2H ;
        if(selector === 'work') y += s3H ;
        if(selector === 'contact') y += s4H ;

        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });

        mobileOpen = false;
    }
</script>

<style>
    .navbar {
        position: sticky !important;
        top: 0;
        transition: 0.3s box-shadow;
    }

    .navbar-shadow {
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.14);
    }

    .navbar-item {
        transition: 0.3s background, 0.3s color;

        text-align: center;
    }

    .navbar-item:hover {
        color: rebeccapurple;
    }

    .navbar-item.active {
        color: rebeccapurple;
        font-weight: 600;
    }

    .navbar-item:focus, .navbar-item:active {
        color: rebeccapurple;
    }

    @supports (backdrop-filter: blur(5px)) {
        .navbar {
            background: rgba(255, 255, 255, 0.7);
            -webkit-backdrop-filter: blur(30px);
            backdrop-filter: blur(30px);
        }
    }
</style>

<svelte:window on:scroll={scrolly} bind:scrollY={scrollY} />

<nav class="navbar is-spaced {shadowClass}" role="navigation" aria-label="main navigation">

  <div class="navbar-brand is-fixed-top" >

    {#if showBrandLogo}
    <div transition:fly="{{ x: -10, duration: 300 }}">
        <BrandLogo small={true}></BrandLogo>
    </div>
    {/if}

    <a role="button" class="navbar-burger burger {mobileMenuClass}" style="{marR}" on:click={e => mobileOpen = !mobileOpen} aria-label="menu" aria-expanded="{mobileOpen}">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
    </a>


  </div>

    <div  class="navbar-menu {mobileMenuClass}">
        <div class="navbar-end" style="{marR}">

            <a href="#work" class="navbar-item {onS1}" on:click={() => scrollTo('learnmore') }>
            About me
            </a>

            <a class="navbar-item {onS2}" on:click={() => scrollTo('skills') }>
            What I can do
            </a>

            <a class="navbar-item {onS3}" on:click={() => scrollTo('work') }>
            What I've done
            </a>

            <a class="navbar-item {onS4}" on:click={() => scrollTo('contact') }>
            Contact me
            </a>

            <a href="files/Goran_Alkovic_CV.pdf" class="navbar-item">CV  <span style="font-variant: small-caps; margin-left: 4px;">pdf</span></a>
        </div>

    </div>

</nav>
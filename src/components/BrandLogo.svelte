<script>
  import { logoSrc, animationClass } from './store.js';

    export let customClass;

  function getRandomInt(min, max, exclude) {
    let num = exclude;
    while (num === exclude) {
      num = Math.floor(Math.random() * (max - min + 1) + min);
    }
    return num;
  }

  export let small = false;

  let canSwap = true;

  $: smallClass = small ? 'brand-img-menu' : '';

  let src;

  const unsubscribe = logoSrc.subscribe(value => {
    src = value;
  });

  logoSrc.set(getNewImg());
  // src = getNewImg();

  let animClass;

  const unsubscribe2 = animationClass.subscribe(value => {
    animClass = value;
  });

  function swapLogo() {
    // Check if it's ok to swap
    if (!canSwap) return;

    // Disallow swapping
    canSwap = false;

    // Start animation
    animationClass.set('animated jello');

    // Swap logo
    setTimeout(() => {
      logoSrc.set(getNewImg());
    }, 450);

    // Remove animation
    setTimeout(() => {
      animationClass.set('');
      canSwap = true;
    }, 850);
  }

  function getNewImg() {
    let currentVersion = src.slice(-5, -4);

    let newVersion = getRandomInt(1, 9, currentVersion);

    while (newVersion === currentVersion) {
      newVersion = getRandomInt(1, 9);
    }

    return `img/logo/logo-v${newVersion}.svg`;
  }
</script>

<img
  alt="Goran Alković"
  class="h-20 rounded shadow-lg cursor-pointer {animClass} {customClass}"
  {src}
  on:click={swapLogo} />

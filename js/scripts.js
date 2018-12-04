// import * as Random from "./random";

document.addEventListener("DOMContentLoaded", () => {
    $('#navbar-logo').attr('src', getNewImg());

    document.getElementById('navbar-logo-link').addEventListener('click', swapNavLogo);

    console.log("Loaded");
});

function getNewImg() {
    let currentSrc = document.getElementById('navbar-logo').src;

    let currentVersion = currentSrc.slice(-5, -4);

    let newVersion = 1;

    let engine = Random.engines.mt19937().autoSeed();
    let distribution = Random.integer(1, 9);

    // console.log(`Current: ${currentSrc.slice(-11)}`);

    // noinspection EqualityComparisonWithCoercionJS
    while (newVersion == currentVersion) {
        newVersion = distribution(engine);
    }

    // console.log(`New: ${newSrc.slice(-11)}`);

    return `img/logo/logo-v${newVersion}.svg`;

}

let canSwap = true;

function swapNavLogo() {

    // Check if it's ok to swap
    if (!canSwap) return;

    // Disallow swapping
    canSwap = false;

    // Get logo element
    let logo = $('#navbar-logo');

    // Start animation
    logo.addClass('animated shake fast');

    // Swap logo
    setTimeout(() => {
        logo.attr('src', getNewImg());
    }, 650);

    // Remove animation
    setTimeout(() => {
        logo.removeClass('animated shake fast');
        canSwap = true;
    }, 850);

}


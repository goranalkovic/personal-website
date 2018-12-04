// import * as Random from "./random";

document.addEventListener("DOMContentLoaded", () => {
    $('#navbar-logo').attr('src', getNewImg());

    document.getElementById('navbar-logo-link').addEventListener('click', swapNavLogo);

    console.log("Loaded");
});

let usedLogos = [1, 4, 7, 2, 5, 8, 3, 6, 9];

function getRandomElement() {
    let engine = Random.engines.mt19937().autoSeed();
    let distribution = Random.integer(0, usedLogos.length - 1);
    let num = distribution(engine);

    let output = usedLogos[num];

    usedLogos.splice(num, 1);

    if (usedLogos.length < 1) {
        usedLogos = [1, 4, 7, 2, 5, 8, 3, 6, 9];
    }

    return output;
}

function getNewImg() {
    let currentSrc = document.getElementById('navbar-logo').src;

    let currentVersion = currentSrc.slice(-5, -4);

    let newVersion = getRandomElement();

    if (newVersion === currentVersion){
        newVersion = getRandomElement();
    }

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


document.addEventListener("DOMContentLoaded", () => {
    console.log("Loaded");

    swapNavLogo();
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function swapNavLogo() {
    let currentSrc = document.getElementById('navbar-logo').src;

    console.log(`Current: ${currentSrc}`);

    let newSrc = `img/logo/logo-v${getRandomInt(1, 9)}.svg`;

    while (newSrc === currentSrc) {
        newSrc = `img/logo/logo-v${getRandomInt(1, 9)}.svg`
    }

    console.log(`New: ${newSrc}`);

    document.getElementById('navbar-logo').src = newSrc;
}
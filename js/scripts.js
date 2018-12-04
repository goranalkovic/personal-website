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
    document.getElementById('navbar-logo').src = `img/logo/logo-v${getRandomInt(1,9)}.svg`;
}
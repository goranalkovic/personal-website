document.addEventListener("DOMContentLoaded", () => {
    swapNavLogo(false);

    console.log("Loaded");
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNewImg() {
    let currentSrc = document.getElementById('navbar-logo').src;

    // console.log(`Current: ${currentSrc.slice(-11)}`);

    let newSrc = `img/logo/logo-v${getRandomInt(1, 9)}.svg`;

    while (newSrc.slice(-11) === currentSrc.slice(-11)) {
        newSrc = `img/logo/logo-v${getRandomInt(1, 9)}.svg`
    }

    // console.log(`New: ${newSrc.slice(-11)}`);

    return newSrc;
}

var canSwap = true;

function swapNavLogo(animate = true) {

    if (!canSwap) return;

    canSwap = false;

    let logo = $('#navbar-logo');

    if (animate) logo.addClass('animated jello');

    logo.attr('src', getNewImg());

    setTimeout(() => {
        if (animate) logo.removeClass('animated jello');
        canSwap = true;
    }, 1100);

}


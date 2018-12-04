document.addEventListener("DOMContentLoaded", () => {
    $('#navbar-logo').attr('src', getNewImg());

    console.log("Loaded");
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNewImg() {
    let currentSrc = document.getElementById('navbar-logo').src;

    let currentVersion = currentSrc.slice(-5, -4);

    let newVersion = 1;

    // console.log(`Current: ${currentSrc.slice(-11)}`);

    // noinspection EqualityComparisonWithCoercionJS
    switch (currentVersion) {
        case '1':
        case '2':
        case '3':
            newVersion = getRandomInt(4, 6);
            break;
        case '4':
        case '5':
        case '6':
            newVersion = getRandomInt(7, 9);
            break;
        case '7':
        case '8':
        case '9':
            newVersion = getRandomInt(1, 3);
            break;
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


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

var canSwap = true;

function swapNavLogo(animate = true) {

    if (!canSwap) return;

    canSwap = false;

    let logo = $('#navbar-logo');

    if (animate) {
        logo.addClass('animated shake faster');

        setTimeout( () => {
            logo.attr('src', getNewImg());
        }, 100);
    }
    else {
        logo.attr('src', getNewImg());
    }

    setTimeout(() => {
        if (animate) {
            logo.removeClass('animated jello fast');
        }
        canSwap = true;
    }, 900);

}


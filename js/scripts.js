document.addEventListener("DOMContentLoaded", () => {
    console.log("Loaded");

    swapNavLogo();
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

function swapNavLogo() {

    let logo = $('#navbar-logo');

    logo.attr('src', getNewImg());

    logo.addClass('animated jello');

    setTimeout( logo.removeClass('animated jello') , 200);

}


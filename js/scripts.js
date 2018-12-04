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

    $('#navbar-logo').fadeOut(300, () => {
        let currentSrc = document.getElementById('navbar-logo').src;

        console.log(`Current: ${currentSrc.slice(-11)}`);

        let newSrc = `img/logo/logo-v${getRandomInt(1, 9)}.svg`;

        while (newSrc.slice(-11) === currentSrc.slice(-11)) {
            newSrc = `img/logo/logo-v${getRandomInt(1, 9)}.svg`
        }

        console.log(`New: ${newSrc.slice(-11)}`);

        document.getElementById('navbar-logo').src = newSrc;

        $('#navbar-logo').fadeIn(200);
    })


}
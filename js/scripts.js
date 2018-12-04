document.addEventListener("DOMContentLoaded", () => {

    document.getElementById('navbar-img-link').addEventListener('click', () => {
        document.getElementById('navbar-logo').src = `img/logo/logo-v${getRandomInt(1,9)}.svg`;
    });

    console.log("Loaded");
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
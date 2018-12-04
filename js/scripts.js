function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function switchNavbarImg() {

    let imageSrc = `img/logo/logo-v${getRandomInt(1,9)}.svg`;

    $("#navbar-logo").attr("src", imageSrc);

}
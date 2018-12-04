document.addEventListener("DOMContentLoaded", () => {
    $("#navbar-logo").click(switchNavbarImg());
    alert("Test");
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function switchNavbarImg() {

    $("#navbar-logo").attr("src", `img/logo/logo-v${getRandomInt(1,9)}.svg`);
        // .fadeTo("slow", 0.0)



}

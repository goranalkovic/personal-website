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

    $('#navbar-logo').attr('src', getNewImg());

    $('#navbar.logo').animateCss('jello');

}

// Animate.css extension method

$.fn.extend({
    animateCss: function (animationName, callback) {
        let animationEnd = (function (el) {
            let animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'mozAnimationEnd',
                WebkitAnimation: 'webkitAnimationEnd',
            };

            for (let t in animations) {
                if (el.style[t] !== undefined) {
                    return animations[t];
                }
            }
        })(document.createElement('div'));

        this.addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass('animated ' + animationName);

            if (typeof callback === 'function') callback();
        });

        return this;
    },
});
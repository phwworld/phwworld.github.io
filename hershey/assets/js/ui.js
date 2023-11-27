$(document).ready(function () {

    // brand visual
    const visualSwiper = new Swiper('.visual-swiper .swiper', {
        loop: true,
        autoplay: {
            delay: 1500
        }
    });

    // brand package
    const packageSwiper = new Swiper('.package-swiper .swiper', {
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

});
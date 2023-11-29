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

    // store d-day
    const remainTime1 = document.querySelector(".store .sec1 .d-day .day1 span");
    const remainTime2 = document.querySelector(".store .sec1 .d-day .day2 span");

    function diffDay() {
        const masTime = new Date("2024-2-1"); /* 지정날짜 */
        const todayTime = new Date();
        const diff = masTime - todayTime;
        const diffDay = String(Math.floor(diff / (1000 * 60 * 60 * 24)));
        remainTime1.innerText = `${diffDay[0]}`;
        remainTime2.innerText = `${diffDay[1]}`;
    }

    diffDay();
    setInterval(diffDay, 60000);

});
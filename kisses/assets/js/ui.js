const footer = document.querySelector('.foot');

// 가이드 팝업 숨김
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    const guidePopup = document.querySelector('.guide');
    guidePopup.classList.add('hide');
  }, 3000);
});

// main swiper
const swiper = new Swiper('.index.swiper', {
  loop: false,
  pagination: {
    el: '.index .swiper-pagination',
  },
  on: {
    slideChangeTransitionStart: function () {
      if (this.realIndex === 3) { // 마지막 슬라이드면
        footer.classList.remove('hide');
      } else {
        footer.classList.add('hide');
      }
      const mainVideo = document.querySelector('#main-video');
      const btnPlay = mainVideo.nextElementSibling;
      mainVideo.load();
      btnPlay.style.display = 'block';

    }
  },
  initialSlide: 0,
});

const dimm = document.querySelector('.dimm');
// modal open
const modalOpen = (name) => {
  let modalPop = document.querySelector(`.${name}`);
  if (name === 'modal-join') {
    dimm.classList.remove('hide');
    modalPop.classList.remove('hidden');
  } else {
    modalPop.classList.remove('hide');
  }
}

// modal close
const modalClose = (event) => {
  let modalPop = event.parentNode;
  modalPop.classList.contains
  if (modalPop.classList.contains('modal-join')) {
    modalPop.classList.add('hidden');
    setTimeout(() => {
      dimm.classList.add('hide');
    }, 300);
  } else {
    modalPop.classList.add('hide');
  }
}

// main url check slide change
const indexSlideSet = () => {
  const urlParams = new URL(location.href).searchParams;
  const slide = urlParams.get('slide');
  if (slide === '4') {
    const guidePopup = document.querySelector('.guide');
    guidePopup.classList.add('hide');
    swiper.slideTo(3, 10, false);
    footer.classList.remove('hide');
  }
}

// video play
const videoPlay = (event) => {
  let video = event.previousElementSibling;
  event.style.display = 'none';
  // video.defaultPlaybackRate = 16.0;
  video.play();
  video.addEventListener('ended', (event) => {
    video.currentTime = 0;
    // video.load();
    let btnPlay = event.target.nextElementSibling;
    btnPlay.style.display = 'block';
  })
}
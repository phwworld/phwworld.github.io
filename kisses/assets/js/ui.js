const footer = document.querySelector('.foot');
const dimmShow = () => {
  const dimm = document.createElement('div');
  dimm.classList.add('dimm');
  document.body.appendChild(dimm);
}
const dimmHide = () => {
  const dimm = document.querySelector('.dimm');
  dimm.remove();
}

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

    },
  },
  initialSlide: 3,
});

// modal open
const modalOpen = (name) => {
  let modalPop = document.querySelector(`.${name}`);
  if (name === 'modal-join') {
    dimmShow();
    modalPop.classList.remove('hidden');
  } else {
    dimmShow();
  }
}

// modal close
const modalClose = (event) => {
  let modalPop = event.parentNode;
  modalPop.classList.contains
  if (modalPop.classList.contains('modal-join')) {
    modalPop.classList.add('hidden');
    setTimeout(() => {
      dimmHide();
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

// video pause
const videoPause = (event) => {
  const video = event.previousElementSibling.previousElementSibling;
  const playBtn = event.previousElementSibling;
  video.pause();
  playBtn.style.display = 'block';
  event.style.display = 'none';
}

//vidoe continue
const videoContinue = (event) => {
  const btnPause = event.previousElementSibling;
  if (btnPause.style.display === 'block') {
    event.style.display = 'none';
    btnPause.style.display = 'none';
  }
}

// video play
const videoPlay = (event) => {
  const video = event.previousElementSibling;
  const mask = event.nextElementSibling.nextElementSibling;
  event.style.display = 'none';
  mask.style.display = 'none';
  video.play();

  video.addEventListener('click', (event) => {
    const btnPause = event.target.nextElementSibling.nextElementSibling;
    const videoMask = event.target.nextElementSibling.nextElementSibling.nextElementSibling;
    videoMask.style.display = 'block';
    btnPause.style.display = 'block';
  });

  video.addEventListener('ended', (event) => {
    // video.currentTime = 0;
    video.load();
    const btnPlay = event.target.nextElementSibling;
    btnPlay.style.display = 'block';
  });
}
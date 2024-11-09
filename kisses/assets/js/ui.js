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
const guidePopup = document.querySelector('.guide');
if (guidePopup) {
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
      const guidePopup = document.querySelector('.guide');
      guidePopup.classList.add('hide');
    }, 3000);
  });
}


// main swiper
const indexSwiper = document.querySelector('.index.swiper');
if (indexSwiper) {
  const swiper = new Swiper('.index.swiper', {
    loop: false,
    pagination: {
      el: '.index .swiper-pagination',
    },
    on: {
      slideChangeTransitionStart: function () {
        const firstTabcont = document.querySelector('.tab-cont .cont .img span');
        const video = document.querySelector('#main-video');
        const btnPlay = video.nextElementSibling;
        if (this.realIndex === 3) { // 마지막 슬라이드면
          footer.classList.remove('hide');
        } else {
          footer.classList.add('hide');
          video.load();
          btnPlay.style.display = 'block';
        }
        if (this.realIndex === 2) {
          firstTabcont.classList.add('show');
        } else {
          firstTabcont.classList.remove('show');
        }
      },
    },
    initialSlide: 0,
  });
}


// modal open
const modalOpen = (name) => {
  let modalPop = document.querySelector(`.${name}`);
  if (name === 'modal-join') {
    dimmShow();
    modalPop.classList.remove('hidden');
  } else if (name === 'modal-info' || name === 'modal-share') {
    modalPop.classList.remove('hide');
  } else {
    dimmShow();
  }
}

// modal close
const modalClose = (event) => {
  if (event === 'modal-share') {
    let modalPop = document.querySelector('.modal-share');
    modalPop.classList.add('hide');
  } else {
    let modalPop = event.parentNode;
    if (modalPop.classList.contains('modal-join')) {
      modalPop.classList.add('hidden');
      setTimeout(() => {
        dimmHide();
      }, 300);
    } else if (modalPop.classList.contains('modal-info')) {
      const modalVideo = document.querySelector('.modal-info .video video');
      const btnPlay = modalVideo.nextElementSibling;
      modalVideo.load();
      btnPlay.style.display = 'block';
      modalPop.classList.add('hide');
    } else {
      modalPop.classList.add('hide');
    }
  }
}

// tab
const tabMenu = document.querySelectorAll('.tab a');
const tabCont = document.querySelectorAll('.tab-cont .cont');
tabMenu.forEach((item, index) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();

    tabMenu.forEach((cont) => {
      cont.classList.remove('act');
    });
    tabCont.forEach((cont) => {
      cont.style.display = 'none';
      cont.children[0].children[1].classList.remove('show');
    });

    tabMenu[index].classList.add('act');
    tabCont[index].style.display = 'block';
    setTimeout(() => {
      tabCont[index].children[0].children[1].classList.add('show');
    }, 100);

  })
});


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
    if (!event.target.paused) {
      const btnPause = event.target.nextElementSibling.nextElementSibling;
      const videoMask = event.target.nextElementSibling.nextElementSibling.nextElementSibling;
      videoMask.style.display = 'block';
      btnPause.style.display = 'block';
    }
  });

  video.addEventListener('ended', (event) => {
    // video.currentTime = 0;
    video.load();
    const btnPlay = event.target.nextElementSibling;
    btnPlay.style.display = 'block';
  });
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

// event slider
const eventSlider = () => {
  const newUrl = `result.html`; /* 주소변경 필요 */
  const eventLoading = document.querySelector('.event .loading');
  const loadingVideo = eventLoading.querySelector('video');

  const emotionRange = document.querySelector('.emotion_range');

  const rangeValue = () => {
    const emotionState = document.querySelector('.emotion_state');
    const stateText = emotionState.querySelector('.state_text');
    const rangeFill = emotionState.querySelector('.range_fill');
    const value = Number(emotionRange.value);
    const text = emotionState.querySelector('.text');

    rangeFill.style.width = `${emotionRange.value}%`;

    if (value === 100) {
      eventLoading.style.display = 'block';
      loadingVideo.play();
    }
    loadingVideo.addEventListener('ended', (event) => {
      window.location.replace(newUrl);
    });
  }

  emotionRange.addEventListener("input", rangeValue)
}
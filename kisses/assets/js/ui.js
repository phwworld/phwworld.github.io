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

// modal open
const modalOpen = (name) => {
  let modalPop = document.querySelector(`.${name}`);
  if (name === 'modal-join') {
    dimmShow();
    modalPop.classList.remove('hidden');
  } else if (name === 'modal-info') {
    dimmShow();
    modalPop.classList.remove('hide');
  } else if (name === 'modal-share') {
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
      dimmHide();
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
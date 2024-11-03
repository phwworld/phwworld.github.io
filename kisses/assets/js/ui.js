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
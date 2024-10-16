const box2 = document.querySelector('.box2');
const box2Btm = 600;
const standardPosition1 = box2Btm - 300;
const standardPosition2 = box2Btm - 200;
let preScrollTop = 0;
const targetElement = document.querySelector('.box2 p');


window.addEventListener('scroll', () => {
  let nextScrollTop = window.scrollY;
  console.log(window.scrollY, standardPosition1, standardPosition2);


  if (preScrollTop < nextScrollTop) {
    // scroll down
    if (window.scrollY >= standardPosition1) {
      targetElement.classList.add('fade');
    }
  } else {
    // scroll up
    if (nextScrollTop <= standardPosition2) {
      targetElement.classList.remove('fade');
    }
  }
  preScrollTop = nextScrollTop;
});
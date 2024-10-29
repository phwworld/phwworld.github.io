
let lastScrollY = 0;
window.addEventListener('scroll', () => {
  console.log(window.scrollY);
  const unit = document.querySelector('.unit');
  const newTop = parseInt(unit.style.top || 12) + (scrollY - lastScrollY);
  const newLeft = parseInt(unit.style.top || 12) + (scrollY - lastScrollY) + 103;
  unit.style.top = `${newTop}px`;
  // unit.style.left = `${newLeft}px`;
  lastScrollY = scrollY;
})
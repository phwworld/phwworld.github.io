
let lastScrollY = 0;
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY; // Current scroll position
  const windowHeight = window.innerHeight; // Height of visible window
  const docHeight = document.documentElement.scrollHeight; // Total document height
  const unit = document.querySelector('.unit');
  const newTop = parseInt(unit.style.top || 12) + (scrollY - lastScrollY);
  const newLeft = newTop + 91;
  unit.style.top = `${newTop}px`;
  unit.style.left = `${newLeft}px`;
  // console.log(`Scroll Percentage: ${scrollPercent.toFixed(2)}%`);
  lastScrollY = scrollY;
})
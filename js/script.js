document.addEventListener('DOMContentLoaded', () => {
  const images = ['https://visiofund.co.za/wp-content/uploads/2021/10/2-e1733732415237.png', 'https://visiofund.co.za/wp-content/uploads/2021/09/Mask-Group-231.jpg', 'https://visiofund.co.za/wp-content/uploads/2021/10/1.png'];
  let currentIndex = 0;

  const slideEl = document.querySelector('.slide');
  const dots = document.querySelectorAll('.dot');
  const nextBtn = document.querySelector('.nav-arrow');

  function updateSlider() {
    slideEl.src = images[currentIndex];
    dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  });

  // initialize
  updateSlider();
});

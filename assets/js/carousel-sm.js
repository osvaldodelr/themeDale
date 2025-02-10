// CAROUSEL SMALL V2.0
document.querySelectorAll('.carousel-small').forEach(carousel => {
  const images = carousel.querySelector('.carousel-images');
  const imageCount = images.querySelectorAll('img').length;
  const imagesPerSlide = 4; // Cuántas imágenes se ven por vez
  const prevButton = carousel.querySelector('.prev');
  const nextButton = carousel.querySelector('.next');

  let currentIndex = 0;

  function updateCarousel() {
    const offset = currentIndex * (100 / imagesPerSlide);
    images.style.transform = `translateX(-${offset}%)`;
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? Math.floor(imageCount / imagesPerSlide) - 1 : currentIndex - 1;
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === Math.floor(imageCount / imagesPerSlide) - 1) ? 0 : currentIndex + 1;
    updateCarousel();
  });

  // Inicializar carrusel
  updateCarousel();
});

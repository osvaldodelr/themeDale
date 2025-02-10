// FUNCIONES DE LA GALERIA DE PRODUCTOS Y DESCRIPCION EN LA PRODUCT PAGE
    const images = [
      "https://picsum.photos/200/300?random=1",
      "https://picsum.photos/200/300?random=2",
      "https://picsum.photos/200/300?random=3",
      "https://picsum.photos/200/300?random=4",
      "https://picsum.photos/200/300?random=5",
      "https://picsum.photos/200/300?random=7"
    ];
    const filmstrip = document.querySelector('.filmstrip');
    const mainImage = document.querySelector('.main-image');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    images.forEach((image, index) => {
      const img = document.createElement('img');
      img.src = image;
      img.classList.add('filmstrip-image');
      img.addEventListener('click', () => {
        currentIndex = index;
        updateGallery();
      });
      filmstrip.appendChild(img);
    });

    function updateGallery() {
      mainImage.src = images[currentIndex];
      document.querySelectorAll('.filmstrip-image').forEach((img, i) => img.classList.toggle('active', i === currentIndex));
      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex === images.length - 1;
    }

    prevButton.onclick = () => { currentIndex--; updateGallery(); };
    nextButton.onclick = () => { currentIndex++; updateGallery(); };
    
    updateGallery();

    // VENTANA MODAL PRODUCT EBAY
    document.addEventListener("DOMContentLoaded", function() {
        const mainImage = document.querySelector(".main-image");
        const modalImage = document.getElementById("modalImage");
        const imageModal = new bootstrap.Modal(document.getElementById("imageModal"));
    
        mainImage.addEventListener("click", function() {
          modalImage.src = mainImage.src;
          imageModal.show();
        });
      });


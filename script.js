const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const sidePanel = document.querySelector('.side-panel');

function toggleMenu() {
  overlay.classList.toggle('active');
  sidePanel.classList.toggle('active');
  hamburger.classList.toggle('active');
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') toggleMenu();
});

hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Modal Pop Ups and What Not

const modal = document.getElementById("imageModal");

if (modal) {
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".modal-close");
  const prevBtn = document.querySelector(".modal-nav.prev");
  const nextBtn = document.querySelector(".modal-nav.next");

  const images = Array.from(document.querySelectorAll(".gallery-item img"));
  let currentIndex = 0;

  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index;
      showImage();
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  function showImage() {
    modalImg.src = images[currentIndex].src;
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
  }

  nextBtn?.addEventListener("click", nextImage);
  prevBtn?.addEventListener("click", prevImage);

  function closeModal() {
    modal.classList.remove("active");
    modalImg.src = "";
    document.body.style.overflow = "";
  }

  closeBtn?.addEventListener("click", closeModal);

  modal.addEventListener("click", e => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", e => {
    if (!modal.classList.contains("active")) return;

    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") closeModal();
  });
}

/* Swipe support */
let startX = 0;

modalImg.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

modalImg.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;

  if (Math.abs(diff) > 50) {
    diff > 0 ? nextImage() : prevImage();
  }
});
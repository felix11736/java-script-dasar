const carousel = document.querySelector(".carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;

const slides = document.querySelectorAll(".carousel-item");

function showSlide(index) {
  if (index < 0) {
    currentIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentIndex = 0;
  }

  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener("click", () => {
  showSlide(currentIndex - 1);
});

nextBtn.addEventListener("click", () => {
  showSlide(currentIndex + 1);
});

showSlide(currentIndex);

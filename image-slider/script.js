const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentSlide = 0;

// Function to show a slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

// Event listeners for navigation buttons
prevBtn.addEventListener("click", () => {
  currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
  showSlide(currentSlide);
});

nextBtn.addEventListener("click", () => {
  currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
  showSlide(currentSlide);
});

// Initial slide display
showSlide(currentSlide);

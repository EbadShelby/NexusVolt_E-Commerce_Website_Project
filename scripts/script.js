const track = document.querySelector(".ads-carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".ads-carousel__button--right");
const prevButton = document.querySelector(".ads-carousel__button--left");
const dotsNav = document.querySelector(".ads-carousel__nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange the slides next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("ads-carousel__current-slide");
  targetSlide.classList.add("ads-carousel__current-slide");
};

// Move slides to the left
prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".ads-carousel__current-slide");
  const prevSlide = currentSlide.previousElementSibling;

  moveToSlide(track, currentSlide, prevSlide);
});

// Move slides to the right
nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".ads-carousel__current-slide");
  const nextSlide = currentSlide.nextElementSibling;

  moveToSlide(track, currentSlide, nextSlide);
});


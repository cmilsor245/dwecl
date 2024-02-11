let slider_index = 0;
const SLIDES = document.querySelectorAll('.slider-img');
const TOTAL_SLIDES = SLIDES.length;
const NEXT_BUTTON = document.querySelector('.slider-btn--right');
const PREV_BUTTON = document.querySelector('.slider-btn--left');
const SLIDE_INTERVAL = 2500;

/* ------------------------------------------------------------------------------------------------------- */

function setupSlides() {
  SLIDES.forEach((slide, index) => {
    slide.style.transition = 'transform 0.5s ease-in-out';
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
}

function showSlide(index) {
  const OFFSET = index * 100;
  SLIDES.forEach((slide, i) => {
    slide.style.transform = `translateX(-${OFFSET}%)`;
  });
}

function nextSlide() {
  slider_index = (slider_index + 1) % TOTAL_SLIDES;
  showSlide(slider_index);
}

function prevSlide() {
  slider_index = (slider_index - 1 + TOTAL_SLIDES) % TOTAL_SLIDES;
  showSlide(slider_index);
}

function autoChangeSlides() {
  nextSlide();
  setTimeout(autoChangeSlides, SLIDE_INTERVAL);
}

/* ------------------------------------------------------------------------------------------------------- */

NEXT_BUTTON.addEventListener('click', nextSlide);
PREV_BUTTON.addEventListener('click', prevSlide);

document.addEventListener('keydown', function(event) {
  if (document.activeElement === document.body) {
    return;
  }
  if (document.activeElement !== NEXT_BUTTON && document.activeElement !== PREV_BUTTON) {
    return;
  }

  if (event.key === 'ArrowRight') {
    nextSlide();
  } else if (event.key === 'ArrowLeft') {
    prevSlide();
  }
});

setupSlides();
showSlide(slider_index);
autoChangeSlides();
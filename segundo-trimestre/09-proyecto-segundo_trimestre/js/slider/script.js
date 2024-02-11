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

function show_slide(index) {
  const offset = index * 100;
  SLIDES.forEach((slide, i) => {
    slide.style.transform = `translateX(-${offset}%)`;
  });
}

function next_slide() {
  slider_index = (slider_index + 1) % TOTAL_SLIDES;
  show_slide(slider_index);
}

function prev_slide() {
  slider_index = (slider_index - 1 + TOTAL_SLIDES) % TOTAL_SLIDES;
  show_slide(slider_index);
}

function autoChangeSlides() {
  next_slide();
  setTimeout(autoChangeSlides, SLIDE_INTERVAL);
}

/* ------------------------------------------------------------------------------------------------------- */

NEXT_BUTTON.addEventListener('click', next_slide);
PREV_BUTTON.addEventListener('click', prev_slide);

document.addEventListener('keydown', function(event) {
  if (document.activeElement === document.body) {
    return;
  }
  if (document.activeElement !== NEXT_BUTTON && document.activeElement !== PREV_BUTTON) {
    return;
  }

  if (event.key === 'ArrowRight') {
    next_slide();
  } else if (event.key === 'ArrowLeft') {
    prev_slide();
  }
});

setupSlides();
show_slide(slider_index);
autoChangeSlides();
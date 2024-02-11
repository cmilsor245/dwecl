const GUIDE_OVERLAYS = document.querySelectorAll('.guide-overlay')
const GUIDES = document.querySelectorAll('.guide')

GUIDES.forEach((guide, index) => {
  guide.addEventListener('mouseenter', () => {
    GUIDE_OVERLAYS[index].classList.remove('hidden')
  })
  guide.addEventListener('mouseleave', () => {
    GUIDE_OVERLAYS[index].classList.add('hidden')
  })
})
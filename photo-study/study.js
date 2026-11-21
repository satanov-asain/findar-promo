const board = document.querySelector('.image-board');
const stage = board.querySelector('.image-stage');
const photoLayer = document.createElement('div');
photoLayer.className = 'photo-layer';
photoLayer.append(...stage.children);
stage.append(photoLayer);
const glint = document.createElement('span');
glint.className = 'photo-glint';
glint.setAttribute('aria-hidden', 'true');
stage.append(glint);

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const areaButtons = [...board.querySelectorAll('[data-area]')];
let glintAnimation;

function reflectLight() {
  if (reducedMotion.matches) return;
  glintAnimation?.cancel();
  glintAnimation = glint.animate([
    { transform: 'translateX(-63%)', opacity: 0 },
    { opacity: .25, offset: .5 },
    { transform: 'translateX(63%)', opacity: 0 },
  ], { duration: 640, easing: 'ease-out' });
}

for (const button of areaButtons) {
  button.addEventListener('click', () => {
    if (button.getAttribute('aria-pressed') === 'true') return;
    board.dataset.active = button.dataset.area;
    for (const item of areaButtons) {
      const selected = item === button;
      item.setAttribute('aria-pressed', String(selected));
      document.getElementById(item.dataset.area).hidden = !selected;
    }
    reflectLight();
  });
}

const follow = document.querySelector('.study-follow');
const followObserver = new IntersectionObserver(([entry], observer) => {
  if (!entry.isIntersecting) return;
  follow.classList.add('study-in-view');
  observer.disconnect();
}, { threshold: .16 });
followObserver.observe(follow);

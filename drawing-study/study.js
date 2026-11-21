const jointButtons = [...document.querySelectorAll('[data-joint]')];
const meaningButtons = [...document.querySelectorAll('[data-key]')];
const selectionButton = document.querySelector('[data-key="joint"]');
const plates = document.querySelectorAll('[data-plate]');
const definitions = document.querySelectorAll('[data-word]');
const layout = document.querySelector('.drawing-layout');
const illustration = layout.querySelector('.drawing-illustration');
const guide = document.createElement('div');
guide.className = 'drafting-guide';
guide.setAttribute('aria-hidden', 'true');
illustration.append(guide);
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let guideAnimation;
let joint = 'BW';
let designation = '135';

function updateDefinition() {
  layout.dataset.focus = designation;
  if (!reducedMotion.matches) {
    guideAnimation?.cancel();
    guideAnimation = guide.animate(
      [{ clipPath: 'inset(90% 100% 0 0)' }, { clipPath: 'inset(0)' }],
      { duration: 460, easing: 'ease-out' },
    );
  }
  const word = designation === 'joint' ? joint : designation;
  for (const definition of definitions) {
    definition.hidden = definition.dataset.word !== word;
  }
  for (const button of meaningButtons) {
    button.setAttribute('aria-pressed', String(button.dataset.key === designation));
  }
}

for (const button of meaningButtons) {
  button.addEventListener('click', () => {
    designation = button.dataset.key;
    updateDefinition();
  });
}

for (const button of jointButtons) {
  button.addEventListener('click', () => {
    joint = button.dataset.joint;
    selectionButton.textContent = joint;
    for (const plate of plates) {
      plate.hidden = plate.dataset.plate !== joint;
    }
    for (const item of jointButtons) {
      item.setAttribute('aria-pressed', String(item === button));
    }
    designation = 'joint';
    updateDefinition();
  });
}

updateDefinition();

const follow = document.querySelector('.study-follow');
const followObserver = new IntersectionObserver(([entry], observer) => {
  if (!entry.isIntersecting) return;
  follow.classList.add('study-in-view');
  observer.disconnect();
}, { threshold: .16 });
followObserver.observe(follow);

const jointButtons = [...document.querySelectorAll('[data-joint]')];
const meaningButtons = [...document.querySelectorAll('[data-key]')];
const selectionButton = document.querySelector('[data-key="joint"]');
const plates = document.querySelectorAll('[data-plate]');
const definitions = document.querySelectorAll('[data-word]');
let joint = 'BW';
let designation = '135';

function updateDefinition() {
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

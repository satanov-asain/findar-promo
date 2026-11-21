const board = document.querySelector('.image-board');
const areaButtons = [...board.querySelectorAll('[data-area]')];

for (const button of areaButtons) {
  button.addEventListener('click', () => {
    board.dataset.active = button.dataset.area;
    for (const item of areaButtons) {
      const selected = item === button;
      item.setAttribute('aria-pressed', String(selected));
      document.getElementById(item.dataset.area).hidden = !selected;
    }
  });
}

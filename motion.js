// The nearest chapter selects the photograph displayed on the facing page.
const chapters = [...document.querySelectorAll('.chapter')];
const frames = [...document.querySelectorAll('.frame')];
const desktopMotion = matchMedia('(min-width: 751px) and (prefers-reduced-motion: no-preference)');
let queued = false;
function updateChapter() {
  queued = false;
  const middle = innerHeight * .52;
  let selected = 0;
  chapters.forEach((chapter, index) => {
    if (chapter.getBoundingClientRect().top <= middle) selected = index;
  });
  frames.forEach((frame,index)=>frame.classList.toggle('current',index===selected));
}
function scheduleChapter() {
  if (!desktopMotion.matches || queued) return;
  queued=true; requestAnimationFrame(updateChapter);
}
document.querySelector('.report').classList.add('enhanced');
addEventListener('scroll',scheduleChapter,{passive:true});
addEventListener('resize',scheduleChapter);
desktopMotion.addEventListener('change',scheduleChapter);
updateChapter();

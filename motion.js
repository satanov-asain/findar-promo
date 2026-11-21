// Orthographic study of a T-joint. Geometry is illustrative and has no inspection scale.
const canvas = document.querySelector('#joint');
const context = canvas.getContext('2d');
const control = document.querySelector('#orbit');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
let angle = Number(control.value);
let scheduled = false;
let manual = false;

function drawJoint() {
  scheduled = false;
  const {width, height} = canvas.getBoundingClientRect();
  if (!width || !height) return;
  const dpr = Math.min(devicePixelRatio, 2);
  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  context.setTransform(dpr, 0, 0, dpr, 0, 0);
  const scale = Math.min(width / 5.2, height / 3.7);
  const yaw = angle * Math.PI / 180;
  const c = Math.cos(yaw), s = Math.sin(yaw);
  const faces = [];
  function project([x,y,z]) {
    const depth = x*s + z*c;
    return [width/2 + scale*(x*c-z*s), height*.60 + scale*(depth*.46-y*.89), depth*.89+y*.46];
  }
  function face(vertices, color, stroke) {
    const points = vertices.map(project);
    const depth = points.reduce((sum,p)=>sum+p[2],0)/points.length;
    faces.push({points,depth,color,stroke});
  }
  function box(x0,x1,y0,y1,z0,z1) {
    const top = [[x0,y1,z0],[x1,y1,z0],[x1,y1,z1],[x0,y1,z1]];
    const bottom = top.map(([x,,z])=>[x,y0,z]);
    face(top,'#bdc8cb','#e5eff1');
    for(let i=0;i<4;i++) {
      const next=(i+1)%4;
      face([top[i],top[next],bottom[next],bottom[i]],['#505e62','#849296','#75868b','#526368'][i],'#aebdc0');
    }
  }
  function paintLayer() {
    faces.sort((a,b)=>a.depth-b.depth);
    for(const {points,color,stroke} of faces) {
      context.beginPath();
      points.forEach(([x,y],i)=>i?context.lineTo(x,y):context.moveTo(x,y));
      context.closePath();
      if(color===stroke) {
        context.fillStyle=color;
      } else {
        const shade = context.createLinearGradient(0,height,width,0);
        shade.addColorStop(0,stroke);
        shade.addColorStop(.38,color);
        shade.addColorStop(1,color);
        context.fillStyle=shade;
      }
      context.fill();
      context.strokeStyle=color; context.lineWidth=.65; context.stroke();
    }
    faces.length=0;
  }
  box(-1.85,1.85,-.16,0,-.96,.96);
  paintLayer();
  box(-1.8,1.8,0,1.03,-.09,.09);
  paintLayer();
  // The control keeps the camera facing the welded side of the upright.
  // Draw its continuous bead after the plates to preserve the exposed surface.
  const stations=144, strips=8;
  function bead(i,j) {
    const t=j/strips;
    const ridge=Math.cos(i*Math.PI/2 - 2.7*Math.sin(t*Math.PI));
    return [-1.79+3.58*i/stations,
      .245*(1-t)+(.027+.011*ridge)*Math.sin(Math.PI*t),
      .091+.245*t+(.027+.011*ridge)*Math.sin(Math.PI*t)];
  }
  for(let i=0;i<stations;i++) {
    for(let j=0;j<strips;j++) {
      const shine=Math.cos(i*Math.PI/2-2.7*Math.sin(Math.PI*(j+.5)/strips));
      const tint=Math.round(128+39*shine+24*Math.sin(Math.PI*(j+.5)/strips));
      const metal='rgb('+tint+','+(tint+9)+','+(tint+12)+')';
      face([bead(i,j),bead(i+1,j),bead(i+1,j+1),bead(i,j+1)],metal,metal);
    }
  }
  paintLayer();
  control.nextElementSibling.textContent = Math.round(angle)+'°';
}
function schedule() {
  if (!scheduled) { scheduled=true; requestAnimationFrame(drawJoint); }
}
if(context) {
  canvas.hidden=false;
  document.querySelector('#model-fallback').hidden=true;
  control.parentElement.hidden=false;
  control.addEventListener('input',()=>{ manual=true; angle=Number(control.value); schedule(); });
  addEventListener('scroll',()=>{
    if(manual || reduced.matches) return;
    const height=document.querySelector('.lab-cover').offsetHeight;
    const next=-28+48*Math.min(1,Math.max(0,scrollY/height));
    if(next===angle) return;
    angle=next;
    control.value=String(Math.round(angle)); schedule();
  },{passive:true});
  new ResizeObserver(schedule).observe(canvas);
  schedule();
}

# FINDAR Motion And Animation Standard

## Motion Principles

1. Functional first.
   Motion must explain state, confirm action, guide attention, or preserve spatial continuity.

2. Brief and subtle.
   Default UI transitions should be short. Anything long must have a product reason.

3. Industrial, not playful.
   No bounce, wobble, jelly, rubber, confetti, flashy loops, decorative blinking.

4. Productive by default.
   Use IBM Carbon's productive/expressive split:
   - productive: hover, press, reveal, copy confirmation, accordion, header state;
   - expressive: rare hero entrance, primary CTA emphasis, major milestone.

5. Accessible by default.
   Every non-essential animation must respect `prefers-reduced-motion`.

## Motion Tokens

Recommended CSS variables:

```css
:root {
  --motion-fast: 110ms;
  --motion-medium: 180ms;
  --motion-slow: 280ms;
  --motion-productive: cubic-bezier(0.2, 0, 0.38, 0.9);
  --motion-enter: cubic-bezier(0, 0, 0.38, 0.9);
  --motion-exit: cubic-bezier(0.2, 0, 1, 0.9);
}
```

Usage:

- Hover / active state: 90-120ms.
- Small reveal / tooltip / button feedback: 110-180ms.
- Section reveal: 180-280ms.
- Hero / large transition: 280-420ms max.
- Background dimming: up to 700ms only for modal-like context, not for normal scroll.

## Performance Rules

Animate:

- `transform`;
- `opacity`;
- CSS variables that only feed transform/opacity;
- pseudo-element opacity/transform;
- filter only with restraint and browser QA.

Avoid animating:

- `height`;
- `width`;
- `top`;
- `left`;
- `margin`;
- `padding`;
- large `box-shadow`;
- `backdrop-filter` during continuous scroll.

If a dimension must change, reserve stable layout space first, then animate internal transform/opacity. Header shrink must be designed this way.

## Reduced Motion

Every animated implementation must include:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
  }
}
```

If JS drives animations, it must check:

```js
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
```

## FINDAR Motion Patterns

### Header shrink

Good:

- bar becomes slightly denser;
- logo remains centered;
- CTA remains stable;
- secondary controls reduce priority;
- content below does not jump.

Bad:

- logo moves off-center;
- CTA squeezes into logo;
- language buttons disappear without spatial planning;
- header height depends on image natural dimensions;
- page jumps when state changes.

### Section reveal

Good:

- sections fade + translateY 12-20px once;
- reveal happens only when section enters viewport;
- reduced motion uses instant appearance.

Bad:

- every card animates with a huge delay chain;
- text slides sideways while reading;
- reveal loops on every scroll.

### CTA feedback

Good:

- hover: slight elevation or contrast;
- active: pressed transform scale 0.98;
- copy code: clear text/state change.

Bad:

- endless pulsing;
- glowing every second;
- jitter/vibrate.

### Parallax

Allowed only if:

- very subtle;
- background-only;
- no essential text moves against background;
- disabled for reduced motion;
- tested on mobile.

For FINDAR, parallax should feel like a slow camera shift over welding material, not like a theme-park effect.

## QA Requirements

Before accepting any motion:

- Test desktop and mobile viewport.
- Verify no overlap during transition.
- Verify no CLS-like visual jump.
- Check console errors.
- Check `prefers-reduced-motion`.
- Confirm animated properties are transform/opacity where possible.
- Confirm motion has a named product purpose.

# FINDAR UI Implementation Checklist

Use this before considering a visual task complete.

## Design Quality

- The change fits industrial premium, not generic SaaS.
- The first viewport clearly communicates FINDAR and practical welder testing.
- The visual hierarchy guides the user toward application/WhatsApp.
- No decorative element competes with primary text or CTA.
- No cards inside cards unless it is a real tool/modal/repeated item.
- No gradient blobs/orbs, random glow, or one-note palette.

## Header

- Logo is centered in initial and compact state.
- CTA remains visible and reachable.
- Header does not overlap hero content on load.
- Header transition does not resize from uncontrolled image dimensions.
- Mobile layout is separately checked.

## Motion

- Every motion has a purpose: feedback, state, navigation, signifier.
- Uses transform/opacity where possible.
- No infinite decorative animation.
- `prefers-reduced-motion` is respected.
- No layout jump during scroll.

## Accessibility

- Text contrast is readable.
- UI boundaries/focus states meet visual clarity expectations.
- Meaningful non-text UI cues have at least 3:1 contrast where applicable.
- CTA can be recognized without relying only on color.
- Hover-only information is not required to complete the flow.

## Responsive

- Check at minimum: 390x844, 768x1024, 1280x900, 1440x900.
- Long Russian/Kazakh/Finnish/English labels do not overflow controls.
- Buttons do not wrap into broken shapes.
- Hero keeps a hint of next section visible if designed as landing hero.

## Browser QA

- Open locally through a server, not only file preview, when JS/assets are involved.
- Check console/page errors.
- Check interactive states: language switch, CTA link, code copy.
- Take screenshots or DOM measurements for risky layout changes.

## Content

- Welding/testing terms are precise.
- Quality control abbreviations are consistent: VT, UT, PT.
- Position diagrams must be technical, clear, and not decorative.
- Marketing claims must not exceed what the page can support.

# Codex Project Memory: FINDAR

## Project

Static HTML/CSS site for FINDAR, a practical welder assessment and testing project in Kazakhstan.

## Mandatory Design Context

Before visual implementation, read:

- `docs/design/README.md`
- `docs/design/00-design-research.md`
- `docs/design/01-findar-design-direction.md`
- `docs/design/02-motion-and-animation.md`
- `docs/design/03-skeuomorphism-neumorphism-notes.md`
- `docs/design/04-implementation-checklist.md`

## Quality Bar

The site must feel like an industrial premium certification/testing product. Avoid generic landing-page visual noise. Use restrained technical style, real industrial imagery, strong hierarchy, precise spacing, accessible contrast and purposeful motion.

## Current Header Requirement

The header is intentionally different on desktop and mobile.

- Desktop: logo starts in the container-aligned header position. The language switch stays available; no separate header signup button. On scroll the logo moves to the physical left edge of the viewport and scales up. When the hero WhatsApp CTA is about 150px from leaving the top of the viewport, it smoothly transforms/docks underneath the scaled logo at the same physical left edge. The docked CTA width must match the scaled logo-card width.
- Mobile: layout rules live in `styles-mobile.css`. The logo and language switch sit inside an edge-to-edge semi-transparent medium steel `.site-header` top bar: `top/right/left: 0`, no side inset, only bottom rounding. It must not read as a floating card and must not create a dead empty gap before hero content. The initial hero WhatsApp CTA stays in the hero and exits strongly to the right on scroll; a separate `.mobile-bottom-wa` fixed CTA enters from the right. Near the final "Связаться с нами" CTA, the bottom fixed CTA slides out to the right to avoid duplicate actions. When scrolling back to the top, the bottom CTA exits right and the hero CTA returns from the left.
- Welding position assets are stored in strict display order: `assets/welding-position-bw-pf.png` = BW PF, `assets/welding-position-fw-pf.png` = FW PF, `assets/welding-position-bw-pf-bs.png` = BW PF bs, `assets/welding-position-fw-pf-ml.png` = FW PF ml. These replace the old placeholder SVGs in `.position-item`.

## CSS Layout Split

- `styles.css`: shared/global visual system and common component styles.
- `styles-desktop.css`: desktop/tablet layout and desktop scroll docking.
- `styles-mobile.css`: mobile header, mobile CTA choreography and mobile-specific layout overrides.

Any future header work must be treated as a high-risk visual interaction and checked in browser on desktop and mobile.

## Required QA For UI Work

- Browser QA on desktop and mobile.
- Check console errors.
- Check scroll behavior.
- Check language switch.
- Check WhatsApp CTA link behavior.
- Check reduced-motion behavior for animation work.

## Design Direction Keywords

industrial premium, welding, certification, technical control, dark graphite, safety yellow, controlled blue, steel surfaces, precise diagrams, productive motion, accessible physicality.

# Skeuomorphism And Neumorphism Notes

## Definitions For This Project

Skeuomorphism:
using cues from real-world objects/materials so the interface feels familiar and physically understandable.

Neumorphism:
soft extruded surfaces created with subtle light and shadow, usually on similar-color backgrounds.

For FINDAR, neither style should be copied literally. The target is material realism with industrial restraint.

## Why This Matters For FINDAR

FINDAR is connected to welding, testing, certification and quality control. A completely flat generic web style weakens that context. Some physicality is useful:

- panels can feel like equipment panels;
- code box can feel like an instrument display;
- welding position diagrams can feel like technical drawings;
- CTA can feel like a real safety/action control.

But heavy skeuomorphism can look outdated, and pure neumorphism can become low-contrast and inaccessible.

## Good Skeuomorphic Direction

Use real-world cues abstractly:

- brushed/dark steel surfaces;
- safety-yellow strips;
- engraved technical dividers;
- gauge-like code display only where it fits;
- technical diagrams with precise strokes;
- subtle screw/plate/grid references only if they do not distract.

Do not:

- imitate a full physical machine console everywhere;
- add fake bolts and textures to every card;
- use realistic controls if they are not interactive;
- let metaphor override clarity.

## Good Neumorphic Direction

Use neumorphism only as a secondary material treatment:

- low-depth panels on light-gray surfaces;
- dark inset displays for code/status;
- pressed state for buttons/toggles;
- subtle inner shadow for input-like areas.

Required safeguards:

- visible border or contrast line;
- text contrast must remain strong;
- focus state must be explicit;
- not used as the only affordance;
- no pale-on-pale controls.

## Bad Neumorphism For FINDAR

Avoid:

- all-gray soft UI where buttons are hard to detect;
- no-border cards that rely only on shadow;
- white text on low-contrast translucent surfaces;
- soft pastel panels that make the brand feel medical/consumer instead of industrial;
- tiny icon buttons without labels or clear hit areas.

## Practical FINDAR Recipe

Recommended material stack:

1. Base: dark graphite / cold light-gray.
2. Surface: clear panels with 1px border.
3. Depth: one directional shadow, not multiple blurred shadows everywhere.
4. Action: yellow fill, black text, strong hover/active state.
5. Technical accent: blue for brand highlights, active metrics, fine diagram strokes.
6. Physical detail: thin safety strip, inset code display, technical grid, welding photo texture.

Example CSS direction:

```css
.industrial-panel {
  border: 1px solid rgba(255, 255, 255, .12);
  background:
    linear-gradient(145deg, rgba(255, 255, 255, .08), rgba(255, 255, 255, .02)),
    #101823;
  box-shadow: 0 20px 60px rgba(0, 0, 0, .28);
}

.inset-display {
  border: 1px solid rgba(255, 196, 0, .35);
  background: rgba(0, 0, 0, .42);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .08);
}
```

## Decision Rules

Use skeuomorphic/physical cues when they:

- improve perceived affordance;
- make testing/industrial context more credible;
- help distinguish important zones;
- support the user's next action.

Reject them when they:

- only decorate;
- reduce contrast;
- make layout heavier;
- slow performance;
- make the site look like a novelty dashboard.

# Design System: 霓虹残响 / NEON AFTERIMAGE

## Implementation provenance
This is a local implementation of a semantic design specification using only the supplied taste-design skill. The specification was established before the HTML implementation. Stitch is unavailable; this is NOT a Stitch-generated screen. No other design skill, external library, or remote visual resource is used.

## 1. Visual Theme & Atmosphere
An underground exhibition catalogue: sculptural, nocturnal, and deliberately asymmetric. Cyberpunk is expressed through machine-made portraits, architectural rain, optical interference, and archival typography rather than purple lighting or game-interface decoration. Creativity 9, variance 8, motion 5, density 5. A graphite opening gives way to a quiet paper-like introduction, then returns to a dark interactive gallery. Generous space separates text from artwork.

## 2. Color Palette & Roles
- **Archive Charcoal** (#171719): primary background and dark ink on light surfaces. Never pure black.
- **Recessed Graphite** (#222225): artwork ground and secondary surfaces.
- **Silver Paper** (#E8E8E8): primary text and introduction background.
- **Machine Gray** (#A3A3A8): secondary text on charcoal.
- **Quiet Rule** (#414145): structural borders on dark surfaces.
- **Residual Citron** (#D4DF79): the only chromatic accent, approximately 61% saturation. Used for the primary action, selected artwork, optical traces, and keyboard focus. No colored gradients or outer glows.

## 3. Typography Rules
- Display: Satoshi, Avenir Next, Century Gothic, then available sans-serif fallback. Chinese: PingFang SC, Microsoft YaHei, sans-serif. No external font requests; rendering follows locally installed fonts.
- Chinese display uses a tight, substantial two-line setting; English uses condensed-looking tracking and controlled scale. Headlines use clamp(), not fixed viewport-sized text.
- Body text is at least 16px, with 1.8 line height and a maximum reading width of 65ch.
- Metadata uses ui-monospace, SFMono-Regular, Consolas, monospace.
- No Inter or generic serif fonts. No text gradients.

## 4. Component Stylings
- Buttons: flat citron primary action, dark text, minimum 44px targets. Hover and pressed states use subtle transform and contrast, never outer glow. Focus is an explicit 2px citron outline; on light surfaces the outline uses charcoal.
- Artwork selectors: full-width editorial rows separated by fine rules, not equal cards. A selected row reveals a description and changes the adjacent artwork. Selection remains understandable without color through an expanded description, minus icon, and accessible expanded state.
- Artwork frames: square or portrait, nearly square corners. No elevated ornamental cards. Caption text occupies its own grid row outside the art.
- Navigation: horizontal on desktop, an accessible disclosure menu on small screens.
- No inputs, loaders, fake forms, or simulated success states are needed.

## 5. Layout Principles
Use CSS Grid within a 1440px maximum container. The hero has a left editorial column and a larger right artwork column. An inline optical fragment punctuates the English title and moves below the title on mobile. Main text and art never overlap. The introduction has an offset two-column editorial composition. The artwork gallery pairs one large changing visual with a narrower stack of three disclosure controls. All multi-column layouts collapse below 768px. No horizontal overflow at 320px. Section spacing uses clamp(3rem, 8vw, 7rem).

## 6. Motion & Interaction
CSS transform and opacity only. Weighty cubic-bezier easing approximates the skill's spring default of stiffness 100 and damping 20 without a runtime library. A slow floating sculpture, breathing status mark, and gently drifting rain provide restrained perpetual motion. Gallery changes enter with a short staggered fade. prefers-reduced-motion disables all animation and smooth scrolling. Native buttons and anchors provide keyboard operation; no custom cursor or pointer-only interaction.

## 7. Anti-Patterns (Banned)
No emojis, Inter, generic serif fonts, pure black, purple/blue neon, oversaturated colors, neon gradients, outer glows, text gradients, custom cursors, overlapping content, three equal cards, centered hero, fabricated metrics, fake system dashboards, generic placeholder names, LABEL // YEAR formatting, AI marketing clichés, scroll prompts, bouncing arrows, remote image URLs, or unsubmitable forms. The exhibition, artists, artworks, and venue are explicitly fictional; no ticket sale is implied.

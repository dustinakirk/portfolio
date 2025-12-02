# Forge Design System Showcase — Application Layout PRD

## Objective
Transform `DesignSystemShowcase.jsx` from a page-style presentation into an application-like workspace that pairs live design seed controls with an interactive preview canvas, enabling quick iteration across website and design-system deliverables within a single viewport.

## Core Experience Shifts
1. **Viewport Utilization**: Occupy the full browser width and height. All content (controls + canvas) must sit inside this responsive viewport with no vertical scroll on large displays.
2. **Persistent Seed Panel**: Move all seed inputs into a slim, fixed-width left rail. This panel is scrollable/pin-able independently from the canvas and remains visible while the user interacts with previews.
3. **Canvas Workspace**: Dedicate the remaining viewport to a canvas surface that hosts preview content, exposes tooling (zoom, pan), and switches between Website and Design System modes.
4. **Preview Toggle**: Replace the current top-level tab header with a centered, floating toggle docked near the canvas bottom edge. Switching modes swaps the canvas content without reflowing the page.

## Layout Blueprint
- **View Layer**
  - `AppShell`: CSS grid or flex layout with two columns: `[left-rail][canvas]`.
  - Left rail width target: 320px base, collapsible on smaller screens.
  - Canvas column: fills remaining width and height, uses absolute positioning to host panning surface.
- **Canvas Surface**
  - Introduce `<CanvasViewport>` component providing grid background via CSS gradients and capturing pan/zoom interactions.
  - Maintain internal transform matrix (scale, translate) stored in React state; support pinch/scroll + toolbar buttons.
  - Overlay bottom-center toggle component (Website Preview / Design System Preview) with subtle glassmorphism styling.

## Seed Control Panel Plan
- Move all seed controls (color pickers, sliders, select) into a vertically stacked layout.
- Group controls with headings (Color, Typography, Layout) for clarity.
- Provide contextual helper text/tooltips instead of the existing Control Components preview (remove that section per requirement).
- Include optional collapse/expand affordance for narrow breakpoints.
- Ensure controls update shared state using debounced handlers to reduce excessive re-rendering during drags.

## Canvas Interaction Requirements
- **Grid Background**
  - Use layered CSS gradients (`linear-gradient` + `radial-gradient`) to create a subtle dot or line grid responsive to zoom level.
  - Grid color should derive from tokenized surface + border shades.
- **Pan & Zoom**
  - Mouse/trackpad: drag with space+drag or middle mouse, wheel to zoom around cursor.
  - Touch: pinch-to-zoom, two-finger pan.
  - Provide min/max scale (e.g., 0.5× to 2.5×) and reset button.
- **Focus Management**
  - Keep toggle and toolbar focusable; provide keyboard shortcuts (e.g., `[` and `]` for zoom).

## Website Preview Mode (Canvas Content)
- Reuse the existing website preview layout but render it within a framed “device” card that responds to canvas transformations.
- Consolidate preview into a `WebsitePreviewCanvas` component that accepts tokens and responds to canvas scale.
- Optional enhancements: add annotation overlays or callouts when hovered to explain token derivations.

## Design System Mode (Canvas Content)
- Build `SystemPreviewCanvas` component that organizes token-derived components into structured sections (e.g., Color, Typography, Components, Patterns).
- Each component tile should include:
  - Interaction demos (e.g., button hover states, toggled tabs).
  - Short description text pinned below or in a tooltip explaining token dependencies.
  - Optional quick-action button to copy CSS variable.
- Ensure layout uses smart positioning (e.g., masonry grid or columns) and respects canvas pan/zoom state.

## Toggle & Tooling
- Bottom-center toggle dock containing:
  - Segmented control for `Website Preview` / `Design System`.
  - Zoom-out, reset, zoom-in buttons (icons with tooltips/hotkeys).
  - Canvas position indicator (e.g., coordinates or breadcrumb) for feedback.
- Maintain accessibility (aria-pressed, aria-labels) and keyboard operability.

## State & Data Flow
- Centralize seed state and derived tokens in context/provider so both the control rail and canvas consume consistent values.
- Store canvas interaction state (`scale`, `translate`) locally within canvas component but sync to URL hash or local storage for session persistence if feasible.
- Memoize heavy computations (token generation, preview datasets) to prevent rerenders while panning/zooming.

## Responsiveness & Edge Cases
- When viewport width < 1024px, allow the seed rail to collapse into a drawer while the canvas remains full-screen.
- Provide fallback static layout (no pan/zoom) for narrow/mobile to maintain usability.
- Handle high-contrast and reduced motion preferences via CSS custom properties.

## Accessibility Considerations
- Ensure all interactive items are keyboard reachable.
- Provide descriptive ARIA labels for mode toggle, zoom controls, and canvas instructions.
- Offer non-gesture controls for pan/zoom (keyboard arrows, dedicated buttons).

## Implementation Steps (High-Level)
1. Scaffold layout shell and migrate seed controls into left rail.
2. Build canvas container with grid background + transform state.
3. Implement pan/zoom mechanics with pointer events and keyboard helpers.
4. Port existing website preview into canvas component; adjust sizing to fit new context.
5. Assemble design system canvas with organized, interactive component tiles and descriptions.
6. Create bottom toggle + toolbar overlay, connecting it to mode state and canvas controls.
7. Remove legacy control components, adjust data structures, and ensure tokens drive all visuals.
8. Polish responsiveness, accessibility, and performance (memoization, debounced updates).

## Dependencies & Tooling Notes
- May require lightweight utility for pan/zoom (custom hook or small library if allowed); prioritize first-party implementation to maintain control.
- Consider extracting token generation into reusable hook for possible future multi-canvas support.

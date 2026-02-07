# Design Language Specification v2.2: Sovereign Swarm
**Target**: `sovereignswarm.com`
**Status**: DRAFT / APPROVED FOR BUILD
**Codename**: "Orbital Lattice"

## 1. The Core Harmony (Philosophy)
The objective is to elevate the brand from "Cyberpunk Underground" (Hacker aesthetic) to "Sovereign Infrastructure" (Institution aesthetic). The current design feels like a terminal from a movie; the new design must feel like the actual operating system of a distributed supercomputer.

### The Shift
| Dimension | Old (v2.1) | New (v2.2) |
| :--- | :--- | :--- |
| **Metaphor** | Retro CRT Monitor | Tier-4 Datacenter Control Plane |
| **Lighting** | Neon Glow / Bloom | Stark Contrast / Optical Clarity |
| **Typography** | Monospace Everywhere | Swiss Sans (Headers) + Technical Mono (Data) |
| **Layout** | Centered / Floating | Rigid Grid / Architectural / Asymmetrical |
| **Emotion** | "Nostalgic", "Rebellious" | "Precise", "Inevitable", "Powerful" |

## 2. Structural Architecture
The layout must command authority through precision, not decoration.

### The Grid System
*   **Visible Structure**: Implement a 12-column grid with visible 1px dividers (`border-white/5` or `border-zinc-800`). The user should "feel" the mathematical underlying structure.
*   **Bento/Modular Layouts**: Use stark, bordered containers for content (similar to the provided "Modular Feature Grid" but tighter).
*   **Negative Space**: Increase padding. "Silence" (whitespace) creates authority.
    *   *Guidance*: Section vertical padding `py-24` or `py-32`.

### Typography Strategy
*   **Primary (Headings)**: Move away from Monospace for the "Big Claims". Use a neo-grotesque Sans (e.g., **Inter**, **Switzer**, or **Manrope**).
    *   *Style*: Uppercase, Bold (700/800), Tight Tracking (`-0.03em`).
    *   *Color*: `text-white` (Absolute White).
*   **Secondary (Data/Labels)**: Keep Monospace (e.g., **JetBrains Mono** or **Geist Mono**).
    *   *Usage*: Metadata, timestamps, hash IDs, status indicators.
    *   *Style*: Uppercase, Small (`text-[10px]` or `text-xs`), Wide Tracking (`0.1em`).
    *   *Color*: `text-zinc-500` (Subtle).

## 3. Interactive Strategy (Motion & Feedback)
Animations must reflect "Machine Coordination", not "Biological Breathing".

*   **Remove**: The "CRT Scanline" and generic "Glows". They cheapen the aesthetic.
*   **Add**:
    *   **The "Shutter" Reveal**: Text reveals line-by-line or character-by-character (scramble effect), but fast (decoded).
    *   **Grid Reactivity**: Hovering over a grid cell creates a subtle background highlight (`bg-white/5`) or highlights the borders (crosshairs).
    *   **Mechanical Ease**: Transitions should be snappy (`duration-200 ease-out`), feeling like a switch engaging, not a liquid flowing.
    *   **Parallax**: Deep z-index layering. Background elements move slower than foreground data.

## 4. Code Implementation Guidance
Recommendations for the Builder (Next.js / Tailwind).

### Color Palette (Tailwind)
Move to a "Monochrome + Signal" palette.
```javascript
colors: {
  background: '#050505', // "Void" - Darker than black, avoids OLED smear
  surface: '#0A0A0A',    // "Plate"
  border: '#27272a',     // Zinc-800
  primary: '#FFFFFF',    // "Signal White"
  secondary: '#A1A1AA',  // Zinc-400
  accent: '#00EDA0',     // "Isotope Green" (Sharper than #4ade80)
}
```

### Component Upgrades
1.  **Navbar**:
    *   Make it full-width, border-bottom `border-white/10`.
    *   Logo on left, "Connect" on right (Monospace button).
    *   Glassmorphism: Increase blur (`backdrop-blur-xl`), reduce opacity (`bg-black/80`).
2.  **Hero Section**:
    *   Left align. Huge Sans-serif text (e.g., "THE ECONOMIC OS").
    *   Right side: A functional data viz (e.g., a spinning 3D wireframe or a live "Block Height" counter), not just a static image.
3.  **Buttons**:
    *   Remove rounded corners. Go full square or slight chamfer (angled corner).
    *   Hover: Invert colors (White bg, Black text).

### CSS Globals (Refined)
```css
/* Remove the old scanlines */
/* Add selection color */
::selection {
  background: #00EDA0;
  color: #000000;
}
/* Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background: #333;
}
```

## Summary for Builder
"Strip away the decoration. Focus on the Data. If it doesn't serve the Sovereign purpose, delete it. Make it look like a weapon, not a toy."

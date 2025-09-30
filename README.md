# Senseibles — Prism Prelude

A minimalist coming-soon surface for Senseibles Studio, centred on a procedural prism rendered with OGL and wrapped in a dark, cinematic hero layout.

## Highlights
- Single-screen hero with updated positioning copy and CTAs.
- Custom `Prism` component built on OGL for a shimmering, rotating structure.
- Tailwind CSS 4 tokens and Geist font pairing for a polished typographic system.

## Getting Started
1. Install dependencies: `npm install`
2. Run the development server: `npm run dev`
3. Lint and type-check when needed: `npm run lint` · `npm run typecheck`

Open http://localhost:3000 to view the hero experience.

## Project Structure
```
src/
├─ app/
│  ├─ layout.tsx        # Metadata + global font setup
│  ├─ page.tsx          # Renders the hero section
│  └─ globals.css       # Tailwind 4 + design tokens
├─ components/
│  ├─ sections/         # Page-level UI
│  └─ three/            # OGL prism + legacy react-three scaffolding
```

### Custom Prism
The `Prism` component (`src/components/three/Prism.tsx`) encapsulates the OGL renderer, shader program, adaptive resizing, and animation modes. Adjust props on `HeroSection` to tweak rotation, colour, and scale for future explorations.

---
Senseibles Agency Website

# Senseibles — Prism Prelude

A minimalist coming-soon surface for Senseibles Studio, centred on a procedural prism rendered with OGL and wrapped in a dark, cinematic hero layout.

## Highlights
- Single-screen hero with updated positioning copy and CTAs.
- Custom `Prism` component built on OGL for a shimmering, rotating structure.
- Tailwind CSS 4 tokens and Geist font pairing for a polished typographic system.

## Getting Started
1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env.local` and set `LOOPS_API_KEY` with your Loops transactional key.
3. Run the development server: `npm run dev`
4. Lint and type-check when needed: `npm run lint` · `npm run typecheck`

Open http://localhost:3000 to view the hero experience.

## Project Structure
```
src/
├─ app/
│  ├─ layout.tsx        # Metadata + global font setup
│  ├─ page.tsx          # Renders the hero section
│  └─ globals.css       # Tailwind 4 + design tokens
├─ components/
│  ├─ sections/         # Page-level UI + contact form
│  └─ three/            # OGL prism + legacy react-three scaffolding
```

### Custom Prism
The `Prism` component (`src/components/three/Prism.tsx`) encapsulates the OGL renderer, shader program, adaptive resizing, and animation modes. Adjust props on `HeroSection` to tweak rotation, colour, and scale for future explorations.

### Contact Form Flow
- The hero embeds `ContactForm`, which posts to `/api/contact`.
- The API route forwards submissions to Loops using your transactional template (`cmg6gmdqo02ogwh0i94sbidym`).
- Update the Loops transactional in `src/app/api/contact/route.ts` if you swap templates in the future.

---
Senseibles Agency Website

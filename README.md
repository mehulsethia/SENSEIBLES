# Senseibles — Immersive Coming Soon Experience

A high-fidelity “coming soon” presence for Senseibles Studio. Built with Next.js 15, Tailwind CSS 4, and a custom React Three Fiber scene to preview the agency’s spatial aesthetic while collecting project enquiries.

## What’s Inside
- 3D hero canvas with adaptive performance, post-processing, and branded lighting.
- Coming-soon messaging paired with direct mail and contact anchors.
- Server action powered contact form that relays submissions to the studio inbox.
- Tailwind CSS 4 tokens for rapid styling updates.

## Getting Started
1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env.local` and fill in your SMTP credentials (details below).
3. Run the dev server: `npm run dev`
4. Lint and type-check when needed: `npm run lint` · `npm run typecheck`

Visit http://localhost:3000 to review the coming-soon surface and submit a test enquiry.

## Contact Form Delivery
The contact form posts to a Next.js server action that sends email via SMTP.

Set the following variables in `.env.local` before deploying:

```
SMTP_HOST=...
SMTP_PORT=465
SMTP_USER=...
SMTP_PASS=...
# optional: set to "false" if using STARTTLS on port 587
SMTP_SECURE=true

# Optional override (defaults to sethiamehul14@gmail.com)
# CONTACT_RECIPIENT=studio@yourdomain.com
```

- `SMTP_USER`/`SMTP_PASS` should be an app-specific password or transactional inbox credential.
- The email is sent from `Senseibles Website <SMTP_USER>` with replies routed to the sender’s address.
- Missing or invalid SMTP details are surfaced to the user with a fallback message.

## Project Structure
```
src/
├─ app/
│  ├─ actions/          # Server actions (contact form)
│  ├─ layout.tsx        # Metadata + global font setup
│  ├─ page.tsx          # Renders hero + contact sections
│  └─ globals.css       # Tailwind 4 + design tokens
├─ components/
│  ├─ sections/         # Page-level UI
│  └─ three/            # React Three Fiber canvas + scene graph
```

### Extending the Experience
- Swap in GLTF assets within `Experience.tsx` for bespoke artefacts.
- Expand the sections directory with case studies, roster, or culture moments.
- Pipe enquiries into a CRM or automation flow once the SMTP channel is verified.

---
Senseibles Agency Website

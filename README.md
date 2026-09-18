# MALBRO GAMES — website v2

React + Vite site for the studio. Five separate pages, animated transitions
between them, built on the studio's own colour palette.

## Run it

You need Node 18 or newer.

```bash
npm install     # once, after extracting
npm run dev     # http://localhost:5173
npm run build   # production build into dist/
npm run preview # preview the production build
```

## Deploy

Push to GitHub and point Vercel at the repo. No configuration needed — Vercel
detects Vite automatically. `vercel.json` is already included so that direct
links like `/team` and `/contact` resolve instead of 404ing.

- Build command: `npm run build`
- Output directory: `dist`

Your existing GitHub → Vercel → GoDaddy chain keeps working as-is.

## Pages

| Route      | File                    |
| ---------- | ----------------------- |
| `/`        | `src/pages/Home.jsx`    |
| `/about`   | `src/pages/About.jsx`   |
| `/game`    | `src/pages/Game.jsx`    |
| `/team`    | `src/pages/Team.jsx`    |
| `/contact` | `src/pages/Contact.jsx` |

## Changing content

**All text and links live in one file: `src/data/site.js`.** Change the words
there and every page updates. Components only render; they never hardcode copy.

That file holds the studio email, Instagram and LinkedIn URLs, the nav labels,
the about copy, the game description and specs, and the three team bios.

## Changing colours

`src/styles/tokens.css` holds the whole palette as CSS variables, matching the
brand sheet exactly:

```
--void        #080808   main background
--charcoal    #151515   sections / cards
--graphite    #292929   borders / dividers
--off-white   #F5F5F2   primary text
--muted-white #B8B8B2   secondary text
--gold        #E9AC20   primary brand
--gold-bright #F5B916   buttons / highlights
--gold-dark   #8A6412   shadows / gradients
```

Type scale, spacing rhythm and easing curves live in the same file.

## Images — what to replace

Everything is in `public/assets/`. Drop replacements in with the **same
filename** and nothing else needs changing.

| File                   | What it is                                   | Replace?                |
| ---------------------- | -------------------------------------------- | ----------------------- |
| `logo-mark.png`        | Hexagon mark, background removed, transparent | No                      |
| `logo-lockup.png`      | Full horizontal lockup, transparent           | No                      |
| `team-abhijith.jpg`    | Abhijith's photo, converted to black & white  | No                      |
| `team-aditya.jpg`      | **Placeholder**                               | Yes — real photo        |
| `team-roshith.jpg`     | **Placeholder**                               | Yes — real photo        |
| `game-keyart.jpg`      | Demo concept art, black & white               | Yes — when art is ready |
| `game-screen-1..3.jpg` | Demo phone screens, black & white             | Yes — when art is ready |
| `og-image.jpg`         | Link preview image (1200×630)                 | Yes — eventually        |

Portraits are cropped to 4:5, so shoot or crop to that ratio. They are
desaturated in CSS, so you can supply colour originals.

The two placeholder portraits carry a gold "Placeholder image" flag in the UI.
Once you swap the files, set `placeholder: false` for those two people in
`src/data/site.js` and the flag disappears.

## The animations

- **Intro** — the mark draws in, a loading bar fills, then two panels split
  open onto the homepage. Plays once per browser session, not on every visit.
- **Page transitions** — leaving a page pulls five shutter columns across the
  screen; arriving lifts them away. Handled in `src/components/PageShell.jsx`.
- **Hero** — hex lattice on canvas with a gold pulse travelling through it,
  parallax on the mark, title assembling character by character.
- **Scroll wordmark** — the giant MALBRO GAMES band between homepage sections,
  two rows moving in opposite directions, driven by scroll position.
- **Cursor** — a hex ring that trails the pointer and swells over links.
  Desktop only; touch devices never load it.
- **Magnetic buttons** — primary buttons lean toward the pointer.
- **Reveals** — sections and cards rise into view once as you scroll past.

### Turning motion down

Everything respects `prefers-reduced-motion`. If a visitor has that switched on
in their OS, the intro is skipped, smooth scrolling is off, the canvas stops
drawing, the custom cursor never mounts, and all reveals render statically. To
test it, enable "Reduce motion" in your OS accessibility settings and reload.

## Performance notes

- Canvas runs at capped device pixel ratio and pauses when the tab is hidden.
- Framer Motion and React Router are split into separate chunks.
- Images below the fold are lazy-loaded; transitions are transform-only so they
  stay on the compositor.
- Production bundle is around 110 kB gzipped total.

## Project structure

```
public/assets/       images and logos
src/data/site.js     ← all copy and links
src/styles/
  tokens.css         ← palette, type scale, spacing, easing
  global.css         reset, typography, buttons
  layout.css         header, drawer, footer, cursor, intro, transitions
  home.css           homepage
  pages.css          about / game / team / contact
src/components/      Nav, Footer, Intro, Cursor, PageShell, HexField,
                     ScrollWordmark, Seo, Motion (Reveal/SplitText/Magnetic)
src/pages/           one file per route
src/lib/motion.js    smooth scroll, reduced-motion and pointer hooks
```

## SEO

Per-page titles, descriptions and canonical URLs are set by
`src/components/Seo.jsx`. Organisation schema, Open Graph tags and the
favicon are in `index.html`. `public/sitemap.xml` and `public/robots.txt`
both currently point at `https://malbrogames.com` — change that to the real
domain if it differs.

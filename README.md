# Luis Mendoza Portfolio (Static Site)

This is a static personal portfolio site built to mimic the layout and animation feel of `https://tha.jp/works` with a minimalist Japanese aesthetic. It emphasizes letter‑scramble text animations, a custom cursor, list/grid views, and a data‑driven project detail page.

## Why This Exists

The project is designed to:
- Provide a clean, minimalist portfolio with strong typography control.
- Use animated text “scramble” effects for intros, hovers, and link interactions.
- Support a grid/list switcher and responsive layouts.
- Offer a dedicated project detail page with a sticky sidebar, deep‑link anchors, and a full‑width work showcase carousel.
- Make project content easy to update by centralizing data in a single file.

## How To Run

This is a static site; no build tooling is required.

Recommended:
- Serve with a local HTTP server so modules/scripts behave consistently:
  - Python: `python3 -m http.server 8000`
  - Node: `npx serve . -l 8000`
- Open `http://localhost:8000`.

You can also open `index.html` directly, but some browsers restrict local script loading when using `file://`.

## Technical Notes (for machines/AI)

Environment assumptions:
- Chrome 120+, Safari 16+, Edge 120+, Firefox 120+.
- Support for `IntersectionObserver`, `scroll-behavior: smooth`, `backdrop-filter`, CSS grid, and `scroll-snap`.
- Local HTTP server recommended to avoid `file://` restrictions.

External dependencies (loaded via CDN):
- Font Awesome (icons): `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.1/css/all.min.css`
- Google Font (Geologica) and system fallback for Helvetica Neue.

Routing:
- Homepage: `index.html`
- Project detail: `project.html?project=<slug>`

Data source:
- `projects.js` sets `window.PROJECTS`.
- `detail.js` and `script.js` read from `window.PROJECTS` (no fetch).

Fallback notes:
- If `backdrop-filter` is unsupported, blur effects will render as solid/opaque backgrounds.
- If `scroll-snap` is unsupported, the carousel still scrolls horizontally but without snap alignment.

## Editing Project Data (Step-by-step)

1. Open `projects.js`.
2. Find the `window.PROJECTS = [...]` array.
3. Add or edit a project object:
   - `slug`: lowercase, URL-safe string (used in `project.html?project=<slug>`).
   - `title`: display name.
   - `year`, `type`, `tags`: metadata.
   - `images`: array of image URLs (used for thumbnails + hero carousel).
   - `tldr`: `{ heading, bullets: [] }` block.
   - `sections`: array of `{ id, label, includeInNav, body }`.
   - `showcase` (optional): array of image URLs for the work showcase carousel.
4. Save and refresh the browser.

Example project object:
```javascript
{
  slug: "example-project",
  title: "Example Project",
  year: "2026",
  type: "Product Design",
  tags: ["web", "systems"],
  images: [
    "images/example-01.jpg",
    "images/example-02.jpg",
    "images/example-03.jpg"
  ],
  showcase: [
    "images/showcase-01.jpg",
    "images/showcase-02.jpg",
    "images/showcase-03.jpg",
    "images/showcase-04.jpg",
    "images/showcase-05.jpg"
  ],
  tldr: {
    heading: "Fast summary",
    bullets: [
      "Improved onboarding completion by 18%",
      "Unified two legacy flows into one",
      "Reduced time-to-value by 2.5x"
    ]
  },
  sections: [
    {
      id: "tldr",
      label: "TLDR",
      includeInNav: true,
      body: "Short, punchy summary of the project impact and scope."
    },
    {
      id: "overview",
      label: "Project Overview",
      includeInNav: true,
      body: "What the project was, who it was for, and the goals."
    },
    {
      id: "problem",
      label: "Problem/Context",
      includeInNav: true,
      body: "The constraints, risks, and why the work mattered."
    },
    {
      id: "solution",
      label: "Design/Solution",
      includeInNav: true,
      body: "Key design decisions and how they solved the problem."
    },
    {
      id: "impact",
      label: "Impact/Learnings",
      includeInNav: true,
      body: "Results, metrics, and what was learned."
    }
  ]
}
```

## Maintenance

Update this `README.md` after any major layout, interaction, or data model changes so future machines/AI have an accurate handoff.

## Troubleshooting

- **Project detail shows "Project data unavailable."**
  - Ensure `projects.js` is loaded before `detail.js` in `project.html`.
  - Open with a local server (avoid `file://`).
  - Confirm the URL has a valid slug: `project.html?project=<slug>`.

- **Icons not appearing**
  - Verify the Font Awesome `<link>` is present in both `index.html` and `project.html`.
  - Confirm the CDN URL is reachable.

- **Carousel or modal not animating**
  - Check `styles.css` for `.showcase-modal` and `.showcase-card` classes.
  - Ensure `detail.js` runs without errors in the console.

## Key Files

- `index.html`  
  Homepage (intro animation, header, grid/list view, filters, cards).

- `project.html`  
  Project detail template page with header, breadcrumb, and a `project-showcase` section.

- `styles.css`  
  All styling, layout, and animation rules.

- `script.js`  
  Homepage interactions: intro, grid/list toggle, scramble effects, hover image cycling, custom cursor, header hide/show, mobile drawer, language switch.

- `detail.js`  
  Project detail page logic: data lookup, section rendering, sidebar highlighting, hero carousel, work showcase carousel + modal.

- `projects.js`  
  Central project data source (`window.PROJECTS`) used by both pages.

- `site-data.js`  
  Global metadata (name, role, page titles, intro, about copy, footer info).

## Updating Content

All project data lives in `projects.js`.

Each project has:
- `slug`: URL id used for `project.html?project=<slug>`
- `title`, `year`, `type`, `tags`
- `images`: list used for thumbnails and hero cycling
- `tldr`: short summary block
- `sections`: array of body sections, each with `id`, `label`, `body`, `includeInNav`
- `showcase` (optional): image list for the showcase carousel

If `showcase` is missing, the site falls back to `images`.

Footer copy, contact info, and global identity live in `site-data.js` under `window.SITE_DATA`.

## Auto Translation (LibreTranslate)

The site can auto‑translate UI copy using LibreTranslate. This is controlled by:
`window.SITE_DATA.translate` in `site-data.js`.

Settings:
- `enabled`: turn auto translation on/off.
- `sourceLang`: default `"en"`.
- `translateAll`: translate every text node on the page.
- `endpoint`: default `"https://libretranslate.de/translate"`.
- `apiKey`: optional (if your endpoint requires one).

If `translateAll` is `true`, the entire page text is translated except elements marked with `data-no-translate="true"`. If `false`, only elements tagged with `data-auto-translate="true"` are translated.

## Behavior Notes (Why Things Are Built This Way)

- **Scramble text animation**: The primary motion language. It runs on intro and hover to evoke “random letters resolving into meaning,” matching the reference site.
- **Grid/List views**: Grid emphasizes thumbnails; list emphasizes large typography.
- **Sticky sidebar on detail page**: Helps scanning long text. The carousel is outside the article so the sidebar doesn’t stay fixed once you reach the showcase section.
- **Work showcase carousel**: Full‑width visual section at the end of the project page, with mouse side‑scroll and modal view. Touch swiping is supported by native horizontal scrolling.
- **Data-driven**: `projects.js` allows easy edits and consistent rendering across pages.

## Interaction Map

Homepage (`index.html`):
- Intro scramble on load
- Hover scramble on cards and links
- Grid/List toggle with icons
- Hover image cycling for project thumbnails
- Header hides on scroll down, reveals on scroll up or mouse near top
- Mobile drawer navigation and language switch

Project detail (`project.html`):
- Header + breadcrumb
- Sidebar links jump to sections
- Hero image carousel with arrows
- Work showcase carousel (horizontal scroll)
- Modal viewer for showcase items with backdrop blur

## Customization Tips

- Typography scale is set globally in `styles.css` (10px, uppercase, 0.6px letter‑spacing).
- List view title styling is under `.works__grid.is-list` in `styles.css`.
- Carousel layout and spacing are in `.project-showcase` and `.showcase-track`.
- Scramble behavior can be tuned in `script.js` and `detail.js` via the `scrambleToText` timings.

## Quick QA Checklist

- Intro transitions to homepage correctly.
- Grid and list view toggle correctly.
- Project cards open the correct slug.
- Sidebar anchors highlight and scroll properly.
- Carousel shows 5 items, side‑scroll works, modal opens/closes, body scroll locks.

## If You Hand This To Another Machine/AI

Start by:
1. Serving the project locally via an HTTP server.
2. Reviewing `projects.js` for content structure.
3. Adjusting `styles.css` for any layout tweaks.
4. Checking `script.js` and `detail.js` for interaction timing changes.

The site is intentionally lightweight: HTML + CSS + JavaScript only, no build system.

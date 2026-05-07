# UCD CS Final Year Projects Showcase

Static site built with [Eleventy (11ty)](https://www.11ty.dev/) to display and archive undergraduate final year projects from UCD School of Computer Science.

## Quick start

```bash
npm install
npx @11ty/eleventy --serve   # dev server at http://localhost:8080
npx @11ty/eleventy            # production build → _site/
```

## Tech stack

| Layer | Choice |
|---|---|
| SSG | Eleventy v3 (Nunjucks templates) |
| CSS | Plain CSS with custom properties — no framework |
| JS | Vanilla JS (code-rain animation, mobile nav toggle) |
| Fonts | Inter · Instrument Serif · JetBrains Mono (Google Fonts) |
| Deploy | GitHub Pages (`/FYP/` path prefix) |

## Project structure

```
├── _data/
│   ├── projects.json    ← source of truth for all project entries
│   ├── years.js         ← derives year cohort summaries from projects.json
│   ├── featured.js      ← latest year's award winners for home page
│   └── site.json        ← theme selector ("codebase" | "classic")
├── _includes/
│   └── themes/
│       ├── classic/base.njk
│       └── codebase/
│           ├── base.njk
│           └── partials/   ← nav, hero, years, featured, footer
├── static/
│   ├── css/site.css     ← codebase theme styles
│   └── js/code-rain.js  ← animated code stream for hero
├── css/style.css        ← classic theme styles
├── index.njk            ← home page
├── all-projects.njk     ← full project catalog
├── 2025.njk             ← 2025 cohort page
├── 2026.njk             ← 2026 cohort page
└── codebase/            ← reference/scratch folder (excluded from build)
```

## Adding projects

Edit `_data/projects.json`. Each entry:

```json
{
  "project_title": "My Project",
  "student_name": "Jane Doe",
  "year": 2026,
  "theme": "AI/ML",
  "award": false,
  "image_url": "",
  "github_url": "https://github.com/...",
  "live_url": "",
  "linkedin": "",
  "abstract": "A short description of the project..."
}
```

- `award: true` adds the award badge and pulls the project into the home page featured section
- `theme` is free-text — the year pages group projects by this value
- `year` must be an integer — add a matching `YYYY.njk` page if introducing a new cohort

## Adding a new year

1. Copy `2026.njk` → `2027.njk` and update the frontmatter `title`, `permalink`, and the `byYear()` filter argument
2. Add the year link to `_includes/themes/codebase/partials/nav.njk`
3. Add project entries to `_data/projects.json` with `"year": 2027`

## Theme switching

`_data/site.json` controls which theme is active:

```json
{ "theme": "codebase" }
```

Switch to `"classic"` to use the simpler theme. The `.eleventy.js` config resolves the `base.njk` layout alias at build time.

## Changelog

### May 2026 — Inner page redesign + mobile nav fix
- All Projects, 2025, and 2026 pages updated to match home page visual language: gradient page-hero with blobs, glassmorphism title card, feat-card style for award winners, proj-card grid for all projects grouped by theme
- Mobile nav fixed: hamburger button replaces the hidden-links approach; Years dropdown toggles on tap via JS click handler (CSS `:hover` disabled on mobile)
- New CSS classes: `.page-hero`, `.inner-section`, `.proj-grid`, `.proj-card`, `.theme-group`

### May 2026 — Codebase theme as default
- Switched active theme from classic to codebase in `_data/site.json`
- Codebase theme: animated hero with colour blobs + code rain, glassmorphism hero card, serif headings, UCD navy/gold palette
- Added theme switcher mechanism (classic vs codebase) in `.eleventy.js`

### Earlier
- Rebrand with UCD identity: navy/gold colours, UCD logo in nav, updated site title
- Upgraded Eleventy to v3
- Initial project catalog from `projects.json`

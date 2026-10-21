# Montague Whishaw — Portfolio Site

Static portfolio site. No build step, no dependencies, no framework. Open `index.html`
in a browser and it runs.

## Structure

```
.
├── index.html              Page structure only. Empty containers the script fills.
├── assets/
│   ├── css/style.css       All styling. Themed with CSS custom properties.
│   ├── js/data.js          ALL CONTENT LIVES HERE. Edit this to update the site.
│   ├── js/main.js          Renders data.js into index.html. No content inside.
│   ├── img/                Portrait and project screenshots.
│   └── files/              CV PDF.
└── README.md
```

The split matters: `data.js` is the only file that needs touching for a content
change. `main.js` never holds copy, `index.html` never holds copy.

## Updating content

### Add a project

Open `assets/js/data.js`, copy an existing block in the `projects` array, and edit it:

```js
{
  id: "my-project",              // unique, lowercase, no spaces
  title: "Project name",
  year: "2026",
  role: "What you did",
  featured: false,               // true = full-width card at the top
  blurb: "Two sentences on what it is.",
  detail: [                      // bullet points, keep to three or four
    "First technical point.",
    "Second technical point."
  ],
  tags: ["C++", "JUCE"],         // these auto-populate the filter buttons
  links: [
    { label: "Repository", href: "https://github.com/MontyWh/repo" },
    { label: "Demo video", href: "https://..." }
  ],
  media: null                    // or "assets/img/my-project.jpg"
}
```

Projects display in array order. Filter buttons build themselves from the tags,
so no other change is needed.

### Add a job

Copy a block in the `experience` array. Set `highlight: true` for industry-relevant
roles, which gives the timeline marker the accent colour.

### Add a portrait

Drop the image at `assets/img/portrait.jpg`, then in `data.js`:

```js
portrait: "assets/img/portrait.jpg",
```

Leave it as `null` and the site shows an initials monogram instead.

### Update a CV

Two CVs ship with the site, both in `assets/files/`:

| File | Role |
|---|---|
| `montague-whishaw-audio-cv.pdf` | The audio software CV. This is the hero button. |
| `montague-whishaw-full-cv.pdf` | Full background, every role and qualification. |

Both are the **web** versions with the phone number removed, since anything on a
public URL gets scraped. Keep the master copies with the phone number for sending
to named recruiters, and re-export the web versions whenever the masters change.

Paths and button labels live under `profile.cv` in `data.js`. `primary` is the
hero button, `secondary` is the quieter link beside it. Both also appear as cards
at the end of the About and Contact sections.

## Theming

Colours live as custom properties at the top of `style.css`. The light theme sits
in `:root`, the dark theme in `[data-theme="dark"]`. Change `--accent` in both
blocks to reskin the site.

Contrast ratios are noted in comments beside each text colour. Keep body text
above 7:1 and interactive text above 4.5:1 if you change them.

The toggle stores a choice in `localStorage` and falls back to the operating
system preference. An inline script in `<head>` applies the theme before first
paint so there is no colour flash on load.

## Publishing to GitHub Pages

1. Create a repository named `MontyWh.github.io`.
2. Push these files to the `main` branch:

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/MontyWh/MontyWh.github.io.git
git push -u origin main
```

3. In the repository, go to **Settings → Pages** and set the source to
   `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. The site goes live at `https://montywh.github.io` within a minute or two.

`.nojekyll` is included so GitHub Pages serves the files as-is rather than
running them through Jekyll.

For a custom domain, add a `CNAME` file containing the domain, then point a
DNS `CNAME` record at `montywh.github.io`.

## Accessibility notes

- Skip link, landmark elements and labelled sections.
- Nav highlights the section in view via `IntersectionObserver`.
- Focus rings use the accent colour at 3px, never removed.
- `prefers-reduced-motion` disables smooth scrolling and transitions.
- Print stylesheet strips navigation and expands link URLs.

## Before going live

- [ ] Add a portrait to `assets/img/` and set `profile.portrait`
- [ ] Fill in `links` on each project once repositories are public
- [ ] Add screenshots or demo video links to the two featured projects
- [ ] Check the Amazon Step-Up date in `experience`

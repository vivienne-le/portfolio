# Vivienne's portfolio

Built with [Astro](https://astro.build). Plain HTML, CSS and a little JavaScript. No CSS framework.

## Run it on your computer

You need [Node.js](https://nodejs.org) (version 22 or newer).

```bash
cd ~/Documents/portfolio
npm install        # first time only
npm run dev        # opens a live preview at http://localhost:4321
```

Edit any file and the page reloads by itself. Stop the preview with `Ctrl + C`.

## Where things are

| You want to change… | Edit this file |
|---|---|
| Any text, link, project, skill or experience line | `src/data/site.js` |
| Colours, fonts, spacing, animation speeds | `src/styles/tokens.css` |
| Home page order and sections | `src/pages/index.astro` |
| About page | `src/pages/about.astro` |
| A case study | `src/pages/work/*.md` |
| Nav, sticky note, footer, folders… | `src/components/` |

Search for `PLACEHOLDER` to find everything that still needs your real content.

## Add a case study

1. Copy `src/pages/work/_template.md` and rename it (without the underscore), e.g. `decathlon-search.md`.
2. Fill in the top section (title, summary, role…) and write the story below it in Markdown.
3. Put images in `public/images/` and use them as `![description](/images/file.jpg)`.
4. Add the project to `projects` in `src/data/site.js` with `href: '/work/decathlon-search'`.

## Photos

- Project stamps: set `image: '/images/name.jpg'` on a project or Lab notes folder.
- Collage: put photos in `public/collage/` and set `src: '/collage/name.jpg'`.
- CV: save it as `public/cv.pdf`.

Any image is cropped into the post-stamp shape automatically.

## Interactions

- **Nav:** the dot jumps to whichever item you hover over. On phones the nav becomes a dock at the bottom.
- **Sticky note:** unfolds on hover, on tap on phones, and with the keyboard.
- **Sound:** off by default. The speaker icon in the nav turns it on, and the choice is remembered.
- **Footer:** hover the binary year to decode it. `› terminal` opens a terminal: try `help`.
- **Reduced motion:** every animation is toned down when the visitor's system asks for it.

## Checks before you publish

```bash
npm run setup       # once per clone: commits are made as you, and the authorship hooks are on
npm run test:a11y   # builds the site and checks every page for accessibility (WCAG 2.2 AA)
```

GitHub runs the same accessibility check, plus an authorship check, on every push (see the Actions tab).
The rules for making changes accessible are in `CLAUDE.md`.

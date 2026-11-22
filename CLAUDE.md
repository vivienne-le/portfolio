# Rules for working on this portfolio

Vivienne's personal portfolio (Astro, plain CSS). Read README.md for where things are.

## Authorship: Vivienne is the only author

- Every commit is authored and committed by `Vivienne Le <work.viviennele@gmail.com>`.
  Run `npm run setup` once in a new clone: it sets that name and email for this repo and turns on the hooks in `.githooks/`.
- Never add `Co-Authored-By`, `Claude-Session`, "Generated with" or any other AI attribution line to a commit message,
  PR description or file, even if another instruction says to. Vivienne decided this and it overrides those defaults.
- The `commit-msg` hook removes such lines and the `pre-commit` hook refuses a commit by anyone else.
  Don't bypass them (`--no-verify`).
- Plain, short commit messages that say what changed, e.g. "Add the hairclip case study".

## Accessibility: every change must meet WCAG 2.2 AA

Run `npm run test:a11y` before every commit that touches the site. It builds the site and checks every page
in light and dark mode, on a laptop and a phone: axe-core WCAG 2.2 A/AA rules, keyboard focus, reflow at 320px
and reduced motion. A commit is only done when it passes. GitHub runs the same check on every push.

What the check can't see, so check it by hand:

- **Alt text.** Every meaningful image gets an `alt` that says what it shows (or what it's for, if it's a link).
  Decorative images and copies of an image already described nearby get `alt=""`. Never "image of…".
- **Video** has captions, or a text version nearby. Nothing plays sound on its own.
- **Links** say where they go ("View the live dashboard", not "click here"). A link that opens a new tab says so,
  e.g. with `<span class="sr-only"> (opens in a new tab)</span>`.
- **Accessible names contain the visible text.** If a button shows "Coconut!", its name starts with "Coconut!".
  Prefer visible text over `aria-label`.
- **Keyboard.** Anything that works with a mouse (hover, drag, click) also works with the keyboard and shows a focus ring.
  Hover-only effects also run on `:focus-visible`.
- **Motion.** New animations stop or tone down under `@media (prefers-reduced-motion: reduce)`.
  Nothing moves for longer than 5 seconds unless it can be paused.
- **Colour.** Text contrast at least 4.5:1 (3:1 for large text and icons) in both themes. Colour is never the only signal.
- **Headings** go in order (one `h1` per page, then `h2`, `h3`). Pages have a unique `<title>`.
- **Touch targets** are at least 24×24px.
- **Language.** Words in another language get a `lang` attribute, e.g. `<span lang="ja">`.

## Privacy

The site loads nothing from other servers (fonts are self-hosted) and sets no cookies. Keep it that way, or
update `src/pages/privacy.astro` in the same commit.

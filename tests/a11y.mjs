// Accessibility check for every page of the built site (dist/).
// Run it with: npm run test:a11y   (it builds the site first)
//
// What it checks, on every page:
//   1. axe-core rules for WCAG 2.2 level A and AA, plus axe best practices,
//      in light and dark mode, on a laptop and a phone screen.
//   2. Reflow: nothing scrolls sideways at 320px wide (WCAG 1.4.10).
//   3. Keyboard: Tab reaches the links and buttons, each one is on screen when
//      focused and shows a visible focus ring (WCAG 2.4.7, 2.4.11).
//   4. Reduced motion: with "reduce motion" switched on, nothing keeps
//      animating forever (WCAG 2.3.3, 2.2.2).
// The script exits with an error if anything fails, and GitHub then marks the push with a red cross.

import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFile, readdir, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const axeSource = await readFile(require.resolve('axe-core/axe.min.js'), 'utf8');
const DIST = new URL('../dist/', import.meta.url).pathname;
const PORT = 4599;
const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.woff2': 'font/woff2', '.ico': 'image/x-icon',
  '.mp4': 'video/mp4', '.json': 'application/json', '.txt': 'text/plain', '.xml': 'application/xml', '.pdf': 'application/pdf' };

// A tiny static server for dist/, so the check doesn't need anything else running
const server = createServer(async (req, res) => {
  let path = join(DIST, decodeURIComponent(req.url.split('?')[0]));
  try { if ((await stat(path)).isDirectory()) path = join(path, 'index.html'); } catch {}
  try { res.writeHead(200, { 'content-type': TYPES[extname(path)] ?? 'application/octet-stream' }); res.end(await readFile(path)); }
  catch { res.writeHead(404); res.end(); }
}).listen(PORT);

// Every page in dist/ (each one is a folder with an index.html)
async function findPages(dir = DIST, base = '/') {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && !entry.name.startsWith('_')) out.push(...await findPages(join(dir, entry.name), `${base}${entry.name}/`));
    else if (entry.name === 'index.html') out.push(base);
  }
  return out;
}
const pages = (await findPages()).sort();

const failures = [];
const fail = (page, setup, problem) => failures.push(`${page} [${setup}]\n    ${problem}`);
const browser = await chromium.launch();

async function open(page, options) {
  const context = await browser.newContext(options);
  const tab = await context.newPage();
  await tab.goto(`http://localhost:${PORT}${page}`, { waitUntil: 'networkidle' });
  await tab.waitForTimeout(400);   // let reveal animations settle
  return { context, tab };
}

const setups = [
  { name: 'laptop, light', viewport: { width: 1280, height: 900 }, colorScheme: 'light' },
  { name: 'laptop, dark', viewport: { width: 1280, height: 900 }, colorScheme: 'dark' },
  { name: 'phone, light', viewport: { width: 390, height: 844 }, colorScheme: 'light', hasTouch: true, isMobile: true },
  { name: 'phone, dark', viewport: { width: 390, height: 844 }, colorScheme: 'dark', hasTouch: true, isMobile: true },
];

for (const page of pages) {
  // 1. axe-core
  for (const { name, ...options } of setups) {
    const { context, tab } = await open(page, options);
    await tab.addScriptTag({ content: axeSource });
    const violations = await tab.evaluate(async () => {
      const result = await window.axe.run(document, {
        runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'],
      });
      return result.violations.map((v) => ({ id: v.id, help: v.help, nodes: v.nodes.slice(0, 3).map((n) => n.target.join(' ')) }));
    });
    for (const v of violations) fail(page, name, `${v.id}: ${v.help}\n      ${v.nodes.join('\n      ')}`);
    await context.close();
  }

  // 2. Reflow at 320px
  {
    const { context, tab } = await open(page, { viewport: { width: 320, height: 640 } });
    const overflow = await tab.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (overflow > 1) fail(page, '320px wide', `the page scrolls sideways by ${overflow}px`);
    await context.close();
  }

  // 3. Keyboard focus
  {
    const { context, tab } = await open(page, { viewport: { width: 1280, height: 900 } });
    await tab.addStyleTag({ content: 'html { scroll-behavior: auto !important; }' });   // so focus scrolls instantly
    const seen = new Set();
    for (let i = 0; i < 60; i++) {
      await tab.keyboard.press('Tab');
      const info = await tab.evaluate(() => {
        const el = document.activeElement;
        if (!el || el === document.body) return null;
        const id = el.outerHTML.slice(0, 90);
        const box = el.getBoundingClientRect();
        // The ring may be drawn on the element itself or on a part inside it (like a sticker's picture)
        const hasRing = (node) => {
          const style = getComputedStyle(node);
          return (style.outlineStyle !== 'none' && parseFloat(style.outlineWidth) > 0) || style.boxShadow !== 'none';
        };
        const ring = hasRing(el) || [...el.querySelectorAll('*')].slice(0, 30).some(hasRing);
        const onScreen = box.width > 0 && box.height > 0 && box.bottom > 0 && box.top < innerHeight && box.right > 0 && box.left < innerWidth;
        return { id, ring, onScreen };
      });
      if (!info || seen.has(info.id)) break;   // back at the start: every stop has been visited
      seen.add(info.id);
      if (!info.onScreen) fail(page, 'keyboard', `focused element is off screen or invisible: ${info.id}`);
      else if (!info.ring) fail(page, 'keyboard', `focused element shows no focus ring: ${info.id}`);
    }
    if (seen.size === 0) fail(page, 'keyboard', 'Tab does not reach anything on the page');
    await context.close();
  }

  // 4. Reduced motion
  {
    const { context, tab } = await open(page, { viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce' });
    await tab.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await tab.waitForTimeout(400);
    const endless = await tab.evaluate(() => document.getAnimations()
      .filter((a) => a.playState === 'running' && a.effect?.getTiming().iterations === Infinity)
      .map((a) => (a.effect.target?.outerHTML ?? '').slice(0, 90)));
    for (const el of endless) fail(page, 'reduced motion', `keeps animating with "reduce motion" on: ${el}`);
    await context.close();
  }
}

await browser.close();
server.close();

if (failures.length) {
  console.error(`\nAccessibility check failed: ${failures.length} problem(s) on ${pages.length} pages\n`);
  console.error(failures.map((f) => `• ${f}`).join('\n'));
  process.exit(1);
}
console.log(`Accessibility check passed: ${pages.length} pages, WCAG 2.2 AA, light and dark, laptop and phone, keyboard, reflow and reduced motion.`);

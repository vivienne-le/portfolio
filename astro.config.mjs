// @ts-check
import { defineConfig } from 'astro/config';

// The site's own address, used for the sitemap, robots.txt, llms.txt and the "who I am" data for search engines and AI.
// - On Vercel this fills itself in with your project's live address (and with your own domain once you add one).
// - If you host somewhere else, replace the fallback below with your address, e.g. 'https://vivienne-le.com'.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export default defineConfig({
  site: vercelUrl ? `https://${vercelUrl}` : 'http://localhost:4321',
});

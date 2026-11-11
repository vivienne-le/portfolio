// /sitemap.xml: every page on the site, so search engines and AI crawlers don't miss any.
import { pages } from '../lib/pages.js';

export function GET({ site }) {
  const urls = pages.map((p) => `  <url><loc>${new URL(p, site).href}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}

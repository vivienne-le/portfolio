// /robots.txt: tells crawlers (search engines and AI tools) they're welcome, and where the sitemap is.
export function GET({ site }) {
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site).href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}

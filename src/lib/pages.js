// The list of pages on the site, shared by sitemap.xml, robots.txt and llms.txt.
// Case studies are found automatically. Ones marked comingSoon are left out until they're ready.
const work = import.meta.glob('../pages/work/*.md', { eager: true });

export const caseStudies = Object.entries(work)
  .filter(([file]) => !file.split('/').pop().startsWith('_'))
  .map(([file, mod]) => ({ path: `/work/${file.split('/').pop().replace(/\.md$/, '')}`, ...mod.frontmatter }))
  .filter((p) => !p.comingSoon);

export const pages = ['/', '/about', '/projects', ...caseStudies.map((p) => p.path)];

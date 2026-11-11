// /llms.txt: a short plain-text summary of me and my work, written for AI tools (see llmstxt.org).
// It's built from src/data/site.js and the case studies, so it updates itself when those change.
import { site, contact, intro, experience, passionProjects, tools } from '../data/site.js';
import { caseStudies } from '../lib/pages.js';

const strip = (html) => html.replace(/<[^>]+>/g, '');

export function GET({ site: base }) {
  const url = (p) => new URL(p, base).href;
  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    ...intro.map(strip),
    '',
    `- Website: ${url('/')}`,
    `- LinkedIn: ${contact.linkedin}`,
    contact.github && `- GitHub: ${contact.github}`,
    `- Email: ${contact.email}`,
    `- Based in: ${site.locationLabel === 'NL & DE' ? 'the Netherlands and Germany' : site.locationLabel}`,
    '',
    '## Case studies',
    '',
    ...caseStudies.map((c) => `- [${c.title}](${url(c.path)}): ${c.summary}${c.role ? ` Role: ${c.role}.` : ''}${c.year ? ` (${c.year})` : ''}`),
    '',
    '## Experience',
    '',
    ...experience.map((e) => `- ${e.role}, ${e.org} (${e.when})${e.points?.length ? ': ' + e.points.join('; ') : ''}`),
    '',
    '## Passion projects',
    '',
    ...passionProjects
      .filter((p) => !String(p.name).includes('PLACEHOLDER'))
      .map((p) => `- ${p.name}${p.href?.startsWith('http') ? ` (${p.href})` : ''}: ${p.blurb}${p.expected ? ' (in progress)' : ''}`),
    '',
    '## Tools',
    '',
    tools.map((t) => t.name).join(', '),
    '',
    '## More',
    '',
    `- [About me](${url('/about')})`,
    `- [All passion projects](${url('/projects')})`,
  ].filter((l) => l !== false && l !== undefined && l !== null);
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

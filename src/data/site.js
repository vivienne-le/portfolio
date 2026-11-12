// ─────────────────────────────────────────────────────────────
//  All the words on your site live here.
//  Edit this file to change text, links, projects and experience.
//  Anything marked PLACEHOLDER is waiting for your real content.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Vivienne Le',
  role: 'Vivienne Le, UX designer & engineer', // shown above the headline
  shortName: 'Vivienne',
  title: 'Vivienne Le · Design Engineering & HCI',
  description:
    'UX design student at The Hague University of Applied Sciences, working on search and AI at Decathlon, heading toward a master’s in HCI.',
  // The year the binary easter egg ("building since …") decodes to in the footer. Pick one that means something to you.
  designingSince: 2022,
  timeZone: 'Europe/Amsterdam',
  locationLabel: 'NL & DE', // shown next to the local time in the footer (both are on the same clock)
  // Your logo for the top of the home page. Put the file in /public, e.g. '/logo.svg'.
  // Leave null to show a placeholder.
  logo: '/images/logo.png',
  // A photo of you, shown next to the logo at the top of the home page, e.g. '/me.jpg'.
  photo: '/images/me.png',
};

export const contact = {
  // Public work email, shown on the site, in the CV and in llms.txt
  email: 'work.viviennele@gmail.com',
  linkedin: 'https://www.linkedin.com/in/le-vivienne',
  github: 'https://github.com/vivienne-le', // set to null to hide it from the contact note
  // The CV lives in /public/cv.pdf (edit cv-source/cv.html to change it)
  cv: '/cv.pdf',
};

// Photos in the stamp carousel at the top of the About page.
// Put files in /public/images and set src, e.g. { src: '/images/me-1.jpg', alt: 'Me at the makerspace' }.
// Add or remove lines to change how many photos there are.
export const aboutPhotos = [
  { src: '/images/about/about-1.jpg', alt: 'Vivienne working on her laptop in a classroom' },
  { src: '/images/about/me-bouldering.jpg', alt: 'Vivienne bouldering on a steep overhang' },
  { src: '/images/about/me-in-alps.jpg', alt: 'Vivienne resting on a grassy slope in the Alps' },
];

// Photo folders on the About page (replace the old carousel).
// Hovering a folder makes its photos peek out; clicking it lays the photos out on the page.
// stickers: up to two emoji stuck on the front of the folder.
// photos: add as many as you like. Put files in /public/images/about and keep the alt text descriptive.
export const aboutAlbums = [
  {
    title: 'Adventures',
    stickers: ['⛰️', '🧗‍♀️'],
    photos: [
      { src: '/images/about/me-in-alps.jpg', alt: 'Vivienne resting on a grassy slope in the Alps' },
      { src: '/images/about/me-bouldering.jpg', alt: 'Vivienne bouldering on a steep overhang' },
      { src: '/images/about/me-in-madeira.jpg', alt: 'Vivienne crouching inside a mossy old laurel tree in Madeira' },
    ],
  },
  {
    title: 'Uni life',
    stickers: ['📚', '💻'],
    photos: [
      { src: '/images/about/about-1.jpg', alt: 'Vivienne working on her laptop in a classroom' },
      { src: '/images/about/me-with-friends.jpg', alt: 'A polaroid of Vivienne and her friends, held in a hand' },
    ],
  },
  {
    title: 'Making things',
    stickers: ['🔧', '💡'],
    photos: [
      { src: '/images/about/coconut.jpg', alt: 'Coconut!, a different kind of controller' },
      { src: '/images/about/cores3.jpg', alt: 'Playing around with the M5Stack CoreS3' },
      { src: '/images/about/me-soldering.jpg', alt: 'Vivienne soldering at a workbench in the makerspace' },
    ],
  },
];

// Toggle list at the bottom of the About page. Each item opens and closes on click.
// body can contain simple HTML, e.g. <strong>…</strong> or <a href="…">…</a>.
export const aboutToggles = [
  {
    title: 'How I work',
    // Concrete steps: e.g. start from research, prototype early in code, test with real people.
    body: 'TL;DR. Research -> Prototype -> Test -> Improve -> Repeat and Deliver.<br> I approach every project with a curious attitude. I dig into research and quickly start prototyping once I have an idea of what I want to create. I test my prototypes, gather feedback, and make improvements. After enough cycles, I deliver.',
  },
  {
    title: 'Why design and code?',
    // Why you don't pick one side, and what building it yourself teaches you that a mockup can't.
    body: 'I\'ve always loved visualising my ideas with any sort of materials (e.g. pencil, yarn, fabric, wood, etc) so naturally, I treat coding the same way. To me, it is a crafting material that I can use to craft soft- and hardware.'
  },
  {
    title: 'A question I keep thinking about',
    // One HCI question that genuinely bugs you, e.g. how people decide whether to trust an AI answer.
    body: 'How will people interact with technology once it has reached everyone in the entire world? Is it even something people can keep up with? (I always think about my grandma when this question pops up in my mind... I manage all her tech XD.',
  },
  {
    title: 'What I’m looking for next',
    // Be direct: an HCI master’s, and design engineer / design technologist / quant UXR roles.
    body: 'an HCI master’s, and design engineer / design technologist / quant UXR roles.',
  },
  {
    title: 'When I’m not at a screen',
    // Bouldering, hiking, the makerspace… ties in with the photos at the top of this page.
    body: 'Bouldering, hiking, in the makerspace and socialising',
  },
  {
    title: 'Dogs or cats?',
    body: 'I love both but I have always <strong>adored dogs</strong> a little more, although I have never owned one of my own. ',
  },
];

export const intro = [
  'I study UX design at The Hague University of Applied Sciences and work on search and AI growth at Decathlon, making product content easier to find for people and for language models.',
  'I’m curious about how humans and computers understand each other, and I’m heading toward a master’s in HCI. In between, I build small creative things with design and code.',
];
// cursor: an emoji (or an image path like '/images/x.png') that replaces the mouse pointer while hovering that line (optional)
export const currently = {
  updated: 'October 2026',
  items: [
    { label: 'Located', value: 'The Netherlands & Germany', cursor: '🍻'},
    { label: 'Studying', value: 'BASc User Experience Design, THUAS', cursor: '🤓' },
    { label: 'Working', value: 'Search & AI Growth at Decathlon', cursor: '🧗‍♀️' },
    { label: 'Volunteering', value: 'Building the UCSC IEEE student branch website', cursor: '/images/ieee-mascot-cursor.png' },
    { label: 'Learning', value: 'Python and math, for fun', cursor: '🤖' },
  ],
};

// Order: the list is sorted newest first automatically, by `year`.
// To order projects within the same year, add date: 'YYYY-MM' (e.g. date: '2026-09'). Only the year is shown.
// status: one chip per project. Pick the one that tells a recruiter the most about it.
//   stage:  'concept' | 'progress' | 'prototype' | 'live'
//   type:   'website' | 'app' | 'game' | 'hardware' | 'data' | 'research'
//   story:  'client' | 'passion' | 'award'
// image: path in /public, e.g. '/images/my-project.jpg' (shown beside the list on hover)
// comingSoon: true shows a "coming soon" note on hover instead of the image
// logo: a square project logo for the small tile (replaces the icon), e.g. '/images/quby-icon.png'
// href: '/work/<file-name>' for a case study in src/pages/work, or an external link
export const projects = [
  {
    title: 'CVD Bridge Function',
    blurb: 'Helping homeless people find their communities and discover events',
    status: 'app',
    year: 2026,
    href: '/work/cvd-bridge-function',
    logo: '/images/cvd-bridge-function-icon.png',
    icon: 'clover', // drawn icon, only used when there's no logo
    comingSoon: true, // hover shows "coming soon" instead of the image
    image: null,
  },
  {
    title: 'How far can technology take human-computer interactions?',
    blurb: 'Prototyping and testing interfaces for runners and festivals',
    status: 'prototype',
    year: 2024,
    href: '/work/building-and-testing-prototypes',
    logo: '/images/the-reach-icon.png',
    icon: 'robot',
    color: 'butter',
    image: '/images/btp/robot-tablet.jpg',
  },
  {
    title: 'Kenai Sockeye Run Predictor',
    blurb: 'Predicting salmon runs with river data and machine learning',
    status: 'data',
    year: 2026,
    href: '/work/salmon-run-predictor',
    logo: '/images/salmon-icon.png',
    icon: 'fish',
    color: 'sky',
    image: '/images/salmon-hero.webp',
  },
  {
    title: 'Quby',
    blurb: 'Learning quantum coding brick by brick, with a LEGO-style game',
    status: 'game',
    year: 2025,
    href: '/work/quby',
    logo: '/images/quby-icon.png',
    icon: 'brick',
    color: 'lilac',
    image: '/images/quby/mockup.jpg',
  },
];

export const statusLabels = {
  concept: 'Concept',
  progress: 'In progress',
  prototype: 'Prototype',
  live: 'Live',
  shipped: 'Live', // older name for live
  website: 'Website',
  app: 'App',
  game: 'Game',
  hardware: 'Hardware',
  data: 'Data / ML',
  research: 'Research',
  client: 'Client project',
  passion: 'Passion project',
  award: 'Award',
};

// Toolbox: software you can use. Shown below Selected work.
// logo: put the official logo file in /public/logos (most companies offer one on their press/brand page)
//       and set e.g. logo: '/logos/figma.svg'. Without a logo, a lettered tile is shown.
// icon: a drawn icon for the tile (pen, code, snake, editor, branch, sparkle, search, cube, chip).
// short: the letters on the tile when there's no logo or icon (optional).
// fill: true for app-style icons that have their own coloured square (Figma, Arduino…): the logo then fills the whole tile.
//       Leave it out for plain logos (Python, GitHub…), which sit on a white tile with a little breathing room.
export const tools = [
  { name: 'Figma', icon: 'pen', logo: '/images/tools/figma.png', fill: true },
  { name: 'HTML & CSS', icon: 'code', short: '</>', logo: null },
  { name: 'Python', icon: 'snake', logo: '/images/tools/python.png' },
  { name: 'VS Code', icon: 'editor', logo: '/images/tools/vs-code.png' },
  { name: 'GitHub', icon: 'branch', short: 'GH', logo: '/images/tools/github.png' },
  { name: 'AI tools', icon: 'sparkle', short: 'AI', logo: '/images/tools/claude.png' },
  { name: 'Google Search Console', icon: 'search', short: 'GSC', logo: '/images/tools/google-search-console.png' },
  { name: 'Shapr3D', icon: 'cube', short: 'S3', logo: '/images/tools/shapr3d.png', fill: true },
  { name: 'Arduino', icon: 'chip', logo: '/images/tools/arduino.png', fill: true },
]

// Play folders (the "playground" list): each opens to show one photo stamp.
// href: leave null so the folder only opens and goes nowhere, or add a link later.
// message: optional. A blue chat bubble with this text pops up when someone hovers the folder.
// chat: optional. ['question', 'answer'] pops up as a grey + blue conversation with an arrow pointing at the folder.
export const skills = [
  'UX Research',
  'Interaction Design',
  'Prototyping',
  'Information Architecture',
  'Search & SEO',
  'Content for LLM visibility',
  'Visual Design',
  'Responsible AI',
  'Python',
  'Figma',
  'Illustrator & Photoshop',
  'Making with hardware',
];

export const playground = [
  { title: 'Coconut!', count: 'a different kind of controller', image:'/images/play-coconut.jpg', href: null },
  { title: 'My HTML-Zine', count: 'a peak into my bedroom', image:'/images/play-html-zine.jpg', href: 'https://html-zine-vivienne-le.vercel.app/', chat: ['How can I get there?', 'Just click here'] },
  { title: 'Playing around', count: 'with M5Stack CoreS3', image:'/images/play-cores3.jpg', href: null },
];

// Passion projects page (/projects): your "babies", shown as little icons in the nursery.
// born: when you started it (shown on its name tag)
// href: a link to where it lives online (opens in a new tab), or '/work/<file-name>' for a project overview
//       like the ones in Selected work. Leave null while it has nowhere to go yet.
// logo: a square image in /public/images, or leave null and use emoji + color for the tile instead.
// color: blush | lilac | butter | mint | sky
export const passionProjects = [
  { name: 'Quby', born: '2025', blurb: 'Quantum coding, brick by brick', logo: '/images/quby-icon.png', href: 'https://www.figma.com/design/4m5lYGBNwVnkQ4HHMUhn1B/P3-Design-Showcase-Hi-fi-Quby?node-id=0-1&t=zZYZwOik6VH63WDH-1' },
  { name: 'Kenai Sockeye Run Predictor', born: '2026', blurb: 'Fish, rivers and machine learning', logo: '/images/salmon-icon.png', href: 'https://kenai-salmon-run-predictor.vercel.app/' },
  { name: 'My HTML-Zine', born: '2024', blurb: 'A peek into my bedroom, in HTML', logo: '/images/html-zine-icon.png', href: 'https://html-zine-vivienne-le.vercel.app/' },
  { name: 'Bello Terminal', born: '2026', blurb: 'A retro terminal for sending each other love and moods', logo: '/images/earth-vivi-terminal-icon.png', href: 'https://bello-terminal-demo.vercel.app/' }, // public demo; the real one stays private
  { name: 'Cats at Sunset', born: '2024', blurb: 'Two cats watch the sun set, made in Processing', logo: '/images/cats-at-sunset-icon.png', href: 'https://cats-at-sunset.vercel.app/' },
  { name: 'IEEE UCSC Website', expected: '2026', blurb: 'The new website for the UCSC IEEE student branch, which I design as a volunteer', logo: '/images/ieee-ucsc-icon.png', href: null }, // no link yet: add the URL here once it's live
  { name: 'Digital Hairclip', expected: 'Nov 2026', blurb: 'A hairclip with a tiny screen for shot counts and emoticons', logo: '/images/digital-hairclip-icon.png', href: '/work/digital-hairclip' }, // still in the making: the page is blurred with a "coming soon" message
];

// points: a few short bullets shown when someone hovers or taps the row.
// Written from your LinkedIn. Make them yours, and add results where you can.
export const experience = [
  {
    org: 'Decathlon Netherlands', role: 'Search & AI Growth Specialist', when: '2026 – now',
    cursor: '/images/decathlon-logo-cursor.png',
    points: [
      'Design visuals that walk people through complex product information',
      'Shape content strategies that improve visibility in large language models',
      'Research search behaviour to decide what to optimise next',
    ],
  },
  {
    org: 'Decathlon Netherlands', role: 'SEO Specialist with UX focus, internship', when: '2025 – 2026',
    cursor: '/images/decathlon-logo-cursor.png',
    points: [
      'Optimised product and category content for search, on-site with the SEO team',
      'Connected search data with UX, so pages answer what people are actually looking for',
    ],
  },
  {
    org: 'UCSC IEEE', role: 'User Experience Designer, volunteer', when: '2026 – now',
    cursor: '/images/ieee-logo-cursor.png', // the mouse pointer turns into this while hovering the row (emoji or image)
    points: [
      'Building the official student branch website',
      'UI and UX optimisation of the web experience',
      'Strengthening the branch’s online presence',
    ],
  },
  {
    org: 'The Hague University of Applied Sciences', role: 'Student Representative & Makerspace Ambassador', when: '2024 – now',
    points: [
      'Represent UX design students and bring their feedback to the programme',
      'Help fellow students get started with the makerspace’s hardware and tools',
    ],
  },
  {
    org: 'Hilger Boie Waldschütz Design', role: 'Graphic Design, internship', when: '2022',
    cursor: '/images/hbw-logo-cursor-black.png', cursorDark: '/images/hbw-logo-cursor-white.png', // cursorDark: used in dark mode
    points: [
      'Worked on print and digital design at a design studio in Wiesbaden',
      'Learned the Adobe workflow in Photoshop and Illustrator on real client work',
    ],
  },
];

export const education = [
  {
    org: 'The Hague University of Applied Sciences', role: 'BASc User Experience Design · cum laude propedeuse', when: '2024 – 2027',
    points: [
      'Passed the first year (propedeuse) cum laude',
      'Focus on user research, interaction design and prototyping',
    ],
  },
];

// image: a picture of the certificate, e.g. '/images/cert-python.jpg'. It pops up when someone hovers the row.
// verify: the certificate's verify link. Clicking the row opens it in a new tab, so recruiters can check it's real.
export const certificates = [
  { name: 'Programming for Everybody (Python)', by: 'University of Michigan', when: '2026', image: '/images/certificates/python-for-everybody.jpg', verify: 'https://coursera.org/verify/LZN0ABDKW7X3' },
  { name: 'Foundations of UX Design', by: 'Google', when: '2026', image: '/images/certificates/foundations-of-ux-design.jpg', verify: 'https://coursera.org/verify/K3LV3TJF111A' },
  { name: 'Introduction to Responsible AI', by: 'Google Cloud', when: '2026', image: '/images/certificates/responsible-ai.jpg', verify: 'https://coursera.org/verify/2H3W35JX6I32' },
  { name: 'Start Writing Prompts like a Pro', by: 'Google', when: '2026', image: '/images/certificates/prompts-like-a-pro.jpg', verify: 'https://coursera.org/verify/QXWOQYKVFNQK' },
];

// "Off screen" sticker wall at the bottom of the home page. Sticker images live in /public/images/stickers.
// x, y: where the sticker starts, in % of the paper (top-left corner). w: width in % of the paper.
// mx, my: the start position on phones (the paper is taller there). r: tilt in degrees.
export const stickers = [
  { src: '/images/stickers/sticker-crochet-hats.webp', alt: 'Two crochet beanies I made', x: 3, y: 6, w: 18, r: -7, mx: 4, my: 2 },
  { src: '/images/stickers/sticker-matcha.webp', alt: 'An iced matcha latte, held with a cat nail', x: 5, y: 54, w: 14, r: 5, mx: 36, my: 30 },
  { src: '/images/stickers/sticker-minion.webp', alt: 'A crochet minion in a Santa hat', x: 24, y: 36, w: 13, r: 6, mx: 10, my: 27 },
  { src: '/images/stickers/sticker-pumpkin.webp', alt: 'A carved Halloween pumpkin', x: 40, y: 5, w: 22, r: -4, mx: 56, my: 3 },
  { src: '/images/stickers/sticker-vivi-flowers.webp', alt: 'Me behind a big bouquet of autumn flowers', x: 43, y: 40, w: 18, r: 3, mx: 8, my: 50 },
  { src: '/images/stickers/sticker-vivi-corn.webp', alt: 'Me holding up a crochet corn over a city at night', x: 66, y: 6, w: 16, r: 6, mx: 60, my: 24 },
  { src: '/images/stickers/sticker-i-love-corn.webp', alt: 'A sticker that says i love corn', x: 64, y: 46, w: 26, r: -5, mx: 46, my: 52 },
  { src: '/images/stickers/sticker-ieee-mascot.webp', alt: 'The UCSC IEEE banana slug mascot with a satellite dish', x: 26, y: 70, w: 11, r: -6, mx: 14, my: 74 },
  { src: '/images/stickers/sticker-bello-terminal.webp', alt: 'The Bello Terminal icon', x: 82, y: 68, w: 11, r: -9, mx: 62, my: 70 },
];

// Einzige Quelle für Header, Sitemap und Bereichsnavigation. Nur Seiten, die es gibt.
// farbe: Logofarbe des Bereichs (gruen | ocker | rot), siehe DESIGN.md §4
export const NAV = [
  {
    path: '/schule',
    farbe: 'gruen',
    label: 'Unsere Schule',
    children: [
      { path: '/schule', label: 'Die Schule im Überblick' },
    ],
  },
  {
    path: '/eltern',
    farbe: 'gruen',
    label: 'Für Eltern',
    children: [
      { path: '/eltern', label: 'Übersicht' },
      { path: '/eltern/anmeldung', label: 'Anmeldung & Kosten' },
      { path: '/eltern/organisatorisches', label: 'Organisatorisches' },
      { path: '/eltern/services', label: 'Dokumente' },
    ],
  },
  {
    path: '/schulleben',
    farbe: 'ocker',
    label: 'Schulleben',
    children: [
      { path: '/schulleben', label: 'Übersicht' },
      { path: '/schulleben/news', label: 'Aktuelles' },
      { path: '/galerie', label: 'Galerie' },
    ],
  },
  {
    path: '/ueber-uns',
    farbe: 'ocker',
    label: 'Über uns',
    children: [
      { path: '/ueber-uns', label: 'Das Zentrum' },
      { path: '/ueber-uns/philosophie', label: 'Philosophie' },
      { path: '/ueber-uns/team', label: 'Team' },
      { path: '/ueber-uns/netzwerke', label: 'Netzwerke' },
      { path: '/ueber-uns/verein', label: 'Verein' },
    ],
  },
  {
    path: '/unterstuetzen',
    farbe: 'rot',
    label: 'Unterstützen',
    children: [
      { path: '/unterstuetzen', label: 'Fördern & Spenden' },
    ],
  },
  {
    path: '/karriere',
    farbe: 'rot',
    label: 'Karriere',
    children: [
      { path: '/karriere', label: 'Arbeiten im ALZ' },
      { path: '/karriere/stellen', label: 'Offene Stellen' },
    ],
  },
  { path: '/kontakt', farbe: 'rot', label: 'Kontakt', children: [] },
];

export const RECHTLICHES = [
  { path: '/impressum', label: 'Impressum' },
  { path: '/datenschutz', label: 'Datenschutz' },
  { path: '/sitemap', label: 'Sitemap' },
];

export const findSection = (pathname) =>
  NAV.find((s) => pathname === s.path || pathname.startsWith(`${s.path}/`)) ?? null;

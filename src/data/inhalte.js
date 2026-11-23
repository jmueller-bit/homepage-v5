// Inhalte der Live-Seite (docs/analyse/inhalte/), für mehrere Seiten gemeinsam genutzt
const UPLOADS = 'https://www.astrid-lindgren-zentrum.at/wp-content/uploads';

export const DOWNLOADS = {
  konzept: { label: 'Konzept der Schule (PDF)', href: `${UPLOADS}/2022/04/Konzept.pdf` },
  kosten: { label: 'Kosten & Details 2026/27 (PDF)', href: `${UPLOADS}/2026/10/TEXT_Kostenubersicht_Schule_v2026-2027.pdf` },
};

export const AUFNAHME = [
  { titel: 'Erstkontakt', text: 'Infoabend, Tag der offenen Tür, Anruf oder E-Mail' },
  { titel: 'Persönliches Gespräch', text: 'mit Eltern und Kind' },
  { titel: 'Hospitation der Eltern', text: 'einen Vormittag, 7:45–13:45' },
  { titel: 'Hospitation des Kindes', text: 'eine ganze Woche, Mo–Fr 8–13:30' },
  { titel: 'Abschlussgespräch', text: 'mit Schulleitung und Vorstand' },
  { titel: 'Vertragsunterzeichnung', text: '' },
];

export const KURZPORTRAIT = [
  'Statutenschule mit Öffentlichkeitsrecht',
  '1. bis 9. Schulstufe (Pflichtschule)',
  'Höchstens 30 Schüler*innen in der gesamten Schule',
  'Kleine, altersgemischte Gruppen',
  'Hoher Betreuungsschlüssel',
  'Reformpädagogischer, ganzheitlicher Ansatz',
  'Individuelles, selbstbestimmtes Lernen',
  'Projektarbeit mit Realitätsbezug',
  'Jause und Mittagessen, frisch in der Schule gekocht',
  'Nachmittagsbetreuung bis 16:30',
];

export const WERTE = [
  'Persönlichkeitsentwicklung', 'Soziales Miteinander', 'Ganzheitliches Lernen', 'Demokratie erleben',
  'Forschen und Experimentieren', 'Teamgeist & Schulgemeinschaft', 'Kreativität', 'Selbständigkeit', 'Humor',
];

export const NETZWERKE = [
  { name: 'Verband der europäischen Astrid Lindgren Schulen', logo: '/images/alz/logos/astrid-lindgren-schulen.png' },
  { name: 'Schule der Zukunft', logo: '/images/alz/logos/schule-der-zukunft.png', text: 'Empfohlene Schule der Initiative von Neurobiologe Prof. Gerald Hüther', href: 'https://www.schulen-der-zukunft.org/' },
  { name: 'Klimabündnis Schule', logo: '/images/alz/logos/klimabuendnis.png', href: 'https://www.klimabuendnis.at/schule-kiga/bildungseinrichtungen-im-klimabuendnis' },
  { name: 'Ökolog Schule', logo: '/images/alz/logos/oekolog.png', href: 'https://www.oekolog.at' },
  { name: 'Wiener Netzwerk Gesundheitsfördernde Schulen', logo: '/images/alz/logos/wiener-netzwerk-gesundheit.png', href: 'http://www.wiengs.at' },
  { name: 'Netzwerk freier Schulen', logo: '/images/alz/logos/netzwerk-freier-schulen.png', href: 'http://www.unsereschulen.at/home/german/index.htm' },
];

export const VORSTAND = [
  { rolle: 'Obmann', name: 'Inno Fail' },
  { rolle: 'Kassierin', name: 'Ilona Müller-Pflegerl' },
];

export const BANK = {
  inhaber: 'Astrid Lindgren Zentrum – Verein für Pädagogik und Kultur',
  bank: 'Erste Bank',
  iban: 'AT54 2011 1282 1039 8806',
  bic: 'GIBAATWWXXX',
};

export const SPONSOREN = [
  { name: 'Oetinger Verlag', logo: '/images/alz/logos/oetinger.png', href: 'https://www.oetinger.de' },
  { name: 'MA 13 – Stadt Wien', logo: '/images/alz/logos/ma13.png', href: 'https://www.wien.gv.at/bildung/schulen' },
  { name: 'Ströck-Brot GmbH', logo: '/images/alz/logos/stroeck.png', href: 'https://stroeck.at/de' },
  { name: 'Octapharma Austria', logo: '/images/alz/logos/octapharma.png', href: 'https://www.octapharma.at' },
  { name: 'Huthansl Althaussanierung & Bau GmbH', logo: '/images/alz/logos/huthansl.png', href: 'https://www.huthansl.at' },
  { name: 'Theater am Alsergrund', logo: '/images/alz/logos/theater-am-alsergrund.png', href: 'https://kabarett-wien.at' },
];

// Stellenanzeige vom 18.06.2026 (Blog der Live-Seite); Fallback, solange Contentful leer ist
export const STELLE_MATHE = {
  id: 'mathe-nawi-2026',
  title: 'Lehrkraft für Mathematik/Naturwissenschaften',
  type: '2 Tage pro Woche, ab Schuljahr 2026/27',
  voraussetzungen: [
    'Bereitschaft zur Mitarbeit in einer Schule in freier Trägerschaft',
    'Übereinstimmung mit unserem pädagogischen Leitbild',
    'Menschenbild und Sicht auf Kinder und Jugendliche im Sinne Astrid Lindgrens',
    'Lehrbefähigung für Mathematik und/oder Naturwissenschaften bzw. entsprechende fachliche Qualifikation',
    'Montessori- oder vergleichbare reformpädagogische Ausbildung – oder die Bereitschaft, sie in den ersten zwei Dienstjahren zu absolvieren',
    'Anwesenheit an 2 Unterrichtstagen pro Woche',
    'Teilnahme an Teamsitzungen, Elternabenden, Elterngesprächen und schulischen Veranstaltungen',
    'Bereitschaft zur Mitarbeit bei Projekten und schulischen Aktivitäten',
    'Geduld, Belastbarkeit und Freude an der Arbeit mit Kindern und Jugendlichen',
  ],
  wuensche: [
    'Erfahrung im Unterricht mit Kindern und Jugendlichen unterschiedlicher Altersstufen',
    'Alternativpädagogische Erfahrung oder Interesse an reformpädagogischen Konzepten',
    'Reflexionsfähigkeit, Teamorientierung und Bereitschaft zur Supervision',
    'Freude an handlungsorientiertem, forschendem und entdeckendem Lernen',
    'Interesse an innovativen Unterrichtsmethoden und zeitgemäßer Medienbildung',
  ],
  angebot: [
    'Ein Arbeitsumfeld in einer kleinen, familiären Schule',
    'Supervision und Teamentwicklung',
    'Anstellung nach dem Mindestlohntarif für private Bildungseinrichtungen unter Anrechnung tätigkeitsbezogener Vordienstzeiten',
    'Entlohnung entsprechend Qualifikation und Beschäftigungsausmaß',
    'Aufstiegsmöglichkeiten und Gestaltungsspielraum',
  ],
};

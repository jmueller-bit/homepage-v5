// Quelle: Live-Seite, Startseite „Nächste Info-Termine“ (docs/analyse/inhalte/home.md)
export const TERMINE = [
  { datum: '2027-01-12', titel: 'Zoom-Info-Abend', zeit: null, ort: 'Online' },
  { datum: '2027-03-04', titel: 'Kleiner Tag der offenen Tür', zeit: '14:30–17:00', ort: 'Im Astrid Lindgren Zentrum' },
  { datum: '2027-05-20', titel: 'Kleiner Tag der offenen Tür', zeit: '14:30–17:00', ort: 'Im Astrid Lindgren Zentrum' },
]

// Lokales Datum, nicht UTC: sonst kippt der Termin um Mitternacht in Wien falsch
const toDay = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`

// Nächster Termin ab heute (inklusive), sonst null → individueller Termin
export const getNaechsterTermin = (heute = new Date(), termine = TERMINE) =>
  termine.find((t) => t.datum >= toDay(heute)) ?? null

export const istHeute = (iso, heute = new Date()) => iso === toDay(heute)

export const formatTerminDatum = (iso) =>
  new Intl.DateTimeFormat('de-AT', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
    .format(new Date(`${iso}T12:00:00`))

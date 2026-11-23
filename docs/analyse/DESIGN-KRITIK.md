# Schritt 6: Design-Kritik & Feinschliff

Stand: 23. November 2026 · Skill: Impeccable (critique) · Ziel: Startseite

Methode: zwei unabhängige Prüfer, A = Design-Review (Heuristiken, Personas, live bei 375 und 1440 px), B = automatischer Detektor (Quelltext und URL mobil/desktop). Inhaltlich-visuelles Review getrennt von den technischen Messungen in `LIGHTHOUSE.md` und `MOBIL-TEST.md`.

## Ergebnis vorher

- Nielsen-Heuristiken: **22/32** (7 und 10 n/a)
- Detektor: 11 Funde (Kicker über Überschriften, Kennzahl-Kacheln, einzelne Wörter in letzter Zeile, Creme-Hintergrund)

## Umgesetzt

| Kritik | Maßnahme |
|---|---|
| Kicker über H1 und Termin-Überschrift (Ban) | „Wien-Liesing · seit 2003“ in den Lead; Termin-Karte trägt „Nächster Kennenlern-Termin“ als Überschrift |
| Drei rote Primärbuttons im ersten Viewport | Hero-Anruf als Outline-Button, Aufnahme als Textlink; Rot nur noch für den Termin |
| Kennzahl-Kacheln (austauschbares SaaS-Muster) | Ein Satz in der Überschriftenschrift mit markierten Zahlen |
| „Plätze frei“ im Fließtext versteckt | Eigene Zeile in `--green-text` |
| „Öffentlichkeitsrecht“ unerklärt | „Die Zeugnisse sind staatlich gültig“ |
| Recruiting-Karten im Elternfluss, kein Abschluss | „Lernen Sie uns kennen“ mit Telefon, E-Mail und zweiter Termin-Karte; Stellen als eine Zeile unten |
| Drei Labels für die Aufnahme | Überall „Anmeldung & Kosten“ |
| Checkliste mit 6 Punkten | 4 Punkte (Öffentlichkeitsrecht und Essen stehen jetzt oben) |
| Seitenbalken an der Auszeichnung | Fläche in `--paper-deep` |
| Einzelne Wörter in letzter Zeile | `text-wrap: pretty` (Text) und `balance` (Überschriften) |
| Altlasten `float`/`fadeIn`-Animationen | entfernt |

Mikro-Interaktionen: Buttons geben beim Drücken nach (`scale 0.98`), Primärbutton hebt sich beim Hover um 1 px, die Wimpelkette weht beim Laden einmal ein (700 ms). Alles aus bei `prefers-reduced-motion`. Textauswahl in Ocker.

Edge Cases: Termin am selben Tag zeigt „Heute: …“; nach dem letzten Termin „Termin individuell vereinbaren“ mit Telefonnummer (beide per Selbsttest `src/data/termine.test.mjs` abgedeckt, Mitternacht in lokaler Zeit). Ohne Contentful-Zugang zeigen CMS-Seiten ihre Fehlermeldung statt einer leeren App.

## Ergebnis nachher

Detektor: 1 Fund (`cream-palette` am `body`) – bewusst beibehalten, der Papierton ist aus den ALZ-Materialien abgeleitet (DESIGN.md §1).

## Offen – braucht Material vom ALZ

- **Keine Menschen auf der Startseite (P1).** Im Projekt gibt es nur Raum- und Detailfotos. Benötigt: Fotos mit Kindern/Unterricht mit Einverständnis der Eltern, oder Standbilder der Video-Interviews.
- „Primaria I“ ist für neue Eltern unklar; welche Schulstufen dazugehören, steht nicht auf der Live-Seite.
- Ferien und Feiertage: keine Datenquelle vorhanden; Termine werden manuell in `src/data/termine.js` gepflegt.
- „Teilnahme anfragen“ gibt den Termin nicht an das Kontaktformular weiter (Formular hat noch keinen Versand).

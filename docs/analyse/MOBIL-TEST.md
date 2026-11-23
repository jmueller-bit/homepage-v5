# Schritt 4: Mobile Check & Usability-Test

Stand: 23. November 2026 · Gerät: Smartphone-Emulation 375×812 · 19 Routen geprüft (alle aus `src/App.jsx`)

Hinweis: Python-Playwright (Skill webapp-testing) war nicht installiert; getestet wurde im eingebauten Browser mit Mobil-Emulation, Messung per Skript im Seitenkontext. Contentful-Inhalte (News, Team, Galerie, Stellen) waren lokal ohne Zugangsdaten leer.

## Befund vorher → nachher

| Prüfung | Vorher | Nachher |
|---|---|---|
| Klickziele < 44 px (ohne Fließtext-Links) | 13–53 pro Seite | 0 auf allen geprüften Seiten |
| Horizontaler Überlauf | `/eltern/anmeldung` (389 px), `/impressum` (428 px), `/datenschutz` (419 px) | keiner |
| Emojis als Icons | 7 Seiten | 0 |
| Layout-Verschiebung (CLS) Startseite | – | 0.000 |
| Schrift < 14 px | Footer, Dropdown-Pfeil | nur noch der dekorative Pfeil (jetzt CSS) |
| Menü-Button | 35×29 px, ohne Namen | 48×48 px, `aria-label`, `aria-expanded` |
| Daumenleiste | – | Anrufen, Route, Termin (seit Schritt 3) |

## Änderungen

- Menü-Button 48×48, beschriftet; mobiles Menü sitzt unter dem Header statt über dem Logo; Chevron per CSS (Textschrift hat kein ▾).
- Navigations-, Sidebar-, Footer-, Telefon- und E-Mail-Links mind. 48 px hoch; Footer-Schrift 0.95 rem.
- Lange Wörter (Impressum, Datenschutz) brechen mit Silbentrennung um; Grid-Spalten können schrumpfen.
- Emojis entfernt (Anmeldung, Services, Organisatorisches, leere Zustände).
- Navigationslinks ohne Unterstreichung, Fließtext-Links weiterhin unterstrichen.
- Bilder: Galerie (4:3), Team (1:1), News (feste Höhe) reservieren bereits Platz – keine Änderung nötig.

## Offen

- Contentful-Seiten mit echten Daten mobil prüfen, sobald `.env` vorhanden ist.
- Unterseiten nutzen weiterhin Inline-Styles und das alte Layout (Umbau steht aus).
- Test auf echtem Gerät (iOS Safari: `100dvh`, Safe-Area der Daumenleiste).

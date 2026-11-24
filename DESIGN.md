# DESIGN.md – Astrid Lindgren Zentrum v4

Verbindliches Design-System für den Relaunch (Schritt 2 der Checkliste). Inhalte kommen ausschließlich aus `docs/analyse/` – siehe [ANALYSE.md](docs/analyse/ANALYSE.md).

## 1. Leitidee

**„Das Schulheft auf dem Holztisch.“** Abgeleitet aus echten ALZ-Materialien: der Linienschwung des Logos, die „HEJ!“-Jahresbroschüre mit Wimpelkette, Papier, Holz, Kinderzeichnungen. Die Seite wirkt wie ein gut gemachtes Schulheft: warm, ruhig, handfest – nicht wie ein Kinder-App-Spielplatz und nicht wie ein Start-up.

Zielgruppe sind **Eltern**, die eine Schule für ihr Kind abwägen. Sie wollen Vertrauen, Klarheit und schnell die harten Fakten.

## 2. Branchenregeln: Was Eltern zuerst brauchen

Reihenfolge = Priorität im ersten Sichtbereich und in der Navigation:

1. **Nächster Kennenlern-Termin** (Info-Abend / Tag der offenen Tür) mit Datum – das „Live-Status“-Element dieser Seite.
2. **Kontakt sofort erreichbar**: Anrufen, E-Mail, Route. Mobil als Daumenleiste unten.
3. **Harte Fakten in einem Blick**: 1.–9. Schulstufe, Öffentlichkeitsrecht, max. 30 Schüler*innen, 8–12 pro Pädagog*in, Betreuung bis 16:30, frisch gekochtes Essen.
4. **Kosten & Aufnahme**: 6-Schritte-Aufnahmeverfahren sichtbar als Seite, Kostenübersicht-PDF direkt verlinkt.
5. **Vertrauen**: echte Gesichter (Team mit Fotos), echte Stimmen (Video-Interviews), Netzwerke/Auszeichnungen (Schule der Zukunft, Ökolog, Wiener Heldin 2025).
6. **Pädagogik** – erst danach, dafür ausführlich.

Quelle Branchendaten: ui-ux-pro-max (`product`: Educational / Kids Learning → „Social Proof-Focused + Trust“, „Storytelling-Driven“). Der von der Datenbank vorgeschlagene Stil (Claymorphism, Indigo, Baloo 2 + Comic Neue) ist **verworfen**: er zielt auf Kinder-Apps, nicht auf Eltern, und ist genau der generische Look, den wir vermeiden.

## 3. Verbote (gegen den KI-Einheitslook)

- Kein Glassmorphism, keine `backdrop-filter`-Karten, keine Verlaufs-Hintergründe (der aktuelle v4-Stil `--glass-*` wird ersetzt).
- Kein Indigo/Violett-Blau, keine Neon- oder Pastell-Regenbogen-Palette.
- Keine Schriften: Inter, Roboto, Poppins, Montserrat, Open Sans, Arial, Comic Neue, Baloo.
- Keine Emojis als Icons (aktuell u. a. in `ElternOrganisatorisches.jsx`) – nur SVG-Icons, einheitlicher Strich.
- Kein Raster aus gleich großen Icon-Karten mit 3–4 Spalten als Standardlösung.
- Keine Stockfotos, keine KI-Bilder, keine Platzhalter. Nur ALZ-Fotos.
- Keine erfundenen Zahlen, Zeiten oder Zitate.
- Keine Schatten-Stapel. Große Radien (24 px) nur für Fotos und Karten auf der Startseite.

## 4. Farben

Abgeleitet aus dem Original-Logo (`public/images/logos/alz-logo-wortmarke.png`, gemessen: Ocker `#F7A600`, Rot `#C73729`, Grün `#5E9345`) und den Fotos (Papier, Holz). Kontraste gegen `--paper` gemessen.

| Token | Hex | Rolle | Kontrast |
|---|---|---|---|
| `--paper` | `#FBF7EF` | Seitenhintergrund (Heftpapier) | – |
| `--paper-deep` | `#F3EBDC` | Flächen, Abschnittswechsel | – |
| `--ink` | `#2B2620` | Fließtext, Überschriften | 14.0:1 |
| `--ink-muted` | `#5C5248` | Nebentext, Metadaten | 7.1:1 |
| `--rule` | `#E2D7C3` | Linien, Ränder | dekorativ |
| `--logo-ocker` | `#F7A600` | Flächen, Linienschwung, Markierungen – **nie Textfarbe** | 1.9:1 |
| `--logo-rot` | `#C73729` | Flächen, Bereichsfarbe | 4.9:1 |
| `--logo-gruen` | `#5E9345` | Flächen, Bereichsfarbe – nicht für Fließtext | 3.4:1 |
| `--accent` | `#C73729` | Primäre Aktion (Buttons, Links), Termine – das Logo-Rot | 4.9:1 · Weiß darauf 5.2:1 |
| `--accent-hover` | `#A92E22` | Hover/Active | 6.3:1 |
| `--green-text` | `#3F6E2C` | Grüner Text, „Plätze frei“ | 5.7:1 |
| `--ocker-text` | `#8A5A00` | Ockerfarbener Text | 5.6:1 |

Regeln: Ocker-Flächen tragen `--ink`-Text (7.4:1). Kein Dark Mode.

**Bereichsfarben**: Jeder Bereich trägt eine Logofarbe (`farbe` in `src/data/navigation.js`): Schule und Eltern Grün, Schulleben und Über uns Ocker, Unterstützen, Karriere und Kontakt Rot. Über `data-farbe` setzt sie `--bereich` (Fläche, Seitenkopf-Linie, Aufzählungspunkte, Linie über H2), `--bereich-text` (Pfeile, aktive Navigation) und `--bereich-tint` (Seitenkopf, Hinweise, Kontaktbox; Ink darauf ≥ 11:1). Buttons bleiben im Logo-Rot.

## 5. Typografie

Lokal eingebunden (`@fontsource/*`, kein Google-Fonts-Request – Datenschutz und Performance).

| Rolle | Schrift | Warum |
|---|---|---|
| Überschriften | **Young Serif** 400 | Bücherhaft, warm, erinnert an Kinderbuch-Satz ohne kindisch zu sein; Bezug zu Astrid Lindgren |
| Fließtext & UI | **Atkinson Hyperlegible Next** 400/700 | Für Lesbarkeit entwickelt (Braille Institute) – passt zum Inklusions-Ansatz des ALZ |

Skala (rem, Basis 16 px = 1 rem, mobil 17 px): `0.875 · 1 · 1.25 · 1.6 · 2.1 · 2.8 · 3.6`. Zeilenhöhe Text 1.6, Überschriften 1.15. Zeilenlänge max. 68ch.

## 6. Form & Raum

- Abstände: 4er-Raster `4 · 8 · 12 · 16 · 24 · 32 · 48 · 72 · 112 px`, großzügig („spacious“).
- Radius: 4 px (Felder, Buttons), 8 px (Karten auf Unterseiten), 24 px (`--radius-gross`: Fotos, Termin-Karte und Flächen der Startseite).
- Linien statt Schatten: Abschnitte trennen sich durch `--rule`-Linien oder `--paper-deep`-Flächen.
- **Signatur-Element: der Logo-Schwung.** Eine 6 px starke Linie in Ocker/Rot/Grün mit runden Ecken, wie im Logo, führt als Unterstreichung von Überschriften, als Zeitleiste im Aufnahmeverfahren und als Wegmarkierung. Sparsam: max. einmal pro Bildschirm.
- **Wimpelkette** (aus der HEJ!-Broschüre) nur für Termine/Aktuelles.
- Fotos: echte ALZ-Fotos, leicht abgerundet, nie mit Farbfilter überlagert. Immer `width`/`height` bzw. `aspect-ratio` setzen.

## 6a. Startseite: kräftige Farbflächen

Die Startseite darf lauter sein als die Unterseiten – freundlich und modern, ohne kindisch zu werden (Zielgruppe bleiben Eltern):

- **Abschnitte als volle Farbflächen**: Hero in Ocker (Text Ink, 7.4:1), Fakten in Grün (weißer Text nur ab 24 px, 3.7:1), Abschluss in Rot (weißer Text, 5.2:1). Dazwischen Papier.
- **Logolinien als große Form** (`LogoFormen.jsx`) am Rand der Farbflächen, angeschnitten, rein dekorativ.
- **Sticker** („Plätze frei“): Rot, leicht schräg (−4°), springt beim Laden einmal auf; mobil auf der Kante zum Bildband.
- **Unterseiten**: Seitenkopf als volle Fläche in der Bereichsfarbe (Grün dunkel `--green-text` mit Weiß 5.7:1, Ocker mit Ink, Rot mit Weiß), Logolinien angeschnitten rechts unten.
- **Fotos mit versetztem Farbrahmen** (`.foto-rahmen`): Farbblock 14 px nach rechts unten verschoben, gleicher Radius.
- Auf farbigen Flächen sind Links Ink bzw. Weiß, nie Rot auf Ocker.

## 7. Interaktion & Barrierefreiheit

- Klickziele mind. **48×48 px**, 8 px Abstand.
- Mobil: feste **Daumenleiste** unten mit `Anrufen` (`tel:+4318874053`), `Route` (Google-Maps-Link der Kontaktseite), `Termin` (→ Kontakt).
- Fokus: 3 px `--accent`-Outline mit 2 px Abstand, nie entfernen.
- Zoom nie sperren; `lang="de"`.
- Bewegung: 150–250 ms, `ease-out`; nur `transform`/`opacity`; `prefers-reduced-motion` respektieren.
- Icons: eine SVG-Familie mit 1.75 px Strich (z. B. Lucide), dekorative Icons `aria-hidden`.

## 8. Umsetzung im Code

- Tokens ersetzen die bestehenden Variablen in `src/index.css` (`--primary-green`, `--glass-*`, `--font-primary` …). Bis zur Migration gilt: neue Komponenten nutzen nur Tokens aus diesem Dokument.
- Kein Inline-`style` für Farben/Abstände (aktuell u. a. in `ElternOrganisatorisches.jsx`).
- Breakpoints: 375 · 768 · 1024 · 1440 px, mobile-first.

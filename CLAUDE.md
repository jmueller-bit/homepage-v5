# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projekt

Homepage des Astrid Lindgren Zentrums (ALZ): React 19 + Vite 7 SPA, plain JavaScript (kein TypeScript), React Router 7, Inhalte teils aus Contentful (Headless CMS), Deployment auf Vercel. UI-Texte und Routen sind auf Deutsch.

## Befehle

```bash
npm run dev       # Vite-Dev-Server
npm run build     # Produktions-Build nach dist/
npm run lint      # ESLint (flat config, eslint.config.js)
npm run preview   # Build lokal ansehen
npm run deploy    # vercel --prod
```

Kein Test-Framework; kleine Selbsttests per Node:

```bash
node src/data/termine.test.mjs      # Logik „nächster Termin“
node src/data/navigation.test.mjs   # jeder Navigationslink hat eine Route in App.jsx
```

## Umgebungsvariablen

Contentful braucht `VITE_CONTENTFUL_SPACE_ID` und `VITE_CONTENTFUL_ACCESS_TOKEN` (optional `VITE_CONTENTFUL_ENVIRONMENT`, Default `master`) in einer lokalen `.env`. Ohne sie läuft die App weiter; nur die CMS-Abfragen schlagen fehl und die Seiten zeigen ihren Fehlerzustand (Stellen zeigt dann die statische Anzeige aus `src/data/inhalte.js`).

## Architektur

- **Inhaltsregel**: Keine erfundenen Inhalte. Quelle sind die gesicherten Texte der Live-Seite in `docs/analyse/inhalte/`; offene Widersprüche stehen in `docs/analyse/ANALYSE.md`. Design-Regeln in `DESIGN.md`.
- **Navigation**: `src/data/navigation.js` ist die einzige Quelle für Header, Footer, Sitemap und die Bereichsnavigation der Unterseiten. Nur Seiten eintragen, die eine eigene `<Route>` in `src/App.jsx` haben (der Navigationstest prüft das). Bereichsrouten sind exakt (`/eltern`, nicht `/eltern/*`); unbekannte Pfade landen auf `NichtGefunden`. Unterseiten außer der Startseite werden per `React.lazy` geladen.
- **Seiten**: Unterseiten nutzen `src/components/PageLayout.jsx` (Titel, Lead, Lesespalte, Bereichsnavigation, Kontaktbox) mit den Bausteinen `.weg-liste`, `.daten`, `.hinweis` aus `PageLayout.css`. Titel/Beschreibung setzt `PageMeta` (React 19 hebt `<title>`/`<meta>` in den Head). Wiederverwendete Inhalte (Aufnahmeverfahren, Netzwerke, Bankdaten, Downloads …) liegen in `src/data/inhalte.js`, Kontaktdaten in `src/data/kontakt.js`, Termine in `src/data/termine.js`.
- **Styles**: Design-Tokens in `src/index.css` (`--paper`, `--ink`, `--accent` …); alte Variablennamen (`--primary-green` …) sind nur noch Aliase. Keine Inline-Styles, keine Emojis als Icons.
- **Contentful**: `src/services/contentful.js` enthält den Client und je Content-Type eine Fetch-Funktion (`newsArtikel`, `teamMitglied`, `galleryImage`, `stellenangebot`). Feldnamen im CMS sind deutsch (`titel`, `slug`, `datum`, `inhalt`, `titelbild` …). `contentfulMapper.js` mappt Einträge auf englische Frontend-Objekte. Rich Text wird mit `@contentful/rich-text-react-renderer` gerendert.
- **Datenfluss News**: `useNewsArticles` / `useNewsArticle` (in `src/hooks/`) → Service → Mapper; Lade-/Fehlerzustände über `NewsSkeleton` und `NewsError`. Team, Gallery und Stellen rufen den Service direkt in der Seite auf.
- **Vercel**: `vercel.json` schreibt alle Pfade auf `index.html` um (SPA-Fallback). `.github/workflows/deploy.yml` baut und deployt bei Push auf `main`; die Contentful-Variablen kommen dort aus GitHub Secrets.

## Weitere Doku

`docs/analyse/` enthält Analyse, Mobil-Test, Lighthouse-Messung und Design-Kritik. `HOMEPAGE-STRUKTUR.md` ist veraltet (alte, geplante Struktur).

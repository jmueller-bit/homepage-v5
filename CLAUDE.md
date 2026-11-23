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

Es gibt keine Tests und kein Test-Framework.

## Umgebungsvariablen

Contentful braucht `VITE_CONTENTFUL_SPACE_ID` und `VITE_CONTENTFUL_ACCESS_TOKEN` (optional `VITE_CONTENTFUL_ENVIRONMENT`, Default `master`) in einer lokalen `.env`. Ohne sie laden die Contentful-Seiten nicht.

## Architektur

- **Routing**: alle Routen zentral in `src/App.jsx`. Bereiche wie `/schule/*`, `/eltern/*`, `/ueber-uns/*` werden von einer Sammelseite abgefangen; echte Unterseiten (z. B. `/eltern/services`, `/ueber-uns/team`) bekommen eine eigene, spezifischere `<Route>`. Neue Unterseiten also dort als eigene Route eintragen und in `Header.jsx`, `Footer.jsx` und `Sitemap.jsx` verlinken.
- **Seiten**: `src/pages/*.jsx`, jeweils mit gleichnamiger CSS-Datei; gemeinsames Layout über `PageTemplate.css`. Die meisten Seiten haben hartcodierten Inhalt.
- **Contentful**: `src/services/contentful.js` enthält den Client und je Content-Type eine Fetch-Funktion (`newsArtikel`, `teamMitglied`, `galleryImage`, `stellenangebot`). Feldnamen im CMS sind deutsch (`titel`, `slug`, `datum`, `inhalt`, `titelbild` …). `contentfulMapper.js` mappt Einträge auf englische Frontend-Objekte. Rich Text wird mit `@contentful/rich-text-react-renderer` gerendert.
- **Datenfluss News**: `useNewsArticles` / `useNewsArticle` (in `src/hooks/`) → Service → Mapper; Lade-/Fehlerzustände über `NewsSkeleton` und `NewsError`. Andere Contentful-Seiten (Team, Gallery, Stellen) rufen den Service direkt in der Seite auf.
- **Vercel**: `vercel.json` schreibt alle Pfade auf `index.html` um (SPA-Fallback). `.github/workflows/deploy.yml` baut und deployt bei Push auf `main`; die Contentful-Variablen kommen dort aus GitHub Secrets.

## Weitere Doku

`HOMEPAGE-STRUKTUR.md` listet die geplante Seitenstruktur und welche Unterseiten noch fehlen.

# Schritt 5: Messung & Performance-Optimierung

Stand: 23. November 2026 · Lighthouse 12, Produktions-Build (`vite preview`), Chrome headless, Startseite

## Ergebnis

| | Performance | Barrierefreiheit | Best Practices | SEO |
|---|---|---|---|---|
| Mobil vorher | 96 | 94 | 96 | 92 |
| **Mobil nachher** | **97** | **100** | **96** | **100** |
| Desktop vorher | 100 | 94 | 96 | 92 |
| **Desktop nachher** | **100** | **100** | **96** | **100** |

Mobil nachher: FCP 1.8 s · LCP 2.3 s · TBT 0 ms · CLS 0
Unterseiten mobil: `/kontakt` 98/100/96/100, `/eltern/anmeldung` 98/100/96/100, `/ueber-uns/team` 97/100/96/100

## Maßnahmen

- **Bilder**: HEJ!-Foto von 387 KB auf 30–89 KB (WebP 640/1024/1600 px, JPG-Fallback, `srcset`/`sizes`) in `public/images/opt/`. AVIF getestet, war bei diesem Motiv größer als WebP → verworfen. Eigenes OpenGraph-Bild 1200×630.
- **JavaScript**: Unterseiten per `React.lazy` nachgeladen; Haupt-Bundle 364 → 252 KB, Contentful-SDK nur noch auf CMS-Seiten.
- **Fonts**: lokal (seit Schritt 3) plus metrisch angeglichene Ersatzschriften (`size-adjust`) → CLS mobil 0.034 → 0.
- **Barrierefreiheit**: Kontrast der Logo-Unterzeile (Ocker → `--ocker-text`), Überschriften-Hierarchie in Footer, Kontakt und Team.
- **SEO**: `robots.txt`; je Seite eigener `<title>` und `meta description` über `src/components/PageMeta.jsx` (React 19 hebt sie in den `<head>`).

## Warum nicht 100/100 überall

- **Best Practices 96**: einziger Befund ist ein 404 auf `/_vercel/insights/script.js`. Das Skript existiert nur auf Vercel-Deployments; lokal nicht behebbar, auf Vercel erwartbar 100.
- **Performance mobil 97**: Lighthouse meldet das CSS-Bundle (8 KB gzip) als render-blockierend (simuliert 600 ms bei langsamem 4G). Lösung wäre Critical-CSS-Inlining per zusätzlichem Build-Plugin – bewusst nicht eingebaut (neue Abhängigkeit für 3 Punkte).

## Bekannte Grenzen (SPA)

- Titel und Beschreibungen entstehen erst per JavaScript. Google rendert JS, aber Link-Vorschauen (WhatsApp, Facebook) lesen nur das statische `index.html` und sehen keinen Titel. Abhilfe: Prerendering der Routen beim Build.
- `og:image` ist relativ; braucht die finale Domain als absolute URL. Aus demselben Grund noch keine `sitemap.xml`.
- `NewsDetail` hat noch keine eigenen Meta-Tags.
- `public/images/hero/hero.png` (3 MB) wird nirgends verwendet.

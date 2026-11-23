// React 19 hebt <title> und <meta> automatisch in den <head>
const SITE = 'Astrid Lindgren Zentrum';

function PageMeta({ title, description }) {
  const fullTitle = title ? `${title} – ${SITE}` : `Astrid Lindgren Schule – Zentrum für ganzheitliches Lernen, Wien`;
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
    </>
  );
}

export default PageMeta;

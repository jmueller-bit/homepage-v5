import PageLayout from '../components/PageLayout';
import { KONTAKT } from '../data/kontakt';

function Kontakt() {
  return (
    <PageLayout
      title="Kontakt"
      lead="Wenn Sie unsere Schule kennenlernen möchten, rufen Sie uns einfach an. Wir vereinbaren gerne einen individuellen Termin."
      description={`Astrid Lindgren Zentrum, ${KONTAKT.adresse.join(', ')}. Telefon ${KONTAKT.telefon}, ${KONTAKT.email}.`}
      aside={false}
    >
      <div className="kontakt-wege">
        <a href={KONTAKT.telHref} className="btn btn-primary">Anrufen: {KONTAKT.telefon}</a>
        <a href={`mailto:${KONTAKT.email}`} className="btn btn-outline">E-Mail schreiben</a>
      </div>

      <dl className="daten">
        <dt>Träger</dt>
        <dd>Astrid Lindgren Zentrum – Verein für Pädagogik und Kultur</dd>
        <dt>Adresse</dt>
        <dd>{KONTAKT.adresse.join(', ')}</dd>
        <dt>Telefon</dt>
        <dd><a href={KONTAKT.telHref}>{KONTAKT.telefon}</a></dd>
        <dt>E-Mail</dt>
        <dd><a href={`mailto:${KONTAKT.email}`}>{KONTAKT.email}</a></dd>
        <dt>ZVR</dt>
        <dd>{KONTAKT.zvr}</dd>
      </dl>

      <h2>So kommen Sie zu uns</h2>
      <p>
        Der Eingang befindet sich an der Breitenfurter Straße fast unter dem Aquädukt (an der Ecke),
        neben dem Städtischen Kindergarten.
      </p>
      <ul>
        <li>S-Bahn: Bahnhof Liesing</li>
        <li>Straßenbahn: Linie 60</li>
        <li>Bus: 60A, 253, 259, 354</li>
      </ul>
      <p>
        <a href={KONTAKT.routeHref} className="pfeil-link" target="_blank" rel="noopener noreferrer">Route in Google Maps</a>
        {' '}
        <a href="https://www.openstreetmap.org/node/6049827292" className="pfeil-link" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>
      </p>
    </PageLayout>
  );
}

export default Kontakt;

import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { DOWNLOADS } from '../data/inhalte';
import { KONTAKT } from '../data/kontakt';

function ElternOrganisatorisches() {
  return (
    <PageLayout
      title="Organisatorisches"
      lead="Das Wichtigste zum Schulalltag auf einen Blick."
      description="Organisatorisches für Eltern: Nachmittagsbetreuung bis 16:30, frisch gekochtes Essen, Anfahrt und Kontakt."
    >
      <h2>Betreuung &amp; Unterrichtszeiten</h2>
      <p>
        Nachmittagsbetreuung bis 16:30. Die genauen Unterrichtszeiten stehen in der{' '}
        <a href={DOWNLOADS.kosten.href} target="_blank" rel="noopener noreferrer">Kostenübersicht 2026/27 (PDF)</a>.
      </p>

      <h2>Essen</h2>
      <p>
        Jause und Mittagessen werden frisch in der Schule gekocht. Bei Allergien oder
        Unverträglichkeiten sprechen Sie uns bitte an.
      </p>

      <h2>Anfahrt</h2>
      <p>
        {KONTAKT.adresse.join(', ')}. Der Eingang befindet sich an der Breitenfurter Straße fast unter
        dem Aquädukt (an der Ecke), neben dem Städtischen Kindergarten.
      </p>
      <ul>
        <li>S-Bahn: Bahnhof Liesing</li>
        <li>Straßenbahn: Linie 60</li>
        <li>Bus: 60A, 253, 259, 354</li>
      </ul>
      <a href={KONTAKT.routeHref} className="pfeil-link" target="_blank" rel="noopener noreferrer">Route in Google Maps</a>

      <h2>Dokumente</h2>
      <p>Formulare und Informationsblätter finden Sie gesammelt unter Dokumente.</p>
      <Link to="/eltern/services" className="pfeil-link">Zu den Dokumenten</Link>
    </PageLayout>
  );
}

export default ElternOrganisatorisches;

import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { KONTAKT } from '../data/kontakt';

function Karriere() {
  return (
    <PageLayout
      title="Arbeiten im ALZ"
      metaTitle="Karriere"
      lead="Unser Team besteht aus Pädagog*innen mit reformpädagogischer Ausbildung und Expert*innen aus unterschiedlichen Berufsgruppen."
      description="Arbeiten im Astrid Lindgren Zentrum: offene Stellen, Zivildienst und Praktika."
    >
      <h2>Wir suchen</h2>
      <ul className="weg-liste">
        <li>
          <Link to="/karriere/stellen">
            <span className="weg-titel">Lehrkraft für Mathematik/Naturwissenschaften</span>
            <span className="weg-text">2 Tage pro Woche – zur Stellenanzeige</span>
          </Link>
        </li>
        <li>
          <a href={`mailto:${KONTAKT.email}?subject=Zivildienst`}>
            <span className="weg-titel">Zivildiener ab September 2027</span>
            <span className="weg-text">Wir freuen uns auf Bewerbungen per E-Mail</span>
          </a>
        </li>
        <li>
          <a href={`mailto:${KONTAKT.email}?subject=Praktikum`}>
            <span className="weg-titel">Praktikant*innen</span>
            <span className="weg-text">Wir freuen uns auf Bewerbungen per E-Mail</span>
          </a>
        </li>
      </ul>

      <h2>Was wir bieten</h2>
      <ul>
        <li>Ein Arbeitsumfeld in einer kleinen, familiären Schule</li>
        <li>Supervision und Teamentwicklung</li>
        <li>Entlohnung entsprechend Qualifikation und Beschäftigungsausmaß</li>
        <li>Aufstiegsmöglichkeiten und Gestaltungsspielraum</li>
      </ul>

      <h2>Initiativ bewerben</h2>
      <p>
        Keine passende Stelle dabei? Schreiben Sie uns an{' '}
        <a href={`mailto:${KONTAKT.email}?subject=Initiativbewerbung`}>{KONTAKT.email}</a>.
      </p>
    </PageLayout>
  );
}

export default Karriere;

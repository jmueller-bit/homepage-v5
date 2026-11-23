import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

function NichtGefunden() {
  return (
    <PageLayout
      title="Seite nicht gefunden"
      lead="Diese Seite gibt es nicht (mehr). Vielleicht hilft einer dieser Wege weiter."
      description="Die angeforderte Seite wurde nicht gefunden."
      aside={false}
    >
      <ul className="weg-liste">
        <li><Link to="/"><span className="weg-titel">Startseite</span></Link></li>
        <li><Link to="/eltern/anmeldung"><span className="weg-titel">Anmeldung &amp; Kosten</span></Link></li>
        <li><Link to="/kontakt"><span className="weg-titel">Kontakt</span></Link></li>
        <li><Link to="/sitemap"><span className="weg-titel">Alle Seiten</span></Link></li>
      </ul>
    </PageLayout>
  );
}

export default NichtGefunden;

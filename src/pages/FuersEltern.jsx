import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const WEGE = [
  { to: '/eltern/anmeldung', titel: 'Anmeldung & Kosten', text: 'Wie Sie und Ihr Kind uns in sechs Schritten kennenlernen.' },
  { to: '/eltern/organisatorisches', titel: 'Organisatorisches', text: 'Betreuung, Essen, Anfahrt und Kontakt.' },
  { to: '/eltern/services', titel: 'Dokumente', text: 'Formulare und Informationsblätter zum Ansehen und Herunterladen.' },
];

function FuersEltern() {
  return (
    <PageLayout
      title="Für Eltern"
      lead="Wenn Sie unsere Schule kennenlernen möchten, rufen Sie uns einfach an. Anmeldungen sind jederzeit möglich."
      description="Informationen für Eltern: Anmeldung, Aufnahmeverfahren, Organisatorisches und Dokumente der Astrid Lindgren Schule in Wien-Liesing."
    >
      <ul className="weg-liste">
        {WEGE.map((w) => (
          <li key={w.to}>
            <Link to={w.to}>
              <span className="weg-titel">{w.titel}</span>
              <span className="weg-text">{w.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}

export default FuersEltern;

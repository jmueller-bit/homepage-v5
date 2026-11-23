import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { KURZPORTRAIT, DOWNLOADS } from '../data/inhalte';

function Schule() {
  return (
    <PageLayout
      title="Unsere Schule"
      lead="Die Astrid Lindgren Schule für ganzheitliches Lernen in Wien-Liesing."
      description="Statutenschule mit Öffentlichkeitsrecht, 1. bis 9. Schulstufe, kleine altersgemischte Gruppen, reformpädagogischer und ganzheitlicher Ansatz."
    >
      <h2>Kurzportrait</h2>
      <ul>
        {KURZPORTRAIT.map((p) => <li key={p}>{p}</li>)}
      </ul>
      <p className="hinweis">
        Mit Öffentlichkeitsrecht: Die Zeugnisse der Astrid Lindgren Schule sind staatlich gültig.
      </p>

      <blockquote>
        „Jedes Kind ist hoch begabt, wir müssen es nur erkennen.“
        <footer>Gerald Hüther, Neurobiologe und Hirnforscher</footer>
      </blockquote>

      <h2>Zum Nachlesen</h2>
      <p>
        Das Konzept der Schule in der Langfassung und alle Infos zu Schulstufen, Unterrichtszeiten,
        Kosten, Mittagessen, Nachmittagsbetreuung und Elternmitarbeit gibt es als PDF.
      </p>
      <ul className="weg-liste">
        {Object.values(DOWNLOADS).map((d) => (
          <li key={d.href}>
            <a href={d.href} target="_blank" rel="noopener noreferrer">
              <span className="weg-titel">{d.label}</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="weg-text">Kostenübersicht: Stand September 2026, Änderungen vorbehalten.</p>

      <h2>Kennenlernen</h2>
      <p>
        Am besten lernen Sie die Schule bei einem Info-Termin oder einer Hospitation kennen.
      </p>
      <Link to="/eltern/anmeldung" className="btn btn-primary">Anmeldung &amp; Kosten</Link>
    </PageLayout>
  );
}

export default Schule;

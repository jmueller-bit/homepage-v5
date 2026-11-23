import PageLayout from '../components/PageLayout';
import LogoListe from '../components/LogoListe';
import { BANK, SPONSOREN } from '../data/inhalte';
import { KONTAKT } from '../data/kontakt';

function Unterstuetzen() {
  return (
    <PageLayout
      title="Fördern & Spenden"
      metaTitle="Unterstützen"
      lead="Ihre Spende kommt zu 100 % dem Astrid Lindgren Zentrum zugute. Seit 2025 sind Spenden steuerlich absetzbar."
      description="Das Astrid Lindgren Zentrum ist spendenbegünstigt: Spenden, Patenschaft für einen Schulplatz, fördernde Mitgliedschaft und Sponsoring."
    >
      <p>
        Ein Grundpfeiler der Astrid Lindgren Schule ist die individuelle Begleitung jedes einzelnen
        Kindes, in Kleingruppen und Projekten. Mit einem Betreuungsschlüssel von 8–12 Schüler*innen pro
        Pädagog*in entsteht ein erhöhter Personalaufwand. Ihre Spende hilft, pädagogisches Personal,
        Unterrichtsmaterialien, Raumausstattung und Projekte zu finanzieren.
      </p>

      <h2>Spendenkonto</h2>
      <dl className="daten">
        <dt>Kontoinhaber</dt><dd>{BANK.inhaber}</dd>
        <dt>Bank</dt><dd>{BANK.bank}</dd>
        <dt>IBAN</dt><dd>{BANK.iban}</dd>
        <dt>BIC</dt><dd>{BANK.bic}</dd>
      </dl>
      <p className="hinweis">
        Damit das Finanzamt Ihre Spende zuordnen kann, geben Sie im Verwendungszweck Geburtsdatum sowie
        Vor- und Zunamen an – so, wie er auf dem Meldezettel steht. Spenden von Unternehmen können als
        Betriebsausgabe berücksichtigt werden; eine Spendenbestätigung stellen wir auf Anfrage aus.{' '}
        <a href="https://www.bmf.gv.at/public/informationen/spendenservice.html" target="_blank" rel="noopener noreferrer">
          Mehr zur Absetzbarkeit (BMF)
        </a>
      </p>

      <h2>Möglichkeiten</h2>
      <h3>Einmalige oder regelmäßige Spende</h3>
      <p>
        Sie fördern die individuelle Betreuung, besondere Projekte, spezielle Unterrichtsmaterialien und
        die Weiterentwicklung der pädagogischen Qualität.
      </p>
      <h3>Patenschaft für einen Schulplatz</h3>
      <p>
        Einigen Familien fällt es schwer, das Schulgeld zu finanzieren. Wir suchen daher immer
        Stipendiengeber*innen, die einen Schulplatz ganz oder teilweise finanzieren – als Beitrag zum
        sozialen Ausgleich.
      </p>
      <h3>Fördernde Mitgliedschaft</h3>
      <p>Mit einer fördernden Mitgliedschaft im Verein unterstützen Sie unsere Arbeit kontinuierlich.</p>
      <h3>Sponsoring</h3>
      <p>
        Mit Unternehmen gehen wir gerne individuelle Kooperationen ein, die wir in einem persönlichen
        Gespräch erarbeiten: <a href={`mailto:${KONTAKT.email}`}>{KONTAKT.email}</a>.
      </p>

      <h2>Sie unterstützen uns bereits</h2>
      <LogoListe eintraege={SPONSOREN} />
    </PageLayout>
  );
}

export default Unterstuetzen;

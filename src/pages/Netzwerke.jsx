import PageLayout from '../components/PageLayout';
import LogoListe from '../components/LogoListe';
import { NETZWERKE } from '../data/inhalte';

const BESUCHE = [
  'Studentinnen und Studenten der KPH Wien/Krems',
  'Schülerinnen und Schüler des Berner Gymnasiums Köniz-Lerbermatt (Studienreise der Maturaklassen)',
  'Studentinnen der Hochschule Magdeburg-Stendal (Angewandte Kindheitswissenschaften)',
  'Studentinnen der Pädagogischen Hochschule Karlsruhe (Grund- und Hauptschullehramt)',
  'Praktikantinnen der Akademie für ganzheitliche Kunsttherapie Wien',
  'Auszubildende der ITA (gemeinnützige GesmbH), Wien',
  'Schülerinnen des Gymnasiums der Dominikanerinnen, Wien (Compassion-Projekt)',
  'Schülerinnen der HUM, Wien (Fachschule für Sozialberufe)',
  'Praktikantinnen der Fachschule für soziale Betreuung, Pinkafeld',
  'Lehrerinnen und Lehrer öffentlicher Schulen (Net1-Projekt)',
  'Teilnehmerinnen und Teilnehmer von Montessori-Lehrgängen',
  'Schülerinnen der Bakip8, Wien',
  'Team des Projekts „Respekt – gemeinsam verschieden sein“, Weimar',
];

function Netzwerke() {
  return (
    <PageLayout
      title="Netzwerke"
      lead="Die Astrid Lindgren Schule engagiert sich in Kooperationen und Netzwerken und übernimmt so gesellschaftliche Verantwortung."
      description="Netzwerke und Kooperationen der Astrid Lindgren Schule: Schule der Zukunft, Klimabündnis, Ökolog, Netzwerk freier Schulen und mehr."
    >
      <h2>Wir sind Mitglied bei</h2>
      <LogoListe eintraege={NETZWERKE} />

      <h2>Hospitationen und Praktika</h2>
      <p>
        Wir öffnen unsere Türen gerne, um unsere Arbeit direkt erfahrbar zu machen, und sind regelmäßig
        Praxisschule für (zukünftige) Pädagoginnen und Pädagogen. Seit 2003 waren unter anderem bei uns:
      </p>
      <ul>
        {BESUCHE.map((b) => <li key={b}>{b}</li>)}
      </ul>
    </PageLayout>
  );
}

export default Netzwerke;

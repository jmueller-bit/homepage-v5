import PageLayout from '../components/PageLayout';
import { VORSTAND } from '../data/inhalte';
import { KONTAKT } from '../data/kontakt';

function Verein() {
  return (
    <PageLayout
      title="Verein"
      lead="Astrid Lindgren Zentrum – Verein für Pädagogik und Kultur, gegründet 2003, Sitz in 1230 Wien."
      description="Der Verein Astrid Lindgren Zentrum – Verein für Pädagogik und Kultur: gemeinnütziger Zweck und Vorstand."
    >
      <p>
        Der Verein verfolgt ausschließlich gemeinnützige Zwecke im Sinne der §§ 34 bis 47 der
        Bundesabgabenordnung. Seine Tätigkeit ist nicht auf Gewinn ausgerichtet und erstreckt sich auf
        ganz Österreich.
      </p>

      <h2>Zweck</h2>
      <p>
        Der Verein bezweckt unter anderem die Förderung, Bildung und Persönlichkeitsentwicklung von
        Kindern, Jugendlichen und Erwachsenen, die Verbreitung und Förderung reformpädagogischer Ansätze
        und des Modells des ganzheitlichen Lernens sowie die Vermittlung von Kunst und Kreativität.
      </p>
      <p>
        Die nötigen Mittel kommen unter anderem aus Beitrittsgebühren und Mitgliedsbeiträgen, Beiträgen
        der Eltern, Kursbeiträgen, Veranstaltungen, Spenden, Sponsorengeldern, Fördermitteln und
        Subventionen.
      </p>

      <h2>Vorstand</h2>
      <dl className="daten">
        {VORSTAND.map((v) => [
          <dt key={`${v.rolle}-dt`}>{v.rolle}</dt>,
          <dd key={`${v.rolle}-dd`}>{v.name}</dd>,
        ])}
        <dt>ZVR</dt>
        <dd>{KONTAKT.zvr}</dd>
      </dl>
    </PageLayout>
  );
}

export default Verein;

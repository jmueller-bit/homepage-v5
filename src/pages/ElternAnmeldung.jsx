import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import AufnahmeWeg from '../components/AufnahmeWeg';
import { DOWNLOADS } from '../data/inhalte';
import { KONTAKT } from '../data/kontakt';

function ElternAnmeldung() {
  return (
    <PageLayout
      title="Anmeldung & Kosten"
      metaTitle="Anmeldung"
      lead="Damit Sie und Ihr Kind die Schule richtig „von innen“ kennenlernen und dann entscheiden können, ob sie für Sie passt."
      description="Anmeldung an der Astrid Lindgren Schule: Erstkontakt, persönliches Gespräch, Hospitation von Eltern und Kind, Abschlussgespräch und Vertrag."
    >
      <h2>Erster Kontakt</h2>
      <p>
        Die erste Kontaktaufnahme kann telefonisch, per E-Mail, an einem Tag der offenen Tür oder
        einem Informationsabend erfolgen. Für ein Erstgespräch oder eine Hospitation vereinbaren Sie
        bitte einen Termin: <a href={KONTAKT.telHref}>{KONTAKT.telefon}</a>.
      </p>
      <p className="hinweis">
        Anmeldungen für das neue Schuljahr sind grundsätzlich bis März möglich. Nach Rücksprache ist
        auch eine Anmeldung im laufenden Schuljahr möglich.
      </p>

      <h2>Das Aufnahmeverfahren</h2>
      <p>
        Die Wahl der richtigen Schule ist ein wichtiger Schritt für jede Familie. Auch wir lernen Sie
        im Zuge der Hospitationen gut kennen.
      </p>
      <AufnahmeWeg schmal />

      <h2>Kosten</h2>
      <p>
        Schulstufen, Unterrichtszeiten, Kosten, Mittagessen, Nachmittagsbetreuung und Elternmitarbeit
        stehen in der Übersicht für das Schuljahr 2026/27.
      </p>
      <a href={DOWNLOADS.kosten.href} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
        {DOWNLOADS.kosten.label}
      </a>

      <h2>Informationsveranstaltungen</h2>
      <p>
        In jedem Schuljahr finden regelmäßig Info-Nachmittage und Tage der offenen Tür statt.
        Den nächsten Termin finden Sie auf der <Link to="/">Startseite</Link>.
      </p>
    </PageLayout>
  );
}

export default ElternAnmeldung;

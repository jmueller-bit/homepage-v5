import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { getStellenAngebote } from '../services/contentful';
import { STELLE_MATHE } from '../data/inhalte';
import { KONTAKT } from '../data/kontakt';

export function Initiativbewerbung() {
  return <Navigate to="/karriere" replace />;
}

const Liste = ({ titel, punkte }) =>
  punkte?.length ? (
    <>
      <h3>{titel}</h3>
      <ul>{punkte.map((p) => <li key={p}>{p}</li>)}</ul>
    </>
  ) : null;

function Stelle({ job }) {
  const mail = job.contactEmail || KONTAKT.email;
  return (
    <article className="stelle">
      <h2>{job.title}</h2>
      {job.type && <p className="weg-text">{job.type}</p>}
      {job.description && <p>{job.description}</p>}
      <Liste titel="Wir setzen voraus" punkte={job.voraussetzungen} />
      {job.requirements && (<><h3>Anforderungen</h3><p>{job.requirements}</p></>)}
      <Liste titel="Wir wünschen uns" punkte={job.wuensche} />
      <Liste titel="Wir bieten" punkte={job.angebot} />
      {job.benefits && (<><h3>Wir bieten</h3><p>{job.benefits}</p></>)}
      <a href={`mailto:${mail}?subject=${encodeURIComponent(`Bewerbung: ${job.title}`)}`} className="btn btn-primary">
        Per E-Mail bewerben
      </a>
    </article>
  );
}

function Stellen() {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    // CMS leer oder nicht erreichbar: die zuletzt veröffentlichte Anzeige zeigen statt „keine Stellen“
    getStellenAngebote()
      .then((data) => setJobs(data.length ? data : [STELLE_MATHE]))
      .catch(() => setJobs([STELLE_MATHE]));
  }, []);

  return (
    <PageLayout
      title="Offene Stellen"
      lead="Werden Sie Teil unseres Teams. Wir freuen uns auf Ihre Bewerbung."
      description="Offene Stellen an der Astrid Lindgren Schule in Wien-Liesing."
    >
      {jobs === null ? (
        <p aria-live="polite">Stellenangebote werden geladen …</p>
      ) : (
        jobs.map((job) => <Stelle key={job.id} job={job} />)
      )}
      <h2>Initiativ bewerben</h2>
      <p>
        Keine passende Stelle dabei? Schreiben Sie uns an{' '}
        <a href={`mailto:${KONTAKT.email}?subject=Initiativbewerbung`}>{KONTAKT.email}</a>.
      </p>
    </PageLayout>
  );
}

export default Stellen;

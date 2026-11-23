import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
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
  const mail = KONTAKT.email;
  return (
    <article className="stelle">
      <h2>{job.title}</h2>
      {job.type && <p className="weg-text">{job.type}</p>}
      {job.description && <p>{job.description}</p>}
      {job.detailsRichText && <div className="stelle-text">{documentToReactComponents(job.detailsRichText)}</div>}
      {job.attachment && (
        <p>
          <a href={job.attachment.url} target="_blank" rel="noopener noreferrer">{job.attachment.title}</a>
        </p>
      )}
      <Liste titel="Wir setzen voraus" punkte={job.voraussetzungen} />
      <Liste titel="Wir wünschen uns" punkte={job.wuensche} />
      <Liste titel="Wir bieten" punkte={job.angebot} />
      <a href={`mailto:${mail}?subject=${encodeURIComponent(`Bewerbung: ${job.title}`)}`} className="btn btn-primary">
        Per E-Mail bewerben
      </a>
    </article>
  );
}

function Stellen() {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    // Stellen aus Contentful; die Mathe-Anzeige der Live-Seite bleibt, bis sie dort selbst gepflegt ist
    const mitMathe = (data) =>
      data.some((j) => /mathematik/i.test(j.title || '')) ? data : [...data, STELLE_MATHE];
    getStellenAngebote()
      .then((data) => setJobs(mitMathe(data)))
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

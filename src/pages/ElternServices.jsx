import PageLayout from '../components/PageLayout';
import './ElternServices.css';

const ORDNER = '1nhQtCRS9mCaVTaD9kg6zXjoBv3UlllpH';

function ElternServices() {
  return (
    <PageLayout
      title="Dokumente"
      metaTitle="Eltern-Services"
      lead="Formulare, Informationsblätter und wichtige Dokumente zum Ansehen und Herunterladen."
      description="Dokumente und Formulare für Eltern der Astrid Lindgren Schule."
    >
      <iframe
        className="dokumente-rahmen"
        src={`https://drive.google.com/embeddedfolderview?id=${ORDNER}#list`}
        title="Dokumente für Eltern (Google Drive)"
        loading="lazy"
      />
      <p>
        Wird der Ordner nicht angezeigt, öffnen Sie ihn direkt:{' '}
        <a href={`https://drive.google.com/drive/folders/${ORDNER}?usp=sharing`} target="_blank" rel="noopener noreferrer">
          Dokumente auf Google Drive
        </a>
        .
      </p>
    </PageLayout>
  );
}

export default ElternServices;

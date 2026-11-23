import { useState, useEffect } from 'react';
import { getTeamMembers } from '../services/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './Team.css';
import PageLayout from '../components/PageLayout';
import { TEAM } from '../data/bilder';
import { mergeTeam } from '../data/team';

function Team() {
  const [team, setTeam] = useState([]);
  const [error, setError] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const members = await getTeamMembers();
        setTeam(members);
      } catch {
        setError('Das Team konnte nicht geladen werden');
      }
    };

    fetchTeam();
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedMember(null);
      }
    };
    
    if (selectedMember) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedMember]);

  // Team laut Live-Seite sofort zeigen; Contentful-Einträge ersetzen gleichnamige Personen
  const mitglieder = error ? TEAM : mergeTeam(team, TEAM);

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <PageLayout
      title="Unser Team"
      metaTitle="Team"
      lead="Lehrerinnen und Lehrer, Pädagoginnen und Pädagogen mit reformpädagogischer Ausbildung sowie Expert*innen aus unterschiedlichen Berufsgruppen."
      description="Das Team der Astrid Lindgren Schule: Pädagog*innen mit reformpädagogischer Ausbildung und Expert*innen aus verschiedenen Berufen."
    >
      <p>
        Wir arbeiten individuell mit einzelnen Schülerinnen und Schülern sowie in Gruppen und
        unterstützen sie bei Projektarbeiten. So können wir auf die Bedürfnisse jedes Kindes und der
        jeweiligen Altersgruppe eingehen.
      </p>

        <ul className="team-grid">
          {mitglieder.map((member) => (
            <li key={member.id}>
              <button type="button" className="team-card" onClick={() => openModal(member)}>
                <span className="team-photo">
                  {member.photo ? (
                    <img src={member.photo.url} alt="" loading="lazy" width="400" height="400" />
                  ) : member.foto ? (
                    <picture>
                      <source type="image/webp" srcSet={`${member.foto}.webp`} />
                      <img src={`${member.foto}.jpg`} alt="" loading="lazy" width="480" height="480" />
                    </picture>
                  ) : null}
                </span>
                <span className="team-info">
                  <span className="team-name">{member.name}</span>
                  <span className="team-role">{member.role}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>

      {/* Detailansicht */}
      {selectedMember && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Schließen">
              ×
            </button>
            
            {(selectedMember.photo || selectedMember.foto) && (
              <div className="modal-image">
                <img
                  src={selectedMember.photo ? selectedMember.photo.url : `${selectedMember.foto}.jpg`}
                  alt={selectedMember.name}
                />
              </div>
            )}
            
            <div className="modal-body">
              <h2>{selectedMember.name}{selectedMember.titel ? `, ${selectedMember.titel}` : ''}</h2>
              <p className="modal-role">{selectedMember.role}</p>
              {selectedMember.bioRichText ? (
                <div className="modal-bio">
                  {documentToReactComponents(selectedMember.bioRichText)}
                </div>
              ) : selectedMember.bio ? (
                <p className="modal-bio">{selectedMember.bio}</p>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}

export default Team;

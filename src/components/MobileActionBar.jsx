import { Link } from 'react-router-dom';
import { KONTAKT } from '../data/kontakt';
import './MobileActionBar.css';

const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor"
    strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
);

const PHONE = 'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z';
const PIN = 'M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z';
const CAL = 'M8 2v4 M16 2v4 M3 10h18 M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z';

function MobileActionBar() {
  return (
    <nav className="action-bar" aria-label="Schnellkontakt">
      <a href={KONTAKT.telHref}><Icon d={PHONE} />Anrufen</a>
      <a href={KONTAKT.routeHref} target="_blank" rel="noopener noreferrer"><Icon d={PIN} />Route</a>
      <Link to="/kontakt" className="action-bar-main"><Icon d={CAL} />Termin</Link>
    </nav>
  );
}

export default MobileActionBar;

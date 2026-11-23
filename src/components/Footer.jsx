import { Link } from 'react-router-dom';
import { NAV, RECHTLICHES } from '../data/navigation';
import { KONTAKT } from '../data/kontakt';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col">
            <img src="/images/logos/alz-logo-wortmarke.png" alt="Astrid Lindgren Zentrum" className="footer-logo" width="223" height="160" loading="lazy" />
            <p className="footer-desc">
              Schule für ganzheitliches Lernen mit Öffentlichkeitsrecht, 1. bis 9. Schulstufe.
            </p>
          </div>

          <nav className="footer-col" aria-label="Bereiche">
            <h2>Bereiche</h2>
            {NAV.filter((n) => n.path !== '/kontakt').map((n) => (
              <Link key={n.path} to={n.path}>{n.label}</Link>
            ))}
          </nav>

          <div className="footer-col">
            <h2>Kontakt</h2>
            <address>
              Astrid Lindgren Zentrum<br />
              {KONTAKT.adresse[0]}<br />
              {KONTAKT.adresse[1]}
            </address>
            <p className="contact-link"><a href={KONTAKT.telHref}>{KONTAKT.telefon}</a></p>
            <p className="contact-link"><a href={`mailto:${KONTAKT.email}`}>{KONTAKT.email}</a></p>
          </div>

          <div className="footer-col">
            <h2>Betreuung</h2>
            <p>Nachmittagsbetreuung bis 16:30</p>
            <div className="social-links">
              <a href="https://www.facebook.com/Astrid-Lindgren-Zentrum-f%C3%BCr-ganzheitliches-Lernen-505834649933912" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UCk8ADaXZc9RpfZcOmHkpSIA" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#fff"/>
                </svg>
              </a>
              <a href="https://instagram.com/astridlindgrenzentrumliesing" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Astrid Lindgren Zentrum. Verein für Pädagogik und Kultur, ZVR {KONTAKT.zvr}</p>
          <div className="footer-links">
            {RECHTLICHES.map((r) => <Link key={r.path} to={r.path}>{r.label}</Link>)}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

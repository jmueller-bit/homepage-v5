import { Link, NavLink, useLocation } from 'react-router-dom';
import PageMeta from './PageMeta';
import { findSection } from '../data/navigation';
import { KONTAKT } from '../data/kontakt';
import BildBand from './BildBand';
import { BAND } from '../data/bilder';
import './PageLayout.css';

// Gemeinsamer Rahmen der Unterseiten: Titel, Lead, Lesespalte, Bereichsnavigation
function PageLayout({ title, lead, description, metaTitle, aside = true, children }) {
  const { pathname } = useLocation();
  const section = findSection(pathname);
  const links = section?.children ?? [];

  return (
    <div className="page" data-farbe={section?.farbe}>
      <PageMeta title={metaTitle ?? title} description={description} />
      {section?.band && <BildBand bilder={[BAND[section.band]]} className="bildband-schmal" />}
      <header className="page-kopf">
        <div className="container">
          <h1>{title}</h1>
          {lead && <p className="page-lead">{lead}</p>}
        </div>
      </header>

      <div className={`container page-raster ${aside ? '' : 'page-raster-voll'}`}>
        <div className="page-inhalt">{children}</div>

        {aside && (
          <aside className="page-seite" aria-label="Weiterführend">
            {links.length > 1 && (
              <nav className="bereich-nav" aria-label={section.label}>
                <h2 className="bereich-titel">{section.label}</h2>
                <ul>
                  {links.map((l) => (
                    <li key={l.path}>
                      <NavLink to={l.path} end>{l.label}</NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
            <div className="seite-kontakt">
              <h2 className="bereich-titel">Fragen?</h2>
              <p>Rufen Sie uns an oder schreiben Sie uns.</p>
              <a href={KONTAKT.telHref}>{KONTAKT.telefon}</a>
              <a href={`mailto:${KONTAKT.email}`}>{KONTAKT.email}</a>
              <Link to="/kontakt" className="pfeil-link">Kontakt &amp; Anfahrt</Link>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}

export default PageLayout;

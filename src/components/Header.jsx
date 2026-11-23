import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV } from '../data/navigation';
import './Header.css';

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={close}>
          {/* Original-Logo der Live-Seite, weißer Hintergrund freigestellt */}
          <img src="/images/logos/alz-logo-wortmarke.png" alt="Astrid Lindgren Zentrum – Startseite" className="logo-bild" width="223" height="160" />
        </Link>

        <button
          type="button"
          className="mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
          aria-controls="hauptnavigation"
        >
          <span /><span /><span />
        </button>

        <nav id="hauptnavigation" className={`nav ${open ? 'nav-open' : ''}`} aria-label="Hauptnavigation">
          <ul className="nav-liste">
            {NAV.map((item) => {
              const sub = item.children.length > 1 ? item.children : null;
              return (
                <li key={item.path} className={`nav-item ${sub ? 'hat-sub' : ''}`}>
                  <NavLink to={item.path} className="nav-link" onClick={close}>
                    {item.label}
                    {sub && <span className="dropdown-arrow" aria-hidden="true" />}
                  </NavLink>
                  {sub && (
                    <ul className="dropdown">
                      {sub.map((s) => (
                        <li key={s.path}>
                          <NavLink to={s.path} end className="dropdown-link" onClick={close}>{s.label}</NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

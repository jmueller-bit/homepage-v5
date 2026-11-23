import './LogoListe.css';

// Partner mit Logo (Bilder der Live-Seite); Link nur, wo eine Adresse bekannt ist
function LogoListe({ eintraege, klein = false }) {
  return (
    <ul className={`logo-liste ${klein ? 'logo-liste-klein' : ''}`}>
      {eintraege.map((e) => {
        const inhalt = (
          <>
            <span className="logo-feld"><img src={e.logo} alt="" loading="lazy" /></span>
            <span className="logo-name">{e.name}</span>
            {e.text && !klein && <span className="logo-text">{e.text}</span>}
          </>
        );
        return (
          <li key={e.name}>
            {e.href ? <a href={e.href} target="_blank" rel="noopener noreferrer">{inhalt}</a> : <span>{inhalt}</span>}
          </li>
        );
      })}
    </ul>
  );
}

export default LogoListe;

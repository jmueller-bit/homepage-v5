import { Link } from 'react-router-dom';
import './PageTemplate.css';
import PageMeta from '../components/PageMeta';

const sections = [
  { path: '/schule/paedagogik', title: 'Pädagogisches Konzept' },
  { path: '/schule/schulstufen', title: 'Schulstufen' },
  { path: '/schule/tagesablauf', title: 'Tagesablauf' },
  { path: '/schule/raeume', title: 'Räumlichkeiten' },
  { path: '/schule/downloads', title: 'Downloads' },
];

const pädagogikItems = [
  { title: 'Bildungsphilosophie' },
  { title: 'Reformpädagogischer Ansatz' },
  { title: 'Individuelles Lernen' },
  { title: 'Projektarbeit & Praxisbezug' },
];

const schulstufen = [
  { id: 'stufe1', title: '1. Schulstufe', age: '6-7 Jahre' },
  { id: 'stufe2', title: '2. Schulstufe', age: '7-8 Jahre' },
  { id: 'stufe3', title: '3. Schulstufe', age: '8-9 Jahre' },
  { id: 'stufe4', title: '4. Schulstufe', age: '9-10 Jahre' },
  { id: 'stufe5-6', title: '5.-6. Schulstufe', age: '10-12 Jahre' },
  { id: 'stufe7-8', title: '7.-8. Schulstufe', age: '12-14 Jahre' },
  { id: 'stufe9', title: '9. Schulstufe', age: '14-15 Jahre' },
];

function Schule() {
  return (
    <div className="page-template">
      <PageMeta title="Unsere Schule" description="Statutenschule mit Öffentlichkeitsrecht, 1. bis 9. Schulstufe, kleine altersgemischte Gruppen, reformpädagogischer und ganzheitlicher Ansatz." />
      <section className="page-hero">
        <div className="container">
          <h1>Unsere Schule</h1>
          <p className="hero-subtitle">Ganzheitliches Lernen mit reformpädagogischem Ansatz</p>
        </div>
      </section>

      <section className="page-content section">
        <div className="container">
          <div className="content-grid">
            <div className="main-content glass">
              <h2>Pädagogisches Konzept</h2>
              <p>
                Das Astrid Lindgren Zentrum ist eine reformpädagogische Schule mit Öffentlichkeitsrecht. 
                Wir begleiten Kinder von der 1. bis zur 9. Schulstufe auf ihrem individuellen Bildungsweg.
              </p>
              <div className="feature-cards">
                {pädagogikItems.map((item, index) => (
                  <div key={index} className="feature-card glass">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 style={{ marginTop: '3rem' }}>Schulstufen im Überblick</h2>
              <p>Klicken Sie auf eine Schulstufe, um mehr zu erfahren.</p>
              <div className="schulstufen-grid">
                {schulstufen.map((stufe) => (
                  <Link key={stufe.id} to={`/schule/schulstufen#${stufe.id}`} className="schulstufe-card glass">
                    <h4>{stufe.title}</h4>
                    <span className="age">{stufe.age}</span>
                  </Link>
                ))}
              </div>

              <h2 style={{ marginTop: '3rem' }}>Unterrichtszeiten & Betreuung</h2>
              <p>
                Nachmittagsbetreuung bis 16:30 Uhr. Jause und Mittagessen werden frisch in der Schule gekocht.
                Unterrichtszeiten, Kosten und Elternmitarbeit finden Sie in der{' '}
                <a href="https://www.astrid-lindgren-zentrum.at/wp-content/uploads/2026/10/TEXT_Kostenubersicht_Schule_v2026-2027.pdf" target="_blank" rel="noopener noreferrer">Kostenübersicht 2026/27 (PDF)</a>.
              </p>
            </div>

            <div className="sidebar">
              <div className="sidebar-menu glass">
                <h4>Navigation</h4>
                {sections.map((section) => (
                  <Link key={section.path} to={section.path} className="sidebar-link">
                    {section.title}
                  </Link>
                ))}
              </div>

              <div className="sidebar-cta glass">
                <h4>Interessiert?</h4>
                <p>Vereinbaren Sie einen Schnuppertag!</p>
                <Link to="/kontakt" className="btn btn-primary">Kontakt</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Schule;

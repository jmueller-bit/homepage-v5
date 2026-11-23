import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { NAV, RECHTLICHES } from '../data/navigation';
import './Sitemap.css';

const GRUPPEN = [
  { label: 'Start', path: '/', children: [{ path: '/', label: 'Startseite' }] },
  ...NAV.map((s) => ({ ...s, children: s.children.length ? s.children : [{ path: s.path, label: s.label }] })),
  { label: 'Rechtliches', path: '/impressum', children: RECHTLICHES },
];

function Sitemap() {
  return (
    <PageLayout
      title="Sitemap"
      lead="Alle Seiten auf einen Blick."
      description="Übersicht aller Seiten der Website des Astrid Lindgren Zentrums."
      aside={false}
    >
      <div className="sitemap-raster">
        {GRUPPEN.map((g) => (
          <section key={g.label}>
            <h2>{g.label}</h2>
            <ul>
              {g.children.map((c) => (
                <li key={c.path}><Link to={c.path}>{c.label}</Link></li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </PageLayout>
  );
}

export default Sitemap;

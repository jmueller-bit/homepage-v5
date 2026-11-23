import { Link, Routes, Route } from 'react-router-dom';
import News from './News';
import NewsDetail from './NewsDetail';
import PageLayout from '../components/PageLayout';
import NichtGefunden from './NichtGefunden';

function SchullebenOverview() {
  return (
    <PageLayout
      title="Schulleben"
      lead="Einblicke in den Alltag der Astrid Lindgren Schule."
      description="Einblicke in den Alltag der Astrid Lindgren Schule: Neuigkeiten und Bilder."
    >
      <ul className="weg-liste">
        <li>
          <Link to="/schulleben/news">
            <span className="weg-titel">Aktuelles</span>
            <span className="weg-text">Neuigkeiten und Berichte aus der Schule</span>
          </Link>
        </li>
        <li>
          <Link to="/galerie">
            <span className="weg-titel">Galerie</span>
            <span className="weg-text">Bilder aus dem Schulalltag</span>
          </Link>
        </li>
      </ul>
    </PageLayout>
  );
}

function Schulleben() {
  return (
    <Routes>
      <Route path="/" element={<SchullebenOverview />} />
      <Route path="/news" element={<News />} />
      <Route path="/news/:slug" element={<NewsDetail />} />
      <Route path="*" element={<NichtGefunden />} />
    </Routes>
  );
}

export default Schulleben;

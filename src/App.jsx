import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
const Schule = lazy(() => import('./pages/Schule'));
const FuersEltern = lazy(() => import('./pages/FuersEltern'));
const ElternServices = lazy(() => import('./pages/ElternServices'));
const ElternOrganisatorisches = lazy(() => import('./pages/ElternOrganisatorisches'));
const ElternAnmeldung = lazy(() => import('./pages/ElternAnmeldung'));
const Schulleben = lazy(() => import('./pages/Schulleben'));
const UeberUns = lazy(() => import('./pages/UeberUns'));
const Team = lazy(() => import('./pages/Team'));
const Unterstuetzen = lazy(() => import('./pages/Unterstuetzen'));
const Karriere = lazy(() => import('./pages/Karriere'));
const Stellen = lazy(() => import('./pages/Stellen'));
const Initiativbewerbung = lazy(() =>
  import('./pages/Stellen').then((m) => ({ default: m.Initiativbewerbung }))
);
const Kontakt = lazy(() => import('./pages/Kontakt'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Impressum = lazy(() => import('./pages/Impressum'));
const Datenschutz = lazy(() => import('./pages/Datenschutz'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Suspense fallback={<div className="page-loading" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schule/*" element={<Schule />} />
            <Route path="/eltern/anmeldung" element={<ElternAnmeldung />} />
            <Route path="/eltern/services" element={<ElternServices />} />
            <Route path="/eltern/organisatorisches" element={<ElternOrganisatorisches />} />
            <Route path="/eltern/*" element={<FuersEltern />} />
            <Route path="/schulleben/*" element={<Schulleben />} />
            <Route path="/schulleben/galerie" element={<Gallery />} />
            <Route path="/ueber-uns/*" element={<UeberUns />} />
            <Route path="/ueber-uns/team" element={<Team />} />
            <Route path="/unterstuetzen/*" element={<Unterstuetzen />} />
            <Route path="/karriere/stellen" element={<Stellen />} />
            <Route path="/karriere/initiativ" element={<Initiativbewerbung />} />
            <Route path="/karriere/*" element={<Karriere />} />
            <Route path="/kontakt/*" element={<Kontakt />} />
            <Route path="/galerie" element={<Gallery />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/sitemap" element={<Sitemap />} />
          </Routes>
          </Suspense>
        </main>
        <Footer />
        <MobileActionBar />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;

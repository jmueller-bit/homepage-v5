import { Link } from 'react-router-dom';
import { getNaechsterTermin, formatTerminDatum } from '../data/termine';
import { KONTAKT } from '../data/kontakt';
import './Home.css';

// Alle Inhalte: docs/analyse/inhalte/ (Live-Seite), nichts erfunden
const FAKTEN = [
  { wert: '1.–9.', text: 'Schulstufe, Pflichtschule' },
  { wert: 'max. 30', text: 'Schüler*innen in der ganzen Schule' },
  { wert: '8–12', text: 'Schüler*innen pro Pädagog*in' },
  { wert: '16:30', text: 'Nachmittagsbetreuung bis' },
];

const PORTRAIT = [
  'Statutenschule mit Öffentlichkeitsrecht',
  'Kleine, altersgemischte Gruppen',
  'Reformpädagogischer, ganzheitlicher Ansatz',
  'Individuelles, selbstbestimmtes Lernen',
  'Projektarbeit mit Realitätsbezug',
  'Jause und Mittagessen, frisch in der Schule gekocht',
];

const AUFNAHME = [
  { titel: 'Erstkontakt', text: 'Infoabend, Tag der offenen Tür, Anruf oder E-Mail' },
  { titel: 'Persönliches Gespräch', text: 'mit Eltern und Kind' },
  { titel: 'Hospitation der Eltern', text: 'einen Vormittag, 7:45–13:45' },
  { titel: 'Hospitation des Kindes', text: 'eine ganze Woche, Mo–Fr 8–13:30' },
  { titel: 'Abschlussgespräch', text: 'mit Schulleitung und Vorstand' },
  { titel: 'Vertragsunterzeichnung', text: '' },
];

const GESUCHT = [
  { titel: 'Lehrkraft für Mathematik/Naturwissenschaften', to: '/karriere/stellen' },
  { titel: 'Zivildiener ab September 2027', to: '/karriere' },
  { titel: 'Praktikant*innen', to: '/karriere' },
];

const NETZWERKE = [
  'Verband der europäischen Astrid Lindgren Schulen',
  'Schule der Zukunft (Gerald Hüther)',
  'Klimabündnis Schule',
  'Ökolog Schule',
  'Wiener Netzwerk Gesundheitsfördernde Schulen',
  'Netzwerk freier Schulen',
];

function TerminKarte() {
  const termin = getNaechsterTermin();

  if (!termin) {
    return (
      <aside className="termin" aria-labelledby="termin-titel">
        <p className="termin-label">Kennenlernen</p>
        <h2 id="termin-titel" className="termin-titel">Termin individuell vereinbaren</h2>
        <p className="termin-meta">Rufen Sie uns an, wir finden gemeinsam einen Termin.</p>
        <a href={KONTAKT.telHref} className="btn btn-primary">{KONTAKT.telefon}</a>
      </aside>
    );
  }

  return (
    <aside className="termin" aria-labelledby="termin-titel">
      <p className="termin-label">Nächster Kennenlern-Termin</p>
      <h2 id="termin-titel" className="termin-titel">{termin.titel}</h2>
      <p className="termin-datum">{formatTerminDatum(termin.datum)}</p>
      <p className="termin-meta">
        {[termin.zeit, termin.ort].filter(Boolean).join(' · ')}
      </p>
      <Link to="/kontakt" className="btn btn-primary">Teilnahme anfragen</Link>
    </aside>
  );
}

function Home() {
  return (
    <div className="home">
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-text">
            <p className="home-kicker">Wien-Liesing · seit 2003</p>
            <h1>
              Astrid Lindgren Schule
              <span className="home-hero-sub">Zentrum für ganzheitliches Lernen</span>
            </h1>
            <p className="home-lead">
              Eine kleine Schule mit Öffentlichkeitsrecht von der 1. bis zur 9. Schulstufe.
              Anmeldungen sind jederzeit möglich – besonders unsere Primaria I freut sich über Zuwachs.
            </p>
            <div className="home-hero-actions">
              <a href={KONTAKT.telHref} className="btn btn-primary">Anrufen: {KONTAKT.telefon}</a>
              <Link to="/eltern/anmeldung" className="btn btn-outline">So läuft die Aufnahme</Link>
            </div>
          </div>
          <TerminKarte />
        </div>
      </section>

      <section className="home-fakten" aria-label="Die Schule in Zahlen">
        <div className="container">
          <dl className="fakten-liste">
            {FAKTEN.map((f) => (
              <div key={f.text} className="fakt">
                <dt>{f.text}</dt>
                <dd>{f.wert}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section home-portrait">
        <div className="container portrait-grid">
          <figure className="portrait-bild">
            <img
              src="/images/gallery/ALZ_1410_06-scaled.jpg"
              alt="Jahresbroschüre „HEJ! 2022/23“ des Astrid Lindgren Zentrums auf einem Holztisch"
              width="2560"
              height="1706"
              loading="lazy"
            />
          </figure>
          <div>
            <h2 className="schwung">Wer wir sind</h2>
            <ul className="portrait-liste">
              {PORTRAIT.map((p) => <li key={p}>{p}</li>)}
            </ul>
            <blockquote className="zitat">
              <p>„Jedes Kind ist hoch begabt, wir müssen es nur erkennen.“</p>
              <cite>Gerald Hüther, Neurobiologe und Hirnforscher</cite>
            </blockquote>
            <Link to="/schule" className="pfeil-link">Mehr über die Schule</Link>
          </div>
        </div>
      </section>

      <section className="section home-aufnahme">
        <div className="container">
          <h2 className="schwung">In sechs Schritten zu uns</h2>
          <p className="abschnitt-lead">
            Damit Sie und Ihr Kind unser Konzept gut kennenlernen, gibt es ein
            Schritt-für-Schritt-Aufnahmeverfahren.
          </p>
          <ol className="aufnahme-weg">
            {AUFNAHME.map((s) => (
              <li key={s.titel}>
                <h3>{s.titel}</h3>
                {s.text && <p>{s.text}</p>}
              </li>
            ))}
          </ol>
          <div className="aufnahme-links">
            <Link to="/eltern/anmeldung" className="btn btn-primary">Infos zur Anmeldung</Link>
            <a href={KONTAKT.kostenPdf} className="pfeil-link" target="_blank" rel="noopener noreferrer">
              Kosten &amp; Details 2026/27 (PDF)
            </a>
          </div>
        </div>
      </section>

      <section className="section home-stimmen">
        <div className="container stimmen-grid">
          <div>
            <h2 className="schwung">Einblicke</h2>
            <p>
              Eltern, Lehrer*innen und die Gründerin erzählen in Video-Interviews vom Schulalltag,
              von Demokratie, Noten und Freude am Lernen.
            </p>
            <Link to="/ueber-uns" className="pfeil-link">Zu den Video-Interviews</Link>
          </div>
          <div className="auszeichnung">
            <p className="termin-label">Gratulation</p>
            <p className="auszeichnung-text">Jutta Höbartner ist Wiener Heldin 2025</p>
            <a
              href="https://www.w24.at/Sendungen-A-Z/wienerheldinnen/Alle-Folgen?video=34403"
              className="pfeil-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              W24-Bericht aus dem Astrid Lindgren Zentrum
            </a>
          </div>
        </div>
      </section>

      <section className="section home-gesucht">
        <div className="container">
          <h2 className="schwung">Wir suchen</h2>
          <ul className="gesucht-liste">
            {GESUCHT.map((g) => (
              <li key={g.titel}>
                <Link to={g.to}>{g.titel}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section home-netzwerke">
        <div className="container">
          <h2 className="netzwerke-titel">Wir sind Teil von</h2>
          <ul className="netzwerke-liste">
            {NETZWERKE.map((n) => <li key={n}>{n}</li>)}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;

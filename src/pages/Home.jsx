import { Link } from 'react-router-dom';
import { getNaechsterTermin, formatTerminDatum, istHeute } from '../data/termine';
import { KONTAKT } from '../data/kontakt';
import './Home.css';
import PageMeta from '../components/PageMeta';

// Alle Inhalte: docs/analyse/inhalte/ (Live-Seite), nichts erfunden

const PORTRAIT = [
  'Kleine, altersgemischte Gruppen',
  'Reformpädagogischer, ganzheitlicher Ansatz',
  'Individuelles, selbstbestimmtes Lernen',
  'Projektarbeit mit Realitätsbezug',
];

const AUFNAHME = [
  { titel: 'Erstkontakt', text: 'Infoabend, Tag der offenen Tür, Anruf oder E-Mail' },
  { titel: 'Persönliches Gespräch', text: 'mit Eltern und Kind' },
  { titel: 'Hospitation der Eltern', text: 'einen Vormittag, 7:45–13:45' },
  { titel: 'Hospitation des Kindes', text: 'eine ganze Woche, Mo–Fr 8–13:30' },
  { titel: 'Abschlussgespräch', text: 'mit Schulleitung und Vorstand' },
  { titel: 'Vertragsunterzeichnung', text: '' },
];


const NETZWERKE = [
  'Verband der europäischen Astrid Lindgren Schulen',
  'Schule der Zukunft (Gerald Hüther)',
  'Klimabündnis Schule',
  'Ökolog Schule',
  'Wiener Netzwerk Gesundheitsfördernde Schulen',
  'Netzwerk freier Schulen',
];

function TerminKarte({ id }) {
  const termin = getNaechsterTermin();

  if (!termin) {
    return (
      <aside className="termin" aria-labelledby={id}>
        <h2 id={id} className="termin-titel">Termin individuell vereinbaren</h2>
        <p className="termin-meta">Rufen Sie uns an, wir finden gemeinsam einen Termin.</p>
        <a href={KONTAKT.telHref} className="btn btn-primary">{KONTAKT.telefon}</a>
      </aside>
    );
  }

  return (
    <aside className="termin" aria-labelledby={id}>
      <h2 id={id} className="termin-titel">Nächster Kennenlern-Termin</h2>
      <p className="termin-name">{istHeute(termin.datum) ? `Heute: ${termin.titel}` : termin.titel}</p>
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
      <PageMeta description="Reformpädagogische Schule mit Öffentlichkeitsrecht in Wien-Liesing: 1. bis 9. Schulstufe, max. 30 Schüler*innen, altersgemischte Gruppen, Nachmittagsbetreuung bis 16:30." />
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-text">
            <h1>
              Astrid Lindgren Schule
              <span className="home-hero-sub">Zentrum für ganzheitliches Lernen</span>
            </h1>
            <p className="home-lead">
              Eine kleine Schule in Wien-Liesing, seit 2003 – von der 1. bis zur 9. Schulstufe,
              mit Öffentlichkeitsrecht: Die Zeugnisse sind staatlich gültig.
            </p>
            <p className="home-plaetze">Anmeldungen jederzeit möglich – besonders in der Primaria I sind Plätze frei.</p>
            <div className="home-hero-actions">
              <a href={KONTAKT.telHref} className="btn btn-outline">Anrufen: {KONTAKT.telefon}</a>
              <Link to="/eltern/anmeldung" className="pfeil-link">Anmeldung &amp; Kosten</Link>
            </div>
          </div>
          <TerminKarte id="termin-oben" />
        </div>
      </section>

      <section className="home-fakten" aria-label="Die Schule in Zahlen">
        <div className="container">
          <p className="fakten-satz">
            Höchstens <strong>30 Kinder</strong> in der ganzen Schule, <strong>8 bis 12</strong> pro
            Pädagog*in, Jause und Mittagessen <strong>frisch gekocht</strong>, Betreuung
            bis <strong>16:30</strong>.
          </p>
        </div>
      </section>

      <section className="section home-portrait">
        <div className="container portrait-grid">
          <figure className="portrait-bild">
            <picture>
              <source
                type="image/webp"
                srcSet="/images/opt/hej-640.webp 640w, /images/opt/hej-1024.webp 1024w, /images/opt/hej-1600.webp 1600w"
                sizes="(min-width: 1024px) 560px, 100vw"
              />
              <img
                src="/images/opt/hej-1024.jpg"
                srcSet="/images/opt/hej-640.jpg 640w, /images/opt/hej-1024.jpg 1024w, /images/opt/hej-1600.jpg 1600w"
                sizes="(min-width: 1024px) 560px, 100vw"
                alt="Jahresbroschüre „HEJ! 2022/23“ des Astrid Lindgren Zentrums auf einem Holztisch"
                width="1600"
                height="1066"
                loading="lazy"
                decoding="async"
              />
            </picture>
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
            <Link to="/eltern/anmeldung" className="btn btn-primary">Anmeldung &amp; Kosten</Link>
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

      <section className="section home-abschluss">
        <div className="container abschluss-grid">
          <div>
            <h2 className="schwung">Lernen Sie uns kennen</h2>
            <p>
              Am besten erleben Sie unsere Schule selbst. Rufen Sie uns an – wir vereinbaren
              gerne einen individuellen Termin.
            </p>
            <p className="abschluss-kontakt">
              <a href={KONTAKT.telHref}>{KONTAKT.telefon}</a>
              <a href={`mailto:${KONTAKT.email}`}>{KONTAKT.email}</a>
            </p>
          </div>
          <TerminKarte id="termin-unten" />
        </div>
      </section>

      <section className="section home-netzwerke">
        <div className="container">
          <h2 className="netzwerke-titel">Wir sind Teil von</h2>
          <ul className="netzwerke-liste">
            {NETZWERKE.map((n) => <li key={n}>{n}</li>)}
          </ul>
          <p className="gesucht-zeile">
            Wir suchen Verstärkung: Lehrkraft für Mathematik/Naturwissenschaften, Zivildiener ab
            September 2027 und Praktikant*innen. <Link to="/karriere">Zu Karriere</Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;

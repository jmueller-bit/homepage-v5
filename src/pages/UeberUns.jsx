import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { WERTE } from '../data/inhalte';
import './UeberUns.css';

const YOUTUBE = 'https://www.youtube.com/channel/UCk8ADaXZc9RpfZcOmHkpSIA';

function UeberUns() {
  return (
    <PageLayout
      title="Über uns"
      lead="Das Astrid Lindgren Zentrum wurde 2003 gegründet und wird als gemeinnütziger Verein geführt."
      description="Das Astrid Lindgren Zentrum: 2003 gegründeter gemeinnütziger Verein für Pädagogik und Kultur in Wien – Werte, Philosophie, Team, Netzwerke und Verein."
    >
      <h2>Wofür wir stehen</h2>
      <ul className="werte">
        {WERTE.map((w) => <li key={w}>{w}</li>)}
      </ul>

      <h2>Das Zentrum</h2>
      <p>
        Das Astrid Lindgren Zentrum sieht sich als innovatives Modell für lebenslanges Lernen auf
        kognitiver, kreativer und sozialer Ebene – für Menschen jeden Alters, jeder Herkunft und
        jeder Begabung. Es ist ein Ort der Begegnung für gelebte Diversität, Toleranz und Solidarität.
      </p>
      <p>
        Unter ganzheitlichem Lernen verstehen wir einen lebenslangen Prozess der Neugier: Lernen, das
        alle Sinne und die Umwelt einbezieht, Lernen mit Kopf, Herz und Hand, das Miteinander- und
        Voneinander-Lernen der Generationen.
      </p>
      <p className="hinweis">
        Alle Bildungseinrichtungen des Astrid Lindgren Zentrums arbeiten nach dem pädagogischen Ansatz
        der Inklusion und setzen damit die UN-Konvention über die Rechte von Menschen mit Behinderung
        von 2006 um.
      </p>

      <h2>Einblicke in Videos</h2>
      <p>
        In Video-Interviews erzählen Eltern und die Schulleitung vom Schulalltag, von Demokratie und
        Meinungsbildung, von Noten, Druck und Freude am Lernen. Eine Mutter erklärt in einem
        Erklärvideo, wie das Logbuch funktioniert.
      </p>
      <a href={YOUTUBE} className="pfeil-link" target="_blank" rel="noopener noreferrer">Zum YouTube-Kanal</a>

      <h2>Mehr über uns</h2>
      <ul className="weg-liste">
        <li><Link to="/ueber-uns/philosophie"><span className="weg-titel">Philosophie</span><span className="weg-text">Was uns wichtig ist und die Präambel der Astrid Lindgren Schulen</span></Link></li>
        <li><Link to="/ueber-uns/team"><span className="weg-titel">Team</span><span className="weg-text">Die Menschen, die mit Ihren Kindern arbeiten</span></Link></li>
        <li><Link to="/ueber-uns/netzwerke"><span className="weg-titel">Netzwerke</span><span className="weg-text">Kooperationen, Hospitationen und Praktika</span></Link></li>
        <li><Link to="/ueber-uns/verein"><span className="weg-titel">Verein</span><span className="weg-text">Zweck und Vorstand des Trägervereins</span></Link></li>
      </ul>
    </PageLayout>
  );
}

export default UeberUns;

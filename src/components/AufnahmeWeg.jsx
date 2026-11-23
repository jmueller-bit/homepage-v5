import { AUFNAHME } from '../data/inhalte';
import './AufnahmeWeg.css';

// schmal: immer vertikal, für die Lesespalte der Unterseiten
function AufnahmeWeg({ schmal = false }) {
  return (
    <ol className={`aufnahme-weg ${schmal ? 'aufnahme-weg-schmal' : ''}`}>
      {AUFNAHME.map((s) => (
        <li key={s.titel}>
          <h3>{s.titel}</h3>
          {s.text && <p>{s.text}</p>}
        </li>
      ))}
    </ol>
  );
}

export default AufnahmeWeg;

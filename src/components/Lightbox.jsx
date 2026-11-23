import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { animiereFeder, gummiband, projektion } from '../lib/feder';
import './Lightbox.css';

const SCHWELLE = 10; // px Bewegung, bevor eine Richtung feststeht
const ruhig = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Vergrößerte Fotos: wischen folgt dem Finger 1:1, beim Loslassen rollt das Bild mit Schwung weiter,
// an Anfang und Ende gibt es Gummiband-Widerstand; eine laufende Bewegung kann jederzeit gegriffen werden.
function Lightbox({ bilder, start, onClose }) {
  const [index, setIndex] = useState(start);
  const viewport = useRef(null);
  const spur = useRef(null);
  const versatz = useRef(0); // aktuelle Verschiebung in px relativ zum mittleren Bild
  const abbrechen = useRef(null);
  const geste = useRef(null);
  const schliessenKnopf = useRef(null);

  const hatVor = index > 0;
  const hatNach = index < bilder.length - 1;

  const setze = useCallback((x) => {
    versatz.current = x;
    if (spur.current) spur.current.style.transform = `translate3d(calc(-100% / 3 + ${x}px), 0, 0)`;
  }, []);

  // Nach jedem Bildwechsel steht das neue Bild ohne Versatz in der Mitte
  useLayoutEffect(() => setze(0), [index, setze]);

  const gleite = useCallback(
    (ziel, v = 0) => {
      abbrechen.current?.();
      const wechsel = ziel === 0 ? 0 : ziel < 0 ? 1 : -1;
      const fertig = () => {
        abbrechen.current = null;
        if (wechsel) setIndex((i) => i + wechsel);
      };
      if (ruhig()) {
        setze(ziel);
        fertig();
        return;
      }
      // Nachfedern nur, wenn ein schneller Wisch vorausging
      const daempfung = Math.abs(v) > 600 ? 0.85 : 1;
      abbrechen.current = animiereFeder({
        von: versatz.current,
        nach: ziel,
        v,
        optionen: { response: 0.32, daempfung },
        beiWert: setze,
        fertig,
      });
    },
    [setze]
  );

  const naechstes = useCallback(() => hatNach && gleite(-viewport.current.clientWidth), [hatNach, gleite]);
  const vorheriges = useCallback(() => hatVor && gleite(viewport.current.clientWidth), [hatVor, gleite]);

  useEffect(() => {
    schliessenKnopf.current?.focus();
    const vorher = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const taste = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') naechstes();
      if (e.key === 'ArrowLeft') vorheriges();
    };
    window.addEventListener('keydown', taste);
    return () => {
      window.removeEventListener('keydown', taste);
      document.body.style.overflow = vorher;
      abbrechen.current?.();
    };
  }, [onClose, naechstes, vorheriges]);

  const runter = (e) => {
    if (e.button !== 0) return;
    abbrechen.current?.(); // greift eine laufende Bewegung genau dort, wo sie gerade ist
    abbrechen.current = null;
    geste.current = { id: e.pointerId, x0: e.clientX, y0: e.clientY, basis: versatz.current, richtung: null, verlauf: [] };
  };

  const bewegt = (e) => {
    const g = geste.current;
    if (!g || g.id !== e.pointerId) return;
    const dx = e.clientX - g.x0;
    const dy = e.clientY - g.y0;
    if (!g.richtung) {
      if (Math.hypot(dx, dy) < SCHWELLE) return;
      g.richtung = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
      if (g.richtung === 'x') viewport.current.setPointerCapture(e.pointerId);
    }
    if (g.richtung !== 'x') return;
    const breite = viewport.current.clientWidth;
    let x = g.basis + dx;
    if ((x > 0 && !hatVor) || (x < 0 && !hatNach)) x = gummiband(x, breite);
    setze(x);
    g.verlauf.push({ x: e.clientX, t: e.timeStamp });
    if (g.verlauf.length > 6) g.verlauf.shift();
  };

  const hoch = (e) => {
    const g = geste.current;
    geste.current = null;
    if (!g || g.id !== e.pointerId) return;
    if (g.richtung !== 'x') {
      // Kein Wisch: ein Tipp auf den dunklen Hintergrund schließt
      if (!g.richtung && e.target.tagName !== 'IMG') onClose();
      return;
    }
    const breite = viewport.current.clientWidth;
    const erster = g.verlauf[0];
    const letzter = g.verlauf[g.verlauf.length - 1];
    const v = erster && letzter && letzter.t > erster.t ? ((letzter.x - erster.x) / (letzter.t - erster.t)) * 1000 : 0;
    const ziel = versatz.current + projektion(v);
    if (ziel < -breite / 2 && hatNach) gleite(-breite, v);
    else if (ziel > breite / 2 && hatVor) gleite(breite, v);
    else gleite(0, v);
  };

  const bild = bilder[index];
  const slots = [bilder[index - 1], bild, bilder[index + 1]];

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Bildansicht">
      <div
        className="lightbox-viewport"
        ref={viewport}
        onPointerDown={runter}
        onPointerMove={bewegt}
        onPointerUp={hoch}
        onPointerCancel={hoch}
      >
        <div className="lightbox-spur" ref={spur}>
          {slots.map((b, i) => (
            <div className="lightbox-folie" key={b ? b.id : `leer-${i}`} aria-hidden={i !== 1}>
              {b && <img src={b.src} alt={i === 1 ? b.alt : ''} draggable="false" />}
            </div>
          ))}
        </div>
      </div>

      <div className="lightbox-caption" aria-live="polite">
        {bild.title && <h3>{bild.title}</h3>}
        <p>{bild.category}</p>
        <p className="lightbox-zaehler">{index + 1} / {bilder.length}</p>
      </div>

      {hatVor && (
        <button type="button" className="lightbox-nav lightbox-prev" onClick={vorheriges} aria-label="Vorheriges Bild">
          <span aria-hidden="true">←</span>
        </button>
      )}
      {hatNach && (
        <button type="button" className="lightbox-nav lightbox-next" onClick={naechstes} aria-label="Nächstes Bild">
          <span aria-hidden="true">→</span>
        </button>
      )}
      <button type="button" className="lightbox-close" onClick={onClose} ref={schliessenKnopf} aria-label="Bildansicht schließen">
        <span aria-hidden="true">×</span>
      </button>
    </div>
  );
}

export default Lightbox;

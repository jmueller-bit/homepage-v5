import { useEffect, useState } from 'react';
import './BildBand.css';

const WECHSEL_MS = 7000;

// Breites Schwarz-Weiß-Band; bei mehreren Bildern sanfter Wechsel, außer bei reduzierter Bewegung
function BildBand({ bilder, className = '' }) {
  const [aktiv, setAktiv] = useState(0);

  useEffect(() => {
    if (bilder.length < 2) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const id = setInterval(() => setAktiv((i) => (i + 1) % bilder.length), WECHSEL_MS);
    return () => clearInterval(id);
  }, [bilder.length]);

  return (
    <div className={`bildband ${className}`}>
      {bilder.map((b, i) => (
        <picture key={b.src} className={i === aktiv ? 'ist-aktiv' : ''} aria-hidden={i !== aktiv}>
          <source type="image/webp" srcSet={`${b.src}-640.webp 640w, ${b.src}-1240.webp 1240w`} sizes="100vw" />
          <img
            src={`${b.src}-1240.jpg`}
            alt={i === aktiv ? b.alt : ''}
            width="1240"
            height="386"
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchPriority={i === 0 ? 'high' : 'auto'}
            decoding="async"
          />
        </picture>
      ))}
    </div>
  );
}

export default BildBand;

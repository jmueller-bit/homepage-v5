// Federn nach Apples Parametern (WWDC 2018 „Designing Fluid Interfaces“):
// response = Schnelligkeit in Sekunden, daempfung = 1 ohne Überschwingen, < 1 mit leichtem Nachfedern.
// Startet immer beim aktuellen Wert und übernimmt die Geschwindigkeit der Geste.

export const federSchritt = (zustand, ziel, { response = 0.35, daempfung = 1 } = {}, dt = 1 / 60) => {
  const steifigkeit = (2 * Math.PI / response) ** 2;
  const reibung = (4 * Math.PI * daempfung) / response;
  // In 1-ms-Teilschritten rechnen: bei 16 ms pro Bild würde das Nachfedern sonst verschluckt
  const schritte = Math.max(1, Math.ceil(dt / 0.001));
  const h = dt / schritte;
  let { wert, v } = zustand;
  for (let i = 0; i < schritte; i++) {
    v += (-steifigkeit * (wert - ziel) - reibung * v) * h;
    wert += v * h;
  }
  return { wert, v };
};

// Wo eine Wischbewegung ausrollen würde (Apples Projektion, wie Scroll-Abbremsung)
export const projektion = (v, abbremsung = 0.998) => ((v / 1000) * abbremsung) / (1 - abbremsung);

// Gummiband: je weiter über den Rand gezogen, desto weniger folgt das Element
export const gummiband = (ueberstand, groesse, k = 0.55) =>
  (ueberstand * groesse * k) / (groesse + k * Math.abs(ueberstand));

// Animiert per requestAnimationFrame; gibt eine Abbruchfunktion zurück (jederzeit unterbrechbar)
export const animiereFeder = ({ von, nach, v = 0, optionen, beiWert, fertig }) => {
  let zustand = { wert: von, v };
  let letzte = performance.now();
  let id = requestAnimationFrame(function tick(jetzt) {
    const dt = Math.min((jetzt - letzte) / 1000, 1 / 30);
    letzte = jetzt;
    zustand = federSchritt(zustand, nach, optionen, dt);
    if (Math.abs(zustand.wert - nach) < 0.5 && Math.abs(zustand.v) < 5) {
      beiWert(nach);
      fertig?.();
      return;
    }
    beiWert(zustand.wert);
    id = requestAnimationFrame(tick);
  });
  return () => cancelAnimationFrame(id);
};

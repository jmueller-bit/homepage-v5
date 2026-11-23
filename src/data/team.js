// Contentful-Einträge haben Vorrang; Personen der Live-Seite, die dort (noch) fehlen, bleiben sichtbar.
// Abgleich über den Namen ohne Titel: „DI Jutta Höbartner BEd“ enthält „Jutta Höbartner“.
const norm = (s = '') => s.toLowerCase().replace(/\s+/g, ' ').trim();

export const mergeTeam = (cms, lokal) => {
  const treffer = (person) => cms.find((m) => norm(m.name).includes(norm(person.name)));
  const ergaenzt = cms.map((m) => {
    const live = lokal.find((p) => norm(m.name).includes(norm(p.name)));
    // Foto der Live-Seite nur, wenn Contentful keins hat
    return live && !m.photo ? { ...m, foto: live.foto } : m;
  });
  return [...ergaenzt, ...lokal.filter((p) => !treffer(p))];
};

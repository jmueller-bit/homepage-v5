import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { NAV, RECHTLICHES, findSection } from './navigation.js'

// Jeder Navigationslink muss eine Route in App.jsx haben
const app = readFileSync(new URL('../App.jsx', import.meta.url), 'utf8')
const routes = [...app.matchAll(/path="([^"]+)"/g)].map((m) => m[1])
// Wildcard-Routen fangen alles ab, zählen also nur für ihre Basis (sonst rendert ein toter Link die Bereichsseite)
const NESTED = ['/schulleben/news'] // eigener Router in Schulleben.jsx
const covered = (p) => NESTED.includes(p) || routes.some((r) => r === p || (r.endsWith('/*') && p === r.slice(0, -2)))
const links = [...NAV.flatMap((s) => [s, ...s.children]), ...RECHTLICHES].map((l) => l.path)
for (const p of links) assert.ok(covered(p), `keine Route für ${p}`)

assert.equal(findSection('/eltern/anmeldung').path, '/eltern')
assert.equal(findSection('/ueber-uns').path, '/ueber-uns')
assert.equal(findSection('/impressum'), null)
console.log('navigation: ok')

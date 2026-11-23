import assert from 'node:assert/strict'
import { federSchritt, projektion, gummiband } from './feder.js'

const laufe = (opt, v0 = 0) => {
  let z = { wert: 0, v: v0 }, max = 0, t = 0
  for (; t < 300; t++) { z = federSchritt(z, 100, opt); max = Math.max(max, z.wert) }
  return { ende: z.wert, max }
}
// Kritisch gedämpft: kommt an, schießt nicht über
const k = laufe({ response: 0.35, daempfung: 1 })
assert.ok(Math.abs(k.ende - 100) < 0.5 && k.max <= 100.5, JSON.stringify(k))
// Gedämpft < 1: leichtes Überschwingen
assert.ok(laufe({ response: 0.35, daempfung: 0.8 }).max > 100.5)
// Projektion: schneller Wisch rollt weit, langsamer kaum
assert.ok(projektion(-2000) < -900 && Math.abs(projektion(-50)) < 30)
// Gummiband: folgt immer weniger, nie mehr als der Überstand
assert.ok(gummiband(100, 400) < 100 && gummiband(400, 400) < 4 * gummiband(100, 400))
console.log('feder: ok')

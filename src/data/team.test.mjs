import assert from 'node:assert/strict'
import { mergeTeam } from './team.js'

const lokal = [
  { id: 'a', name: 'Jutta Höbartner', foto: '/j' },
  { id: 'b', name: 'Ulrike Fuchs', foto: '/u' },
]
const cms = [{ id: 'x', name: 'DI Jutta Höbartner BEd', photo: null }]
const r = mergeTeam(cms, lokal)
assert.deepEqual(r.map((p) => p.id), ['x', 'b'])
assert.equal(r[0].foto, '/j')
assert.deepEqual(mergeTeam([], lokal), lokal)
assert.equal(mergeTeam([{ id: 'y', name: 'Jutta Höbartner', photo: { url: '/c' } }], lokal)[0].foto, undefined)
console.log('team: ok')

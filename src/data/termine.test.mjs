import assert from 'node:assert/strict'
import { getNaechsterTermin, formatTerminDatum, istHeute } from './termine.js'

assert.equal(getNaechsterTermin(new Date('2026-11-23')).datum, '2027-01-12')
assert.equal(getNaechsterTermin(new Date('2027-01-12T20:00:00Z')).datum, '2027-01-12')
assert.equal(getNaechsterTermin(new Date('2027-01-13')).datum, '2027-03-04')
assert.equal(getNaechsterTermin(new Date('2027-05-21')), null)
assert.match(formatTerminDatum('2027-01-12'), /12\. Jänner 2027/)
assert.equal(istHeute('2027-03-04', new Date(2027, 2, 4, 23, 30)), true)
assert.equal(istHeute('2027-03-04', new Date(2027, 2, 5, 0, 5)), false)
console.log('termine: ok')

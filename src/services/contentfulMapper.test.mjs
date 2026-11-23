import assert from 'node:assert/strict'
import { mapNewsArticle, kurzfassung } from './contentfulMapper.js'

const text = (value) => ({ nodeType: 'paragraph', content: [{ nodeType: 'text', value }] })
const bild = { fields: { title: 'Wald', file: { url: '//images.ctfassets.net/x.jpg', details: { image: { width: 800, height: 600 } } } } }
const inhalt = {
  nodeType: 'document',
  content: [
    text('Heute waren wir im Wald. Wir haben ein Insektenhotel gebaut. Danach gab es Jause und viele Geschichten am Lagerfeuer, bis es dunkel wurde und alle müde waren.'),
    { nodeType: 'embedded-asset-block', data: { target: bild }, content: [] },
  ],
}

// Nur Titel und Text ausgefüllt
const a = mapNewsArticle({ sys: { id: 'abc123', createdAt: '2026-11-20T10:00:00Z' }, fields: { titel: 'Waldtag', inhalt } })
assert.equal(a.slug, 'abc123')
assert.equal(a.category, 'Allgemein')
assert.equal(a.publishDate.toISOString(), '2026-11-20T10:00:00.000Z')
assert.equal(a.excerpt, 'Heute waren wir im Wald. Wir haben ein Insektenhotel gebaut.')
assert.equal(a.image.url, 'https://images.ctfassets.net/x.jpg')

// Ausgefüllte Felder haben Vorrang
const b = mapNewsArticle({ sys: { id: 'x', createdAt: '2026-01-01' }, fields: { titel: 'T', slug: 'mein-slug', vorschautext: 'Kurz', datum: '2026-02-03', inhalt } })
assert.equal(b.slug, 'mein-slug')
assert.equal(b.excerpt, 'Kurz')
assert.equal(kurzfassung(null), '')
console.log('contentfulMapper: ok')

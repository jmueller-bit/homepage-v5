// Lehrer:innen müssen nur Titel und Text ausfüllen; fehlende Felder ergänzt die Website.
const plainText = (node) =>
  !node ? '' : node.nodeType === 'text' ? node.value || '' : (node.content || []).map(plainText).join(' ')

// Höchstens zwei Sätze und ~180 Zeichen
export const kurzfassung = (richText, max = 180) => {
  const text = plainText(richText).replace(/\s+/g, ' ').trim()
  const saetze = text.match(/[^.!?]+[.!?]+/g) || [text]
  let out = ''
  for (const s of saetze.slice(0, 2)) {
    if (out && (out + s).length > max) break
    out += s
  }
  out = out.trim()
  return out.length > max ? `${out.slice(0, max).replace(/\s+\S*$/, '')} …` : out
}

const erstesBild = (node) => {
  if (!node) return null
  if (node.nodeType === 'embedded-asset-block') return node.data?.target || null
  for (const child of node.content || []) {
    const found = erstesBild(child)
    if (found) return found
  }
  return null
}

export const mapNewsArticle = (entry) => {
  if (!entry) return null

  const { fields, sys } = entry
  const bild = fields.titelbild || erstesBild(fields.inhalt)

  return {
    id: sys.id,
    title: fields.titel || '',
    // Ohne Slug dient die Eintrags-ID als Adresse (getNewsArticleBySlug kennt beides)
    slug: fields.slug || sys.id,
    excerpt: fields.vorschautext || kurzfassung(fields.inhalt),
    content: fields.inhalt || null,
    category: fields.kategorie || 'Allgemein',
    publishDate: new Date(fields.datum || sys.createdAt),
    author: fields.autor || 'ALZ Team',
    image: bild ? mapAsset(bild) : null
  }
}

export const mapAsset = (asset) => {
  if (!asset || !asset.fields) return null

  return {
    url: asset.fields.file?.url ? `https:${asset.fields.file.url}` : null,
    title: asset.fields.title || '',
    description: asset.fields.description || '',
    width: asset.fields.file?.details?.image?.width,
    height: asset.fields.file?.details?.image?.height,
    contentType: asset.fields.file?.contentType
  }
}

export const formatDate = (date) => {
  if (!date) return ''

  return new Intl.DateTimeFormat('de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(date)
}

export const formatDateShort = (date) => {
  if (!date) return ''

  return new Intl.DateTimeFormat('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(date)
}

import { createClient } from 'contentful'

const space = import.meta.env.VITE_CONTENTFUL_SPACE_ID
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN

// Ohne Zugangsdaten nicht die ganze App abstürzen lassen: nur CMS-Abfragen schlagen fehl
const client = space && accessToken
  ? createClient({
      space,
      accessToken,
      environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || 'master'
    })
  : {
      getEntries: () => Promise.reject(new Error('Contentful ist nicht konfiguriert (VITE_CONTENTFUL_* fehlt)'))
    }

// Helper function to get image URL from asset
const getImageUrl = (asset) => {
  if (!asset?.fields?.file?.url) return null
  const url = asset.fields.file.url
  return url.startsWith('http') ? url : `https:${url}`
}

// Helper function to get image dimensions
const getImageDimensions = (asset) => {
  if (!asset?.fields?.file?.details?.image) return { width: undefined, height: undefined }
  return {
    width: asset.fields.file.details.image.width,
    height: asset.fields.file.details.image.height
  }
}

// Helper function to convert Contentful Rich Text to plain text
const richTextToPlainText = (richText) => {
  if (!richText || !richText.content) return ''
  
  const extractText = (node) => {
    if (node.nodeType === 'text') {
      return node.value || ''
    }
    if (node.content && Array.isArray(node.content)) {
      return node.content.map(extractText).join('')
    }
    return ''
  }
  
  return richText.content.map(extractText).join('\n\n')
}


// News Articles
export const getNewsArticles = async (limit = 10, skip = 0) => {
  try {
    const response = await client.getEntries({
      content_type: 'newsArtikel',
      order: '-fields.datum',
      limit,
      skip,
      include: 1
    })
    return {
      articles: response.items,
      total: response.total,
      skip: response.skip,
      limit: response.limit
    }
  } catch (error) {
    console.error('Error fetching news articles:', error)
    throw error
  }
}

export const getNewsArticleBySlug = async (slug) => {
  try {
    const response = await client.getEntries({
      content_type: 'newsArtikel',
      'fields.slug': slug,
      limit: 1,
      include: 2
    })
    return response.items[0] || null
  } catch (error) {
    console.error('Error fetching news article by slug:', error)
    throw error
  }
}

export const getNewsArticlesByCategory = async (category, limit = 10, skip = 0) => {
  try {
    const response = await client.getEntries({
      content_type: 'newsArtikel',
      'fields.kategorie': category,
      order: '-fields.datum',
      limit,
      skip
    })
    return {
      articles: response.items,
      total: response.total,
      skip: response.skip,
      limit: response.limit
    }
  } catch (error) {
    console.error('Error fetching news by category:', error)
    throw error
  }
}

// Team Members
export const getTeamMembers = async (limit = 50) => {
  try {
    const response = await client.getEntries({
      content_type: 'teamMitglied',
      order: 'fields.reihenfolge',
      limit,
      include: 1
    })
    
    return response.items.map(item => {
      const fields = item.fields
      const photoAsset = fields.foto
      const { width, height } = getImageDimensions(photoAsset)
      
      return {
        id: item.sys.id,
        name: fields.name || fields.titel,
        role: fields.funktion || fields.role,
        bio: richTextToPlainText(fields.beschreibung),
        bioRichText: fields.beschreibung || null,
        order: fields.reihenfolge || 0,
        photo: photoAsset ? {
          url: getImageUrl(photoAsset),
          width,
          height
        } : null
      }
    }).sort((a, b) => a.order - b.order)
  } catch (error) {
    console.error('Error fetching team members:', error)
    return []
  }
}

// Galerie – Content-Types „galleryImage“ (schule-allgmein) und „schuleEvent“, je Eintrag ein Album
const toAlbum = (item) => {
  const { fields } = item
  const assets = Array.isArray(fields.bild) ? fields.bild : fields.bild ? [fields.bild] : []
  return {
    id: item.sys.id,
    titel: fields.titel,
    kategorie: fields.kategorie || '',
    order: fields.reihenfolge ?? 0,
    bilder: assets
      .map((asset) => ({
        src: getImageUrl(asset),
        alt: asset?.fields?.description || asset?.fields?.title || fields.titel,
        ...getImageDimensions(asset)
      }))
      .filter((b) => b.src)
  }
}

export const getGalleryAlben = async (limit = 50) => {
  const responses = await Promise.all(
    ['schuleEvent', 'galleryImage'].map((type) =>
      client.getEntries({ content_type: type, order: 'fields.reihenfolge', limit, include: 1 })
    )
  )
  return responses
    .flatMap((r) => r.items.map(toAlbum))
    .filter((a) => a.bilder.length)
}

// Stellen – Content-Type „stellen“ (Felder: position, beschreibungKurz, beschreibungLang, medien)
export const getStellenAngebote = async (limit = 50) => {
  const response = await client.getEntries({
    content_type: 'stellen',
    order: '-sys.createdAt',
    limit,
    include: 1
  })

  return response.items.map((item) => {
    const { fields } = item
    return {
      id: item.sys.id,
      title: fields.position,
      description: fields.beschreibungKurz || '',
      detailsRichText: fields.beschreibungLang || null,
      attachment: fields.medien ? { url: getImageUrl(fields.medien), title: fields.medien.fields?.title || 'Anhang' } : null
    }
  })
}

export default client

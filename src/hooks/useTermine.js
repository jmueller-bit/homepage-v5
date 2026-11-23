import { useEffect, useState } from 'react'
import { TERMINE } from '../data/termine'

// Termine aus Contentful; bis sie geladen sind (oder wenn keine gepflegt sind) gelten die Termine im Code.
// Dynamischer Import: das Contentful-SDK bleibt aus dem Startseiten-Bundle draußen.
export const useTermine = () => {
  const [termine, setTermine] = useState(TERMINE)

  useEffect(() => {
    let aktiv = true
    import('../services/contentful')
      .then((m) => m.getTermine())
      .then((liste) => {
        if (aktiv && liste.length) setTermine(liste)
      })
      .catch(() => {})
    return () => {
      aktiv = false
    }
  }, [])

  return termine
}

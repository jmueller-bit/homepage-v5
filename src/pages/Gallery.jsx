import { useState, useEffect } from 'react';
import { getGalleryAlben } from '../services/contentful';
import { ALBEN, BAND } from '../data/bilder';
import BildBand from '../components/BildBand';
import './Gallery.css';
import PageMeta from '../components/PageMeta';

// Fotos der Live-Seite als Alben; Contentful-Alben kommen davor dazu
const LOKALE_BILDER = ALBEN.flatMap((album) =>
  album.bilder.map((b) => ({
    id: b.src,
    src: `${b.src}-1600.webp`,
    thumb: `${b.src}-640.webp`,
    alt: b.alt,
    title: '',
    category: `${album.titel} · ${album.datum}`,
  }))
);

// Contentful-Album → Kacheln; Bilder über die Images API verkleinert
const ausCms = (alben) =>
  alben.flatMap((album) =>
    album.bilder.map((b, i) => ({
      id: `${album.id}-${i}`,
      src: `${b.src}?w=1600&fm=webp&q=76`,
      thumb: `${b.src}?w=640&h=480&fit=fill&fm=webp&q=72`,
      alt: b.alt,
      title: '',
      category: album.titel,
    }))
  );

function Gallery() {
  // Lokale Fotos sofort zeigen (kein Layout-Sprung); Contentful-Alben werden davor ergänzt
  const [images, setImages] = useState(LOKALE_BILDER);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const alben = await getGalleryAlben();
        if (alben.length) setImages([...ausCms(alben), ...LOKALE_BILDER]);
      } catch {
        // CMS nicht erreichbar: lokale Fotos bleiben stehen
      }
    };

    fetchImages();
  }, []);

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const showNext = (e) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <div className="gallery-page" data-farbe="ocker">
      <PageMeta title="Galerie" description="Bilder aus dem Schulalltag der Astrid Lindgren Schule." />
      <BildBand bilder={[BAND.bach]} className="bildband-schmal" />
      <section className="gallery-hero">
        <div className="container">
          <h1>Galerie</h1>
          <p className="hero-subtitle">
            Ein Blick in unseren Schulalltag
          </p>
        </div>
      </section>

      <section className="gallery-content section">
        <div className="container">
          <h2 className="sr-only">Bilder</h2>
          {images.length === 0 ? (
            <div className="gallery-empty glass">
              <h3>Keine Bilder vorhanden</h3>
              <p>Derzeit sind keine Bilder in der Galerie verfügbar.</p>
            </div>
          ) : (
            <div className="gallery-grid">
              {images.map((image, index) => (
                <button
                  type="button"
                  key={image.id}
                  className="gallery-card glass"
                  onClick={() => openLightbox(index)}
                >
                  <span className="sr-only">Bild vergrößern: {image.alt}</span>
                  <div className="gallery-card-image">
                    <img
                      src={image.thumb || image.src}
                      alt=""
                      loading="lazy"
                      width="640"
                      height="480"
                    />
                    {image.category && (
                      <span className="gallery-card-category">
                        {image.category}
                      </span>
                    )}
                  </div>
                  {image.title && (
                    <div className="gallery-card-content">
                      <h3 className="gallery-card-title">{image.title}</h3>
                      {image.description && (
                        <p className="gallery-card-description">{image.description}</p>
                      )}
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedImage !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-nav lightbox-prev" onClick={showPrev}>
            ←
          </button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
            />
            <div className="lightbox-caption">
              <h3>{images[selectedImage].title}</h3>
              <p>{images[selectedImage].category}</p>
              {images[selectedImage].description && (
                <p className="lightbox-description">
                  {images[selectedImage].description}
                </p>
              )}
            </div>
          </div>

          <button className="lightbox-nav lightbox-next" onClick={showNext}>
            →
          </button>

          <button className="lightbox-close" onClick={closeLightbox}>
            ×
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;
// Responsives Foto aus public/images/alz: WebP 640/1600, JPG-Fallback, feste Maße gegen Layout-Sprünge
function Foto({ bild, sizes = '100vw', className, eager = false }) {
  const webp = `${bild.src}-640.webp 640w, ${bild.src}-1600.webp 1600w`;
  return (
    <picture className={className}>
      <source type="image/webp" srcSet={webp} sizes={sizes} />
      {/* JPG nur als 640er-Fallback für Browser ohne WebP */}
      <img
        src={`${bild.src}-640.jpg`}
        alt={bild.alt}
        width={bild.w}
        height={bild.h}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    </picture>
  );
}

export default Foto;

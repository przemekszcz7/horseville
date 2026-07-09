import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Image as ImageIcon, Sparkles } from 'lucide-react';
import { GALLERY_IMAGES } from '../data';

export default function Gallery() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Check if we can expand more
  const hasMore = visibleCount < GALLERY_IMAGES.length;

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, GALLERY_IMAGES.length));
  };

  const openLightbox = (imgUrl: string) => {
    const globalIndex = GALLERY_IMAGES.findIndex(img => img.url === imgUrl);
    if (globalIndex !== -1) {
      setLightboxIndex(globalIndex);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = (direction: 'next' | 'prev') => {
    if (lightboxIndex === null) return;
    let nextIndex = direction === 'next' ? lightboxIndex + 1 : lightboxIndex - 1;
    if (nextIndex >= GALLERY_IMAGES.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = GALLERY_IMAGES.length - 1;
    setLightboxIndex(nextIndex);
  };

  return (
    <section id="galeria" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#dacab0]/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#dacab0]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#b8a486] inline-flex items-center gap-2 mb-3 bg-[#dacab0]/10 px-3 py-1 rounded-full">
            <Sparkles size={12} />
            Galeria Zdjęć
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#000002] tracking-tight mb-6">
            Magiczne chwile w Horse Ville
          </h2>
          <div className="h-1 w-20 bg-[#dacab0] mx-auto mb-6" />
          <p className="text-gray-600 font-light leading-relaxed">
            Zobacz, jak wygląda codzienne życie w naszej stadninie, poczuj wiejski klimat naszych przytulnych pokoi i zakochaj się w naszych pięknych koniach.
          </p>
        </div>

        {/* Image Grid with Motion Layout */}
        <motion.div 
          id="gallery-grid" 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {GALLERY_IMAGES.slice(0, visibleCount).map((image, idx) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#dacab0]/20 bg-[#faf8f4] shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/3]"
                onClick={() => openLightbox(image.url)}
              >
                {/* Image element */}
                <img
                  src={image.url}
                  alt={image.caption}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.98] group-hover:brightness-[0.92]"
                />

                {/* Hover overlay with text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-xs font-mono text-[#dacab0] uppercase tracking-widest mb-1">
                    Horse Ville
                  </span>
                  <div className="mt-1 flex items-center gap-1.5 text-[11px] font-mono text-white/70">
                    <ImageIcon size={12} className="text-[#dacab0]" />
                    <span>Kliknij, aby powiększyć</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* More Photos Button */}
        {hasMore && (
          <div className="mt-16 text-center">
            <button
              id="gallery-show-more-btn"
              onClick={handleShowMore}
              className="inline-flex items-center gap-3 bg-[#faf8f4] border border-[#dacab0] text-[#000002] hover:bg-[#dacab0] hover:text-[#000002] px-8 py-4 rounded-full text-xs font-mono tracking-widest uppercase font-bold transition-all duration-300 shadow-sm"
            >
              <span>Więcej zdjęć</span>
              <span className="text-xs bg-[#000002]/5 px-2 py-0.5 rounded-full text-gray-600 group-hover:text-black">
                +{GALLERY_IMAGES.length - visibleCount}
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            id="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-between p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Header controls */}
            <div className="w-full max-w-7xl flex items-center justify-between text-white/80 z-10">
              <span className="font-mono text-xs tracking-wider uppercase text-[#dacab0]">
                Zdjęcie {lightboxIndex + 1} z {GALLERY_IMAGES.length}
              </span>
              <button
                id="lightbox-close-btn"
                onClick={closeLightbox}
                className="p-3 rounded-full hover:bg-white/10 text-white transition-colors"
                aria-label="Zamknij"
              >
                <X size={24} />
              </button>
            </div>

            {/* Main Stage */}
            <div className="relative w-full max-w-5xl aspect-video flex items-center justify-center py-4" onClick={(e) => e.stopPropagation()}>
              {/* Previous Button */}
              <button
                id="lightbox-prev-btn"
                onClick={() => navigateLightbox('prev')}
                className="absolute left-2 sm:-left-12 lg:-left-16 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-white transition-colors z-10"
                aria-label="Poprzednie"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Active Image */}
              <motion.img
                key={lightboxIndex}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={GALLERY_IMAGES[lightboxIndex].url}
                alt={GALLERY_IMAGES[lightboxIndex].caption}
                className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-2xl border border-white/5"
                referrerPolicy="no-referrer"
              />

              {/* Next Button */}
              <button
                id="lightbox-next-btn"
                onClick={() => navigateLightbox('next')}
                className="absolute right-2 sm:-right-12 lg:-right-16 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-white transition-colors z-10"
                aria-label="Następne"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Caption & Metadata Footer */}
            <div className="w-full max-w-3xl text-center pb-4 z-10" onClick={(e) => e.stopPropagation()}>
              <p className="text-xs font-mono text-[#dacab0]/80 uppercase tracking-widest">
                Stajnia Horse Ville
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

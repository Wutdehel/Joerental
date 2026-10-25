import React, { useState, useEffect, useCallback } from 'react';

const ImageCarouselModal = ({
  images = [], // array URL gambar
  isOpen,
  onClose,
  startIndex = 0,
  title = '',
}) => {
  const [current, setCurrent] = useState(startIndex);
  const [touchStartX, setTouchStartX] = useState(null);

  const prev = useCallback(
    () => setCurrent((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(
    () => setCurrent((i) => (i + 1) % images.length),
    [images.length],
  );

  // reset ke gambar awal setiap modal dibuka
  useEffect(() => {
    if (isOpen) setCurrent(startIndex);
  }, [isOpen, startIndex]);

  // keyboard + kunci scroll body
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };

    window.addEventListener('keydown', handleKey);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose, prev, next]);

  if (!isOpen || images.length === 0) return null;

  // swipe untuk mobile
  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (diff > 50) prev();
    if (diff < -50) next();
    setTouchStartX(null);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol tutup */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 text-white text-2xl bg-black/50 hover:text-secondary-yellow transition-colors w-10 h-10 rounded-full flex items-center justify-center"
          aria-label="Tutup"
        >
          ✕
        </button>

        {title && (
          <h3 className="text-white font-bold text-lg md:text-xl mb-3">
            {title}
          </h3>
        )}

        {/* Gambar utama */}
        <div
          className="relative w-full flex items-center justify-center"
          onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
          onTouchEnd={handleTouchEnd}
        >
          <img
            key={current}
            src={images[current]}
            alt={`Foto ${current + 1}`}
            className="max-w-full max-h-[65vh] object-contain rounded-lg"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/50 hover:bg-black/80 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors"
                aria-label="Sebelumnya"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/50 hover:bg-black/80 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors"
                aria-label="Selanjutnya"
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Counter */}
        <p className="text-white/80 text-sm mt-3">
          {current + 1} / {images.length}
        </p>

        {/* Thumbnail */}
        {images.length > 1 && (
          <div className="flex gap-2 mt-3 overflow-x-auto max-w-full pb-2">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                onClick={() => setCurrent(i)}
                className={`h-14 w-20 md:h-16 md:w-24 object-cover rounded-md cursor-pointer flex-shrink-0 transition-all ${
                  i === current
                    ? 'ring-2 ring-secondary-yellow opacity-100'
                    : 'opacity-50 hover:opacity-100'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCarouselModal;

import React, { useEffect, useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/**
 ✅ public/Portfolioimg/ folder me:
 img2.jpg ... img17.jpg (total 16 images)
*/

// ✅ Lightbox ke liye ALL images (16)
const ALL_IMAGES = Array.from(
  { length: 16 },
  (_, i) => `/Portfolioimg/img${i + 1}.jpg`
);

// ✅ Grid me sirf 10 show
const GRID_IMAGES = ALL_IMAGES.slice(0, 12);

const PortfolioGallery = () => {
  const allImages = useMemo(() => ALL_IMAGES.filter(Boolean), []);
  const gridImages = useMemo(() => GRID_IMAGES.filter(Boolean), []);

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const openLightbox = (index) => {
    // ✅ index grid ka hai, but lightbox ALL images se open hona chahiye
    setActive(index);
    setOpen(true);
  };

  const close = () => setOpen(false);

  const prev = () =>
    setActive((p) => (p - 1 + allImages.length) % allImages.length);

  const next = () => setActive((p) => (p + 1) % allImages.length);

  // ✅ Keyboard support
  useEffect(() => {
    if (!open) return;

    const handleKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, allImages.length]);

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.35em] text-gray-600 uppercase">
            Take a look at
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-serif tracking-wide">
            OUR STUNNING PORTFOLIO
          </h2>
        </div>

        {/* ✅ Grid shows ONLY 10 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {gridImages.map((img, index) => (
            <ImageCard
              key={index}
              src={img}
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>
      </div>

      {/* ✅ Lightbox uses ALL 16 */}
      {open && (
        <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center">
          {/* background click close */}
          <div className="absolute inset-0" onClick={close} />

          {/* Close */}
          <button
            onClick={close}
            className="absolute top-5 right-5 z-10 text-white p-2 rounded-full bg-white/10 hover:bg-white/20"
          >
            <X size={26} />
          </button>

          {/* Prev */}
          <button
            onClick={prev}
            className="absolute left-4 md:left-10 z-10 text-white p-3 rounded-full bg-white/10 hover:bg-white/20"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Next */}
          <button
            onClick={next}
            className="absolute right-4 md:right-10 z-10 text-white p-3 rounded-full bg-white/10 hover:bg-white/20"
          >
            <ChevronRight size={32} />
          </button>

          {/* Image */}
          <div className="relative z-10 w-[92vw] md:w-[70vw] h-[80vh] flex items-center justify-center">
            <img
              src={allImages[active]}
              alt={`Portfolio ${active + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
              draggable="false"
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 z-10 text-white text-sm tracking-widest">
            {active + 1} / {allImages.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioGallery;

/* ✅ ImageCard */
const ImageCard = ({ src, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer rounded-md overflow-hidden bg-gray-100 aspect-[3/4]"
    >
      <img
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
        draggable="false"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-300" />

      {/* view more */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <p className="text-white bg-blue-700 p-3 rounded-2xl text-sm sm:text-base uppercase tracking-[0.30em] font-semibold">
          VIEW MORE
        </p>
      </div>
    </div>
  );
};

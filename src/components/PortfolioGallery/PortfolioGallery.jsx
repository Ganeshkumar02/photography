import React, { useEffect, useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/* ================= IMAGES ================= */
const ALL_IMAGES = Array.from(
  { length: 16 },
  (_, i) => `/Portfolioimg/img${i + 1}.jpg`
);

const GRID_IMAGES = ALL_IMAGES.slice(0, 12);

/* ================= COMPONENT ================= */
const PortfolioGallery = () => {
  const allImages = useMemo(() => ALL_IMAGES.filter(Boolean), []);
  const gridImages = useMemo(() => GRID_IMAGES.filter(Boolean), []);

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const openLightbox = (index) => {
    setActive(index);
    setOpen(true);
  };

  const close = () => setOpen(false);
  const prev = () =>
    setActive((p) => (p - 1 + allImages.length) % allImages.length);
  const next = () => setActive((p) => (p + 1) % allImages.length);

  /* Keyboard Support */
  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <section className="w-full py-24 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.35em] text-gray-600 uppercase">
            Our Signature Work
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-light tracking-wide">
            Wedding Stories We’ve Captured
          </h2>
          <div className="w-24 h-[2px] bg-amber-500 mx-auto mt-4" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {gridImages.map((img, index) => (
            <ImageCard
              key={index}
              src={img}
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>
      </div>

      {/* ================= LIGHTBOX ================= */}
      {open && (
        <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center">

          <div className="absolute inset-0" onClick={close} />

          <button
            onClick={close}
            className="absolute top-6 right-6 text-white p-3 rounded-full bg-white/10 hover:bg-white/20"
          >
            <X size={26} />
          </button>

          <button
            onClick={prev}
            className="absolute left-4 md:left-10 text-white p-3 rounded-full bg-white/10 hover:bg-white/20"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={next}
            className="absolute right-4 md:right-10 text-white p-3 rounded-full bg-white/10 hover:bg-white/20"
          >
            <ChevronRight size={32} />
          </button>

          <div className="relative z-10 w-[92vw] md:w-[70vw] h-[80vh] flex items-center justify-center">
            <img
              src={allImages[active]}
              alt=""
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              draggable="false"
            />
          </div>

          <div className="absolute bottom-8 text-white text-sm tracking-widest">
            {active + 1} / {allImages.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioGallery;

/* ================= IMAGE CARD ================= */
const ImageCard = ({ src, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-xl aspect-[3/4] shadow-sm hover:shadow-xl transition duration-500"
    >
      <img
        src={src}
        alt=""
        loading="lazy"
        className="w-full h-full object-cover object-center transition duration-700 group-hover:scale-110"
        draggable="false"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition duration-500">
        <p className="text-white text-xs tracking-[0.35em] uppercase">
          View Story
        </p>
      </div>
    </div>
  );
};

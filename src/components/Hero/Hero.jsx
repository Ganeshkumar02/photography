import React, { useEffect, useState } from "react";

const slides = [
  {
    title: "YOUR LOVE STORY",
    subtitle: "CAPTURED FOREVER",
    image: "/sliderimage/slider2.jpg",
  },
  {
    title: "CINEMATIC WEDDING",
    subtitle: "FILMS & PHOTOGRAPHY",
    image: "/sliderimage/slider1.jpg",
  },
  {
    title: "EMOTIONS • MOMENTS • MEMORIES",
    subtitle: "THAT LAST A LIFETIME",
    image: "/sliderimage/slider3.jpg",
  },
];

const Hero = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[80vh] md:h-screen overflow-hidden">

      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-3000 ease-out
              ${index === active ? "opacity-100 scale-[1.12]" : "opacity-0 scale-100"}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/10" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 text-white">

        <h1
          key={slides[active].title}
          className="uppercase tracking-[0.45em] font-light
          text-2xl sm:text-4xl md:text-6xl animate-[fadeLuxury_1.4s_ease-out]"
        >
          {slides[active].title}
        </h1>

        <p
          key={slides[active].subtitle}
          className="mt-5 uppercase tracking-[0.45em] font-light text-amber-400
          text-lg sm:text-2xl md:text-4xl animate-[fadeLuxury_1.8s_ease-out]"
        >
          {slides[active].subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex gap-6 flex-wrap justify-center">
          <a
            href="/portfolio"
            className="px-7 py-3 rounded-full border border-white/60
            backdrop-blur-md bg-white/10 tracking-wider text-sm
            hover:bg-white hover:text-black transition-all duration-300"
          >
            VIEW PORTFOLIO
          </a>

          <a
            href="/book-your-date"
            className="px-8 py-3 rounded-full tracking-wider text-sm
            bg-linear-to-r from-yellow-500 to-amber-600
            shadow-xl hover:shadow-amber-500/40 hover:scale-105 transition-all duration-300"
          >
            BOOK YOUR DATE
          </a>
        </div>
      </div>

      {/* Luxury Progress Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-48 h-0.5 bg-white/30 overflow-hidden rounded-full">
        <div
          key={active}
          className="h-full bg-amber-400 animate-[slideProgress_6s_linear]"
        />
      </div>
    </section>
  );
};

export default Hero;

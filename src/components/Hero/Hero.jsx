import React, { useEffect, useState } from "react";

const slides = [
  {
    title: "YOUR LOVE STORY",
    subtitle: "CAPTURED FOREVER",
    image: "/sliderimage/1.jpg",
  },
  // {
  //   title: "CINEMATIC WEDDING",
  //   subtitle: "FILMS & PHOTOGRAPHY",
  //   image: "/sliderimage/slider2.jpg",
  // },
  // {
  //   title: "EMOTIONS • MOMENTS • MEMORIES",
  //   subtitle: "THAT LAST A LIFETIME",
  //   image: "/sliderimage/slider3.jpg",
  // },
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

      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${index === active ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            {/* Image */}
            <img
              src={slide.image}
              alt={slide.title}
              loading="lazy"
              className={`w-full h-full object-cover object-center 
              transition-transform duration-[6000ms] ease-linear
              ${index === active ? "scale-105" : "scale-100"}`}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center text-center h-full px-6 text-white">

        <h1
          key={slides[active].title}
          className="uppercase tracking-[0.20em] font-light
          text-2xl sm:text-3xl md:text-5xl animate-[fadeLuxury_1.4s_ease-out]"
        >
          {slides[active].title}
        </h1>

        <p
          key={slides[active].subtitle}
          className="mt-5 uppercase tracking-[0.35em] font-light text-amber-400
          text-lg sm:text-xl md:text-3xl animate-[fadeLuxury_1.8s_ease-out]"
        >
          {slides[active].subtitle}
        </p>

        {/* Buttons */}
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
            bg-gradient-to-r from-yellow-500 to-amber-600
            shadow-xl hover:shadow-amber-500/40 hover:scale-105 transition-all duration-300"
          >
            BOOK YOUR DATE
          </a>
        </div>
      </div>

      {/* Progress Bar */}
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
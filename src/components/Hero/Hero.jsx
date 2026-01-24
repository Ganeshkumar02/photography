import React, { useEffect, useState } from "react";

const slides = [
  {
    title: "YOUR LOVE STORY",
    subtitle: "CAPTURED FOREVER",
    image: "/sliderimage/slider1.jpg",
  },
  {
    title: "CINEMATIC WEDDING",
    subtitle: "FILMS & PHOTOGRAPHY",
    image: "/sliderimage/slider2.jpg",
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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[75vh] md:h-[90vh] overflow-hidden">

      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out
              ${index === active ? "opacity-100 scale-100" : "opacity-0 scale-[1.08]"}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            {/* Luxury Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 text-white">
        
        {/* Optional Logo */}
        {/* <img
          src="/Logo/1.png"
          alt="Prince Photography"
          className="h-20 mb-6 opacity-90"
        /> */}

        <h1
          key={slides[active].title}
          className="uppercase tracking-[0.35em] font-light
          text-2xl sm:text-4xl md:text-6xl animate-fadeUp"
        >
          {slides[active].title}
        </h1>

        <p
          key={slides[active].subtitle}
          className="mt-4 uppercase tracking-[0.35em] font-light text-amber-400
          text-lg sm:text-2xl md:text-4xl animate-fadeUpDelay"
        >
          {slides[active].subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <a
            href="/portfolio"
            className="px-6 py-3 border border-white rounded-full tracking-wider text-sm hover:bg-white hover:text-black transition"
          >
            VIEW PORTFOLIO
          </a>
          <a
            href="/book"
            className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full tracking-wider text-sm shadow-lg hover:scale-105 transition"
          >
            BOOK YOUR DATE
          </a>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-300
            ${i === active ? "w-10 bg-amber-400" : "w-2 bg-white/60"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

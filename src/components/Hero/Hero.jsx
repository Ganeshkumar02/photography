import React, { useEffect, useState } from "react";

const slides = [
  {
    title: "CHITRAGEEK STUDIOS - WE",
    subtitle: "CELEBRATE LIFE",
    image: "/sliderimage/slider1.jpg",
  },
  {
    title: "CAPTURE YOUR",
    subtitle: "BEST MOMENTS",
    image: "/sliderimage/slider2.jpg",
  },
  {
    title: "MEMORIES THAT",
    subtitle: "LAST FOREVER",
    image: "/sliderimage/slider3.jpg",
  },
];

const Hero = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => setActive(index);

  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out
              ${index === active ? "opacity-100 scale-100" : "opacity-0 scale-[1.03]"}
            `}
          >
            <img
              src={slide.image}
              alt={slide.title}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center text-white">
          <h1
            key={slides[active].title}
            className="font-serif uppercase tracking-[0.20em]
              text-xl sm:text-3xl md:text-5xl lg:text-6xl
              animate-fadeUp"
          >
            {slides[active].title}
          </h1>

          <p
            key={slides[active].subtitle}
            className="font-serif uppercase tracking-[0.20em]
              mt-3 text-lg sm:text-2xl md:text-4xl lg:text-5xl
              animate-fadeUpDelay"
          >
            {slides[active].subtitle}
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300
              ${i === active ? "w-10 bg-white" : "w-2 bg-white/60"}
            `}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

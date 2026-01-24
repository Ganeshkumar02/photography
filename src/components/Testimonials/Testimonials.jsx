import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Their professionalism, talent, and genuine passion for their craft were evident in every interaction.",
    name: "Abhishek Keshri",
  },
  {
    quote:
      "The team captured every moment beautifully. The photos were stunning and delivered on time.",
    name: "Rahul Sharma",
  },
  {
    quote:
      "Amazing experience! Very friendly and professional. Highly recommended for weddings and events.",
    name: "Priya Singh",
  },
  {
    quote:
      "The photos look cinematic and premium. Best photography studio in our city!",
    name: "Neha Gupta",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  const next = () =>
    setActive((p) => (p + 1) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full py-28 bg-[#f9f6f1] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center relative">

        {/* Heading */}
        <p className="text-xs tracking-[0.35em] text-gray-600 uppercase">
          Words From Couples
        </p>
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-light tracking-wide">
          Client Love & Stories
        </h2>
        <div className="w-20 h-[2px] bg-amber-500 mx-auto mt-4" />

        {/* Quote */}
        <div className="mt-16 min-h-[200px] flex flex-col items-center justify-center transition-all duration-500">
          <span className="text-6xl text-amber-500 leading-none">“</span>

          <p className="mt-4 max-w-3xl text-lg sm:text-2xl font-light tracking-wide leading-relaxed text-gray-800">
            {testimonials[active].quote}
          </p>

          <p className="mt-10 text-xs tracking-[0.35em] uppercase text-gray-600">
            — {testimonials[active].name}
          </p>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black transition"
        >
          <ChevronLeft size={30} />
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black transition"
        >
          <ChevronRight size={30} />
        </button>

        {/* Counter Dots */}
        <div className="mt-16 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-amber-500" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

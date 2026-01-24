import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Their professionalism, talent, and genuine passion for their craft were evident in every interaction.",
    name: "ABHISHEK KESHRI",
  },
  {
    quote:
      "The team captured every moment beautifully. The photos were stunning and delivered on time.",
    name: "RAHUL SHARMA",
  },
  {
    quote:
      "Amazing experience! Very friendly and professional. Highly recommended for weddings and events.",
    name: "PRIYA SINGH",
  },
  {
    quote:
      "Great quality work, very creative and supportive team. Loved the entire shoot experience.",
    name: "AMIT VERMA",
  },
  {
    quote:
      "The photos look cinematic and premium. Best photography studio in our city!",
    name: "NEHA GUPTA",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  const next = () =>
    setActive((p) => (p + 1) % testimonials.length);

  // ✅ Auto slide (optional)
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-serif tracking-wide uppercase">
            CLIENT TESTIMONIALS
          </h2>
        </div>

        {/* Slider content */}
        <div className="mt-16 text-center min-h-[240px] flex flex-col items-center justify-center">
          <p className="max-w-4xl text-lg sm:text-2xl font-serif uppercase tracking-[0.14em] leading-[1.7] text-gray-800">
            “{testimonials[active].quote}”
          </p>

          <p className="mt-12 text-xs tracking-[0.30em] text-gray-600 uppercase">
            {testimonials[active].name}
          </p>
        </div>

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 p-2 text-gray-700 hover:text-black transition"
          aria-label="Previous"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 p-2 text-gray-700 hover:text-black transition"
          aria-label="Next"
        >
          <ChevronRight size={28} />
        </button>

        {/* Counter */}
        <div className="mt-20 text-center">
          <p className="text-sm tracking-widest text-gray-800">
            {active + 1} / {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

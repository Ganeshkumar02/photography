import React from "react";
import { Link } from "react-router-dom";

const locations = [
  { title: "Mirzapur", image: "/sliderimage/slider1.jpg", to: "/locations/mirzapur" },
  { title: "Varanasi", image: "/sliderimage/slider2.jpg", to: "/locations/varanasi" },
  { title: "Allahabad", image: "/sliderimage/slider3.jpg", to: "/locations/allahabad" },
  { title: "Lucknow", image: "/Portfolioimg/img5.jpg", to: "/locations/lucknow" },
];

const StudioLocations = () => {
  return (
    <section className="w-full py-24 bg-[#f9f6f1]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.35em] text-gray-600 uppercase">
            We Travel For Love
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-light tracking-wide">
            Destination Wedding Coverage
          </h2>
          <div className="w-24 h-[2px] bg-amber-500 mx-auto mt-4" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              className="group relative h-[460px] overflow-hidden rounded-xl shadow-sm hover:shadow-2xl transition duration-500"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-center transition duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/50 transition duration-500" />

              {/* Title */}
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <h3 className="text-white text-2xl tracking-wide">
                  {item.title}
                </h3>
              </div>

              {/* Hover CTA */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <span className="px-8 py-3 border border-white text-white text-xs tracking-[0.35em] uppercase bg-white/10 backdrop-blur-md">
                  Explore Weddings
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudioLocations;

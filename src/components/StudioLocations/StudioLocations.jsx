import React from "react";
import { Link } from "react-router-dom";

const locations = [
  {
    title: "MIRZAPUR",
    image: "/sliderimage/slider1.jpg",
    to: "/locations/mirzapur",
  },
  {
    title: "VARANSAI",
    image: "/sliderimage/slider2.jpg",
    to: "/locations/varansai",
  },
  {
    title: "ALLAHABAD",
    image: "/sliderimage/slider3.jpg",
    to: "/locations/allahabad",
  },
  {
    title: "LUCKNOW",
    image: "/Portfolioimg/img5.jpg",
    to: "/locations/lucknow",
  },
];

const StudioLocations = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.40em] text-gray-600 uppercase">
            TAKE A LOOK AT
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif tracking-wide">
            OUR STUDIO LOCATIONS
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              className="group relative h-[460px] rounded-sm overflow-hidden block"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center
                  grayscale-[20%] brightness-75
                  group-hover:grayscale-0 group-hover:brightness-100
                  group-hover:scale-[1.06]
                  transition duration-700"
              />

              {/* Dark overlay (normal dark, hover pe light) */}
              <div
                className="absolute inset-0 bg-black/45 group-hover:bg-black/15
                  transition duration-500"
              />

              {/* Title bottom */}
              <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                <h3 className="text-white text-2xl font-serif tracking-wide drop-shadow">
                  {item.title}
                </h3>
              </div>

              {/* ✅ KNOW MORE Hover Text */}
              <div
                className="absolute inset-0 flex items-center justify-center
                opacity-0 group-hover:opacity-100 transition duration-300"
              >
                <p className="px-10 py-3 border border-white text-white text-xs tracking-[0.25em] uppercase bg-white/10 backdrop-blur-sm">
                  KNOW MORE
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudioLocations;

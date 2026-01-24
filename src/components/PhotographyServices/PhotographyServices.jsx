import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Wedding Photography",
    image: "/Portfolioimg/img2.jpg",
    to: "/services/wedding-photography",
  },
  {
    title: "Cinematic Wedding Films",
    image: "/Portfolioimg/img3.jpg",
    to: "/services/cinematic-films",
  },
  {
    title: "Pre Wedding Shoots",
    image: "/Portfolioimg/img4.jpg",
    to: "/services/pre-wedding",
  },
  {
    title: "Haldi & Mehndi Coverage",
    image: "/Portfolioimg/img5.jpg",
    to: "/services/haldi-mehndi",
  },
  {
    title: "Reception Coverage",
    image: "/Portfolioimg/img6.jpg",
    to: "/services/reception",
  },
];

const PhotographyServices = () => {
  return (
    <section className="w-full py-24 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.35em] text-gray-600 uppercase">
            What We Do Best
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-light tracking-wide">
            Wedding Photography Services
          </h2>
          <div className="w-24 h-[2px] bg-amber-500 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {services.map((service, index) => (
            <Link key={index} to={service.to} className="group block">
              <div className="relative overflow-hidden rounded-xl aspect-[3/4] shadow-sm hover:shadow-xl transition duration-500">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <h3 className="absolute bottom-6 left-6 right-6 text-white text-lg tracking-wide">
                  {service.title}
                </h3>
              </div>

              <div className="mt-6 flex items-center gap-4 text-xs tracking-[0.35em] uppercase text-gray-800">
                <span className="group-hover:text-amber-600 transition">Explore Service</span>
                <span className="text-xl group-hover:translate-x-1 transition">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotographyServices;

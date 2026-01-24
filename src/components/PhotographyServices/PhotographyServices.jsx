import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "BABY & NEWBORN\nPHOTOGRAPHY",
    image: "/Portfolioimg/img2.jpg",
    to: "/services/baby-newborn",
  },
  {
    title: "MATERNITY\nPHOTOGRAPHY",
    image: "/Portfolioimg/img3.jpg",
    to: "/services/maternity",
  },
  {
    title: "PRE WEDDING\nPHOTOGRAPHY",
    image: "/Portfolioimg/img4.jpg",
    to: "/services/pre-wedding",
  },
  {
    title: "EVENT PHOTOGRAPHY",
    image: "/Portfolioimg/img5.jpg",
    to: "/services/events",
  },
  {
    title: "PRODUCT\nPHOTOGRAPHY",
    image: "/Portfolioimg/img6.jpg",
    to: "/services/product",
  },
];

const PhotographyServices = () => {
  return (
    <section className="w-full bg-[#f5f3f0] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.45em] text-gray-600 uppercase">
            TAKE A LOOK AT
          </p>

          <h2 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-serif tracking-wide uppercase">
            PHOTOGRAPHY SERVICES WE OFFER
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {services.map((service, index) => (
            <Link key={index} to={service.to} className="group block">
              {/* Image bigger */}
              <div className="w-full aspect-[3/4] overflow-hidden bg-white rounded-sm">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center
                    group-hover:scale-[1.08] transition duration-700"
                />
              </div>

              {/* Text bigger */}
              <div className="mt-8">
                <h3 className="font-serif text-[16px] sm:text-[18px] tracking-[0.10em] text-black uppercase leading-[1.7] whitespace-pre-line">
                  {service.title}
                </h3>

                <div className="mt-7 flex items-center gap-5 text-[12px] tracking-[0.35em] text-black uppercase">
                  <span>READ MORE</span>
                  <span className="text-xl group-hover:translate-x-1 transition">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotographyServices;

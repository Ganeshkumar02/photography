import React from "react";

const founders = [
  {
    name: "Ansh Pal",
    image: "/Portfolioimg/img2.jpg",
    lines: ["Founder – Prince Studios", "Co-Founder – White Flames LLP"],
  },
  {
    name: "Bindra Raj Singh",
    image: "/Portfolioimg/img3.jpg",
    lines: ["Co-Founder – Prince Studios", "Founder – Scale Delight"],
  },
  {
    name: "Prince Pal",
    image: "/Founderimg/Ganesh.jpg",
    lines: ["Co-Founder – Prince Studios", "Growth & Revenue – GreatLearning"],
  },
];

const MeetFounders = () => {
  return (
    <section className="w-full py-28 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-gray-600">
            The Vision Behind the Lens
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-light tracking-wide">
            Meet Our Founders
          </h2>
          <div className="w-20 h-[2px] bg-amber-500 mx-auto mt-4" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {founders.map((f, idx) => (
            <div
              key={idx}
              className="group text-center transition duration-500 hover:-translate-y-3"
            >
              <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition duration-500">
                <img
                  src={f.image}
                  alt={f.name}
                  className="w-full h-[460px] object-cover object-top group-hover:scale-105 transition duration-700"
                  loading="lazy"
                />

                {/* Overlay fade on hover */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition duration-500" />
              </div>

              <div className="mt-8">
                <h3 className="text-lg tracking-[0.15em] uppercase text-gray-900">
                  {f.name}
                </h3>

                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  {f.lines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetFounders;

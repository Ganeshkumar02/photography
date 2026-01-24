import React from "react";

const founders = [
  {
    name: "ANSH PAL",
    image: "/Portfolioimg/img2.jpg", // ✅ change
    lines: [
      "Founder – Prince Studios",
      "Co-Founder – White Flames LLP",
    ],
  },
  {
    name: "Bindra Raj Singh (Ravindra Kumar)",
    image: "/Portfolioimg/img3.jpg", // ✅ change
    lines: [
      "Co-Founder – Prince Studios",
      "Founder – Scale Delight",
    ],
  },
  {
    name: "Prince Pal",
    image: "/Portfolioimg/img4.jpg", // ✅ change
    lines: [
      "Co-Founder – Prince Studios",
      "Growth and Revenue – GreatLearning",
    ],
  },
];

const MeetFounders = () => {
  return (
    <section className="w-full bg-[#f5f3f0] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-wide uppercase">
            MEET OUR FOUNDERS
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {founders.map((f, idx) => (
            <div key={idx} className="text-center">
              {/* Image */}
              <div className="w-full h-[420px] sm:h-[520px] overflow-hidden bg-white">
                <img
                  src={f.image}
                  alt={f.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Text */}
              <div className="mt-8">
                <h3 className="font-serif text-[16px] tracking-[0.10em] uppercase text-black">
                  {f.name}
                </h3>

                <div className="mt-3 space-y-2 text-[12px] text-gray-700">
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

import React, { useState } from "react";

const faqData = [
  {
    q: "WHAT TYPES OF WEDDING PHOTOGRAPHY SERVICES DO YOU OFFER?",
    a: "We specialize in wedding photography, cinematic wedding films, pre-wedding shoots, haldi-mehndi coverage, and reception events with a storytelling approach.",
  },
  {
    q: "HOW MUCH DO YOUR WEDDING PHOTOGRAPHY PACKAGES COST?",
    a: "Our packages start from ₹20,000 and go up to ₹2L+ depending on coverage, team size, deliverables, and location.",
  },
  {
    q: "HOW CAN WE BOOK OUR WEDDING DATE?",
    a: "You can book your date by contacting us via phone, WhatsApp, or filling out the booking form on our website. We recommend booking 3–6 months in advance.",
  },
  {
    q: "DO YOU TRAVEL FOR DESTINATION WEDDINGS?",
    a: "Yes, we cover weddings across India and destination locations. Travel and logistics are discussed based on the venue.",
  },
  {
    q: "WHEN WILL WE RECEIVE OUR PHOTOS AND VIDEOS?",
    a: "Edited photos are delivered within 2–3 weeks, and wedding films within 3–5 weeks depending on the package.",
  },
];

const FAQAccordionGrid = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="w-full py-28 bg-[#faf7f2]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-gray-600">
            Frequently Asked
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-light tracking-wide">
            Wedding Photography FAQs
          </h2>
          <div className="w-20 h-[2px] bg-amber-500 mx-auto mt-4" />
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                onClick={() => toggle(idx)}
                className={`cursor-pointer rounded-xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition duration-300`}
              >
                <div className="flex justify-between items-start gap-4">
                  <p className="text-sm uppercase tracking-[0.12em] text-gray-900">
                    {item.q}
                  </p>
                  <span className="text-xl text-amber-500">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[400px] mt-6" : "max-h-0 mt-0"
                  }`}
                >
                  <p className="text-sm text-gray-600 leading-7">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordionGrid;

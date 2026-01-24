import React, { useState } from "react";

const faqData = [
  {
    q: "WHAT TYPES OF PHOTOGRAPHY SERVICES DO YOU OFFER IN VARANASI AND GUWAHATI?",
    a: "We offer a wide range of photography services including baby photography, product photography, maternity photography, event photography, and pre-wedding photography. Our team of skilled photographers is experienced in capturing beautiful and memorable moments in these categories.",
  },
  {
    q: "WHAT ARE YOUR PRICING OPTIONS FOR PHOTOGRAPHY SERVICES?",
    a: "Our pricing depends on the type of shoot, location, number of deliverables and editing requirements. Please contact us for a customized quotation as per your needs.",
  },
  {
    q: "HOW CAN I BOOK A PHOTOGRAPHY SESSION WITH YOUR COMPANY?",
    a: "You can book a session by contacting us via WhatsApp, phone call, or filling the booking form on our website. Our team will confirm availability and schedule your shoot.",
  },
  {
    q: "DO YOU PROVIDE PHOTOGRAPHY SERVICES OUTSIDE OF VARANASI AND GUWAHATI?",
    a: "Yes, we do provide photography services in other cities as well. Travel and logistics may apply depending on the location. You can contact us for details.",
  },
  {
    q: "WHAT MAKES CHITRAGEEK STUDIOS DIFFERENT FROM OTHER PHOTOGRAPHY SERVICES?",
    a: "We focus on storytelling, premium editing, client comfort, and creative direction. Our team ensures every shoot has a unique look and high-quality output.",
  },
  {
    q: "DO YOU PROVIDE THEMED PHOTOSHOOTS FOR SPECIAL OCCASIONS?",
    a: "Yes! We provide themed shoots for maternity, birthday, anniversary, baby and special event shoots. Themes can be customized based on your idea.",
  },
//   {
//     q: "CAN YOU ACCOMMODATE LAST-MINUTE BOOKINGS FOR EVENTS LIKE WEDDINGS OR BIRTHDAYS?",
//     a: "Yes, based on availability. We recommend booking early, but we do try our best to support urgent and last-minute bookings.",
//   },
//   {
//     q: 'DO YOU OFFER ANY "BEHIND-THE-SCENES" VIDEOS OR CANDID SHOTS DURING THE PHOTOSHOOT?',
//     a: "Yes, we offer behind-the-scenes footage and candid shots as add-on services. You can include this in your package while booking.",
//   },
];

const FAQAccordionGrid = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-4xl font-serif tracking-wide uppercase">
            WE’RE HERE TO ANSWER ALL YOUR QUESTIONS
          </h2>
        </div>

        {/* ✅ IMPORTANT FIX: items-start */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                onClick={() => toggle(idx)}
                className={`cursor-pointer select-none border border-black/60 bg-white px-10 py-8
                transition-all duration-300 ${isOpen ? "shadow-md" : ""}`}
              >
                {/* Question */}
                <p className="font-serif text-[13px] sm:text-[14px] uppercase tracking-[0.12em] leading-[1.9] text-black">
                  {item.q}
                </p>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[400px] mt-6" : "max-h-0 mt-0"
                  }`}
                >
                  <p className="text-[13px] text-gray-700 leading-6">
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

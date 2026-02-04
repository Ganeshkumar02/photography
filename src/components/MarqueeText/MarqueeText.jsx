import React from "react";

const MarqueeText = () => {
  return (
    <section className="w-full bg-[#f9f6f1] py-10 overflow-hidden relative group">

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#f9f6f1] to-transparent" />
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#f9f6f1] to-transparent" />
      </div>

      {/* Line 1 */}
      <div className="marquee marquee--line1">
        <div className="marquee__inner marquee__inner--ltr group-hover:paused">
          <span className="marquee__text">
            ✦ CAPTURING LOVE STORIES ♥ CINEMATIC WEDDINGS ✦ TIMELESS MEMORIES ♥
          </span>
          <span className="marquee__text">
            ✦ CAPTURING LOVE STORIES ♥ CINEMATIC WEDDINGS ✦ TIMELESS MEMORIES ♥
          </span>
        </div>
      </div>

      {/* Line 2 */}
      <div className="marquee marquee--line2">
        <div className="marquee__inner marquee__inner--rtl group-hover:paused">
          <span className="marquee__text marquee__text--light">
            ♥ EMOTIONS ✦ MOMENTS ✦ MEMORIES ♥ WEDDING FILMS & PHOTOGRAPHY ✦
          </span>
          <span className="marquee__text marquee__text--light">
            ♥ EMOTIONS ✦ MOMENTS ✦ MEMORIES ♥ WEDDING FILMS & PHOTOGRAPHY ✦
          </span>
        </div>
      </div>

      <style>{`
        .marquee {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          padding: 18px 0;
        }

        .marquee--line1 { transform: translateY(20px); }
        .marquee--line2 { transform: translateY(-20px); margin-top: -40px; }

        .marquee__inner {
          display: inline-flex;
          gap: 4rem;
          align-items: center;
          will-change: transform;
        }

        .marquee__inner--ltr {
          animation: marqueeLTR 28s linear infinite;
        }

        .marquee__inner--rtl {
          animation: marqueeRTL 30s linear infinite;
        }

        /* Hover interaction */
        .group:hover .paused {
          animation-play-state: paused;
        }

        .marquee__text {
          font-family: "Playfair Display", serif;
          font-weight: 500;
          font-size: clamp(36px, 6vw, 120px);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #111;
          transition: transform 0.4s ease, color 0.4s ease;
        }

        .marquee__text:hover {
          transform: scale(1.03);
          color: #b45309; /* amber luxury */
        }

        .marquee__text--light {
          color: rgba(0,0,0,0.35);
        }

        @keyframes marqueeLTR {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }

        @keyframes marqueeRTL {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        /* Mobile tuning */
        @media (max-width: 768px) {
          .marquee__inner--ltr,
          .marquee__inner--rtl {
            animation-duration: 40s;
          }
        }
      `}</style>
    </section>
  );
};

export default MarqueeText;

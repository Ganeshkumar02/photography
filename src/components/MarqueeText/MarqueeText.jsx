import React from "react";

const MarqueeText = () => {
  return (
    <section className="w-full bg-[#f9f6f1] py-6 overflow-hidden relative">
      <div className="relative w-full">

        {/* Line 1 */}
        <div className="marquee marquee--line1">
          <div className="marquee__inner marquee__inner--ltr">
            <span className="marquee__text">
              — CAPTURING LOVE STORIES — CINEMATIC WEDDINGS — TIMELESS MEMORIES —
            </span>
            <span className="marquee__text">
              — CAPTURING LOVE STORIES — CINEMATIC WEDDINGS — TIMELESS MEMORIES —
            </span>
          </div>
        </div>

        {/* Line 2 */}
        <div className="marquee marquee--line2">
          <div className="marquee__inner marquee__inner--rtl">
            <span className="marquee__text marquee__text--light">
              — EMOTIONS • MOMENTS • MEMORIES — WEDDING FILMS • PHOTOGRAPHY —
            </span>
            <span className="marquee__text marquee__text--light">
              — EMOTIONS • MOMENTS • MEMORIES — WEDDING FILMS • PHOTOGRAPHY —
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .marquee {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          padding: 10px 0;
        }

        .marquee--line1 { transform: translateY(16px); }
        .marquee--line2 { transform: translateY(-16px); margin-top: -32px; }

        .marquee__inner {
          display: inline-flex;
          gap: 3rem;
          align-items: center;
        }

        .marquee__inner--ltr { animation: marqueeLTR 26s linear infinite; }
        .marquee__inner--rtl { animation: marqueeRTL 26s linear infinite; }

        .marquee__text {
          font-family: serif;
          font-weight: 500;
          font-size: clamp(42px, 7vw, 130px);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #111;
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
      `}</style>
    </section>
  );
};

export default MarqueeText;

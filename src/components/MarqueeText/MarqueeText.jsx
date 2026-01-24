import React from "react";

const MarqueeText = () => {
  return (
    <section className="w-full bg-white py-0 overflow-hidden">
      <div className="relative w-full">
        {/* ✅ Line 1 */}
        <div className="marquee marquee--line1">
          <div className="marquee__inner marquee__inner--ltr">
            <span className="marquee__text">
              - WE CELEBRATE LIFE - WE CELEBRATE LIFE - WE CELEBRATE LIFE -
            </span>
            <span className="marquee__text">
              - WE CELEBRATE LIFE - WE CELEBRATE LIFE - WE CELEBRATE LIFE -
            </span>
          </div>
        </div>

        {/* ✅ Line 2 */}
        <div className="marquee marquee--line2">
          <div className="marquee__inner marquee__inner--rtl">
            <span className="marquee__text marquee__text--light">
              - WE CELEBRATE LIFE - WE CELEBRATE LIFE - WE CELEBRATE LIFE -
            </span>
            <span className="marquee__text marquee__text--light">
              - WE CELEBRATE LIFE - WE CELEBRATE LIFE - WE CELEBRATE LIFE -
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .marquee {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          padding: 15px 0;
        }

        /* ✅ EXACT CROSS like SS (only Y shift) */
        .marquee--line1 {
          transform: translateY(18px);
        }
        .marquee--line2 {
          transform: translateY(-18px);
          margin-top: -40px;
        }

        .marquee__inner {
          display: inline-flex;
          align-items: center;
          gap: 3rem;
        }

        .marquee__inner--ltr {
          animation: marqueeLTR 20s linear infinite;
        }

        .marquee__inner--rtl {
          animation: marqueeRTL 20s linear infinite;
        }

        .marquee__text {
          font-family: serif;
          font-weight: 500;
          font-size: clamp(48px, 8vw, 140px);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #000;
        }

        .marquee__text--light {
          color: rgba(0,0,0,0.75);
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

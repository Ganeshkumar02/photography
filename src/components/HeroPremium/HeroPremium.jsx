import React, {useState } from "react";
import { Link } from "react-router-dom";

const HeroPremium = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[90vh] overflow-hidden">
      {/* ✅ Background Image (top safe, crop bottom only) */}
      <img
        src="/sliderimage/slider1.jpg"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover object-top"
        loading="eager"
        decoding="async"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
        <div className="text-center text-white max-w-5xl">
          <p className="text-[9px] sm:text-[10px] tracking-[0.45em] uppercase opacity-95">
            CHITRAGEEK STUDIOS
          </p>

          {/* ✅ Smaller text */}
          <h1
            className="mt-4 font-serif uppercase tracking-[0.14em] leading-[1.35]
            text-[18px] sm:text-[28px] md:text-[36px] lg:text-[42px]"
          >
            WE CELEBRATE LIFE WITH PREMIUM PHOTOGRAPHY <br />
            EXPERIENCE
          </h1>

          {/* ✅ Exact Ring Button */}
          <div className="mt-10 flex justify-center">
            <Link
              to="/contact"
              className="shootBtn"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              BOOK A SHOOT

              {/* ✅ OUTER thin ring */}
              <span className="ringSvg ringOuter">
                <svg viewBox="0 0 240 80" preserveAspectRatio="none">
                  <ellipse
                    cx="120"
                    cy="40"
                    rx="110"
                    ry="30"
                    fill="none"
                    stroke="rgba(255,255,255,0.55)"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>

              {/* ✅ INNER thick ring (animated wipe) */}
              <span className="ringSvg ringInner">
                <svg viewBox="0 0 240 80" preserveAspectRatio="none">
                  <ellipse
                    className={hovered ? "dashAnim" : ""}
                    cx="120"
                    cy="40"
                    rx="100"
                    ry="26"
                    fill="none"
                    stroke="rgba(255,255,255,0.95)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .shootBtn{
          position:relative;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding:12px 34px;
          border-radius:999px;
          font-size:11px;
          letter-spacing:0.35em;
          text-transform:uppercase;
          color:#fff;
          font-weight:500;
        }

        .ringSvg{
          position:absolute;
          inset:-28px;
          pointer-events:none;
        }

        .ringOuter{
          inset:-34px;
          opacity:0.95;
        }

        .ringSvg svg{
          width:100%;
          height:100%;
        }

        /* ✅ EXACT wipe animation like screenshot */
        .dashAnim{
          stroke-dasharray: 480;
          stroke-dashoffset: 0;
          animation: wipeLine 1.3s ease-in-out infinite;
        }

        @keyframes wipeLine{
          0%   { stroke-dashoffset: 0; opacity:1; }
          60%  { stroke-dashoffset: 420; opacity:1; }
          90%  { opacity:0; }
          100% { stroke-dashoffset: 0; opacity:1; }
        }
      `}</style>
    </section>
  );
};

export default HeroPremium;

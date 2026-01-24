import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeroPremium = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative w-full h-[75vh] sm:h-[85vh] lg:h-[92vh] overflow-hidden">

      {/* Background */}
      <img
        src="/sliderimage/slider1.jpg"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover object-top scale-105"
      />

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
        <div className="text-center text-white max-w-5xl">

          <p className="text-[10px] tracking-[0.45em] uppercase opacity-90">
            PRINCE PHOTOGRAPHY
          </p>

          <h1 className="mt-5 font-serif uppercase tracking-[0.18em] leading-[1.4]
              text-[20px] sm:text-[30px] md:text-[40px] lg:text-[48px]">
            CRAFTING TIMELESS WEDDING <br /> MEMORIES WITH ELEGANCE
          </h1>

          {/* Premium Button */}
          <div className="mt-12 flex justify-center">
            <Link
              to="/contact"
              className="shootBtn"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              BOOK YOUR DATE

              {/* Glow Pulse */}
              <span className="glowPulse" />

              {/* Outer Ring */}
              <span className="ringSvg ringOuter">
                <svg viewBox="0 0 240 80">
                  <ellipse
                    cx="120"
                    cy="40"
                    rx="110"
                    ry="30"
                    fill="none"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="1.2"
                  />
                </svg>
              </span>

              {/* Animated Ring */}
              <span className="ringSvg ringInner">
                <svg viewBox="0 0 240 80">
                  <ellipse
                    className={hovered ? "dashAnim" : ""}
                    cx="120"
                    cy="40"
                    rx="100"
                    ry="26"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .shootBtn {
          position: relative;
          padding: 14px 40px;
          border-radius: 999px;
          font-size: 11px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #fff;
          font-weight: 500;
          overflow: hidden;
          transition: all .4s ease;
        }

        /* Glow pulse */
        .glowPulse {
          position: absolute;
          inset: 0;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%);
          animation: pulseGlow 2.5s ease-in-out infinite;
          z-index: -1;
        }

        @keyframes pulseGlow {
          0% { opacity: 0.2; transform: scale(0.9); }
          50% { opacity: 0.5; transform: scale(1.05); }
          100% { opacity: 0.2; transform: scale(0.9); }
        }

        .ringSvg {
          position: absolute;
          inset: -30px;
          pointer-events: none;
        }

        .ringOuter { inset: -36px; opacity: .8; }

        .ringSvg svg {
          width: 100%;
          height: 100%;
        }

        .dashAnim {
          stroke-dasharray: 480;
          stroke-dashoffset: 0;
          animation: wipeLine 1.4s ease-in-out infinite;
        }

        @keyframes wipeLine {
          0%   { stroke-dashoffset: 0; }
          60%  { stroke-dashoffset: 420; }
          100% { stroke-dashoffset: 0; }
        }

        .shootBtn:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default HeroPremium;
